cd /d %~dp0
start cmd /k gulp watch
start cmd /k bundle exec jekyll serve -w
call batch_files/start_atom.bat
call batch_files/start_chrome.bat
