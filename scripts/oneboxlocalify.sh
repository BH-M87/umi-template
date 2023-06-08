onebox-localify --scan-path ./dist --backend-path $1 --ignore-host='localhost,127.0.0.1,react-dnd.github.io,facebook.github.io,reactjs.org,konvajs.github.io' &&
  onebox-localify --scan-path ./dist/externals --backend-path $1 --output-path ./dist --ignore-host='localhost,127.0.0.1,react-dnd.github.io,facebook.github.io,reactjs.org,konvajs.github.io'
