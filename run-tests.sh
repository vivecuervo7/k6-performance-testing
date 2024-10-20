#!/bin/sh

# Run the K6 load test with required parameters for live dashboard and exported report
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_OPEN=true K6_WEB_DASHBOARD_EXPORT="html-report.html" k6 run \
    --compatibility-mode=experimental_enhanced \
    "main.ts" "$@"
