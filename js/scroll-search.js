$(document).ready(function() {
    $.ajaxSetup({
        cache: false
    });
    $('#search').keyup(function() {
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        var game_data = [{
            "name": "10 Yard Fight",
            "image": "nes/10yardfight.png",
            "url": "nes/38-10-yard-fight.html",
            "sys": "NES",
        }, {
            "name": "1080 Snowboarding",
            "image": "n64/1080.png",
            "url": "nes/n64/47-1080-snowboarding.html",
            "sys": "N64",
        }, {
            "name": "1942",
            "image": "nes/1942.png",
            "url": "nes/40-1942.html",
            "sys": "NES"
        }, {
            "name": "1943: The Battle of Midway",
            "image": "nes/1943.png",
            "url": "nes/41-1943-the-battle-of-midway.html",
            "sys": "NES"
        }, {
            "name": "3D Battles of World Runner",
            "image": "nes/3-D Battles of World Runner.png",
            "url": "nes/36-3d-battles-of-world-runner.html",
            "sys": "NES"
        }, {
            "name": "8 Eyes",
            "image": "nes/8eyes.png",
            "url": "nes/37-8-eyes.html",
            "sys": "NES"
        }, {
            "name": "Advance Wars",
            "image": "gba/advancewars.png",
            "url": "gba/86-advance-wars.html",
            "sys": "GBA"
        }, {
            "name": "Adventure Island",
            "image": "nes/adis.png",
            "url": "nes/42-adventure-island.html",
            "sys": "NES"
        }, {
            "name": "Adventure Island 2",
            "image": "nes/adis2.png",
            "url": "nes/43-adventure-island-2.html",
            "sys": "NES"
        }, {
            "name": "Adventure of Lolo",
            "image": "nes/Adventures of Lolo.png",
            "url": "nes/48-adventures-of-lolo.html",
            "sys": "NES"
        }, {
            "name": "Adventure of Lolo 2",
            "image": "nes/Adventures of Lolo 2.png",
            "url": "nes/49-adventures-of-lolo-2.html",
            "sys": "NES"
        }, {
            "name": "Adventure of Lolo 3",
            "image": "nes/Adventures of Lolo 3.png",
            "url": "nes/50-adventures-of-lolo-3.html",
            "sys": "NES"
        }, {
            "name": "AeroGauge",
            "image": "n64/opp.png",
            "url": "n64/33-aerogauge.html",
            "sys": "N64"
        }, {
            "name": "Aladdin",
            "image": "gen/Aladdin.png",
            "url": "genesis/108-aladdin.html",
            "sys": "SEGA"
        }, {
            "name": "Animal Crossing - Wild World",
            "image": "nds/acwwds.png",
            "url": "nes/137-animal-crossing-wild-world.html",
            "sys": "NDS"
        }, {
            "name": "Anticipation",
            "image": "nes/Anticipation.png",
            "url": "nes/44-anticipation.html",
            "sys": "NES"
        }, {
            "name": "Arch Rivals - A Basket Brawl!",
            "image": "nes/Arch Rivals - A Basket Brawl!.png",
            "url": "nes/45-arch-rivals-a-basket-brawl!-nes.html",
            "sys": "NES"
        }, {
            "name": "Archon",
            "image": "nes/Archon.png",
            "url": "nes/46-archon.html",
            "sys": "NES"
        }, {
            "name": "Banjo-Kazooie",
            "image": "n64/Banjo-Kazooie.png",
            "url": "n64/102-banjo-kazooie.html",
            "sys": "N64"
        }, {
            "name": "Blades of Steel",
            "image": "nes/bos.png",
            "url": "nes/1-blades-of-steel.html",
            "sys": "NES"
        }, {
            "name": "California Game",
            "image": "nes/california.png",
            "url": "nes/51-california-games.html",
            "sys": "NES"
        }, {
            "name": "Castle of Illusion Starring Mickey Mouse",
            "image": "gen/Castle of Illusion Starring Mickey Mouse.png",
            "url": "genesis/109-castle-of-illusion.html",
            "sys": "SEGA"
        }, {
            "name": "Castlevania",
            "image": "nes/casv.png",
            "url": "nes/4-castlevania.html",
            "sys": "NES"
        }, {
            "name": "Castlevania II - Simon's Quest",
            "image": "nes/castlevaniaII.png",
            "url": "nes/66-castlevania-2-simon-quest.html",
            "sys": "NES"
        }, {
            "name": "Castlevania III - Dracula's Curse",
            "image": "nes/castlevaniaIII.png",
            "url": "nes/67-castlevania-3-dracula-curse.html",
            "sys": "NES"
        }, {
            "name": "Castlevania - Aria of Sorrow",
            "image": "gba/castlevania-aofs.png",
            "url": "gba/87-castlevania-aria-of-sorrow.html",
            "sys": "GBA"
        }, {
            "name": "Castlevania - Bloodlines",
            "image": "gen/Castlevania - Bloodlines.png",
            "url": "genesis/110-castlevania-bloodlines.html",
            "sys": "SEGA"
        }, {
            "name": "Castlevania - Circle of the Moon",
            "image": "gba/castlevania-moon.png",
            "url": "gba/88-castlevania-circle-of-the-moon.html",
            "sys": "GBA"
        }, {
            "name": "Comix Zone",
            "image": "gen/Comix Zone.png",
            "url": "genesis/111-comix-zone.html",
            "sys": "SEGA"
        }, {
            "name": "Contra",
            "image": "nes/contra.png",
            "url": "nes/5-contra.html",
            "sys": "NES"
        }, {
            "name": "Contra - Hard Corps",
            "image": "gen/Contra - Hard Corps.png",
            "url": "genesis/112-contra-hard-corps.html",
            "sys": "SEGA"
        }, {
            "name": "Diddy Kong Racing",
            "image": "n64/diddy kong racing.png",
            "url": "n64/103-diddy-kong-racing.html",
            "sys": "N64"
        }, {
            "name": "Doom 64",
            "image": "n64/doom64.png",
            "url": "n64/32-doom-64.html",
            "sys": "N64"
        }, {
            "name": "Donkey Kong",
            "image": "nes/donkeykong.png",
            "url": "nes/52-donkey-kong.html",
            "sys": "NES"
        }, {
            "name": "Donkey Kong Country",
            "image": "snes/dkc.png",
            "url": "snes/10-donkey-kong-country.html",
            "sys": "SNES"
        }, {
            "name": "Donkey Kong Country 2: Diddys Kong Quest",
            "image": "snes/dkc2.png",
            "url": "snes/11-donkey-kong-country-2.html",
            "sys": "SNES"
        }, {
            "name": "Donkey Kong Country 3: Dixie Kongs Double Trouble!",
            "image": "snes/dkc3.png",
            "url": "snes/12-donkey-kong-country-3.html",
            "sys": "SNES"
        }, {
            "name": "Duke Nukem 64",
            "image": "n64/Duke Nukem 64.png",
            "url": "n64/104-duke-nukem-64.html",
            "sys": "N64"
        }, {
            "name": "Earthbound",
            "image": "snes/eb.png",
            "url": "snes/20-earthbound.html",
            "sys": "SNES"
        }, {
            "name": "Ecco the Dolphin",
            "image": "gen/ecco.png",
            "url": "genesis/113-ecco-the-dolphin.html",
            "sys": "SEGA"
        }, {
            "name": "Excitebike 64",
            "image": "n64/Excitebike 64.png",
            "url": "n64/105-excitebike-64.html",
            "sys": "N64"
        }, {
            "name": "F-Zero",
            "image": "snes/f0.png",
            "url": "snes/13-f-zero.html",
            "sys": "SNES"
        }, {
            "name": "F-Zero X",
            "image": "n64/f0X.png",
            "url": "n64/100-f-zero-x.html",
            "sys": "N64"
        }, {
            "name": "Fatal Fury",
            "image": "gen/Fatal Fury.png",
            "url": "genesis/114-fatal-fury.html",
            "sys": "SEGA"
        }, {
            "name": "FIFA International Soccer",
            "image": "snes/fifa.png",
            "url": "snes/14-fifa-international-soccer.html",
            "sys": "SNES"
        }, {
            "name": "Final Fantasy Tactics Advance",
            "image": "gba/finalfantasytactics.png",
            "url": "gba/89-final-fantasy-tactics-advance.html",
            "sys": "GBA"
        }, {
            "name": "Final Fantasy VI Advance",
            "image": "gba/finalfantasy4advance.png",
            "url": "gba/90-final-fantasy-vi-advance.html",
            "sys": "GBA"
        }, {
            "name": "Fire Emblem",
            "image": "gba/fireemblem.png",
            "url": "gba/91-fire-emblem.html",
            "sys": "GBA"
        }, {
            "name": "Fire Emblem - The Sacred Stones",
            "image": "gba/fireemblem2.png",
            "url": "gba/92-fire-emblem-the-sacred-stones.html",
            "sys": "GBA"
        }, {
            "name": "Ghosts'n Goblins",
            "image": "nes/ghostsngoblins.png",
            "url": "nes/53-ghosts-n-goblins.html",
            "sys": "NES"
        }, {
            "name": "GoldenEye 007",
            "image": "n64/007 - GoldenEye.png",
            "url": "n64/101-goldeneye-007.html",
            "sys": "N64"
        }, {
            "name": "Golden Sun",
            "image": "gba/goldensun.png",
            "url": "gba/93-golden-sun.html",
            "sys": "GBA"
        }, {
            "name": "Gradius",
            "image": "nes/gradius.png",
            "url": "nes/54-gradius.html",
            "sys": "NES"
        }, {
            "name": "Gunstar Heroes",
            "image": "gen/Gunstar Heroes.png",
            "url": "genesis/115-gunstar-heroes.html",
            "sys": "SEGA"
        }, {
            "name": "Ice Hockey",
            "image": "nes/icehockey.png",
            "url": "nes/34-ice-hockey.html",
            "sys": "NES"
        }, {
            "name": "Ice Hockey: Blue Ice Edition by pshel",
            "image": "nes/ice-hockey - -blue-ice-edition.png",
            "url": "nes/35-ice-hockey-blue-ice-edition-hack.html",
            "sys": "NES"
        }, {
            "name": "Jackal",
            "image": "nes/jackal.png",
            "url": "nes/55-jackal.html",
            "sys": "NES"
        }, {
            "name": "Kirbys Adventure",
            "image": "nes/kirby.png",
            "url": "nes/6-kirbys-adventure.html",
            "sys": "NES"
        }, {
            "name": "Kirby and The Amazing Mirror",
            "image": "gba/kirby-mirror.png",
            "url": "gba/94-kirby-and-the-amazing-mirror.html",
            "sys": "GBA"
        }, {
            "name": "Kirbys Dream Course",
            "image": "nes/kirby.png",
            "url": "snes/133-kirbys-dream-course.html",
            "sys": "SNES"
        }, {
            "name": "Kirbys Mass Attack",
            "image": "nds/kirbyma.png",
            "url": "nes/139-kirby-mass-attack.html",
            "sys": "NDS"
        }, {
            "name": "Kirby Super Star",
            "image": "nes/kirby.png",
            "url": "nes/132-kirby-super-star.html",
            "sys": "SNES"
        }, {
            "name": "Kung Fu",
            "image": "nes/kungfu.png",
            "url": "nes/56-kung-fu.html",
            "sys": "NES"
        }, {
            "name": "Life Force",
            "image": "nes/lifeforce.png",
            "url": "nes/57-life-force.html",
            "sys": "NES"
        }, {
            "name": "Lode Runner",
            "image": "nes/loderunner.png",
            "url": "nes/58-lode-runner.html",
            "sys": "NES"
        }, {
            "name": "Madden NFL 94",
            "image": "gen/nfl94.png",
            "url": "genesis/120-madden-nfl-94.html",
            "sys": "SEGA"
        }, {
            "name": "Maniac Mansion",
            "image": "nes/manicmansion.png",
            "url": "nes/59-maniac-mansion.html",
            "sys": "NES"
        }, {
            "name": "Mario And Luigi Superstar Saga",
            "image": "gba/marioandluigi-superstarsaga.png",
            "url": "gba/95-mario-and-luigi-superstar-saga.html",
            "sys": "GBA"
        }, {
            "name": "Mario Golf - Advance Tour",
            "image": "gba/mario-golf.png",
            "url": "gba/96-mario-golf-advance-tour.html",
            "sys": "GBA"
        }, {
            "name": "Mario Kart 64",
            "image": "n64/mk64.png",
            "url": "n64/31-mario-kart-64.html",
            "sys": "N64"
        }, {
            "name": "Mario Kart DS",
            "image": "nds/mkds.png",
            "url": "nds/138-mario-kart-ds.html",
            "sys": "NDS"
        }, {
            "name": "Mario Tennis",
            "image": "n64/mt.png",
            "url": "n64/30-mario-tennis.html",
            "sys": "N64"
        }, {
            "name": "Mega Man",
            "image": "nes/megaman.png",
            "url": "nes/60-mega-man.html",
            "sys": "NES"
        }, {
            "name": "Mega Man 2",
            "image": "nes/megaman2.png",
            "url": "nes/61-mega-man-2.html",
            "sys": "NES"
        }, {
            "name": "Mega Man 3",
            "image": "nes/megaman3.png",
            "url": "nes/62-mega-man-3.html",
            "sys": "NES"
        }, {
            "name": "Mega Man 4",
            "image": "nes/megaman4.png",
            "url": "nes/63-mega-man-4.html",
            "sys": "NES"
        }, {
            "name": "Mega Man 5",
            "image": "nes/megaman5.png",
            "url": "nes/64-mega-man-5.html",
            "sys": "NES"
        }, {
            "name": "Mega Man 6",
            "image": "nes/megaman6.png",
            "url": "nes/65-mega-man-6.html",
            "sys": "NES"
        }, {
            "name": "Metal Gear",
            "image": "nes/metalgear.png",
            "url": "nes/99-metal-gear.html",
            "sys": "NES"
        }, {
            "name": "Mike Tyson's Punch-Out!!",
            "image": "nes/mt-po.png",
            "url": "nes/26-mike-tysons-punch-out!!.html",
            "sys": "NES"
        }, {
            "name": "Metroid Fusion",
            "image": "gba/metroidfusion.png",
            "url": "gba/97-metroid-fusion.html",
            "sys": "GBA"
        }, {
            "name": "Metroid Zero Mission",
            "image": "gba/metroidzero.png",
            "url": "gba/98-metroid-zero-mission.html",
            "sys": "GBA"
        }, {
            "name": "Michael Jackson Moonwalker",
            "image": "gen/mjmoonwalk.png",
            "url": "genesis/116-michael-jackson-moonwalker.html",
            "sys": "SEGA"
        }, {
            "name": "Mortal Kombat II",
            "image": "gen/mk2.png",
            "url": "genesis/117-mortal-kombat-2.html",
            "sys": "SEGA"
        }, {
            "name": "Mortal Kombat II Unlimited by Smoke",
            "image": "gen/mk2u.png",
            "url": "genesis/118-mortal-kombat-2-unlimited.html",
            "sys": "SEGA"
        }, {
            "name": "Mortal Kombat 4",
            "image": "n64/mk4.png",
            "url": "n64/142-mortal-kombat-4.html",
            "sys": "N64"
        }, {
            "name": "NBA Jam - Tournament Edition",
            "image": "gen/nbajamte.png",
            "url": "genesis/119-nba-jam-tournament-edition.html",
            "sys": "SEGA"
        }, {
            "name": "NBA Jam - Tournament Edition",
            "image": "snes/nbajamte.png",
            "url": "snes/15-nba-jam-tournament-edition.html",
            "sys": "SNES"
        }, {
            "name": "NHL 94",
            "image": "gen/nhl94.png",
            "url": "genesis/121-nhl-94.html",
            "sys": "SEGA"
        }, {
            "name": "NHL 94",
            "image": "snes/nhl94.png",
            "url": "snes/21-nhl-94.html",
            "sys": "SNES"
        }, {
            "name": "NHL Hockey",
            "image": "gen/NHL Hockey.png",
            "url": "genesis/122-nhl-hockey.html",
            "sys": "SEGA"
        }, {
            "name": "NHLPA Hockey 93",
            "image": "gen/nhlpa93.png",
            "url": "genesis/123-nhlpa-hockey-93.html",
            "sys": "SEGA"
        }, {
            "name": "New Super Mario Bros",
            "image": "nds/nsmb.png",
            "url": "nds/144-new-super-mario-bros.html",
            "sys": "NDS"
        }, {
            "name": "Pokemon Diamond Version",
            "image": "nds/pokedia.png",
            "url": "nds/146-pokemon-diamond.html",
            "sys": "NDS"
        }, {
            "name": "Pokemon Emerald",
            "image": "gba/pokemon-emerald.png",
            "url": "gba/70-pokemon-emerald.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Fire Red",
            "image": "gba/pokemon-firered.png",
            "url": "gba/71-pokemon-fire-red.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Glazed by Lucbui",
            "image": "gba/pokemon-glazed.png",
            "url": "gba/69-pokemon-glazed-hack.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Leaf Green",
            "image": "gba/pokemon-leafgreen.png",
            "url": "gba/72-pokemon-leaf-green.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Light Platinum by Wesley FG",
            "image": "gba/pokemon-light-platinum.png",
            "url": "gba/73-pokemon-light-platinum-hack.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Liquid Crystal by Linkandzelda",
            "image": "gba/pokemon-liquid-crystal.png",
            "url": "gba/74-pokemon-liquid-crystal-hack.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Platinum Version",
            "image": "nds/pokeplat.png",
            "url": "nds/145-pokemon-platinum.html",
            "sys": "NDS"
        }, {
            "name": "Pokemon Ruby",
            "image": "gba/pokemon-ruby.png",
            "url": "gba/75-pokemon-ruby.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon Sapphire",
            "image": "gba/pokemon-sapphire.png",
            "url": "gba/76-pokemon-sapphire.html",
            "sys": "GBA"
        }, {
            "name": "Pokemon X & Y by jovefreak1993",
            "image": "gba/pokemon-x-y.png",
            "url": "gba/77-pokemon-x-&-y.html",
            "sys": "GBA"
        }, {
            "name": "Rayman 2: The Great Escape",
            "image": "n64/ray2.png",
            "url": "n64/143-rayman-2-the-great-escape.html",
            "sys": "N64"
        }, {
            "name": "Samurai Shodown",
            "image": "gen/Samurai Shodown.png",
            "url": "genesis/124-samurai-shodown.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic & Knuckles",
            "image": "gen/sonick.png",
            "url": "genesis/129-sonic-&-knuckles.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic Advance",
            "image": "gba/sonic-advance.png",
            "url": "gba/78-sonic-advance.html",
            "sys": "GBA"
        }, {
            "name": "Sonic Advance 2",
            "image": "gba/sonic-advance-2.png",
            "url": "gba/79-sonic-advance-2.html",
            "sys": "GBA"
        }, {
            "name": "Sonic Advance 3",
            "image": "gba/sonic-advance-3.png",
            "url": "gba/80-sonic-advance-3.html",
            "sys": "GBA"
        }, {
            "name": "Sonic Legacy by Gamma V",
            "image": "gen/soniclegacy.png",
            "url": "genesis/141-sonic-legacy.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic Megamix Hack by Stealth",
            "image": "gen/megamixhack.png",
            "url": "genesis/128-sonic-the-hedgehog-mega-mix.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic the Hedgehog",
            "image": "gen/sonic.png",
            "url": "genesis/125-sonic-the-hedgehog.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic the Hedgehog 2",
            "image": "gen/sonic2.png",
            "url": "genesis/126-sonic-the-hedgehog-2.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic the Hedgehog 3",
            "image": "gen/sonic3.png",
            "url": "genesis/127-sonic-the-hedgehog-3.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic the Hedgehog 3 & Knuckles",
            "image": "gen/sonic3k.png",
            "url": "genesis/130-sonic-the-hedgehog-3-&-knuckles.html",
            "sys": "SEGA"
        }, {
            "name": "Sonic the Hedgehog - Classic Heroes by ColinC10",
            "image": "gen/classicheroes.png",
            "url": "genesis/140-sonic-the-hedgehog-classic-heroes.html",
            "sys": "SEGA"
        }, {
            "name": "Street Fighter 2: Turbo",
            "image": "snes/sf2t.png",
            "url": "snes/19-street-fighter-2-turbo.html",
            "sys": "SNES"
        }, {
            "name": "Streets of Rage 2",
            "image": "gen/Streets of Rage 2.png",
            "url": "genesis/131-street-of-rage-2.html",
            "sys": "SEGA"
        }, {
            "name": "Super Bomberman",
            "image": "snes/sbomb.png",
            "url": "snes/18-super-bomberman.html",
            "sys": "SNES"
        }, {
            "name": "Super Mario 64",
            "image": "n64/sm64.png",
            "url": "n64/28-super-mario-64.html",
            "sys": "N64"
        }, {
            "name": "Super Mario 64 DS",
            "image": "nds/sm64ds.png",
            "url": "nds/136-super-mario-64-ds.html",
            "sys": "NDS"
        }, {
            "name": "Super Mario Advance",
            "image": "gba/mario-advance.png",
            "url": "gba/68-super-mario-advance.html",
            "sys": "GBA"
        }, {
            "name": "Super Mario Advance 4 - Super Mario Bros 3",
            "image": "gba/mario-advance-4.png",
            "url": "gba/81-super-mario-advance-4.html",
            "sys": "GBA"
        }, {
            "name": "Super Mario All-Stars",
            "image": "snes/smas.png",
            "url": "snes/22-super-mario-all-stars.html",
            "sys": "SNES"
        }, {
            "name": "Super Mario Bros",
            "image": "nes/smb.jpg",
            "url": "nes/2-super-mario-bros.html",
            "sys": "NES"
        }, {
            "name": "Super Mario Bros 2",
            "image": "nes/smb2.png",
            "url": "nes/25-super-mario-bros-2.html",
            "sys": "NES"
        }, {
            "name": "Super Mario Bros 3mix by Southbird",
            "image": "nes/smb3mix.png",
            "url": "nes/24-super-mario-bros-3mix-hack.html",
            "sys": "NES"
        }, {
            "name": "Super Mario Bros 3",
            "image": "nes/smb3.png",
            "url": "nes/3-super-mario-bros-3.html",
            "sys": "NES"
        }, {
            "name": "Super Mario Kart",
            "image": "snes/smk.png",
            "url": "snes/9-super-mario-kart.html",
            "sys": "SNES"
        }, {
            "name": "Super Mario Ultimate by Silas",
            "image": "nes/smu.png",
            "url": "nes/27-super-mario-ultimate-hack.html",
            "sys": "NES"
        }, {
            "name": "Super Mario World",
            "image": "snes/smw.png",
            "url": "snes/8-super-mario-world.html",
            "sys": "SNES"
        }, {
            "name": "Super Mario World - Super Mario Advance 2",
            "image": "gba/mario-advance-2.png",
            "url": "gba/82-super-mario-advance-2.html",
            "sys": "GBA"
        }, {
            "name": "Super Smash Bros",
            "image": "n64/sb64.png",
            "url": "n64/29-super-smash-bros.html",
            "sys": "N64"
        }, {
            "name": "Super Spongebob Kart by Kampy",
            "image": "snes/ssbk.png",
            "url": "snes/23-super-spongebob-kart-hack.html",
            "sys": "SNES"
        }, {
            "name": "Teenage Mutant Ninja Turtles IV - Turtles in Time",
            "image": "snes/tetris2.png",
            "url": "snes/134-tmnt-4-turtles-in-time.html",
            "sys": "SNES"
        },{
            "name": "Tetris 2",
            "image": "snes/tetris2.png",
            "url": "snes/16-tetris-2.html",
            "sys": "SNES"
        }, {
            "name": "Tetris Attack",
            "image": "snes/tetrisat.png",
            "url": "snes/17-tetris-attack.html",
            "sys": "SNES"
        }, {
            "name": "The Legend of Zelda",
            "image": "nes/zelda.jpg",
            "url": "nes/7-the-legend-of-zelda.html",
            "sys": "NES"
        }, {
            "name": "The Legend of Zelda - A Link To The Past",
            "image": "gba/zelda4swords.png",
            "url": "gba/83-a-link-to-the-past-&-4-swords.html",
            "sys": "GBA"
        }, {
            "name": "The Legend of Zelda - The Minish Cap",
            "image": "gba/zelda-minish-cap.png",
            "url": "gba/84-the-minish-cap.html",
            "sys": "GBA"
        }, {
            "name": "Wave Race 64",
            "image": "n64/Wave Race 64.png",
            "url": "n64/106-wave-race-64.html",
            "sys": "N64"
        }, {
            "name": "Yoshis Island - Super Mario Advance 3",
            "image": "gba/mario-advance-3.png",
            "url": "gba/85-super-mario-advance-3.html",
            "sys": "GBA"
        }, {
            "name": "Yoshis Story",
            "image": "n64/Yoshis-Story.png",
            "url": "n64/107-yoshis-story.html",
            "sys": "N64"
        }];
        $.each(game_data, function(key, value) {
            if (value.name.search(expression) != -1) {
                $('#result').append('<li><a href="https://emugalaxy.dev/s/' + value.url + '" class="list-group-item"><img src="https://cdn.jsdelivr.net/gh/emugalaxy-storage1/emugalaxy-storage1.github.io/thumbs/'+ value.image +'" data-loaded="true" style="width:40%;"><div class="list-group-text"> ' + value.name + '</div><span class="emu-sys">' + value.sys + '</span></a></li>');
            }
        });
    });

    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
    });
});

//{
//    "name": "",
//    "image": "",
//    "url": "",
//    "sys": ""
//},