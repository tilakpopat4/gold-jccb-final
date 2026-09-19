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

where node >nul 2>nul
if %errorlevel% equ 0 (
    node server.js
    goto done
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    py server.py
    goto done
)

where python >nul 2>nul
if %errorlevel% equ 0 (
    python server.py
    goto done
)

echo.
echo [Notice] Neither Node.js nor Python was found.
echo Opening Gold Loan Portal directly in default browser...
start "" index.html

:done
pause
