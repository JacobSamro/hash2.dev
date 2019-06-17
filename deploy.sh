echo "Building Project"
npx ng build --prod
git checkout gh-pages
cp -R dist/browser/ .
echo "Checking for changes in git"
if git diff-index --quiet HEAD --; then
  git commit -am "Auto Deploy Script - New Release"
  echo "Pushing new release to Server";
  git push origin gh-pages
else
  echo "No changes"
fi

echo "Finishing";
git checkout master