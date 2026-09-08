/**
 * The Junagadh Commercial Co-operative Bank Ltd. (JCCB)
 * High-Performance Local Host Server (100% Offline & Air-Gapped)
 * Zero External Dependencies (Native Node.js HTTP Engine)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    // Enable CORS for local cross-origin safety
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    let reqUrl = req.url.split('?')[0];

    // API Routes for Gold Rate Synchronization
    if (reqUrl === '/api/gold-rate' || reqUrl === '/api/gold-rates') {
        const rateFilePath = path.join(PUBLIC_DIR, 'gold_rate.json');
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                try {
                    const parsed = JSON.parse(body);
                    fs.writeFileSync(rateFilePath, JSON.stringify(parsed, null, 2), 'utf8');
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, message: "Gold rate updated on server", data: parsed }));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: e.message }));
                }
            });
            return;
        } else if (req.method === 'GET') {
            if (fs.existsSync(rateFilePath)) {
                const data = fs.readFileSync(rateFilePath, 'utf8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ rate22K: 75000, rate24K: 81818, rateDate: new Date().toISOString().split('T')[0] }));
            }
            return;
        }
    }

    // Route rewriting
    if (reqUrl === '/' || reqUrl === '') {
        reqUrl = '/index.html';
    } else if (reqUrl === '/management' || reqUrl === '/management/') {
        reqUrl = '/management.html';
    }

    const safePath = path.normalize(decodeURIComponent(reqUrl)).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(PUBLIC_DIR, safePath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head><title>404 Not Found - JCCB Gold</title></head>
                <body style="font-family: sans-serif; text-align: center; padding: 50px;">
                    <h2>404 - Page Not Found</h2>
                    <p>Requested path <code>${reqUrl}</code> does not exist.</p>
                    <a href="/" style="color: #0b2545; font-weight: bold;">← Return to Gold Loan Portal</a>
                </body>
                </html>
            `);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': stats.size,
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        });

        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('================================================================');
    console.log('🏛️  JCCB GOLD LOAN PORTAL - LOCAL HOST SERVER RUNNING');
    console.log('================================================================');
    console.log(`🌐 Local Portal URL : http://localhost:${PORT}`);
    console.log(`🛡️  Management URL   : http://localhost:${PORT}/management`);
    console.log(`💻 Local IP (LAN)   : http://127.0.0.1:${PORT}`);
    console.log('⚡ 100% Offline Standalone Operation Active');
    console.log('================================================================');
    console.log('Press Ctrl+C to stop the local host server.\n');
});
