const countEl = document.getElementById('count');

var incoming = parent.counter;

displayVisitCount();

function displayVisitCount() {
	fetch('https://api.countapi.xyz/update/' + incoming + '/emugalaxy/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
};

//Random Games Code
// List of Games
var liList = [
    '<a href="https://emugalaxy.dev/nes/36-3d-battles-of-world-runner.html" class="box"><img alt="3dbwr" src="https://emugalaxy-storage1.github.io/thumbs/nes/3-D Battles of World Runner.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="3d-display">0</span><span> Plays</span></div><span class="box-title">3D Battles of World Runner</span></a>',
	'<a href="https://emugalaxy.dev/nes/37-8-eyes.html" class="box"><img alt="8eyes" src="https://emugalaxy-storage1.github.io/thumbs/nes/8eyes.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="8eyes-display">0</span><span> Plays</span></div><span class="box-title">8 Eyes</span></a>',
	'<a href="https://emugalaxy.dev/nes/38-10-yard-fight.html" class="box"><img alt="10yf" src="https://emugalaxy-storage1.github.io/thumbs/nes/10yardfight.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="10yf-display">0</span><span> Plays</span></div><span class="box-title">10 Yard Fight</span></a>',
	'<a href="https://emugalaxy.dev/nes/39-720.html" class="box"><img alt="720" src="https://emugalaxy-storage1.github.io/thumbs/nes/720.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="720nes-display">0</span><span> Plays</span></div><span class="box-title">720</span></a>',
	'<a href="https://emugalaxy.dev/nes/40-1942.html" class="box"><img alt="1942" src="https://emugalaxy-storage1.github.io/thumbs/nes/1942.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="1942nes-display">0</span><span> Plays</span></div><span class="box-title">1942</span></a>',
	'<a href="https://emugalaxy.dev/nes/41-1943-the-battle-of-midway.html" class="box"><img alt="1943" src="https://emugalaxy-storage1.github.io/thumbs/nes/1943.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="1943nes-display">0</span><span> Plays</span></div><span class="box-title">1943: The Battle of Midway</span></a>',
	'<a href="https://emugalaxy.dev/nes/42-adventure-island.html" class="box"><img alt="adis" src="https://emugalaxy-storage1.github.io/thumbs/nes/adis.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="adisnes-display">0</span><span> Plays</span></div><span class="box-title">Adventure Island</span></a>',
	'<a href="https://emugalaxy.dev/nes/43-adventure-island-2.html" class="box"><img alt="adis2" src="https://emugalaxy-storage1.github.io/thumbs/nes/adis2.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="adis2nes-display">0</span><span> Plays</span></div><span class="box-title">Adventure Island 2</span></a>',
	'<a href="https://emugalaxy.dev/nes/48-adventures-of-lolo.html" class="box"><img alt="lolo" src="https://emugalaxy-storage1.github.io/thumbs/nes/Adventures of Lolo.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="lolones-display">0</span><span> Plays</span></div><span class="box-title">Adventure of Lolo</span></a>',
	'<a href="https://emugalaxy.dev/nes/49-adventures-of-lolo-2.html" class="box"><img alt="lolo2" src="https://emugalaxy-storage1.github.io/thumbs/nes/Adventures of Lolo 2.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="lolo2nes-display">0</span><span> Plays</span></div><span class="box-title">Adventure of Lolo 2</span></a>',
	'<a href="https://emugalaxy.dev/nes/50-adventures-of-lolo-3.html" class="box"><img alt="lolo3" src="https://emugalaxy-storage1.github.io/thumbs/nes/Adventures of Lolo 3.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="lolo3nes-display">0</span><span> Plays</span></div><span class="box-title">Adventure of Lolo 3</span></a>',
	'<a href="https://emugalaxy.dev/nes/44-anticipation.html" class="box"><img alt="ant" src="https://emugalaxy-storage1.github.io/thumbs/nes/Anticipation.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="antnes-display">0</span><span> Plays</span></div><span class="box-title">Anticipation</span></a>',
	'<a href="https://emugalaxy.dev/nes/45-arch-rivals-a-basket-brawl!-nes.html" class="box"><img alt="arbb" src="https://emugalaxy-storage1.github.io/thumbs/nes/Arch Rivals - A Basket Brawl!.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="arbbnes-display">0</span><span> Plays</span></div><span class="box-title">Arch Rivals - A Basket Brawl!</span></a>',
	'<a href="https://emugalaxy.dev/nes/46-archon.html" class="box"><img alt="archon" src="https://emugalaxy-storage1.github.io/thumbs/nes/Archon.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="archonnes-display">0</span><span> Plays</span></div><span class="box-title">Archon</span></a>',
	'<a href="https://emugalaxy.dev/nes/1-blades-of-steel.html" class="box"><img alt="bos" src="https://emugalaxy-storage1.github.io/thumbs/nes/bos.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="bs-display">0</span><span> Plays</span></div><span class="box-title">Blade of Steel</span></a>',
	'<a href="https://emugalaxy.dev/nes/51-california-games.html" class="box"><img alt="casv" src="https://emugalaxy-storage1.github.io/thumbs/nes/california.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="calignes-display">0</span><span> Plays</span></div><span class="box-title">California Games</span></a>',
	'<a href="https://emugalaxy.dev/nes/4-castlevania.html" class="box"><img alt="casv" src="https://emugalaxy-storage1.github.io/thumbs/nes/casv.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="casv-display">0</span><span> Plays</span></div><span class="box-title">Castlevania</span></a>',
	'<a href="https://emugalaxy.dev/nes/66-castlevania-2-simon-quest.html" class="box"><img alt="casv2" src="https://emugalaxy-storage1.github.io/thumbs/nes/castlevaniaII.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="casv2-display">0</span><span> Plays</span></div><span class="box-title">Castlevania II - Simons Quest</span></a>',
	'<a href="https://emugalaxy.dev/nes/67-castlevania-3-dracula-curse.html" class="box"><img alt="casv" src="https://emugalaxy-storage1.github.io/thumbs/nes/castlevaniaIII.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="casv3-display">0</span><span> Plays</span></div><span class="box-title">Castlevania III - Draculas Curse</span></a>',
	'<a href="https://emugalaxy.dev/nes/5-contra.html" class="box"><img alt="contra" src="https://emugalaxy-storage1.github.io/thumbs/nes/contra.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="contra-display">0</span><span> Plays</span></div><span class="box-title">Contra</span></a>',
	'<a href="https://emugalaxy.dev/nes/52-donkey-kong.html" class="box"><img alt="dk" src="https://emugalaxy-storage1.github.io/thumbs/nes/donkeykong.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="dknes-display">0</span><span> Plays</span></div><span class="box-title">Donkey Kong</span></a>',
	'<a href="https://emugalaxy.dev/nes/53-ghosts-n-goblins.html" class="box"><img alt="ghostgnes" src="https://emugalaxy-storage1.github.io/thumbs/nes/ghostsngoblins.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="ghostgnes-display">0</span><span> Plays</span></div><span class="box-title">Ghosts n Goblins</span></a>',
	'<a href="https://emugalaxy.dev/nes/54-gradius.html" class="box"><img alt="gradius" src="https://emugalaxy-storage1.github.io/thumbs/nes/gradius.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="gradius-display">0</span><span> Plays</span></div><span class="box-title">Gradius</span></a>',
	'<a href="https://emugalaxy.dev/nes/34-ice-hockey.html" class="box"><img alt="ih" src="https://emugalaxy-storage1.github.io/thumbs/nes/icehockey.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="iceh-display">0</span><span> Plays</span></div><span class="box-title">Ice Hockey</span></a>',
	'<a href="https://emugalaxy.dev/nes/35-ice-hockey-blue-ice-edition-hack.html" class="box"><img alt="ihbie" src="https://emugalaxy-storage1.github.io/thumbs/nes/ice-hockey - -blue-ice-edition.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="ihbie-display">0</span><span> Plays</span></div><span class="box-title">Ice Hockey: Blue Ice Edition by pshel</span></a>',
	'<a href="https://emugalaxy.dev/nes/55-jackal.html" class="box"><img alt="jackal" src="https://emugalaxy-storage1.github.io/thumbs/nes/jackal.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="jackal-display">0</span><span> Plays</span></div><span class="box-title">Jackal</span></a>',
	'<a href="https://emugalaxy.dev/nes/6-kirbys-adventure.html" class="box"><img alt="kirby" src="https://emugalaxy-storage1.github.io/thumbs/nes/kirby.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="kirby-display">0</span><span> Plays</span></div><span class="box-title">Kirbys Adventure</span></a>',
	'<a href="https://emugalaxy.dev/nes/56-kung-fu.html" class="box"><img alt="kungfu" src="https://emugalaxy-storage1.github.io/thumbs/nes/kungfu.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="kungfunes-display">0</span><span> Plays</span></div><span class="box-title">Kung Fu</span></a>',
	'<a href="https://emugalaxy.dev/nes/57-life-force.html" class="box"><img alt="kungfu" src="https://emugalaxy-storage1.github.io/thumbs/nes/lifeforce.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="lifeforce-display">0</span><span> Plays</span></div><span class="box-title">Life Force</span></a>',
	'<a href="https://emugalaxy.dev/nes/58-lode-runner.html" class="box"><img alt="kungfu" src="https://emugalaxy-storage1.github.io/thumbs/nes/loderunner.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="lode-runnernes-display">0</span><span> Plays</span></div><span class="box-title">Lode Runner</span></a>',
	'<a href="https://emugalaxy.dev/nes/59-maniac-mansion.html" class="box"><img alt="kungfu" src="https://emugalaxy-storage1.github.io/thumbs/nes/manicmansion.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="maniacmansionnes-display">0</span><span> Plays</span></div><span class="box-title">Maniac Mansion</span></a>',
	'<a href="https://emugalaxy.dev/nes/60-mega-man.html" class="box"><img alt="megaman" src="https://emugalaxy-storage1.github.io/thumbs/nes/megaman.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="megaman-display">0</span><span> Plays</span></div><span class="box-title">Mega Man</span></a>',
	'<a href="https://emugalaxy.dev/nes/61-mega-man-2.html" class="box"><img alt="megaman2" src="https://emugalaxy-storage1.github.io/thumbs/nes/megaman2.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="megaman2-display">0</span><span> Plays</span></div><span class="box-title">Mega Man 2</span></a>',
	'<a href="https://emugalaxy.dev/nes/62-mega-man-3.html" class="box"><img alt="megaman3" src="https://emugalaxy-storage1.github.io/thumbs/nes/megaman3.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="megaman3-display">0</span><span> Plays</span></div><span class="box-title">Mega Man 3</span></a>',
	'<a href="https://emugalaxy.dev/nes/63-mega-man-4.html" class="box"><img alt="megaman4" src="https://emugalaxy-storage1.github.io/thumbs/nes/megaman4.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="megaman4-display">0</span><span> Plays</span></div><span class="box-title">Mega Man 4</span></a>',
	'<a href="https://emugalaxy.dev/nes/64-mega-man-5.html" class="box"><img alt="megaman5" src="https://emugalaxy-storage1.github.io/thumbs/nes/megaman5.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="megaman5-display">0</span><span> Plays</span></div><span class="box-title">Mega Man 5</span></a>',
	'<a href="https://emugalaxy.dev/nes/65-mega-man-6.html" class="box"><img alt="megaman6" src="https://emugalaxy-storage1.github.io/thumbs/nes/megaman6.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="megaman6-display">0</span><span> Plays</span></div><span class="box-title">Mega Man 6</span></a>',
	'<a href="https://emugalaxy.dev/nes/99-metal-gear.html" class="box"><img alt="megaman6" src="https://emugalaxy-storage1.github.io/thumbs/nes/metalgear.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="metalgear-display">0</span><span> Plays</span></div><span class="box-title">Metal Gear</span></a>',
	'<a href="https://emugalaxy.dev/nes/26-mike-tysons-punch-out!!.html" class="box"><img alt="punchout" src="https://emugalaxy-storage1.github.io/thumbs/nes/mt-po.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="mtpo-display">0</span><span> Plays</span></div><span class="box-title">Mike Tysons Punch-Out!!</span></a>',
	'<a href="https://emugalaxy.dev/nes/2-super-mario-bros.html" class="box"><img alt="smb" src="https://emugalaxy-storage1.github.io/thumbs/nes/smb.jpg" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="smb-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Bros</span></a>',
	'<a href="https://emugalaxy.dev/nes/25-super-mario-bros-2.html" class="box"><img alt="smb2" src="https://emugalaxy-storage1.github.io/thumbs/nes/smb2.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="smb2-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Bros 2</span></a>',
	'<a href="https://emugalaxy.dev/nes/24-super-mario-bros-3mix-hack.html" class="box"><img alt="smb3mix" src="https://emugalaxy-storage1.github.io/thumbs/nes/smb3mix.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="smb3mix-display">0</span><span> Plays</span></div><span class="box-title">Super Mario 3mix by Southbird</span></a>',
	'<a href="https://emugalaxy.dev/nes/3-super-mario-bros-3.html" class="box"><img alt="smb3" src="https://emugalaxy-storage1.github.io/thumbs/nes/smb3.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="smb3-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Bros 3</span></a>',
	'<a href="https://emugalaxy.dev/nes/27-super-mario-ultimate-hack.html" class="box"><img alt="smu" src="https://emugalaxy-storage1.github.io/thumbs/nes/smu.png" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="smu-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Ultimate by Silas</span></a>',
	'<a href="https://emugalaxy.dev/nes/7-the-legend-of-zelda.html" class="box"><img alt="zelda" src="https://emugalaxy-storage1.github.io/thumbs/nes/zelda.jpg" data-loaded="true"><div class="badge">NES</div><div class="plays-span"><span id="zeldanes-display">0</span><span> Plays</span></div><span class="box-title">The Legend of Zelda</span></a>',
	'<a href="https://emugalaxy.dev/n64/101-goldeneye-007.html" class="box"><img alt="007" src="https://emugalaxy-storage1.github.io/thumbs/n64/007 - GoldenEye.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="ge007-display">0</span><span> Plays</span></div><span class="box-title">GoldenEye 007</span></a>',
	'<a href="https://emugalaxy.dev/n64/47-1080-snowboarding.html" class="box"><img alt="1080" src="https://emugalaxy-storage1.github.io/thumbs/n64/1080.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="1080sb-display">0</span><span> Plays</span></div><span class="box-title">1080 Snowboarding</span></a>',
	'<a href="https://emugalaxy.dev/n64/33-aerogauge.html" class="box"><img alt="aerogauge" src="https://emugalaxy-storage1.github.io/thumbs/n64/opp.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="ag64-display">0</span><span> Plays</span></div><span class="box-title">AeroGauge</span></a>',
	'<a href="https://emugalaxy.dev/n64/102-banjo-kazooie.html" class="box"><img alt="banjo" src="https://emugalaxy-storage1.github.io/thumbs/n64/Banjo-Kazooie.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="banjo-display">0</span><span> Plays</span></div><span class="box-title">Banjo-Kazooie</span></a>',
	'<a href="https://emugalaxy.dev/n64/103-diddy-kong-racing.html" class="box"><img alt="diddy" src="https://emugalaxy-storage1.github.io/thumbs/n64/diddy kong racing.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="diddy-display">0</span><span> Plays</span></div><span class="box-title">Diddy Kong Racing</span></a>',
	'<a href="https://emugalaxy.dev/n64/32-doom-64.html" class="box"><img alt="doom64" src="https://emugalaxy-storage1.github.io/thumbs/n64/doom64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="doom64-display">0</span><span> Plays</span></div><span class="box-title">Doom 64</span></a>',
	'<a href="https://emugalaxy.dev/n64/104-duke-nukem-64.html" class="box"><img alt="duke64" src="https://emugalaxy-storage1.github.io/thumbs/n64/Duke Nukem 64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="duke64-display">0</span><span> Plays</span></div><span class="box-title">Duke Nukem 64</span></a>',
	'<a href="https://emugalaxy.dev/n64/105-excitebike-64.html" class="box"><img alt="excite64" src="https://emugalaxy-storage1.github.io/thumbs/n64/Excitebike 64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="excite64-display">0</span><span> Plays</span></div><span class="box-title">Excitebike 64</span></a>',
	'<a href="https://emugalaxy.dev/n64/100-f-zero-x.html" class="box"><img alt="f-zeroX" src="https://emugalaxy-storage1.github.io/thumbs/n64/f-zero-x.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="f-zeroX-display">0</span><span> Plays</span></div><span class="box-title">F-Zero X</span></a>',
	'<a href="https://emugalaxy.dev/n64/31-mario-kart-64.html" class="box"><img alt="mk64" src="https://emugalaxy-storage1.github.io/thumbs/n64/mk64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="mk64-display">0</span><span> Plays</span></div><span class="box-title">Mario Kart 64</span></a>',
	'<a href="https://emugalaxy.dev/n64/30-mario-tennis.html" class="box"><img alt="mt" src="https://emugalaxy-storage1.github.io/thumbs/n64/mt.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="mt-display">0</span><span> Plays</span></div><span class="box-title">Mario Tennis</span></a>',
	'<a href="https://emugalaxy.dev/n64/28-super-mario-64.html" class="box"><img alt="sm64" src="https://emugalaxy-storage1.github.io/thumbs/n64/sm64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="sm64-display">0</span><span> Plays</span></div><span class="box-title">Super Mario 64</span></a>',
	'<a href="https://emugalaxy.dev/n64/29-super-smash-bros.html" class="box"><img alt="ssb" src="https://emugalaxy-storage1.github.io/thumbs/n64/sb64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="ssb64-display">0</span><span> Plays</span></div><span class="box-title">Super Smash Bros</span></a>',
	'<a href="https://emugalaxy.dev/n64/106-wave-race-64.html" class="box"><img alt="waver64" src="https://emugalaxy-storage1.github.io/thumbs/n64/Wave Race 64.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="waver64-display">0</span><span> Plays</span></div><span class="box-title">Wave Race 64</span></a>',
	'<a href="https://emugalaxy.dev/n64/107-yoshis-story.html" class="box"><img alt="yoshistory" src="https://cdn.jsdelivr.net/gh/emugalaxy-storage1/emugalaxy-storage1.github.io/thumbs/n64/Yoshis-Story.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="yoshistory-display">0</span><span> Plays</span></div><span class="box-title">Yoshis Story</span></a>',
    '<a href="https://emugalaxy.dev/snes/10-donkey-kong-country.html" class="box"><img alt="dkc" src="https://emugalaxy-storage1.github.io/thumbs/snes/dkc.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="dkc-display">0</span><span> Plays</span></div><span class="box-title">Donkey Kong Country</span></a>',
    '<a href="https://emugalaxy.dev/snes/11-donkey-kong-country-2.html" class="box"><img alt="dkc2" src="https://emugalaxy-storage1.github.io/thumbs/snes/dkc2.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="dkc2-display">0</span><span> Plays</span></div><span class="box-title">Donkey Kong Country 2: Diddys Kong Quest</span></a>',
    '<a href="https://emugalaxy.dev/snes/12-donkey-kong-country-3.html" class="box"><img alt="dkc3" src="https://emugalaxy-storage1.github.io/thumbs/snes/dkc3.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="dkc3-display">0</span><span> Plays</span></div><span class="box-title">Donkey Kong Country 3: Dixie Kongs Double Trouble!</span></a>',
    '<a href="https://emugalaxy.dev/snes/13-f-zero.html" class="box"><img alt="f0" src="https://emugalaxy-storage1.github.io/thumbs/snes/f0.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="f0-display">0</span><span> Plays</span></div><span class="box-title">F-Zero</span></a>',
    '<a href="https://emugalaxy.dev/snes/14-fifa-international-soccer.html" class="box"><img alt="fifa" src="https://emugalaxy-storage1.github.io/thumbs/snes/fifa.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="fifasnes-display">0</span><span> Plays</span></div><span class="box-title">FIFA International Soccer</span></a>',
    '<a href="https://emugalaxy.dev/snes/15-nba-jam-tournament-edition.html" class="box"><img alt="nbajam-te" src="https://emugalaxy-storage1.github.io/thumbs/snes/nbajam-te.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="nbajamte-display">0</span><span> Plays</span></div><span class="box-title">NBA Jam - Tournament Edition</span></a>',
    '<a href="https://emugalaxy.dev/snes/16-tetris-2.html" class="box"><img alt="tetris2" src="https://emugalaxy-storage1.github.io/thumbs/snes/tetris2.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="tetris2-display">0</span><span> Plays</span></div><span class="box-title">Tetris 2</span></a>',
    '<a href="https://emugalaxy.dev/snes/17-tetris-attack.html" class="box"><img alt="tetris2" src="https://emugalaxy-storage1.github.io/thumbs/snes/tetris2.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="tetrisat-display">0</span><span> Plays</span></div><span class="box-title">Tetris Attack</span></a>',
    '<a href="https://emugalaxy.dev/snes/18-super-bomberman.html" class="box"><img alt="sbomb" src="https://emugalaxy-storage1.github.io/thumbs/snes/sbomb.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="sbomb-display">0</span><span> Plays</span></div><span class="box-title">Super Bomberman</span></a>',
    '<a href="https://emugalaxy.dev/snes/19-super-street-figher-2-turbo.html" class="box"><img alt="sf2t" src="https://emugalaxy-storage1.github.io/thumbs/snes/sf2t.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="sf2tsnes-display">0</span><span> Plays</span></div><span class="box-title">Street Fighter 2: Turbo</span></a>',
    '<a href="https://emugalaxy.dev/snes/20-earthbound.html" class="box"><img alt="eb" src="https://emugalaxy-storage1.github.io/thumbs/snes/eb.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="eb-display">0</span><span> Plays</span></div><span class="box-title">Earthbound</span></a>',
    '<a href="https://emugalaxy.dev/snes/21-nhl-94.html" class="box"><img alt="nhl94" src="https://emugalaxy-storage1.github.io/thumbs/snes/nhl94.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="nhl94-display">0</span><span> Plays</span></div><span class="box-title">NHL 94</span></a>',
    '<a href="https://emugalaxy.dev/snes/22-super-mario-all-stars.html" class="box"><img alt="smas" src="https://emugalaxy-storage1.github.io/thumbs/snes/smas.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="smas-display">0</span><span> Plays</span></div><span class="box-title">Super Mario All-Stars</span></a>',
    '<a href="https://emugalaxy.dev/snes/23-super-spongebob-kart-hack.html" class="box"><img alt="ssbk" src="https://emugalaxy-storage1.github.io/thumbs/snes/ssbk.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="ssbkhack-display">0</span><span> Plays</span></div><span class="box-title">Super Spongebob Kart by Kampy</span></a>',
    '<a href="https://emugalaxy.dev/snes/8-super-mario-world.html" class="box"><img alt="smw" src="https://emugalaxy-storage1.github.io/thumbs/snes/smw.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="smw-display">0</span><span> Plays</span></div><span class="box-title">Super Mario World</span></a>',
	'<a href="https://emugalaxy.dev/snes/9-super-mario-kart.html" class="box"><img alt="smk" src="https://emugalaxy-storage1.github.io/thumbs/snes/smk.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="smk-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Kart</span></a>',
	'<a href="https://emugalaxy.dev/snes/133-kirby-dream-course" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/snes/kirbydc.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="kirbdc-display">0</span><span> Plays</span></div><span class="box-title">Kirby Dream Course</span></a>',
	'<a href="https://emugalaxy.dev/snes/132-kirby-super-star" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/snes/kirbyss.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="kirbss-display">0</span><span> Plays</span></div><span class="box-title">Kirby Super Star</span></a>',
	'<a href="https://emugalaxy.dev/snes/134-tmnt-4-turtles-in-time" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/snes/tmnt4.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="tmnt4-display">0</span><span> Plays</span></div><span class="box-title">Teenage Mutant Ninja Turtles IV - Turtles in Time</span></a>',
	'<a href="https://emugalaxy.dev/snes/135-super-mario-odyssey-hack" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/snes/smohack.png" data-loaded="true"><div class="badge">SNES</div><div class="plays-span"><span id="smohack-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Odyssey - A Journey Through Time and Space by BMF54123</span></a>',
	'<a href="https://emugalaxy.dev/gba/86-advance-wars.html" class="box"><img alt="advw" src="https://emugalaxy-storage1.github.io/thumbs/gba/advancewars.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="advw-display">0</span><span> Plays</span></div><span class="box-title">Advance Wars</span></a>',
	'<a href="https://emugalaxy.dev/gba/87-castlevania-aria-of-sorrow.html" class="box"><img alt="casvaos" src="https://emugalaxy-storage1.github.io/thumbs/gba/castlevania-aofs.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="casvaos-display">0</span><span> Plays</span></div><span class="box-title">Castlevania - Aria of Sorrow</span></a>',
	'<a href="https://emugalaxy.dev/gba/88-castlevania-circle-of-the-moon.html" class="box"><img alt="casvmoon" src="https://emugalaxy-storage1.github.io/thumbs/gba/castlevania-moon.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="casvmoon-display">0</span><span> Plays</span></div><span class="box-title">Castlevania - Circle of the Moon</span></a>',
	'<a href="https://emugalaxy.dev/gba/89-final-fantasy-tactics-advance.html" class="box"><img alt="ffta" src="https://emugalaxy-storage1.github.io/thumbs/gba/finalfantasytactics.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="ffta-display">0</span><span> Plays</span></div><span class="box-title">Final Fantasy Tactics Advance</span></a>',
	'<a href="https://emugalaxy.dev/gba/90-final-fantasy-vi-advance.html" class="box"><img alt="ff4a" src="https://emugalaxy-storage1.github.io/thumbs/gba/finalfantasy4advance.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="ff4a-display">0</span><span> Plays</span></div><span class="box-title">Final Fantasy VI Advance</span></a>',
	'<a href="https://emugalaxy.dev/gba/91-fire-emblem.html" class="box"><img alt="fegba" src="https://emugalaxy-storage1.github.io/thumbs/gba/fireemblem.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="fegba-display">0</span><span> Plays</span></div><span class="box-title">Fire Emblem</span></a>',
	'<a href="https://emugalaxy.dev/gba/92-fire-emblem-the-sacred-stones.html" class="box"><img alt="fegbass" src="https://emugalaxy-storage1.github.io/thumbs/gba/fireemblem2.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="fegbass-display">0</span><span> Plays</span></div><span class="box-title">Fire Emblem - The Sacred Stones</span></a>',
	'<a href="https://emugalaxy.dev/gba/93-golden-sun.html" class="box"><img alt="goldsgba" src="https://emugalaxy-storage1.github.io/thumbs/gba/goldensun.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="goldsgba-display">0</span><span> Plays</span></div><span class="box-title">Golden Sun</span></a>',
	'<a href="https://emugalaxy.dev/gba/94-kirby-and-the-amazing-mirror.html" class="box"><img alt="kirbymirror" src="https://emugalaxy-storage1.github.io/thumbs/gba/kirby-mirror.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="kirbymirror-display">0</span><span> Plays</span></div><span class="box-title">Kirby and The Amazing Mirror</span></a>',
	'<a href="https://emugalaxy.dev/gba/95-mario-and-luigi-superstar-saga.html" class="box"><img alt="mandlss" src="https://emugalaxy-storage1.github.io/thumbs/gba/marioandluigi-superstarsaga.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="mandlss-display">0</span><span> Plays</span></div><span class="box-title">Mario And Luigi Superstar Saga</span></a>',
	'<a href="https://emugalaxy.dev/gba/96-mario-golf-advance-tour.html" class="box"><img alt="mgatgba" src="https://emugalaxy-storage1.github.io/thumbs/gba/mario-golf.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="mgatgba-display">0</span><span> Plays</span></div><span class="box-title">Mario Golf - Advance Tour</span></a>',
	'<a href="https://emugalaxy.dev/gba/97-metroid-fusion.html" class="box"><img alt="metfusion" src="https://emugalaxy-storage1.github.io/thumbs/gba/metroidfusion.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="metfusion-display">0</span><span> Plays</span></div><span class="box-title">Metroid Fusion</span></a>',
	'<a href="https://emugalaxy.dev/gba/98-metroid-zero-mission.html" class="box"><img alt="metmission" src="https://emugalaxy-storage1.github.io/thumbs/gba/metroidzero.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="metmission-display">0</span><span> Plays</span></div><span class="box-title">Metroid Zero Mission</span></a>',
	'<a href="https://emugalaxy.dev/gba/70-pokemon-emerald.html" class="box"><img alt="pokeemr" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-emerald.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokeemr-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Emerald</span></a>',
	'<a href="https://emugalaxy.dev/gba/71-pokemon-fire-red.html" class="box"><img alt="pokefire" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-firered.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokefire-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Fire Red</span></a>',
	'<a href="https://emugalaxy.dev/gba/69-pokemon-glazed-hack.html" class="box"><img alt="pokegla" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-glazed.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokegla-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Glazed by Lucbui</span></a>',
	'<a href="https://emugalaxy.dev/gba/72-pokemon-leaf-green.html" class="box"><img alt="pokeleaf" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-leafgreen.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokeleaf-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Leaf Green</span></a>',
	'<a href="https://emugalaxy.dev/gba/73-pokemon-light-platinum-hack.html" class="box"><img alt="pokelight" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-light-platinum.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokelight-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Light Platinum by Wesley FG</span></a>',
	'<a href="https://emugalaxy.dev/gba/74-pokemon-liquid-crystal-hack.html" class="box"><img alt="pokeliquid" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-liquid-crystal.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokeliquid-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Liquid Crystal by Linkandzelda</span></a>',
	'<a href="https://emugalaxy.dev/gba/75-pokemon-ruby.html" class="box"><img alt="pokeruby" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-ruby.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokeruby-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Ruby</span></a>',
	'<a href="https://emugalaxy.dev/gba/76-pokemon-sapphire.html" class="box"><img alt="pokesapp" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-sapphire.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokesapp-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Sapphire</span></a>',
	'<a href="https://emugalaxy.dev/gba/77-pokemon-x-&-y.html" class="box"><img alt="pokexygba" src="https://emugalaxy-storage1.github.io/thumbs/gba/pokemon-x-y.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="pokexygba-display">0</span><span> Plays</span></div><span class="box-title">Pokemon X & Y by jovefreak1993</span></a>',
	'<a href="https://emugalaxy.dev/gba/78-sonic-advance.html" class="box"><img alt="sonicadv" src="https://emugalaxy-storage1.github.io/thumbs/gba/sonic-advance.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="sonicadv-display">0</span><span> Plays</span></div><span class="box-title">Sonic Advance</span></a>',
	'<a href="https://emugalaxy.dev/gba/79-sonic-advance-2.html" class="box"><img alt="sonicadv2" src="https://emugalaxy-storage1.github.io/thumbs/gba/sonic-advance-2.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="sonicadv2-display">0</span><span> Plays</span></div><span class="box-title">Sonic Advance 2</span></a>',
	'<a href="https://emugalaxy.dev/gba/80-sonic-advance-3.html" class="box"><img alt="sonicadv3" src="https://emugalaxy-storage1.github.io/thumbs/gba/sonic-advance-3.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="sonicadv3-display">0</span><span> Plays</span></div><span class="box-title">Sonic Advance 3</span></a>',
	'<a href="https://emugalaxy.dev/gba/68-super-mario-advance.html" class="box"><img alt="marioadv" src="https://emugalaxy-storage1.github.io/thumbs/gba/mario-advance.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="marioadv-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Advance</span></a>',
	'<a href="https://emugalaxy.dev/gba/81-super-mario-advance-4.html" class="box"><img alt="marioadv4" src="https://emugalaxy-storage1.github.io/thumbs/gba/mario-advance-4.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="marioadv4-display">0</span><span> Plays</span></div><span class="box-title">Super Mario Advance 4 - Super Mario Bros 3</span></a>',
	'<a href="https://emugalaxy.dev/gba/82-super-mario-advance-2.html" class="box"><img alt="marioadv2" src="https://emugalaxy-storage1.github.io/thumbs/gba/mario-advance-2.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="marioadv2-display">0</span><span> Plays</span></div><span class="box-title">Super Mario World - Super Mario Advance 2</span></a>',
	'<a href="https://emugalaxy.dev/gba/83-a-link-to-the-past-&-4-swords.html" class="box"><img alt="zeldalttp" src="https://emugalaxy-storage1.github.io/thumbs/gba/zelda4swords.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="zeldattp4-display">0</span><span> Plays</span></div><span class="box-title">The Legend of Zelda - A Link To The Past</span></a>',
	'<a href="https://emugalaxy.dev/gba/84-the-minish-cap.html" class="box"><img alt="zeldatmc" src="https://emugalaxy-storage1.github.io/thumbs/gba/zelda-minish-cap.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="zeldatmc-display">0</span><span> Plays</span></div><span class="box-title">The Legend of Zelda - The Minish Cap</span></a>',
	'<a href="https://emugalaxy.dev/gba/85-super-mario-advance-3.html" class="box"><img alt="marioadv3" src="https://emugalaxy-storage1.github.io/thumbs/gba/mario-advance-3.png" data-loaded="true"><div class="badge">GBA</div><div class="plays-span"><span id="marioadv3-display">0</span><span> Plays</span></div><span class="box-title">Yoshis Island - Super Mario Advance 3</span></a>',
	'<a href="https://emugalaxy.dev/genesis/108-aladdin.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Aladdin.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="aladding-display">0</span><span> Plays</span></div><span class="box-title">Aladdin</span></a>',
	'<a href="https://emugalaxy.dev/genesis/109-castle-of-illusion.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Castle of Illusion Starring Mickey Mouse.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="coismm-display">0</span><span> Plays</span></div><span class="box-title">Castle of Illusion Starring Mickey Mouse</span></a>',
	'<a href="https://emugalaxy.dev/genesis/110-castlevania-bloodlines.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Castlevania - Bloodlines.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="casvblood-display">0</span><span> Plays</span></div><span class="box-title">Castlevania - Bloodlines</span></a>',
	'<a href="https://emugalaxy.dev/genesis/111-comix-zone.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Comix Zone.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="comixzone-display">0</span><span> Plays</span></div><span class="box-title">Comix Zone</span></a>',
	'<a href="https://emugalaxy.dev/genesis/112-contra-hard-corps.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Contra - Hard Corps.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="hardcorps-display">0</span><span> Plays</span></div><span class="box-title">Contra - Hard Corps</span></a>',
	'<a href="https://emugalaxy.dev/genesis/113-ecco-the-dolphin.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/ecco.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="ecco-display">0</span><span> Plays</span></div><span class="box-title">Ecco the Dolphin</span></a>',
	'<a href="https://emugalaxy.dev/genesis/114-fatal-fury.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Fatal Fury.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="fatalfuryg-display">0</span><span> Plays</span></div><span class="box-title">Fatal Fury</span></a>',
	'<a href="https://emugalaxy.dev/genesis/115-gunstar-heroes.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Gunstar Heroes.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="gunstarheroes-display">0</span><span> Plays</span></div><span class="box-title">Gunstar Heroes</span></a>',
	'<a href="https://emugalaxy.dev/genesis/120-madden-nfl-94.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/nfl94.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="nfl94g-display">0</span><span> Plays</span></div><span class="box-title">Madden NFL 94</span></a>',
	'<a href="https://emugalaxy.dev/genesis/116-michael-jackson-moonwalker.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/mjmoonwalk.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="mjmoonwalker-display">0</span><span> Plays</span></div><span class="box-title">Michael Jackson Moonwalker</span></a>',
	'<a href="https://emugalaxy.dev/genesis/117-mortal-kombat-2.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/mk2.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="mk2g-display">0</span><span> Plays</span></div><span class="box-title">Mortal Kombat II</span></a>',
	'<a href="https://emugalaxy.dev/genesis/118-mortal-kombat-2-unlimited.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/mk2u.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="mk2ug-display">0</span><span> Plays</span></div><span class="box-title">Mortal Kombat II Unlimited by Smoke</span></a>',
	'<a href="https://emugalaxy.dev/genesis/119-nba-jam-tournament-edition.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/nbajamte.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="nbajamteg-display">0</span><span> Plays</span></div><span class="box-title">NBA Jam Tournament Edition</span></a>',
	'<a href="https://emugalaxy.dev/genesis/121-nhl-94.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/nhl94.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="nhl94g-display">0</span><span> Plays</span></div><span class="box-title">NHL 94</span></a>',
	'<a href="https://emugalaxy.dev/genesis/122-nhl-hockey.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/NHL Hockey.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="nhlhg-display">0</span><span> Plays</span></div><span class="box-title">NHL Hockey</span></a>',
	'<a href="https://emugalaxy.dev/genesis/123-nhlpa-hockey-93.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/nhlpa93.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="nhlpa93g-display">0</span><span> Plays</span></div><span class="box-title">NHLPA Hockey 93</span></a>',
	'<a href="https://emugalaxy.dev/genesis/124-samurai-shodown.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Samurai Shodown.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="samuraig-display">0</span><span> Plays</span></div><span class="box-title">Samurai Shodown</span></a>',
	'<a href="https://emugalaxy.dev/genesis/129-sonic-&-knuckles.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/sonick.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonickg-display">0</span><span> Plays</span></div><span class="box-title">Sonic & Knuckles</span></a>',
	'<a href="https://emugalaxy.dev/genesis/128-sonic-the-hedgehog-mega-mix.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/megamixhack.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonicmmhg-display">0</span><span> Plays</span></div><span class="box-title">Sonic Megamix Hack by Stealth</span></a>',
	'<a href="https://emugalaxy.dev/genesis/125-sonic-the-hedgehog.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/sonic.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonicg-display">0</span><span> Plays</span></div><span class="box-title">Sonic the Hedgehog</span></a>',
	'<a href="https://emugalaxy.dev/genesis/126-sonic-the-hedgehog-2.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/sonic2.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonic2g-display">0</span><span> Plays</span></div><span class="box-title">Sonic the Hedgehog 2</span></a>',
	'<a href="https://emugalaxy.dev/genesis/127-sonic-the-hedgehog-3.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/sonic3.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonic3g-display">0</span><span> Plays</span></div><span class="box-title">Sonic the Hedgehog 3</span></a>',
	'<a href="https://emugalaxy.dev/genesis/130-sonic-the-hedgehog-3-&-knuckles.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/sonic3k.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonic3kg-display">0</span><span> Plays</span></div><span class="box-title">Sonic the Hedgehog 3 & Knuckles</span></a>',
	'<a href="https://emugalaxy.dev/genesis/131-street-of-rage-2.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/Streets of Rage 2.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="streetrage2g-display">0</span><span> Plays</span></div><span class="box-title">Streets of Rage 2</span></a>',                                                                                             
	'<a href="https://emugalaxy.dev/nds/137-animal-crossing-wild-world.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/acwwds.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="acwwds-display">0</span><span> Plays</span></div><span class="box-title">Animal Crossing Wild World</span></a>',
	'<a href="https://emugalaxy.dev/nds/139-kirby-mass-attack.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/kirbma.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="kirbma-display">0</span><span> Plays</span></div><span class="box-title">Kirby Mass Attack</span></a>',
	'<a href="https://emugalaxy.dev/nds/138-mario-kart-ds.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/mkds.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="mkds-display">0</span><span> Plays</span></div><span class="box-title">Mario Kart DS</span></a>',
	'<a href="https://emugalaxy.dev/nds/136-super-mario-64-ds.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/sm64ds.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="sm64ds-display">0</span><span> Plays</span></div><span class="box-title">Super Mario 64 DS</span></a>',
	'<a href="https://emugalaxy.dev/nds/146-pokemon-diamond-version.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/pokedia.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="pokedia-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Diamond Version</span></a>',
	'<a href="https://emugalaxy.dev/nds/145-pokemon-platinum-version.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/pokeplat.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="pokeplat-display">0</span><span> Plays</span></div><span class="box-title">Pokemon Platinum Version</span></a>',
	'<a href="https://emugalaxy.dev/nds/144-new-super-mario-bros.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/nds/nsmb.png" data-loaded="true"><div class="badge">NDS</div><div class="plays-span"><span id="nsmb-display">0</span><span> Plays</span></div><span class="box-title">New Super Mario Bros</span></a>',
	'<a href="https://emugalaxy.dev/n64/143-rayman-2-the-great-escape.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/n64/ray2.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="ray2-display">0</span><span> Plays</span></div><span class="box-title">Rayman 2: The Great Escape</span></a>',
	'<a href="https://emugalaxy.dev/n64/142-mortal-kombat-4.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/n64/mk4.png" data-loaded="true"><div class="badge">N64</div><div class="plays-span"><span id="mk4-display">0</span><span> Plays</span></div><span class="box-title">Mortal Kombat 4</span></a>',
	'<a href="https://emugalaxy.dev/genesis/141-sonic-legacy.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/soniclegacy.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonicle-display">0</span><span> Plays</span></div><span class="box-title">Sonic Legacy by Gamma V</span></a>',
	'<a href="https://emugalaxy.dev/genesis/140-sonic-the-hedgehog-classic-heroes.html" class="box"><img alt="" src="https://emugalaxy-storage1.github.io/thumbs/gen/classicheroes.png" data-loaded="true"><div class="badge">SEGA</div><div class="plays-span"><span id="sonicch-display">0</span><span> Plays</span></div><span class="box-title">Sonic the Hedgehog - Classic Heroes by ColinC10</span></a>'
];
// The Variables
var ul = document.querySelector('#list');
var ix, ixLen, rand;
// The Math functions and rendering functions
for(ix = 129, ixLen = 145; ix < ixLen; ix++){
  rand = Math.ceil(Math.random() * ixLen) - 1;
  ul.innerHTML += '<li>' + liList[rand] + '</li>';
  liList.splice(rand, 1);
  ixLen--;
}


// NES Games

const count3d = document.getElementById('3d-display');

displayVisitCount3dbwr();

function displayVisitCount3dbwr() {
	fetch('https://api.countapi.xyz/get/3dbwr/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count3d.innerHTML = res.value;
	})
};


