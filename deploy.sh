echo "Building Project"
npx ng build --prod
git checkout gh-pages
cp -R dist/browser/ .
cp index.html 404.html
git add .
git commit m "Auto Deploy Script - New Release"
echo "Pushing new release to Server";
git push origin gh-pages
echo "Finishing";
git checkout master