env=$1 &&
  if [ "$env" != "prod" -a "$env" != "preprod" ]; then
    echo "Please provide an environment (preprod or prod)"
    exit 1
  fi &&
  echo $env &&
  rm -rf umi-template &&
  tar -xzvf umi-template.tar.gz &&
  rm -rf umi-template-$env &&
  mv umi-template umi-template-$env &&
  cd umi-template-$env &&
  rm -f .env &&
  cp .env.$env .env &&
  pm2 restart umi-template-$env &&
  if [ -f umi-template.tar.gz ]; then
    cp umi-template.tar.gz umi-template.tar.gz.backup
  fi