const count8eyesnes = document.getElementById('8eyes-display');

displayVisitCount8EYESNES();

function displayVisitCount8EYESNES() {
	fetch('https://api.countapi.xyz/get/8eyes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count8eyesnes.innerHTML = res.value;
	})
};

const count10yf = document.getElementById('10yf-display');

displayVisitCount10YF();

function displayVisitCount10YF() {
	fetch('https://api.countapi.xyz/get/10yf/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count10yf.innerHTML = res.value;
	})
};

const count720nes = document.getElementById('720nes-display');

displayVisitCount720NES();

function displayVisitCount720NES() {
	fetch('https://api.countapi.xyz/get/720nes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count720nes.innerHTML = res.value;
	})
};

const count1942nes = document.getElementById('1942nes-display');

displayVisitCount1942NES();

function displayVisitCount1942NES() {
	fetch('https://api.countapi.xyz/get/1942nes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count1942nes.innerHTML = res.value;
	})
};

const count1943nes = document.getElementById('1943nes-display');

displayVisitCount1943NES();

function displayVisitCount1943NES() {
	fetch('https://api.countapi.xyz/get/1943nes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count1943nes.innerHTML = res.value;
	})
};

const countadisnes = document.getElementById('adisnes-display');

displayVisitCountADISNES();

