function generatePark(options) {
  let park_lat = options["lat"];
  let park_lng = options["lng"];
  let park_name = options["parkName"];
  let park_image = options["parkImage"];
  let image_border = options["border"];
  let image_margin = options["margin-bottom"];
  let park_subtitle = options["parkSubtitle"];
  let park_bio = options["parkBio"];
  let equipment_subtitle = options["equipmentSubtitle"];
  let park_equipment = options["parkEquipment"];
  let park_navigation = options["parkNavigation"];
  let park_rating = options["parkRating"];

  const marker = new google.maps.Marker({
    position: {
      lat: park_lat,
      lng: park_lng,
    },
    map: window.map,
    title: park_name,
  });

  marker.addListener("click", () => {
    document.getElementById("park-name").innerHTML = park_name;
    document.getElementById("park-image").src = park_image;
    document.getElementById("park-image").style.border = image_border;
    document.getElementById("park-image").style.marginBottom = image_margin;
    document.getElementById("subtitle").innerHTML = park_subtitle;
    document.getElementById("park-description").innerHTML = park_bio;
    document.getElementById("eq-subtitle").innerHTML = equipment_subtitle;
    document.getElementById("park-equipment").innerHTML = park_equipment;
    document.getElementById("park-link").innerHTML = park_navigation;
    document.getElementById("park-rating").innerHTML = park_rating;
    document.getElementById("park-name").scrollIntoView();
  });
}

