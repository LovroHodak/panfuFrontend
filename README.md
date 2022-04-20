VPRASANJA

INDEX.html
-ikonico v browserju sem zamenjal, a je kul?

NAVV.JS
-importam navbarItems iz data.js fila a je to kul?
-se ponavljam. Za vsak if napisem string vrednosti, ki je pa ze itak importan z navbarItems in bi lahko vrednost jemal iz tam?

CONTACTS.JS
-uporabljam <a> namesto Link a je to kul zard Reacta
-jst bi te Contactse lovil z visino tako kot pri Navv. Ko Contactsi in About dosezeta isto visino Unset-aj Contactse (da ne gre cez besedilo)
-importam jih iz Data in shranim v useState
-z useEffectom spreminjam class attrb. To mi overwrita kar mam v styled. Pomoje ni kul. 




TO DO
1. 464 - 744
DONE-Title zmanjsat
DONE-contact ikone (prekrivajo About)
2. 744 - 1024
DONE-Title zmanjsat
DONE-contact ikone (prekrivajo About)
3. vecje od 1024
DONE-contact icone (prekrivajo About)

4. DONE premakni nav styling iz App.css v App.js
5. DONE daj ves kontent v variable in jih premakni v svoj file
6. DONE razdeli v komponente
7. DONE add Links (yt, fb, gm)
8. DONE dodaj ostale vide+slikce

9. create a provider and send all data from there
9. create pages - react router
10. add gallery
11. in music page add Demo section z muziko iz kompa (not youtube links)
12. navbar Links - moram napisat funkcijo da me '/home' pelje na '/'
13. add Gallery to navbar
14. contact page z implementiranim mejlom
15. na telefonu mi navbar pozre
16. na iphonu navbar nabije skupi
17. razdeli fotke v mape na strani
18. coda je porinjena na github pa vseen pages ne delajo
19. backend
20. 





TO DO

1. /gallery - mape z fotografijami



FRONT-END

1. /gallery - 
a) fotke se loadajo 100let. A bi lahko jst takoj k obisces stran pofetchal vse podatke iz baze tko da bi ble ze nalozene ko bi saltal med tabi? Torej da bi useQuery takoj poklicu ker ni velik podatkov?

2. Design!! - /gallery(photos-shadow), /music, /contact, /admin

3. /admin -
a) username (full-stack protection)

4. /app.css -
kako nej fetcham fotko v css-ju?

5. /songs.js (in drugje!!) -
a) fetchanje image-ov (src={`${API_URL}/api/images/${song.image}`}) - pocas + grda koda - funkcija getImageId(id)?!
b) iframe allow atr

6. namest Config - .env?

7. /gallery -
a) overflow: hidden - warum?
b) zakaj se fotke manjsajo ce ima GalleryItem-styled.section-width:300

8. /music-
a) height: 226
b) ko stiskam na fotko in potem video mi consola javlja 100napak