function displayVisitCountADISNES() {
	fetch('https://api.countapi.xyz/get/adisnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countadisnes.innerHTML = res.value;
	})
};

const countadis2nes = document.getElementById('adis2nes-display');

displayVisitCountADIS2NES();

function displayVisitCountADIS2NES() {
	fetch('https://api.countapi.xyz/get/adis2nes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countadis2nes.innerHTML = res.value;
	})
};

const countlolones = document.getElementById('lolones-display');

displayVisitCountADL();

function displayVisitCountADL() {
	fetch('https://api.countapi.xyz/get/lolones/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countlolones.innerHTML = res.value;
	})
};

const countlolo2nes = document.getElementById('lolo2nes-display');

displayVisitCountADL2();

function displayVisitCountADL2() {
	fetch('https://api.countapi.xyz/get/lolo2nes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countlolo2nes.innerHTML = res.value;
	})
};

const countlolo3nes = document.getElementById('lolo3nes-display');

displayVisitCountADL3();

function displayVisitCountADL3() {
	fetch('https://api.countapi.xyz/get/lolo3nes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countlolo3nes.innerHTML = res.value;
	})
};

const countantnes = document.getElementById('antnes-display');

displayVisitCountantnes();

function displayVisitCountantnes() {
	fetch('https://api.countapi.xyz/get/antnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countantnes.innerHTML = res.value;
	})
};

