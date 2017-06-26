cd /d %~dp0
start cmd /k gulp watch
start cmd /k bundle exec jekyll serve -w
timeout /t 4
start chrome http://127.0.0.1:4000/