const parks = {
  knezija: {
    lat: 45.7911392294397,
    lng: 15.952604868885443,
    parkName: "Street Workout park - Knežija",
    parkImage: "images/knezija.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Knežija smješten je u Zagrebu, preciznije u kvartu Knežija. Park je dosta loše postavljen. Horizontalne ljestve (&#34Monkey bars&#34) i jedna samostalna šipka pružaju dosta dobar izbor što se tiče zgibova, no ovaj park ima veliki minus u obliku nedostatka bilo kakvih sprava za propadanja i slične push vježbe osim možda klupica koje mogu poslužiti za određene varijacije skekova. Dodatne sprave u parku nije potrebno posebno isticati jer nisu korisne u našem sportu. Prednosti ovog parka su ulična rasvjeta koja olakšava trening po noći i hlad tokom ljetnih mjeseci. Mane ovog parka su blizina stambene zgrade zbog čega nije baš poželjno puštati glasnu muziku, nedostatak crpke za vodu, veliki nesrazmjer push/pull sprava i nedostatak prostora za izvođenje freesytle pokreta. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/rkYZFMf3x1BFV39aA' target=_blank>ovdje</a> i saznaj kako doći do parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  srednjaci: {
    lat: 45.78973510257567,
    lng: 15.941498564478035,
    parkName: "Street Workout park - Srednjaci",
    parkImage: "images/srednjaci.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Srednjaci smješten je u Zagrebu, preciznije u kvartu Srednjaci. Park je dosta dobro postavljen. Horizontalne ljestve (&#34Monkey bars&#34), tri visoke horizontalne šipke i dvije malo niže šipke pružaju izvođenje različitih varijacija zgibova po svačijem ukusu. U parku se što se tiče propadanja nalazi samo jedan set visokih paralelnih šipki što nije idealno jer nekima može stvarati problem prilikom penjanja na iste. Od dodatnih stvari zanimljivo je izdvojiti klupicu za trbušnjake, samostalne švedske ljestve te šipke za sklekove jer su korisni kod učenja raznih statičkih elemenata (handstand, dragon/human flag). Prednosti ovog parka su izoliranost od bilo kakvih stambenih građevina što je odlično za puštanje glasne muzike, mogućnost izvođenja freestyle pokreta, dobar omjer push/pull sprava te prisutnost ulične rasvjete što olakšsava trening po noći. Mane ovog parka su nedostatak crpke za vodu te nedostatak hlada tokom ljetnih mjeseci.  <br><em>Napisao: Nikola Pustišek</em>  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dL7N1ZzrCCbyoXmR8' target=_blank>ovdje</a> i saznaj kako doći do parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  gredice: {
    lat: 45.78455230895617,
    lng: 15.93844974331816,
    parkName: "Street Workout park - Gredice",
    parkImage: "images/gredice.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Gredice smješten je u Zagrebu, preciznije u kvartu Gredice. Park je jako loše postavljen. Horizontalne ljestve (&#34Monkey bars&#34) i jedna niska šipka pružaju odličan izbor za zgibove po svačijoj volji, no ovaj park ima veliki minus u obliku nedostatka sprava za propadanje ili slične push vježbe osim možda klupice koja može poslužiti za varijacije sklekova. Od dodatnih stvari nema se što izdvojiti jer nisu korisne u našem sportu. Prednosti ovog parka su izoliranost od buke glavne ceste i udaljenost od obližnjih zgrada što je korisno kod puštanja glasne muzike te djelomičan hlad na jednom dijelu parka tokom ljetnih mjeseci. Mane ovog parka su nedostatak crpke za vodu, nedostatak ulične rasvjete što otežava trening po noći, veliki nesrazmjer između push/pull sprava te nedostatak šipke za izvođenje freestyle pokreta jer samostalna šipke koja se nalazi u parku nije baš sigurna zbog debelih izbočenih rubova same sprave te spojenog bicikla s jedne strane i rotirajućeg kruga s druge strane. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Sprava za penjanje <br>Sprava za veslanje <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/HrZLmVUbE3EKmDb7A' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  remiza: {
    lat: 45.797268621028344,
    lng: 15.940003537361227,
    parkName: "Street Workout park - Remiza",
    parkImage: "images/remiza.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Remiza smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Park je solidno postavljen. Horizontalne ljestve (&#34Monkey bars&#34), tri visoke horizontalne šipke i dvije malo niže šipke pružaju izvođenje različitih varijacija zgibova po svačijem ukusu. Jedna sprava od dva seta paralelnih šipki za propadanja različitih visina odličan su izbor jer omogućuju da svatko izaber opciju koja mu bolje odgovara. Od dodatnih stvari izdvojio bih klupicu za trbušnjake koja se može koristiti i kod izvođenja određenih statičkih elemenata (dragon flag). Prednosti ovog parka su mogućnost izvedbe freestyle pokreta, hlad tokom ljetnih mjeseci, mogućnost dopune vode u podrumu obližnje zgrade te dobar omjer push/pull sprava. Mane ovog parka su nedostatak ulične rasvjete što otežava trening po noći, blizina dječjeg parkića kao i blizina stambenoj zgradi zbog čega nije baš poželjno glasno puštanje muzike. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Set paralelnih šipki za propadanja različitih visina <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/6PnKpWyq9YtRmHej8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  jarun1: {
    lat: 45.776868709906765,
    lng: 15.937986311481682,
    parkName: "Street Workout park - Jarun 1",
    parkImage: "images/jarun.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Jarun smješten je u Zagrebu, preciznije na jezeru Jarun. Na jezeru se osim ovoga nalazi i još jedan park koji je kao i ovaj dosta dobro postavljen i spadaju među bolje parkove Zagreba.Kada bi ih usporedili teško bi se odlučio pobjednik jer svaki park ima i svoje mane, ali i prednosti koje poništavaju jedna drugu tako da bih rekao da su isti po kvaliteti. Na ovoj lokaciji se tehnički nalaze tri mala parka gledajući njihovu starost. Najstariji je mali park preko puta ceste u lijepom hladu od obližnjih drveća. Park je solidno postavljen i ima nekako minimalistički pristup jer se u početku sastojao samo od dvije šipke za zgibove, jednog seta niskih paralelnih šipki i jednih malo modificiranih horizontalnih ljestvi (&#34Monkey bars&#34). Kasnije je park dobio određeno proširenje, no što se tiče našeg sporta nijedna od tih novih sprava nije nam od neke koristi. Drugi park na redu je upravo park na samoj lokaciji pribadače koji po svojoj starosti nije puno noviji od prethodnog što je vidljivo i po samim šipkama i ostaloj opremi. Ovaj park ima iste elemente kao i prvi park, samo su ovdje malo drugačije oblikovani jer su šipke za zgibove većih i viših dimnezija, dok su Horizontalne ljestve (&#34Monkey bars&#34) dosta manje, uže i kraće nego standardne. Ovaj park iako spada među starije parkove u Zagrebu ima jednu vrlo korisnu stvar koja ga ističe od ostatka parkova diljem Zagreb u obliku improviziranih utega. U ovom parku nalazi se nekoliko &#34homemade&#34 utega koji su ljudi donijeli/napravili u obliku improviziraih automobilskih guma punjenih betonom do čistih betonskih blokova što čini ovaj park odličnim izborom da trening nogu. Treći park i po starosti najnoviji nalazi se u samom kutu polja za vježbanje te nudi nekoliko šipki za zgibove, dva seta niskih paralelnih šipki za propadanje i dodatak švedskih ljestvi za određene statičke elemente (humanflag)." +
      "Prednosti ovih parkova su hlad tokom ljetnih mjeseci (iznimka je samo najnoviji dio parka koji je tokom cijelog dana izložen suncu), mogućnost dopune vode na obližnjoj crpki, izoliranost od bilo kakvih stambenih građevina što je odlično za puštanje glasne muzike i naravno mogućnost korištenja utega. Mane ovog parka su debljina samih šipki (u starijim dijelovima parka šipke su predebele, dok u novom dijelu su pak pretanke), nedostatak adekvatnih šipki za freestyle pokrete (ovisno o parku), nedostatak ulične rasvjete što otežava trening po noći i podloga u sva tri parka nije bas idealna pogotovo u novom dijelu gdje se grubi šljunak.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) s dodatkom švedskih ljestvi sa svake strane <br>Srednje visoke paralelne šipke za propadanja <br>Švedske ljestve <br>Set visokih horizontalnih šipki različitih visina <br> <br>Veliki izbor improviziranih utega u obliku betonskih blokova i automobilskih guma (prazne i pune)",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/1suKL9hkAr3CqnN38' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  fallerovo: {
    lat: 45.79998878489222,
    lng: 15.936072334126234,
    parkName: "Street Workout park - Fallerovo",
    parkImage: "images/fallerovo.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Fallerovo smješten je u Zagrebu, preciznije u kvartu Trešnjevka, u sklopu Fallerovog šetališta. Park je dosta loše postavljen. Horizontalne ljestve (&#34Monkey bars&#34) pružaju mogućnost izvođenja različitih zgibova dok tri visoke šipke omogućuju osim zgibova i izvođenje freestyle elemenata. Veliki minus kojeg ovaj park ima je nedostatak bilo kakve sprave koja se može upotijrebiti za kvalitetan push trening, u ovom smislu misli se na propadanja. Među dodatnim stvarima u parku nema nekih korisnih sprava vezanih uz naš sport. Prednosti ovog parka su izoliranost od buke glavne ulice i mogućnost puštanja glasne muzike zbog udaljenosti obližjih zgrada. Mane ovog parka su nedostatak crpke za vodu, nedostatak ulične rasvjete koja otežava trening po noći, nedostatak hlada tokom ljetnih mjeseci te ogromni nesrazmjer push/pull sprava. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Mali fitness komplet koji se sastoji od stolice, rotirajućeg kruga i jedne vrste njihala <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Dvije stolice jedna nasuprot druge koje rekreiraju određenu varijantu (&#34leg press&#34) vježbe <br>Horizontalne ljestve (&#34Monkey bars&#34) <br>Sprava za ljuljanje <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj <br>Sprava za veslanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ATCuJMVBKK6HJmwH7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  voltino: {
    lat: 45.79951781087857,
    lng: 15.929972307497897,
    parkName: "Street Workout park - Voltino",
    parkImage: "images/voltino.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Voltino smješten je u Zagrebu, preciznije u kvartu Voltino. Park je odlično postavljen, jedan od boljih parkova Zagreba. Horizontalne ljestve (&#34Monkey bars&#34), tri visoke horizontalne šipke i dvije malo niže šipke pružaju izvođenje različitih varijacija zgibova po svačijem ukusu. S druge strane jedan set visokih i niskih paralelnih šipki za propadanje omogućuju također šarolik izbor opcija za svakoga. Od dodatnih stvari u parku zanimljive za izdvojiti su šipke za skekove te klupica za trbušnjake jer su odlično mjesto za izvođenje određenih statičkih elemenata (handstand, dragon flag). Prednosti ovog parka su hlad tokom ljetnih mjeseci, mogućnost dopune vode na obližnjoj crpki, izoliranost od bilo kakvih stambenih građevina što je odlično za puštanje glasne muzike, mogućnost izvođenja freestyle pokreta te dobar omjer push/pull sprava. Mana ovog parka je nedostatak ulične rasvjete što otežava trening po noći.  <br><em>Napisao: Nikola Pustišek</em> <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set paralelnih šipki za propadanja različitih visina <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl u kombinaciji sa šipkom za zgibove i rotirajućim krugom",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/97UCaF1Ej6HjNphSA' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  ljubljanica: {
    lat: 45.7944386516236,
    lng: 15.93273316755646,
    parkName: "Street Workout park - Ljubljanica",
    parkImage: "images/ljubljanica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Ljubljanica smješten je u Zagrebu, preciznije u kvartu Ljubljanica. Park je solidno postavljen. Dvije samostalne šipke osim zgibova pružaju mogućnost izvođenja i freestyle pokreta, dok dvije šipke manjih visina pružaju odlično mjesto za početnike gdje se mogu više fokusirati na negativni dio pokreta. Sprava od dva seta paralelnih šipki za propadanja zajedno s jednom samostalnom pružaju izbor najbolje opcije po svačijem ukusu. Od dodatnih stvari u parku zanimljivo je izdvojiti male švedske ljestve u kombinaciji s paralelnim šipkama koje pružaju mogućnost izvođenja određenih statičkih elemenata (human flag/dragon flag). Prednosti ovog parka su dobar omjer push/pull sprava kao i mogućnost izvođenja freestyle pokreta. Mane ovog parka su nedostatak crpke za vodu, nedostatak ulične rasvjete što otežava trening po noći i mala zakrivljenost terena što se osjeti prilikom izvođenja nekih statičkih elemenata (handstand/planche). <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set kotača za vrtnju <br>Set paralelnih šipki za propadanja različitih visina <br>Bicikl <br>Sprava za skijanje <br>Sprava za penjanje <br>Švedske ljestve u kombinaciji s dijelom za propadanja <br>Dvije samostalne visoke horizontalne šipke za zgibove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/xQpTk7UG7sAwx2vv6' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star-half-stroke"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tresnjevacki_plac: {
    lat: 45.79779276555363,
    lng: 15.956932983259508,
    parkName: "Street Workout park - Trešnjevački plac",
    parkImage: "images/plac.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Trešnjevački plac smješten je u Zagrebu, preciznije u kvartu Trešnjevka. Park je solidno postavljen. Tri visoke šipke za zgibove pružaju dovoljno opcija za svačiji ukus, a također nude i opciju izvođenja freestyle pokreta. U parku se što se tiče propadanja nalazi samo jedan set visokih paralelnih šipki što nije idealno jer nekima može stvarati problem prilikom penjanja na iste. Od dodatnih stvari u parku zanimljive za izdvojiti su tri male horizontalne šipke odlične za početnike (australski zgibovi), ali i malo naprednije vježbače za izvođenje određenih statičkih elemenata (front/back lever) i klupica za trbušnjake (dragon flag). Prednosti ovog parka su djelomična izoliranost od glavne ulice i stambenih zgrada, no park se nalazi u sklopu staračkog doma stoga nije baš skroz preporučljivo puštati glasnu muziku jer se često korisnici staračkog doma znaju šetati oko samog parka, mogućnost izvođenja freestyle pokreta, dobar omjer push/pull sprava te prisutnost ulične rasvjete koja olakšava trening po noći. Mana ovog parka je nedostatak crpke za vodu. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set od tri niske horizontalne šipke različitih visina <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za skijanje <br>Set za ljude u invalidskim kolicima koji se sastoji od dvije vježbe vrtnje i improviziranih ringova za zgibove",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/iHbaNbx6Nonfzgks5' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  savica: {
    lat: 45.78991006237311,
    lng: 15.98913693136404,
    parkName: "Street Workout park - Savica",
    parkImage: "images/savica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Savica smješten je u Zagrebu, preciznije u kvartu Savica na Savskom nasipu. Park je solidno postavljen. Park je djelmično spoj novog i starog dijela. U starom dijelu nalaze se horizontalne ljestve (&#34Monkey bar&#34) koje imaju malo deblji hvat te s jedne strane umjesto jedne šipke imaju napravljene švedske ljestve. U novom dijelu nalaze se nešto novije dvije šipke nižih dimenzija koje su odlične za početnike za vježbanje negativnog dijela pokreta. Set visokih paralelnih šipki za propadanje nisu baš uvijek najbolje rješenje jer nekim ljudima zna biti problem penjanje na iste. Od dodatnih stvari u parku izdvojio bih klupicu s ručkama te set zakrivljenih šipki koje mogu poslužiti kod izvođenja određenih statičkih elemenata (handstand, planche...). Prednosti ovog parka su izoliranost od glavne ceste i obližnjih zgrada što omogućuje puštanje glasne muzike, mogućnost dopune vode na obližnjoj crpki, solidan omjer push/pull sprava te prisutnost ulične rasvjete što olakšava trening po noći. Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci te nedostaka šipke za izvođenje freestyle pokreta kao i odgovarajuće podloge. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Klupa s ručkama",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/XshNN5s8oKUVMTu66' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  jarun2: {
    lat: 45.779542797176425,
    lng: 15.9143274899785,
    parkName: "Street Workout park - Jarun 2",
    parkImage: "images/jarun2.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Jarun 2 smješten je u Zagrebu, preciznije na jezeru Jarun. Kao i njegov prethodnik Jarun 1 i ovaj park je odlično postavljen te je jedan od boljih parkova Zagreba. Kao i kod prvog parka i ovaj se može podijeliti u dvije zone: stari i novi dio. U parku najviše prevladavaju horizontalne ljestve (&#34Monkey bars&#34) jer ih ima sveukupno čak četiri, dva u svakom dijelu parka. Novi dio parka također još nudi nekoliko različitih šipki za zgibove različitih visina kao i set od tri niske šipke korisne za početnike (australski zgibovi) ili određene statičke elemente (front/back lever). Sredinu samog parka čini jedan dugački set starih paralelnih šipki za propadanja. Od dodatnih stvari u parku zanimljive za izdvojiti su švedske ljestve u novom dijelu parka koje mogu poslužiti kod izvođenja određenih statičkih elemenata (humanflag) i dva seta balvana u starom dijelu parka koji su korisni za neke trbušnjake i slične vježbe. Prednosti ovog parka su izoliranost od stambenih grada što omogućava glasno puštanje muzike, djelomičan hlad na većini parka tokom ljetnih mjeseci i blizina crpke za vodu.Mane ovog parka su mali nesrazmjer push/pull sprava, podloga samog parka koja nije baš preporučljiva prilikom izvođenja freestyle pokreta i nedostatak ulične rasvjete što otežava trening po noći.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Četiri horizontalne ljestve (&#34Monkey bars&#34) <br>Srednje visoke paralelne šipke za propadanja <br>Drveni trupci za trbušnjake <br>Švedske ljestve <br>Niz horizontalnih šipki za zgibove različitih visina <br>Set od tri niske horizontalne šipke različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/YEGKXDzSYFpwtcjT6' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  rudes: {
    lat: 45.79825284456545,
    lng: 15.917527141323934,
    parkName: "Street Workout park - Rudeš",
    parkImage: "images/rudes.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Rudeš smješten je u Zagrebu, preciznije u kvartu Rudeš. Park je dosta dobro postavljen. Horizontalne ljestve (&#34Monkey bars&#34), tri visoke horizontalne šipke i dvije malo niže šipke pružaju izvođenje različitih varijacija zgibova po svačijem ukusu. Jedan set visokih paralelnih šipki za propadanje nisu uvijek najbolje rješenje jer nekim ljudima zna biti problem popesti se na iste. Od dodatnih stvari izdvojio bih samostalne švedske ljestve i klupicu za trbušnjake jer su obje sprave korisne kod učenja određenih statičkih elemenata (human flag, handstand, dragon flag). Prednosti ovog parka su mogućnost izvođenja freestyle pokreta, hlad tokom ljetnih mjeseci, solidan omjer push/pull sprava, prisutnost ulične rasvjete što pomaže kod treninga po noći te izoliranost od glavne ceste i obližnjih zgrada što omogućuje puštanje glasne muzike. Mana ovog parka je nedostatak crpke za vodu. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Horizontalne ljestve (&#34Monkey bar&#34) <br>Visoke paralelne šipke za propadanja <br>Bicikl <br>Švedske ljestve <br>Klupica za trbušnjake <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dRE2ctPwnPD3UpYs8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  svetice: {
    lat: 45.818002110192815,
    lng: 16.013662124798774,
    parkName: "Street Workout park - Svetice",
    parkImage: "images/svetice.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Svetice smješten je u Zagrebu, preciznije u kvartu Svetice. Park je odlično postavljen i jedan je od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovooru sa samim vježbačima te s razlogom spada ne samo u najbolje parkove Zagreba već i cijele Hrvatske. U ovom parku se najčešće organiziraju grupni treninzi jer nudi stvarno bezbroj šipki za svaku vježbu stoga je odličan izbor za velik broj ljudi na istom mjestu. Preciznije park nudi preko devet samostalnih šipki za zgibove, jedne horizontalne ljestve (&#34Monkey bars&#34) te tri seta od tri paralelne šipke za propadanja različitih visina i širina. Od dodatnih stvari park nudi čak tri seta manjih paralelnih šipki, dva seta malo nižih horizontalnih šipki, dvije klupice za trbušnjake te jedan zanimljiv detalj u obliku stupa s konopcem za penjanje što čini ovaj park stvarno savršenim mjestom za trening. Prednosti ovog parka su izoliranost od obližnjih stambenih zgrada što pruža mogućnost puštanja glasne muzike, mogućnost dopune vode na obližnjoj crpki, odličan omjer push/pull sprava te ponajviše mogućnost izvođenja ogromnog broja freestyle pokreta (statičkih/dinamičkih). Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci te nedostatak ulične rasvjete što otežava trening po noći. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Dvije visoke i jedne srednje visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Veliki niz od preko 8 visokih horizontalnih šipki za zgibove različitih visina <br>Dva seta niskih horizontalnih šipki različitih visina <br>Jedna samostalna srednje visoka šipka za zgibove s dodatkom konopca visokog otprilike 5m <br>Tri kompleta malih vodoravnih šipki na podu",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/CNgAxe692gDCrJy46' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
  },

  precko: {
    lat: 45.795169993328244,
    lng: 15.901734449155944,
    parkName: "Street Workout park - Prečko",
    parkImage: "images/precko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Prečko smješten je u Zagrebu, preciznije u kvartu Prečko. Park je solidno postavljen. Horizontalne ljestve (&#34Monkey bars&#34), tri visoke horizontalne šipke i dvije malo niže šipke pružaju izvođenje različitih varijacija zgibova po svačijem ukusu. Park malo zaostaje po pitanju propadanja jer za izvođenje istih postoji samo jedna sprava na kojoj ima prostora samo za jednu osobu što nije baš poželjno i praktično pogotovo kod grupnih treninga ili malo veće gužve u parku. Od dodatnih stvari u parku izdvojio bih malo zakrivljene paralelne šipke, samosalne švedske ljestve i tri nike horizontalne šipke jer su sve sprave korisne i za same početnike (sklekovi/australski zgibovi), ali i za naprednije vježbače kod učenja raznih statičkih pokreta (handstand, planche, front/back lever). Prednosti ovog parka su izoliranost od glavne ceste i obližnjih stambenih zgrada što omogućava glasno slušanje muzike i mogućnost izvođenja freestyle pokreta. Mane ovog parka su nedostatak crpke za vodu, nedostatak ulične rasvjete što otežava trening po noći, nedostatak hlada tokom ljetnih mjeseci te dosta veliki nesrazmjer push/pull sprava.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bar&#34) <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za propadanje <br>Set niskih horizontalnih šipki različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/Dbe1sonARSKGSXJ17' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
  },

  ciglenica: {
    lat: 45.80528488254902,
    lng: 15.944970312675895,
    parkName: "Street Workout park - Ciglenica",
    parkImage: "images/ciglenica.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Ciglenica smješten je u Zagrebu, preciznije u kvartu Trešnjevka u neposrednoj blizini starog vodocrpilišta koje je cijelo obloženo u ciglama po čemu je i park dobio ime. Park ima dosta nepotrebnih sprava, ali unatoč tomu i dalje je jedan od boljih parkova u Zagrebu. Horizontalne ljestve (&#34Monkey bars&#34) odličan su izbor za sve vrste zgibova dok tri visoke samostalne šipke osim za zgibove odlično mogu poslužiti i za freestyle dio. U parku se nalaze samo jedne visoke paralelne šipke za propadanje koje mogu nekima biti problem, no u većini slučajeva u parku se nalaze kameni blokovi koji mogu poslužiti kao stepenice za lakše penjanje. Od dodatnih stvari u parku većina ih je dosta beskorisna što se tiče našeg sporta osim seta klupica za trbušnjake koje se mogu iskoristiti i kao podloga za čučanj skokove te neke staticke elemente (dragon flag). Prednosti ovog parka je mogućnost dopune vode u obližnjem parku za pse te izoliranost parka od obližnjih kuća stoga se muzika može slobodno glasno puštati. Mane ovog parka su nedostatak hlada tijekom ljetnih mjeseci, veliki broj nepotrebnih sprava i nedostatak ulične rasvjete što otežava trening po noći.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Visoke paralelne šipke za propadanja <br>Dvije klupice za trbušnjake <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Sprava za skijanje <br>Set od dva rotirajuća kruga za različite vježbe <br>Sprava za penjanje u kombinaciji sa spravom za njihanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/pV6aAdrAH99uWkbv7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  siget: {
    lat: 45.77674922570695,
    lng: 15.966980405187503,
    parkName: "Street Workout park - Siget",
    parkImage: "images/siget.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Siget smješten je u Zagrebu, preciznije u kvartu Siget. Park je solidno postavljen. Ovaj park se malo ističe od drugih jer je napravljen u obliku jedne vrste trim staze gdje se na svakoj stanici nalazi određeni broj sprava za vježbanje. Prva stanica, ujedno i najveća i nama najkorisnija je upravo ovaj mali sw park. Tri šipke pružaju odličan izbor za raditi zgibove, dok spojene šipke za propadanja odmah pored nude brzu promjenuu vježbi. Od dodatnih stvari u parku izdvojio bih set niskih paralelnih šipki, jednu samostalnu nižu horizontalnu šipku te švedske ljestve na malo daljoj stanici jer sve navedeno može odlično poslužiti kod učenja raznih statičkih elemenata (handstand, planche, human flag, front lever...). Na ostatku trim staze mogu se pronaći još par stanica sa nekim varijacijama šipki za propadanja ili zgibove tako da sve u svemu zanimljiv koncept pogotovo za slučajne prolaznike. Prednosti ovog parka su izoliranost od glavne ceste te stambenih zgrada što omogućava puštanje glasne muzike, dobar omjer push/pull sprava, mogućnost hlada tijekom ljetnih mjeseci (ovisi naravno od stanice do stanice) te ulična rasvjeta putem cijele staze. Mane ovog parka su nedostatak crpke za vodu, neadekvatna podloga (ovisi naravno od stanice do stanice), manjak prostora za izvođenje freestyle pokreta i neadekvatna debljina šipki (ovisi naravno od stanice do stanice). <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve u kombinaciji s mrežom za penjanje i malim umjetnim zidom za penjanje <br>Tri horizontalne šipke za zgibove različite visine <br>Niske paralelne šipke na podu <br>Srednje visoke paralelne šipke za propadanja <br>Trupac za održavanje ravnoteže <br>Set od tri niske horizontalne šipke različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/ZsRNo65vd3HQSucm7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  trnsko: {
    lat: 45.77090484005913,
    lng: 15.964890712441298,
    parkName: "Street Workout park - Trnsko",
    parkImage: "images/trnsko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Trnsko smješten je u Zagrebu, preciznije u kvartu Trnsko. Park je solidno postavljen. Jedan je od rijetkih parkova koji nema u svojem sastavu neku vrstu horizontalnih ljestvi (&#34Monkey bars&#34), no zato nudi preko šest šipki za zgibove različitih visina, koje također mogu poslužiti i kod izvođenja freestyle pokreta. Set od tri paralelne šipke za propadanja malo je prenizak za moj osobni ukus, no za razliku od ostatka parka zbog obližnjeg drveta većinu dana je u hladu. Od dodatnih stvari u parku izdvojio bi jedan zanimljiv dodatak u obliku sprave za jačanje snage u prstima, česta pojava ovakve sprave viđa se u prostorima specijaliziranim za penjanje po stijenama. Prednosti ovog parka su izoliranost od obližnjih stambenih zgrada što omogućuje puštanje glasne muzike, mogućnost izvođenja freestyle pokreta i prisutnost ulične rasvjete što olakšava trening po noći. Mane ovog parka su nedostatak crpke za vodu, nedostatak hlada tokom ljetnih mjeseci te nesrazmjer push/pull sprava. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Srednje visoke paralelne šipke za propadanja <br>Set od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s kratkim švedskim ljestvama i dodatkom za vježbu snage u prstima <br>Šipke za sklekove <br>Niz srednje visokih horizontalnih šike za zgibove različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/32YSQk3gXziYMyRP9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  trnover: {
    lat: 45.83388731897813,
    lng: 16.071220495488262,
    parkName: "Street Workout park - Trnover",
    parkImage: "images/trnover.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Trnover smješten je u Zagrebu, preciznije u kvartu Trnovčica. Park je odlično postavljen i jedan je od rijetkih parkova koji su baš planski i temeljito izgrađeni u dogovooru sa samim vježbačima te s razlogom spada ne samo u najbolje parkove Zagreba već i cijele Hrvatske. U ovom parku se najčešće organiziraju grupni treninzi jer nudi stvarno bezbroj šipki za svaku vježbu stoga je odličan izbor za velik broj ljudi na istom mjestu. Preciznije park nudi preko devet samostalnih šipki za zgibove, jedne horizontalne ljestve (&#34Monkey bars&#34) te dva seta paralelnih šipki za propadanja različitih visina i širina. Od dodatnih stvari park nudi čak dva seta manjih paralelnih šipki, klupicu za trbušnjake te jedan zanimljiv detalj u obliku kutiju za skakanje što čini ovaj park stvarno savršenim mjestom za trening. Prednosti ovog parka su izoliranost od obližnjih stambenih zgrada što pruža mogućnost puštanja glasne muzike, odličan omjer push/pull sprava, prisutnost ulične rasvjete što olakšava trening po noći te ponajviše mogućnost izvođenja ogromnog broja freestyle pokreta (statičkih/dinamičkih). Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci te nedostatak crpke za vodu. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bars&#34) <br>Niz od pet visokih horizontalnih šipki za zgibove različitih visina <br>Set od dvije visoke i dvije srednje visoke horizontalne šipke za zgibove različitih visina <br>Stalak za skakanje <br>Tri para niskih paralelnih šipki na podu <br>Klupica za trbušnjake",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/yL6GFgmvJJpbpXcw5' target=_blank>ovdje</a> i pogledaj slike parka!!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>',
  },

  britanac: {
    lat: 45.81193831275142,
    lng: 15.963523730695016,
    parkName: "Street Workout park - Britanac",
    parkImage: "images/britanac.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Britanac smješten je u Zagrebu, preciznije u blizini Britanskog trga. Park je odlično postavljen i jedan je od najboljih parkova u Zagrebu, ali i okolici. U parku se nalazi veliki broj šipki za zgibove različitih visina po svačijoj mjeri koje se također mogu koristiti i za freestyle dio. Dva seta paralelnih šipki za propadanja različitih dimenzije čine odličan balans push/pull sprava te su u sklopu šipki za zgibove što je odlično kod nekih supersetova kada je odmor između vježbi minimalan. Dodatne stvari u obliku švedskih ljestvi, seta od dvije niske različite šipke i malih paralelnih šipki na podu odličan su alat kod freestyle dijela našeg sporta kod učenja različitih statičkih elemenata (front/back lever, humanflag, handstand...). Prednosti ovog parka su izoliranost od buke glavne ulice i slučajnih prolaznika, dobar omjer push/pull sprava i mogućnost hlada tijekom ljetnog razdoblja. Mane ovog parka su nedostatak crpke za vodu i ulične rasvjete stoga je trening po mraku jako otežan te zbog blizine stambenih zgrada sa svih strana parka nije baš poželjno puštati glasno muziku.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih i srednje visokih paralelnih šipki za propadanja <br>Dva seta od tri visoke horizontalne šipke za zgibove različitih visina u kombinaciji s švedskim ljestvama <br>Set od dvije niske horizontalne šipke različitih visina <br>Set malih vodoravnih šipki na podu",
    parkNavigation:
      "Klikni <a href='https://g.page/street-workout-park-zagreb?share' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  spansko: {
    lat: 45.800536496435996,
    lng: 15.898664952412943,
    parkName: "Street Workout park - Špansko",
    parkImage: "images/spansko.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Špansko smješten je u Zagrebu, preciznije u kvartu Špansko. Park je dosta dobro postavljen te spada u bolje parkove Zagreba. Horizontalne ljestve (&#34Monkey bars&#34), tri visoke horizontalne šipke i dvije malo niže šipke pružaju izvođenje različitih varijacija zgibova po svačijem ukusu. S druge strane jedan set visokih i niskih paralelnih šipki za propadanje omogućuju također šarolik izbor opcija za svakoga. Od dodatnih stvari u parku zanimljivo je izdvojiti klupicu za trbušnjake koja može poslužiti kod izvođenja određenih statičkih elemenata (dragon flag). Prednosti ovog parka su izoliranost od glavne ceste i obližnjih stambenih zgrada što omogućava puštanje glasne muzike, dobar omjer push/pull sprava, mogućnost dopune vode na obližnjoj crpki za vodu te mogućnost izvođenja freestyle pokreta. Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci te nedostatak ulične rasvjete što otežava trening po noći.   <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih paralelnih šipki za propadanja <br>Horizontalne ljestve (&#34Monkey bars&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Set paralelnih šipki za propadanja različitih visina <br> Klupica za trbušnjake <br>Sprava za veslanje <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Bicikl <br>Set od dvije stolice različitih funkcija; pull/push pokreti <br>Set od dvije sprave za ljuljanje okrenute jedna nasuprot drugoj",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/d8fDrr4f3VxPWFPA7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  gajnice: {
    lat: 45.81736288334762,
    lng: 15.876114131361767,
    parkName: "Street Workout park - Gajnice",
    parkImage: "images/gajnice.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Gajnice smješten je u Zagrebu, preciznije u kvartu Gajnice. Park je dosta dobro postavljen te spada u grupu boljih parkova u Zagrebu. Park pruža veliki izbor šipki za zgibove preko horizontalnih ljestvi (&#34Monkey bars&#34), tri visoke šipke koje mogu poslužiti i za freestyle pokrete te dodatne dvije šipke manjih visina koje su korisne kod učenja negativnog dijela pokreta. Prisutnost visokih i niskih paralelnih šipki za propadanja također su odlična stvar da svako po svojem ukusu odabere dražu opciju. Od dodatnih stvari u parku izdvojio bi klupicu s ručkama koje može biti veoma korisna kod učenja određenih statičkih elemenata (hadnstand, planche...) te male švedske ljestve koje su spojene s niskim šipkama za propadanje koje mogu poslužiti malo naprednijim vježbačima u jačanju njihovih elemenata (front lever, human flag) zbog manjeg razmaka između šipki što u velikoj mjeri otežava sami pokret. Prednosti ovog parka su izoliranost od obližnjih zgrada što omogućava puštanje glasne muzike dobar omjer push/pull sprava. Mane ovog parka su nedostatak crpke za vodu, nedostatak hlada tijekom ljetnih mjeseci te nedostatak ulične rasvjete što otežava trening po noći.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih paralelnih šipki za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Horizontalne ljestve (&#34Monkey bars&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Klupa s ručkama <br>Sprava za propadanje s dodatkom malih švedskih ljestvi",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/kDBbQ3zn75fgTW3R9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  klaka: {
    lat: 45.83679250143254,
    lng: 16.0541721524014,
    parkName: "Street Workout park - Klaka",
    parkImage: "images/klaka.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Klaka smješten je u Zagrebu, preciznije u kvartu Klaka. Park je dosta dobro postavljen i može se reći da spada među bolje parkove Zagreba. Što se tiče zgibova stvarno ima pregršt opcija za birati preko jednih horizontalnih ljestvi (&#34Monkey bars&#34), tri visoke šipke koje mogu poslužti i za freestyle pokrete i dvije malo niže koje su odlične za početnike gdje se mogu više fokusirati na negativni dio pokreta. Jedan set visokih i niskih paralelnih šipki za propadanja odlična su kombinacija jer dopuštaju izbor najbolje opcije po svačijem ukusu. U parku se nalazi nekoliko dodatnih stvari koje nisu od neke koristi u našem sportu, no tu bi izdvojio jedne samostalne švedske ljestve i dva seta malo zakrivljenih šipki koje mogu poslužiti kod izvođenja određenih statičkih elemenata (handstand/humanflag). Prednosti ovog parka su izoliranost od stambenih zgrada što omogućuje puštanje glasne muzike, mogućnost izvođenja freestyle pokreta i dobar omjer push/pull sprava. Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci, nedostatak crpke za vodu i nedostatak ulične rasvjete što otežava trening po noći.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Jedan par visokih paralelnih šipki za propadanja <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za skijanje <br>Horizontalne ljestve (&#34Monkey bars&#34) <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Klupa s ručkama <br>Sprava za veslanje <br>Sprava za propadanje <br>Dva seta šipki za sklekove <br>Sprava za njihanje s dodatkom dva rotirajuća kruga za različite vježbe <br>Švedske ljestve",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/RDpHY6TfSa15KeSa9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"> </i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  folka: {
    lat: 45.79503799869429,
    lng: 16.005015775340617,
    parkName: "Street Workout park - Folka",
    parkImage: "images/folka.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Folka smješten je u Zagrebu, preciznije u kvartu Folnegovićevo naselje. Park je dobro postavljen, no ima prostora za poboljšanje. Tri visoke samostalne šipke odlične su ne samo za zgibove nego i za freestyle pokrete, dok s druge strane set niskih paralelnih šipki za propadanja odlično odgovaraju većini ljudi. Od dodatnih stvari u parku većina ih je dosta beskorisna što se tiče našeg sporta osim seta klupica za trbušnjake koje se mogu iskoristiti i kao podloga za čučanj skokove te neke staticke elemente (dragon flag). Prednosti ovog parka su izoliranost od buke prometa i obližnjih zgrada što pruža mogućnost puštanja glasne muzike i smanjenuje broj slučajnih prolaznika u parku i dobar omjer push/pull sprava. Mane ovog parka su nejednaka podloga na prostoru cijelog parka, nedostatak crpke za vodu, nedostatak hlada tijekom ljetnih mjeseci te nedostatak ulične rasvjete što otežava trening po noći. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Bicikl <br>Set paralelnih šipki za propadanja različitih visina <br>Set od četiri rotirajuća kruga za različite vježbe <br>Set od dvije klupice za trbušnjake <br>Sprava za njihanje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/bMzre1mRyaEysm9F8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  subiceva: {
    lat: 45.809210813224205,
    lng: 15.993764739016488,
    parkName: "Street Workout park - Šubićeva",
    parkImage: "images/subiceva.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Šubićeva smješten je u Zagrebu, preciznije u kvartu Donji grad u blizini Šubićeve ulice. Park je solidno postavljen. Horizontalne ljestve (&#34Monkey bars&#34) jedina su opcija za izvođenje zgibova, dok je set paralelnih šipki različitih visina jedina opcija što se tiče propadanja, no dosta korisna jer dopušta izbor najbolje opcije za svakoga posebno. Od dodatnih stvari u parku ništa nije zanimljivo niti korisno za naš sport tako da nema potrebe za izdvajanjem. Prednosti ovog parka su izoliranost od glavne ceste i obližnjih zgrada što dopušta puštanje glasne muzike, prisutnost ulične rasvjete što omogućava trening po noći, hlad tokom ljetnih mjeseci te dobar omjer push/pull sprava. Mane ovog parka su nedostatak crpke za vodu te nedostatak prostora za izvođenje freestyle pokreta. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Sprava za njihanje <br>Set paralelnih šipki za propadanja različitih visina <br>Jedna varijanta bicikla",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/i5Hs5gbAD9URLk1t8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  tunel_sljeme: {
    lat: 45.86418245014666,
    lng: 15.981966689773946,
    parkName: "Street Workout park - Tunel Sljeme",
    parkImage: "images/tunel-sljeme.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Tunel Sljeme smješten je u Zagrebu, preciznije u kvartu Gračani odmah nakon izlaska iz poznatog tunela Sljeme u neposrednoj blizini novoizgrađene sljemenske žičare. Park je jako loše postavljen. Osim dvije malo niže horizontalne šipke koje mogu poslužiti za zgibove i klupice s ručkama koja može biti korisna za neke statičke elemente ostatak parka je praktički beskoristan te nema nikakve sprave koja može poslužiti za izvođenje propadanja tako da veliki minus. Jedina prednost ovog parka je njegova izoliranost od glavne ceste i obližnjih stambenih zgrada što omogućuje puštanje glasne muzike. Mane ovog parka su nesrazmjer push/pull sprava, nedostatak hlada tijekom ljetnih mjeseci, nedostatak ulične rasvjete što otežava trening po noći u samom parku, nedostatak crpke za vodu te nedostatak prostora za izvođenje freestyle pokreta. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za njihanje <br>Klupa s ručkama <br>Bicikl",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/qUa6nsBR29zexnwG8' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  zapadni_kolodvor: {
    lat: 45.80996716223953,
    lng: 15.949365433546706,
    parkName: "Street Workout park - Zapadni kolodvor",
    parkImage: "images/zapadni-kolodvor.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Zapadni kolodvor smješten je u Zagrebu, preciznije u kvartu Črnomerec u neposrednoj blizini zagrebačkog zapadnog kolodvora. Park je jako loše postavljen. Horizontalne ljestve (&#34Monkey bars&#34) i set od dvije niže šipke pružaju odličan izbor za zgibove po svačijoj volji, posebice niže šipke za početnike, no ovaj park ima veliki minus u obliku nedostatka sprava za propadanje ili slične push vježbe osim možda klupice koja može poslužiti za različite varijacije sklekova. Od dodatnih stvari zanimljivo je izdvojiti samostalne švedske ljestve koje mogu poslužiti za učenje raznih statičkih elemenata (human/dragon flag, handstand). Park baš i nema nekih pozitivnih strana jer po svim kriterijima zaostaje za ostalim parkovima (blizina stambenih zgrada i parkića za djecu, nedostatak hlada, vode, ulične rasvjete, mogućnost izvođenja freestyle te ogroman nesrazmjer push/pull sprava).  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Sprava za veslanje <br>Švedske ljestve <br>Bicikl",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/PJvkGgF1XWom3SXf7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  senoa: {
    lat: 45.80135590962534,
    lng: 15.947159825720144,
    parkName: "Street Workout park - Šenoa",
    parkImage: "images/senoa.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Šenoa smješten je u Zagrebu, preciznije u kvartu Trešnjevka u blizini Osnovne škole Augusta Šenoe. Park je solidno postavljen jer sadrži sve potrebne sprave za kvalitetan trening. Horizontalne ljestve (&#34Monkey bars&#34) pružaju izvođenje različitih varijacija zgibova i ostalih vježbi, dok s druge strane jedan set visokih i niskih paralelnih šipki za propadanje omogućuju izbor po svačijem ukusu. Dodatne stvari u obliku švedskih ljestvi i seta od tri niske različite šipke odličan su alat kod freestyle dijela našeg sporta kod učenja različitih statičkih elemenata (front/back lever, humanflag...). Prednosti ovog parka su izoliranost od buke glavne ulice, dobar omjer push/pull sprava, mogućnost hlada tijekom ljetnog razdoblja te ulična rasvjeta u samom parku. Mane ovog parka su blizina dječjeg vrtića zbog čega nije baš poželjno puštati glasnu muziku te nedostatak crpke za vodu. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Horizontalne ljestve (&#34Monkey bars&#34) <br>Visoke paralelne šipke za propadanja  <br>Set od tri niske horizontalne šipke različitih visina <br>Švedske ljestve <br>Set paralelnih šipki za propadanja različitih visina",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/dz4u2VM9FXeU3mGL9' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  enschede: {
    lat: 52.218287519259825,
    lng: 6.874468577702691,
    parkName: "Street Workout park - Enschede",
    parkImage: "images/enschede.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Enschede smješten je u Enschedeu, u sklopu Volkspark gradskog parka. Park je solidno postavljen te je raspoređen tehnički na tri dijela, tj. sekcije no što se tiče našeg sporta samo je glavni dio koristan. Park nudi kocku od četiri horizontalne šipke različitih visina odličnih ne samo za zgibove, nego i za izvođenje freestyle pokreta. Također, niže šipke pružaju odlično mjesto i za početnike kako bi se fokusirali više na negativni dio pokreta. Jedan set paralelnih šipki za propadanja u sklopu je s jedom samostalom šipkom za zgibove što je odlična stvar za neke supersetove gdje je minimalan odmor između vježbi, no mali je minus što ima mjesta samo za jednu osobu. Od dodatnih stvari zanimljivo je izdvojiti samostalne švedske ljestve te niz velikih kamenih blokova koji mogu poslužiti ne samo kao mjesto za ostaviti stvari, već i kao mjesto za izvođenje zanimljivih varijacija određenih statičkih pokreta (handstand, L/V-sit...). Prednosti ovog parka su izoliranost od glavne ceste i obližnjih zgrada što omogućuje puštanje glasne muzike, mogućnost izvođenje freestyle pokreta te relativno dobar omjer push/pull sprava. Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci, nedostatak crpke za vodu te nedostatak ulične rasvjete što otežava trening po noći.  <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "<br>Set od četiri šipke za zgibove različitih visina <br>Švedske ljestve <br>Set od jedne horizontalne šipke za zgibove i jednog para paralelnih šipki za propadanja <br>Bicikl <br>Sprava za njihanje <br>Dvije polukružno zakrivljene šipke <br>Dvije stolice za rekreiranje push/pull pokreta",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/b8afy56zJwmKfFEi7' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  gronau: {
    lat: 52.20783718361085,
    lng: 7.025433562038313,
    parkName: "Street Workout park - Gronau",
    parkImage: "images/gronau.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park Gronau smješten je u Gronau, u sklopu Gronau gradskog parka. Park je dosta dobro postavljen, jedan od boljih parkova, posebice u usporedbi s hrvatskim. Dvije horizontalne ljestve (&#34Monkey bars&#34) te preko šest horizontalnih šipki različitih visina pružaju ogroman broj opcija za izvođenje zgibova po svačijem ukusu. Set od tri paralelne šipke za propadanja dobar su izbor jer pružaju dovoljno mjesta da više ljudi može istovremeno raditi. Od dodatnih stvari zanimljivo je izdvojiti švedske ljestve te set od tri niske horizontalne šipke koje mogu odlično poslužiti kod izvođenja različitih statičkih elemenata (handstand, human flag, front/back lever). Pozitivne stvari ovog parka su izoliranost od stambenih zgrada što omogućuje puštanje glasne muzike, dobar omjer push/pull sprava te djelomična mogućnost izvođenja freestyle pokreta jer podloga nije bas &#34friendly&#34. Mane ovog parka su nedostatak hlada tokom ljetnih mjeseci, nedostatak crpke za vodu, nedostatak ulične rasvjete što otežava trening po noći te neadekvatna podloga, pogotovo što se tiče freestyle pokreta. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Dvije horizontalne ljestve (&#34Monkey bars&#34) <br>Niz od preko šest šipki za zgibove različitih visina <br>Set od tri paralelne šipke za propadanja <br>Set od tri niske horizontalne šipke <br>Švedske ljestve <br>Bicikl",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/iYL738KW3wxk3TT58' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  university_of_twente: {
    lat: 52.24395309089928,
    lng: 6.852662603101373,
    parkName: "Street Workout park - University of Twente",
    parkImage: "images/twente.webp",
    border: "2px solid red",
    "margin-bottom": "20px",
    parkSubtitle: "StreetGainZ opis parka",
    parkBio:
      "Street Workout park University of Twente smješten je u sklopu fakulteta Twente, no dostupan je široj publici. Park je odlično postavljen i smatram ga jednim od najboljih parkova koje sam vidio, bilo to uživo ili preko interneta, a vidio sam ih dosta jer sam stalno u potrazi za novim parkovima kako bi proširili našu tražilicu. Park nudi preko šest horizontalnih šipki za zgibove različitih visina, gdje neke od njih čak imaju i na sebi dodatak karika što pruža izvođenje još jedne varijacije zgibova. Što se tiče šipki za propadanja u parku se mogu pronaći jedne samostalne i set od tri šipke što pruža dovoljno mjesta za veći broj ljudi. Ovaj park je također zanimljiv i po tome što osim glavnog sw dijela, ima jednu vrstu takozvanog &#34military course&#34 poligona gdje se mogu pronaći razne prepreke koji nisu od baš neke koristi za naš sport, ali vrlo zanimljivi dodatak. Od dodatnih stvari zanimljivo je izdvojiti i dve horizontalne ljestve (&#34Monkey bars&#34), švedske ljestve, tri niže horizontalne šipke, dve klupice za trbušnjake, spravu s konopcem i manju varijantu vatrogasnog stupa. Pozitivne stvari ovog parka su mogućnost dopune vode na obližnjoj crpki, prisutnost ulične rasvjete što olakšava trening po noći, dobar omjer push/pull sprava, mogućnost izvođenja freestyle pokreta, izoliranost od stambenih zgrada što omogućuje puštanje glasne muzike te vrlo zanimljiv detalj u obliku robotskog asistenta/trenera. Jedina mana ovog parka je što nema hlada tokom ljetnih mjeseci. <br><em>Napisao: Nikola Pustišek</em>",
    equipmentSubtitle: "Popis sprava u parku: ",
    parkEquipment:
      "Zakrivljene horizontalne ljestve (&#34Monkey bars&#34) s dodatkom karika <br>Dve klupice za trbušnjake <br>Sprava s konopom <br>Umjetna stijena s mrežom za penjanje <br>Set od šest šipki za zgibove različitih visina s dodatkom karika <br>Set od tri paralelne šipke za propadanja <br>Švedske ljestve <br>Vatrogasni stup <br>Set od tri niske horizontalne šipke <br>Set od dvije paralelne šipke za propadanja <br>Niska mreža za provlačenje",
    parkNavigation:
      "Klikni <a href='https://goo.gl/maps/84MtJks3ZMCFLT526' target=_blank>ovdje</a> i pogledaj slike parka!",
    parkRating:
      'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  },

  // botinec: {
  //   lat: 45.753185870657276,
  //   lng: 15.93132964551552,
  //   parkName: "Street Workout park - Botinec",
  //   parkImage: "images/botinec.webp",
  //   border: "2px solid red",
  //   "margin-bottom": "20px",
  //   parkSubtitle: "StreetGainZ opis parka",
  //   parkBio:
  //     "Street Workout park Botinec smješten je u Zagrebu, preciznije u kvartu Botinec. Park je dosta dobro postavljen. Što se tiče zgibova stvarno ima pregršt opcija za birati preko jednih horizontalnih ljestvi (&#34Monkey bars&#34), tri visoke šipke koje mogu poslužti i za freestyle pokrete i dvije malo niže koje su odlične za početnike gdje se mogu više fokusirati na negativni dio pokreta. Jedan set visokih i niskih paralelnih šipki za propadanja odlična su kombinacija jer dopuštaju izbor najbolje opcije po svačijem ukusu, jer često većini ljudi penjanje na visoke šipke zna predstavljati problem. Od dodatnih stvari zanimljivo je izdvojiti klupicu za trbušnjake, samostalne švedske ljestve te šipke za sklekove jer su korisne kod učenja raznih statičkih elemenata (handstand, dragon/human flag). Prednosti ovog parka su izoliranost od obližnjih stambenih građevina što je odlično za puštanje glasne muzike, mogućnost izvođenja freestyle pokreta, dobar omjer push/pull sprava te djelomičan hlad ovisno o periodu dana na prostoru parka. Mane ovog parka su nedostatak crpke za vodu te nedostatak ulične rasvjete što otežava trening po noći. <br><em>Napisao: Nikola Pustišek</em>",
  //   equipmentSubtitle: "Popis sprava u parku: ",
  //   parkEquipment:
  //     "Horizontalne ljestve (&#34Monkey bars&#34) <br>Visoke paralelne šipke za propadanja <br>Klupica za trbušnjake <br>Švedske ljestve <br>Set od tri visoke horizontalne šipke za zgibove različitih visina <br>Šipke za sklekove <br>Set od dvije šipke za zgibove različitih visina s dodatkom neutralnog hvata za zgibove između njih <br>Set paralelnih šipki za propadanja različitih visina",
  //   parkNavigation:
  //     "Klikni <a href='https://goo.gl/maps/LxpjXqupd84vCjNH8' target=_blank>ovdje</a> i pogledaj slike parka!",
  //   parkRating:
  //     'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  // },

  // betlehem: {
  //   lat: 45.75746713280989,
  //   lng: 15.9368661791493,
  //   parkName: "Street Workout park - Betlehem",
  //   parkImage: "images/betlehem.webp",
  //   border: "2px solid red",
  //   "margin-bottom": "20px",
  //   parkSubtitle: "StreetGainZ opis parka",
  //   parkBio:
  //     "Street Workout park Betlehem smješten je u Zagrebu, preciznije u kvartu Botinec u sklopu parka Betlehem. Park je jako loše postavljen. Što se tiče zgibova i određenih freestyle pokreta na izbor su samo dvije horizontalne šipke  različitih visina. Veliki minus ovog parka je nedostatak sprave za izvođenje propadanja ili sličnih push vježbi osim možda klupice koja može poslužiti za određene varijacije sklekova, ali nije to baš neko sretno rješenje. Od dodatnih stvari zanimljivo je izdvojiti samostalne švedske ljestve jer su korisne kod učenja raznih statičkih elemenata (handstand, human flag). Prednosti ovog parka su izoliranost od obližnjih stambenih građevina što je odlično za puštanje glasne muzike, mogućnost izvođenja freestyle pokreta i djelomičan hlad ovisno o periodu dana na prostoru parka. Mane ovog parka su nedostatak crpke za vodu, nedostatak ulične rasvjete što otežava trening po noći te ogromni nesrazmjer push/pull sprava. <br><em>Napisao: Nikola Pustišek</em>",
  //   equipmentSubtitle: "Popis sprava u parku: ",
  //   parkEquipment:
  //     "<br>Švedske ljestve <br>Set od dvije visoke horizontalne šipke za zgibove različitih visina <br>Bicikl <br>Poligon za djecu ",
  //   parkNavigation:
  //     "Klikni <a href='https://goo.gl/maps/cAwexCnfw2bX6YR96' target=_blank>ovdje</a> i pogledaj slike parka!",
  //   parkRating:
  //     'Ocjena: <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-regular fa-star"> </i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i>',
  // },
};

setTimeout(function () {
  Object.keys(parks).forEach((park) => {
    generatePark(parks[park]);
  });
}, 500);