const countarbbnes = document.getElementById('arbbnes-display');

displayVisitCountarbbnes();

function displayVisitCountarbbnes() {
	fetch('https://api.countapi.xyz/get/arbbnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countarbbnes.innerHTML = res.value;
	})
};

const countarchonnes = document.getElementById('archonnes-display');

displayVisitCountarchonnes();

function displayVisitCountarchonnes() {
	fetch('https://api.countapi.xyz/get/archonnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countarchonnes.innerHTML = res.value;
	})
};

const countBS = document.getElementById('bs-display');

displayVisitCountforBS();

function displayVisitCountforBS() {
	fetch('https://api.countapi.xyz/get/blades/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countBS.innerHTML = res.value;
	})
};

const countcalignes = document.getElementById('calignes-display');

displayVisitCountforCalifornianes();

function displayVisitCountforCalifornianes() {
	fetch('https://api.countapi.xyz/get/calignes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countcalignes.innerHTML = res.value;
	})
};

const countcasv = document.getElementById('casv-display');

displayVisitCountforCastlevania();

function displayVisitCountforCastlevania() {
	fetch('https://api.countapi.xyz/get/casv/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countcasv.innerHTML = res.value;
	})
};

const countcasv2 = document.getElementById('casv2-display');

displayVisitCountforCastlevania2();

