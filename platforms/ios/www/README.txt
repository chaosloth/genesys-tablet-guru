====================
= R Optimizer
====================
cd ~/Documents/Development/Genesys\ Tablet\ UI/genesys-tablet-ui/
r.js -o app.build.js

====================
= Cordova Builds
====================
cd ~/Documents/Development/Genesys\ Tablet\ UI/genesys-tablet-guru/


*** Droid ***
cordova build android --release

*** IOS ***
cordova build ios --release


====================
= Cross walk build
====================

cd ~/Documents/Development/crosswalk-4.32.76.6/
./make_apk.py --manifest=~/Documents/Development/Genesys\ Tablet\ UI/genesys-tablet-guru/www/manifest.json 