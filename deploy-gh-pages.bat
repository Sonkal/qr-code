rem ng github-pages:deploy --message "deploy(dist): deploy on GitHub pages"

call ng build --prod --base-href "https://sonkal.github.io/qr-code/"
call angular-cli-ghpages
echo "https://sonkal.github.io/qr-code/"