function displayVisitCountforCastlevania2() {
	fetch('https://api.countapi.xyz/get/casv2/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countcasv2.innerHTML = res.value;
	})
};

const countcasv3 = document.getElementById('casv3-display');

displayVisitCountforCastlevania3();

function displayVisitCountforCastlevania3() {
	fetch('https://api.countapi.xyz/get/casv3/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countcasv3.innerHTML = res.value;
	})
};

const countcontra = document.getElementById('contra-display');

displayVisitCountforContra();

function displayVisitCountforContra() {
	fetch('https://api.countapi.xyz/get/contra/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countcontra.innerHTML = res.value;
	})
};

const countdknes = document.getElementById('dknes-display');

displayVisitCountforDKNES();

function displayVisitCountforDKNES() {
	fetch('https://api.countapi.xyz/get/dknes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countdknes.innerHTML = res.value;
	})
};

const countgradius = document.getElementById('gradius-display');

displayVisitCountforGRADIUS();

function displayVisitCountforGRADIUS() {
	fetch('https://api.countapi.xyz/get/gradius/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countgradius.innerHTML = res.value;
	})
};

const countghostgnes = document.getElementById('ghostgnes-display');

displayVisitCountforGHOSTG();

function displayVisitCountforGHOSTG() {
	fetch('https://api.countapi.xyz/get/ghostgnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countghostgnes.innerHTML = res.value;
	})
};

const countIH = document.getElementById('iceh-display');

displayVisitCountforIH();

function displayVisitCountforIH() {
	fetch('https://api.countapi.xyz/get/ihnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countIH.innerHTML = res.value;
	})
};

const countIHBIE = document.getElementById('ihbie-display');

displayVisitCountforIHBIE();

function displayVisitCountforIHBIE() {
	fetch('https://api.countapi.xyz/get/ihbie/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countIHBIE.innerHTML = res.value;
	})
};

const countjackal = document.getElementById('jackal-display');

displayVisitCountforJACKAL();

function displayVisitCountforJACKAL() {
	fetch('https://api.countapi.xyz/get/jackal/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countjackal.innerHTML = res.value;
	})
};

const countKIRBY = document.getElementById('kirby-display');

displayVisitCountforKIRBY();

function displayVisitCountforKIRBY() {
	fetch('https://api.countapi.xyz/get/kirby/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countKIRBY.innerHTML = res.value;
	})
};

const countkungfu = document.getElementById('kungfunes-display');

displayVisitCountforKUNGFU();

function displayVisitCountforKUNGFU() {
	fetch('https://api.countapi.xyz/get/kungfunes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countkungfu.innerHTML = res.value;
	})
};

const countlifeforce = document.getElementById('lifeforce-display');

displayVisitCountforlifeforce();

function displayVisitCountforlifeforce() {
	fetch('https://api.countapi.xyz/get/lifeforce/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countlifeforce.innerHTML = res.value;
	})
};

