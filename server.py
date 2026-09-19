"""
The Junagadh Commercial Co-operative Bank Ltd. (JCCB)
High-Performance Local Host Server (Python Native Engine)
Zero External Dependencies (Standard Python Library)
"""

import http.server
import json
import os
import sys

PORT = int(os.environ.get("PORT", 5000))
PUBLIC_DIR = os.path.dirname(os.path.abspath(__file__))

class JCCBHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        req_path = self.path.split('?')[0]
        if req_path in ('/api/gold-rate', '/api/gold-rates'):
            rate_path = os.path.join(PUBLIC_DIR, 'gold_rate.json')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            if os.path.exists(rate_path):
                with open(rate_path, 'rb') as f:
                    self.wfile.write(f.read())
            else:
                self.wfile.write(json.dumps({"rate22K": 75000, "rate24K": 81818, "rateDate": "2026-09-19"}).encode('utf-8'))
            return

        if req_path in ('/', ''):
            self.path = '/index.html'
        elif req_path in ('/management', '/management/'):
            self.path = '/management.html'
        return super().do_GET()

    def do_POST(self):
        req_path = self.path.split('?')[0]
        if req_path in ('/api/gold-rate', '/api/gold-rates'):
            length = int(self.headers.get('content-length', 0))
            body = self.rfile.read(length)
            rate_path = os.path.join(PUBLIC_DIR, 'gold_rate.json')
            try:
                data = json.loads(body.decode('utf-8'))
                with open(rate_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "Gold rate updated on server", "data": data}).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
            return
        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    print("=" * 64)
    print("  JCCB GOLD LOAN PORTAL - LOCAL HOST SERVER RUNNING")
    print("=" * 64)
    print(f"  Local Portal URL : http://localhost:{PORT}")
    print(f"  Management URL   : http://localhost:{PORT}/management")
    print(f"  Local IP (LAN)   : http://127.0.0.1:{PORT}")
    print("  100% Offline Standalone Operation Active")
    print("=" * 64)
    sys.stdout.flush()

    server = http.server.ThreadingHTTPServer(('0.0.0.0', PORT), JCCBHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
