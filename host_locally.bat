@echo off
title JCCB Gold Loan Portal - Local Host Server
cd /d "%~dp0"

echo ================================================================
echo   The Junagadh Commercial Co-operative Bank Ltd. (JCCB)
echo   Gold Loan Portal - Local Host Server (Node.js)
echo ================================================================
echo.
echo Starting local web server on port 5000...
echo.

REM Open browser after 1 second delay in background
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:5000"

REM Run Node.js local host server
node server.js

if errorlevel 1 (
    echo.
    echo [Notice] Node.js server stopped or encountered an error.
    echo Trying fallback local launch directly in browser...
    start "" index.html
    pause
)