const countloderunnernes = document.getElementById('lode-runnernes-display');

displayVisitCountforLODERUNNER();

function displayVisitCountforLODERUNNER() {
	fetch('https://api.countapi.xyz/get/lode-runnernes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countloderunnernes.innerHTML = res.value;
	})
};

const countmaniacmansionnes = document.getElementById('maniacmansionnes-display');

displayVisitCountforManiacMansionNES();

function displayVisitCountforManiacMansionNES() {
	fetch('https://api.countapi.xyz/get/manicmansionnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmaniacmansionnes.innerHTML = res.value;
	})
};

const countmegaman = document.getElementById('megaman-display');

displayVisitCountforMegaMan();

function displayVisitCountforMegaMan() {
	fetch('https://api.countapi.xyz/get/megaman/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmegaman.innerHTML = res.value;
	})
};

const countmegaman2 = document.getElementById('megaman2-display');

displayVisitCountforMegaMan2();

function displayVisitCountforMegaMan2() {
	fetch('https://api.countapi.xyz/get/megaman2/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmegaman2.innerHTML = res.value;
	})
};

const countmegaman3 = document.getElementById('megaman3-display');

displayVisitCountforMegaMan3();

function displayVisitCountforMegaMan3() {
	fetch('https://api.countapi.xyz/get/megaman3/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmegaman3.innerHTML = res.value;
	})
};

const countmegaman4 = document.getElementById('megaman4-display');

displayVisitCountforMegaMan4();

function displayVisitCountforMegaMan4() {
	fetch('https://api.countapi.xyz/get/megaman4/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmegaman4.innerHTML = res.value;
	})
};

const countmegaman5 = document.getElementById('megaman5-display');

displayVisitCountforMegaMan5();

function displayVisitCountforMegaMan5() {
	fetch('https://api.countapi.xyz/get/megaman5/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmegaman5.innerHTML = res.value;
	})
};

const countmegaman6 = document.getElementById('megaman6-display');

displayVisitCountforMegaMan6();

function displayVisitCountforMegaMan6() {
	fetch('https://api.countapi.xyz/get/megaman6/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmegaman6.innerHTML = res.value;
	})
};

const countmetalgearnes = document.getElementById('metalgear-display');

displayVisitCountforMETALGEARNES();

function displayVisitCountforMETALGEARNES() {
	fetch('https://api.countapi.xyz/get/metalgear/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmetalgearnes.innerHTML = res.value;
	})
};

const countmtpo = document.getElementById('mtpo-display');

displayVisitCountforMTPO();

function displayVisitCountforMTPO() {
	fetch('https://api.countapi.xyz/get/mtpo/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmtpo.innerHTML = res.value;
	})
};

const countSMB = document.getElementById('smb-display');

displayVisitCountforSMB();

function displayVisitCountforSMB() {
	fetch('https://api.countapi.xyz/get/smb/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMB.innerHTML = res.value;
	})
};

const countSMB2 = document.getElementById('smb2-display');

displayVisitCountforSMB2();

function displayVisitCountforSMB2() {
	fetch('https://api.countapi.xyz/get/smb2/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMB2.innerHTML = res.value;
	})
};

const countSMB3MIX = document.getElementById('smb3mix-display');

displayVisitCountforSMB3MIX();

function displayVisitCountforSMB3MIX() {
	fetch('https://api.countapi.xyz/get/smb3mix/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMB3MIX.innerHTML = res.value;
	})
};


const countSMB3 = document.getElementById('smb3-display');

displayVisitCountforSMB3();

function displayVisitCountforSMB3() {
	fetch('https://api.countapi.xyz/get/smb3/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMB3.innerHTML = res.value;
	})
};

const countSMU = document.getElementById('smu-display');

displayVisitCountforSMBU();

function displayVisitCountforSMBU() {
	fetch('https://api.countapi.xyz/get/smuhack/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMU.innerHTML = res.value;
	})
};

const countzelda = document.getElementById('zeldanes-display');

displayVisitCountforZELDA();

function displayVisitCountforZELDA() {
	fetch('https://api.countapi.xyz/get/zeldanes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countzelda.innerHTML = res.value;
	})
};

// SNES Games

const countDKC = document.getElementById('dkc-display');

displayVisitCountforDKC();

function displayVisitCountforDKC() {
	fetch('https://api.countapi.xyz/get/dkc/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countDKC.innerHTML = res.value;
	})
};

const countDKC2 = document.getElementById('dkc2-display');

displayVisitCountforDKC2();

function displayVisitCountforDKC2() {
	fetch('https://api.countapi.xyz/get/dkc2/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countDKC2.innerHTML = res.value;
	})
};

const countDKC3 = document.getElementById('dkc3-display');

displayVisitCountforDKC3();

function displayVisitCountforDKC3() {
	fetch('https://api.countapi.xyz/get/dkc3/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countDKC3.innerHTML = res.value;
	})
};

const countEB = document.getElementById('eb-display');

displayVisitCountforEB();

function displayVisitCountforEB() {
	fetch('https://api.countapi.xyz/get/earthb/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countEB.innerHTML = res.value;
	})
};

const countF0 = document.getElementById('f0-display');

displayVisitCountforF0();

function displayVisitCountforF0() {
	fetch('https://api.countapi.xyz/get/f-zero/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countF0.innerHTML = res.value;
	})
};

const countFIFA = document.getElementById('fifasnes-display');

displayVisitCountforFIFA();

function displayVisitCountforFIFA() {
	fetch('https://api.countapi.xyz/get/fifasnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countFIFA.innerHTML = res.value;
	})
};

const countKIRBSS = document.getElementById('kirbss-display');

displayVisitCountforKIRBSS();

function displayVisitCountforKIRBSS() {
	fetch('https://api.countapi.xyz/get/kirbss/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countKIRBSS.innerHTML = res.value;
	})
};

const countKIRBDC = document.getElementById('kirbdc-display');

displayVisitCountforKIRBDC();

function displayVisitCountforKIRBDC() {
	fetch('https://api.countapi.xyz/get/kirbdc/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countKIRBDC.innerHTML = res.value;
	})
};

const countNBAJAMTE = document.getElementById('nbajamte-display');

displayVisitCountforNBAJAMTE();

function displayVisitCountforNBAJAMTE() {
	fetch('https://api.countapi.xyz/get/nbajamtesnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countNBAJAMTE.innerHTML = res.value;
	})
};

const countNHL94 = document.getElementById('nhl94snes-display');

displayVisitCountforNHL94();

function displayVisitCountforNHL94() {
	fetch('https://api.countapi.xyz/get/nhl94snes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countNHL94.innerHTML = res.value;
	})
};

const countSBOMB = document.getElementById('sbomb-display');

displayVisitCountforSBOMB();

function displayVisitCountforSBOMB() {
	fetch('https://api.countapi.xyz/get/sbomb/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSBOMB.innerHTML = res.value;
	})
};

const countSF2T = document.getElementById('sf2tsnes-display');

displayVisitCountforSF2T();

function displayVisitCountforSF2T() {
	fetch('https://api.countapi.xyz/get/sf2tsnes/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSF2T.innerHTML = res.value;
	})
};

const countSMAS = document.getElementById('smas-display');

displayVisitCountforSMAS();

function displayVisitCountforSMAS() {
	fetch('https://api.countapi.xyz/get/smas/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMAS.innerHTML = res.value;
	})
};

const countSMK = document.getElementById('smk-display');

displayVisitCountforSMK();

function displayVisitCountforSMK() {
	fetch('https://api.countapi.xyz/get/smk/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMK.innerHTML = res.value;
	})
};

const countSMO = document.getElementById('smohack-display');

displayVisitCountforSMO();

function displayVisitCountforSMO() {
	fetch('https://api.countapi.xyz/get/smohack/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMO.innerHTML = res.value;
	})
};

const countSMW = document.getElementById('smw-display');

displayVisitCountforSMW();

function displayVisitCountforSMW() {
	fetch('https://api.countapi.xyz/get/smw/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSMW.innerHTML = res.value;
	})
};

const countSSBKH = document.getElementById('ssbkhack-display');

displayVisitCountforSSBKH();

function displayVisitCountforSSBKH() {
	fetch('https://api.countapi.xyz/get/ssbkhack/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSSBKH.innerHTML = res.value;
	})
};

const countTMNT4 = document.getElementById('tmnt4-display');

displayVisitCountforTMNT4();

function displayVisitCountforTMNT4() {
	fetch('https://api.countapi.xyz/get/tmnt4/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countTMNT4.innerHTML = res.value;
	})
};

const countTETRIS2 = document.getElementById('tetris2-display');

displayVisitCountforTETRIS2();

function displayVisitCountforTETRIS2() {
	fetch('https://api.countapi.xyz/get/tetris2/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countTETRIS2.innerHTML = res.value;
	})
};

const countTETRISAT = document.getElementById('tetrisat-display');

displayVisitCountforTETRISAT();

function displayVisitCountforTETRISAT() {
	fetch('https://api.countapi.xyz/get/tetrisat/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countTETRISAT.innerHTML = res.value;
	})
};

// SEGA Games

const countaladding = document.getElementById('aladding-display');

displayVisitCountaladding();

function displayVisitCountaladding() {
	fetch('https://api.countapi.xyz/get/aladding/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countaladding.innerHTML = res.value;
	})
};

const countcoismm = document.getElementById('coismm-display');

displayVisitCountcoismm();

function displayVisitCountcoismm() {
	fetch('https://api.countapi.xyz/get/coismm/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countcoismm.innerHTML = res.value;
	})
};

const countcasvblood = document.getElementById('casvblood-display');

displayVisitCountcasvblood();

function displayVisitCountcasvblood() {
	fetch('https://api.countapi.xyz/get/casvblood/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countcasvblood.innerHTML = res.value;
	})
};

const countcomixzone = document.getElementById('comixzone-display');

displayVisitCountcomixzone();

