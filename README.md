## Step 1 clone theme custom
```
cd web/themes/custom/
```
- ssh
```
git clone git@github.com:Kevin-Jhonatan/Custom-Theme-SASS-Drupal-10.2.x.git theme
```
- https
```
git clone https://github.com/Kevin-Jhonatan/theme_custom_with_zurb_foundation_drupal_9.git theme
```

## Step 2 Node v20.11.0
```
cd theme/assets/
```
```
node --version
```
```
v20.11.0
```
## Step 3
```
npm install
```
## Step 4
#### Wacth uncompressed
```
npm run watch
```
#### Wacth compressed
```
npm run watch-compressed
```
#### Wacth uncompressed
```
sass --watch sass:css
```