echo "Building Project"
npx ng build --prod
git checkout gh-pages
cp -R dist/browser/ .
git commit -am "Auto Deploy Script - New Release"
echo "Pushing new release to Server";
git push origin gh-pages
echo "Finishing";
git checkout master