function displayVisitCountcomixzone() {
	fetch('https://api.countapi.xyz/get/comixzone/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countcomixzone.innerHTML = res.value;
	})
};

const counthardcorps = document.getElementById('hardcorps-display');

displayVisitCounthardcorps();

function displayVisitCounthardcorps() {
	fetch('https://api.countapi.xyz/get/hardcorps/emugalaxy')
	.then(res => res.json())
	.then(res => {
		counthardcorps.innerHTML = res.value;
	})
};

const countecco = document.getElementById('ecco-display');

displayVisitCountecco();

function displayVisitCountecco() {
	fetch('https://api.countapi.xyz/get/ecco/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countecco.innerHTML = res.value;
	})
};

const countfatalfuryg = document.getElementById('fatalfuryg-display');

displayVisitCountfatalfuryg();

function displayVisitCountfatalfuryg() {
	fetch('https://api.countapi.xyz/get/fatalfuryg/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countfatalfuryg.innerHTML = res.value;
	})
};

const countgunstarheroes = document.getElementById('gunstarheroes-display');

displayVisitCountgunstarheroes();

function displayVisitCountgunstarheroes() {
	fetch('https://api.countapi.xyz/get/gunstarheroes/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countgunstarheroes.innerHTML = res.value;
	})
};

const countnfl94g = document.getElementById('nfl94g-display');

displayVisitCountnfl94g();

function displayVisitCountnfl94g() {
	fetch('https://api.countapi.xyz/get/nfl94g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countnfl94g.innerHTML = res.value;
	})
};

const countmjmoonwalker = document.getElementById('mjmoonwalker-display');

displayVisitCountmjmoonwalker();

function displayVisitCountmjmoonwalker() {
	fetch('https://api.countapi.xyz/get/mjmoonwalker/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmjmoonwalker.innerHTML = res.value;
	})
};

const countmk2g = document.getElementById('mk2g-display');

displayVisitCountmk2g();

function displayVisitCountmk2g() {
	fetch('https://api.countapi.xyz/get/mk2g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmk2g.innerHTML = res.value;
	})
};

const countmk2ug = document.getElementById('mk2ug-display');

displayVisitCountmk2ug();

function displayVisitCountmk2ug() {
	fetch('https://api.countapi.xyz/get/mk2ug/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmk2ug.innerHTML = res.value;
	})
};

const countnbajamteg = document.getElementById('nbajamteg-display');

displayVisitCountnbajamteg();

function displayVisitCountnbajamteg() {
	fetch('https://api.countapi.xyz/get/nbajamteg/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countnbajamteg.innerHTML = res.value;
	})
};

const countnhl94g = document.getElementById('nhl94g-display');

displayVisitCountnhl94g();

function displayVisitCountnhl94g() {
	fetch('https://api.countapi.xyz/get/nhl94g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countnhl94g.innerHTML = res.value;
	})
};

const countnhlhg = document.getElementById('nhlhg-display');

displayVisitCountnhlhg();

function displayVisitCountnhlhg() {
	fetch('https://api.countapi.xyz/get/nhlhg/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countnhlhg.innerHTML = res.value;
	})
};

const countnhlpa93g = document.getElementById('nhlpa93g-display');

displayVisitCountnhlpa93g();

function displayVisitCountnhlpa93g() {
	fetch('https://api.countapi.xyz/get/nhlpa93g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countnhlpa93g.innerHTML = res.value;
	})
};

const countsamuraig = document.getElementById('samuraig-display');

displayVisitCountsamuraig();

function displayVisitCountsamuraig() {
	fetch('https://api.countapi.xyz/get/samuraig/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsamuraig.innerHTML = res.value;
	})
};

const countsonickg = document.getElementById('sonickg-display');

displayVisitCountsonickg();

function displayVisitCountsonickg() {
	fetch('https://api.countapi.xyz/get/sonickg/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonickg.innerHTML = res.value;
	})
};

const countsonicle = document.getElementById('sonicle-display');

displayVisitCountsonicle();

function displayVisitCountsonicle() {
	fetch('https://api.countapi.xyz/get/sonicle/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicle.innerHTML = res.value;
	})
};

const countsonicmmhg = document.getElementById('sonicmmhg-display');

displayVisitCountsonicmmhg();

function displayVisitCountsonicmmhg() {
	fetch('https://api.countapi.xyz/get/sonicle/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicmmhg.innerHTML = res.value;
	})
};

const countsonicch = document.getElementById('sonicch-display');

displayVisitCountsonicch();

function displayVisitCountsonicch() {
	fetch('https://api.countapi.xyz/get/sonicch/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicch.innerHTML = res.value;
	})
};

const countsonicg = document.getElementById('sonicg-display');

displayVisitCountsonicg();

function displayVisitCountsonicg() {
	fetch('https://api.countapi.xyz/get/sonicg/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicg.innerHTML = res.value;
	})
};

const countsonic2g = document.getElementById('sonic2g-display');

displayVisitCountsonic2g();

function displayVisitCountsonic2g() {
	fetch('https://api.countapi.xyz/get/sonic2g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonic2g.innerHTML = res.value;
	})
};

const countsonic3g = document.getElementById('sonic3g-display');

displayVisitCountsonic3g();

function displayVisitCountsonic3g() {
	fetch('https://api.countapi.xyz/get/sonic3g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonic3g.innerHTML = res.value;
	})
};

const countsonic3kg = document.getElementById('sonic3kg-display');

displayVisitCountsonic3kg();

function displayVisitCountsonic3kg() {
	fetch('https://api.countapi.xyz/get/sonic3kg/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonic3kg.innerHTML = res.value;
	})
};

const countstreetrage2g = document.getElementById('streetrage2g-display');

displayVisitCountstreetrage2g();

function displayVisitCountstreetrage2g() {
	fetch('https://api.countapi.xyz/get/streetrage2g/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countstreetrage2g.innerHTML = res.value;
	})
};

// N64 Games

const countge007 = document.getElementById('ge007-display');

displayVisitCountforGE007();

function displayVisitCountforGE007() {
	fetch('https://api.countapi.xyz/get/ge007/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countge007.innerHTML = res.value;
	})
};

const count1080sb = document.getElementById('1080sb-display');

displayVisitCountfor1080SB();

function displayVisitCountfor1080SB() {
	fetch('https://api.countapi.xyz/get/1080-sb/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		count1080sb.innerHTML = res.value;
	})
};

const countag64 = document.getElementById('ag64-display');

displayVisitCountforAG64();

function displayVisitCountforAG64() {
	fetch('https://api.countapi.xyz/get/ag64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countag64.innerHTML = res.value;
	})
};

const countbanjo = document.getElementById('banjo-display');

displayVisitCountforBANJO();

function displayVisitCountforBANJO() {
	fetch('https://api.countapi.xyz/get/banjo/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countbanjo.innerHTML = res.value;
	})
};

const countdiddy = document.getElementById('diddy-display');

displayVisitCountforDIDDY();

function displayVisitCountforDIDDY() {
	fetch('https://api.countapi.xyz/get/diddy/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countdiddy.innerHTML = res.value;
	})
};

const countdoom64 = document.getElementById('doom64-display');

displayVisitCountforDOOM64();

function displayVisitCountforDOOM64() {
	fetch('https://api.countapi.xyz/get/doom64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countdoom64.innerHTML = res.value;
	})
};

const countduke64 = document.getElementById('duke64-display');

displayVisitCountforDUKE64();

function displayVisitCountforDUKE64() {
	fetch('https://api.countapi.xyz/get/duke64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countduke64.innerHTML = res.value;
	})
};

const countexcite64 = document.getElementById('excite64-display');

displayVisitCountforEXCITE64();

function displayVisitCountforEXCITE64() {
	fetch('https://api.countapi.xyz/get/excite64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countexcite64.innerHTML = res.value;
	})
};

const countf0X = document.getElementById('f-zeroX-display');

displayVisitCountforF0X();

function displayVisitCountforF0X() {
	fetch('https://api.countapi.xyz/get/f-zeroX/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countf0X.innerHTML = res.value;
	})
};

const countmk64 = document.getElementById('mk64-display');

displayVisitCountforMK64();

function displayVisitCountforMK64() {
	fetch('https://api.countapi.xyz/get/mk64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmk64.innerHTML = res.value;
	})
};

const countmk4 = document.getElementById('mk4-display');

displayVisitCountformk4();

function displayVisitCountformk4() {
	fetch('https://api.countapi.xyz/get/mk4/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmk4.innerHTML = res.value;
	})
};

const countmt = document.getElementById('mt-display');

displayVisitCountforMT();

function displayVisitCountforMT() {
	fetch('https://api.countapi.xyz/get/mt64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countmt.innerHTML = res.value;
	})
};

const countray2 = document.getElementById('ray2-display');

displayVisitCountforray2();

function displayVisitCountforray2() {
	fetch('https://api.countapi.xyz/get/ray2/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countray2.innerHTML = res.value;
	})
};

const countSM64 = document.getElementById('sm64-display');

displayVisitCountforSM64();

function displayVisitCountforSM64() {
	fetch('https://api.countapi.xyz/get/sm64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countSM64.innerHTML = res.value;
	})
};

const countssb64 = document.getElementById('ssb64-display');

displayVisitCountforSSB64();

function displayVisitCountforSSB64() {
	fetch('https://api.countapi.xyz/get/ssb64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countssb64.innerHTML = res.value;
	})
};

const countwaver64 = document.getElementById('waver64-display');

displayVisitCountforWAVER64();

function displayVisitCountforWAVER64() {
	fetch('https://api.countapi.xyz/get/waver64/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countwaver64.innerHTML = res.value;
	})
};

const countyoshistory = document.getElementById('yoshistory-display');

displayVisitCountforYOSHISTORY();

function displayVisitCountforYOSHISTORY() {
	fetch('https://api.countapi.xyz/get/yoshistory/emugalaxy/')
	.then(res => res.json())
	.then(res => {
		countyoshistory.innerHTML = res.value;
	})
};

// GBA Games

const countadvancewars = document.getElementById('advw-display');

displayVisitCountADVW();

function displayVisitCountADVW() {
	fetch('https://api.countapi.xyz/get/advw/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countadvancewars.innerHTML = res.value;
	})
};

const countcasvaos = document.getElementById('casvaos-display');

displayVisitCountCASVAOS();

function displayVisitCountCASVAOS() {
	fetch('https://api.countapi.xyz/get/casvaos/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countcasvaos.innerHTML = res.value;
	})
};

const countcasvmoon = document.getElementById('casvmoon-display');

displayVisitCountCASVMOON();

function displayVisitCountCASVMOON() {
	fetch('https://api.countapi.xyz/get/casvmoon/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countcasvmoon.innerHTML = res.value;
	})
};

const countffta = document.getElementById('ffta-display');

displayVisitCountFFTA();

function displayVisitCountFFTA() {
	fetch('https://api.countapi.xyz/get/ffta/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countffta.innerHTML = res.value;
	})
};

const countff4a = document.getElementById('ff4a-display');

displayVisitCountFF4A();

function displayVisitCountFF4A() {
	fetch('https://api.countapi.xyz/get/ff4a/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countff4a.innerHTML = res.value;
	})
};

const countfegba = document.getElementById('fegba-display');

displayVisitCountFEGBA();

function displayVisitCountFEGBA() {
	fetch('https://api.countapi.xyz/get/fegba/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countfegba.innerHTML = res.value;
	})
};

const countfegbass = document.getElementById('fegbass-display');

displayVisitCountFEGBASS();

function displayVisitCountFEGBASS() {
	fetch('https://api.countapi.xyz/get/fegbass/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countfegbass.innerHTML = res.value;
	})
};

const countgoldsgba = document.getElementById('goldsgba-display');

displayVisitCountGOLDSGBA();

function displayVisitCountGOLDSGBA() {
	fetch('https://api.countapi.xyz/get/goldsgba/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countgoldsgba.innerHTML = res.value;
	})
};

const countkirbymirror = document.getElementById('kirbymirror-display');

displayVisitCountKIRBYMIRROR();

function displayVisitCountKIRBYMIRROR() {
	fetch('https://api.countapi.xyz/get/kirbymirror/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countkirbymirror.innerHTML = res.value;
	})
};

const countmandlss = document.getElementById('mandlss-display');

displayVisitCountMANDLSS();

function displayVisitCountMANDLSS() {
	fetch('https://api.countapi.xyz/get/mandlss/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmandlss.innerHTML = res.value;
	})
};

const countmgatgba = document.getElementById('mgatgba-display');

displayVisitCountMGATGBA();

function displayVisitCountMGATGBA() {
	fetch('https://api.countapi.xyz/get/mgatgba/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmgatgba.innerHTML = res.value;
	})
};

const countmetfusion = document.getElementById('metfusion-display');

displayVisitCountMETFUSION();

function displayVisitCountMETFUSION() {
	fetch('https://api.countapi.xyz/get/metfusion/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmetfusion.innerHTML = res.value;
	})
};

const countmetmission = document.getElementById('metmission-display');

displayVisitCountMETMISSION();

function displayVisitCountMETMISSION() {
	fetch('https://api.countapi.xyz/get/metmission/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmetmission.innerHTML = res.value;
	})
};

const countpokeemr = document.getElementById('pokeemr-display');

displayVisitCountPOKEEMR();

function displayVisitCountPOKEEMR() {
	fetch('https://api.countapi.xyz/get/pokeemr/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokeemr.innerHTML = res.value;
	})
};

const countpokefire = document.getElementById('pokefire-display');

displayVisitCountPOKEFIRE();

function displayVisitCountPOKEFIRE() {
	fetch('https://api.countapi.xyz/get/pokefire/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokefire.innerHTML = res.value;
	})
};

const countpokegla = document.getElementById('pokegla-display');

displayVisitCountPOKEGLA();

function displayVisitCountPOKEGLA() {
	fetch('https://api.countapi.xyz/get/pokegla/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokegla.innerHTML = res.value;
	})
};

const countpokeleaf = document.getElementById('pokeleaf-display');

displayVisitCountPOKELEAF();

function displayVisitCountPOKELEAF() {
	fetch('https://api.countapi.xyz/get/pokeleaf/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokeleaf.innerHTML = res.value;
	})
};

const countpokelight = document.getElementById('pokelight-display');

displayVisitCountPOKELIGHT();

function displayVisitCountPOKELIGHT() {
	fetch('https://api.countapi.xyz/get/pokelight/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokelight.innerHTML = res.value;
	})
};

const countpokeliquid = document.getElementById('pokeliquid-display');

displayVisitCountPOKELIQUID();

function displayVisitCountPOKELIQUID() {
	fetch('https://api.countapi.xyz/get/pokeliquid/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokeliquid.innerHTML = res.value;
	})
};

const countpokeruby = document.getElementById('pokeruby-display');

displayVisitCountPOKERUBY();

function displayVisitCountPOKERUBY() {
	fetch('https://api.countapi.xyz/get/pokeruby/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokeruby.innerHTML = res.value;
	})
};

const countpokesapp = document.getElementById('pokesapp-display');

displayVisitCountPOKESAPPHIRE();

function displayVisitCountPOKESAPPHIRE() {
	fetch('https://api.countapi.xyz/get/pokesapp/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokesapp.innerHTML = res.value;
	})
};

const countpokexygba = document.getElementById('pokexygba-display');

displayVisitCountPOKEXYGBA();

function displayVisitCountPOKEXYGBA() {
	fetch('https://api.countapi.xyz/get/pokexygba/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokexygba.innerHTML = res.value;
	})
};

const countsonicadv = document.getElementById('sonicadv-display');

displayVisitCountSONICADV();

function displayVisitCountSONICADV() {
	fetch('https://api.countapi.xyz/get/sonicadv/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicadv.innerHTML = res.value;
	})
};

const countsonicadv2 = document.getElementById('sonicadv2-display');

displayVisitCountSONICADV2();

function displayVisitCountSONICADV2() {
	fetch('https://api.countapi.xyz/get/sonicadv2/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicadv2.innerHTML = res.value;
	})
};

const countsonicadv3 = document.getElementById('sonicadv3-display');

displayVisitCountSONICADV3();

function displayVisitCountSONICADV3() {
	fetch('https://api.countapi.xyz/get/sonicadv3/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsonicadv3.innerHTML = res.value;
	})
};

const countmarioadv = document.getElementById('marioadv-display');

displayVisitCountMARIOADV();

function displayVisitCountMARIOADV() {
	fetch('https://api.countapi.xyz/get/marioadv/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmarioadv.innerHTML = res.value;
	})
};

const countmarioadv4 = document.getElementById('marioadv4-display');

displayVisitCountMARIOADV4();

function displayVisitCountMARIOADV4() {
	fetch('https://api.countapi.xyz/get/marioadv4/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmarioadv4.innerHTML = res.value;
	})
};

const countmarioadv2 = document.getElementById('marioadv2-display');

displayVisitCountMARIOADV2();

function displayVisitCountMARIOADV2() {
	fetch('https://api.countapi.xyz/get/marioadv2/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmarioadv2.innerHTML = res.value;
	})
};

const countmarioadv3 = document.getElementById('marioadv3-display');

displayVisitCountMARIOADV3();

function displayVisitCountMARIOADV3() {
	fetch('https://api.countapi.xyz/get/marioadv3/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmarioadv3.innerHTML = res.value;
	})
};

const countzeldattp4 = document.getElementById('zeldattp4-display');

displayVisitCountZELDATTP4();

function displayVisitCountZELDATTP4() {
	fetch('https://api.countapi.xyz/get/zeldattp4/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countzeldattp4.innerHTML = res.value;
	})
};

const countzeldatmc = document.getElementById('zeldatmc-display');

displayVisitCountZELDATMC();

function displayVisitCountZELDATMC() {
	fetch('https://api.countapi.xyz/get/zeldatmc/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countzeldatmc.innerHTML = res.value;
	})
};

//NDS Games

const countacwwds = document.getElementById('acwwds-display');

displayVisitCountacwwds();

function displayVisitCountacwwds() {
	fetch('https://api.countapi.xyz/get/acwwds/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countacwwds.innerHTML = res.value;
	})
};

const countkirbma = document.getElementById('kirbma-display');

displayVisitCountkirbma();

function displayVisitCountkirbma() {
	fetch('https://api.countapi.xyz/get/kirbma/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countkirbma.innerHTML = res.value;
	})
};

const countmkds = document.getElementById('mkds-display');

displayVisitCountmkds();

function displayVisitCountmkds() {
	fetch('https://api.countapi.xyz/get/mkds/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countmkds.innerHTML = res.value;
	})
};

const countnsmb = document.getElementById('nsmb-display');

displayVisitCountnsmb();

function displayVisitCountnsmb() {
	fetch('https://api.countapi.xyz/get/nsmb/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countnsmb.innerHTML = res.value;
	})
};

const countpokedia = document.getElementById('pokedia-display');

displayVisitCountpokedia();

function displayVisitCountpokedia() {
	fetch('https://api.countapi.xyz/get/pokedia/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokedia.innerHTML = res.value;
	})
};

const countpokeplat = document.getElementById('pokeplat-display');

displayVisitCountpokeplat();

function displayVisitCountpokeplat() {
	fetch('https://api.countapi.xyz/get/pokeplat/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countpokeplat.innerHTML = res.value;
	})
};

const countsm64ds = document.getElementById('sm64ds-display');

displayVisitCountsm64ds();

function displayVisitCountsm64ds() {
	fetch('https://api.countapi.xyz/get/sm64ds/emugalaxy')
	.then(res => res.json())
	.then(res => {
		countsm64ds.innerHTML = res.value;
	})
};