let text = document.getElementById("text");
let play = document.getElementById("play");
let replay = document.getElementById("replay");
let bgsound = document.getElementById("bgsound");

let vara = new Vara(
	"#text",
	"./vara/fonts/Pacifico/PacificoSLO.json",
	[
		{
			text: "Selamat Ulang Tahun, Sayangku <3",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1000,
			duration: 3000,
		},
		{
			text: "Aku selalu berharap yg terbaik buatmu :*",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Semoga yg kamu semogakan menjadi kenyataan yah, Cantik",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 2000,
			duration: 3000,
		},
		{
			text: "Maafin aku yah, kalo sering buat kamu bete.",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Walaupun aku nyebelin, aku tetep sayang kamu kok",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Beberapa hari ini mungkin kita lagi sibuk2nya",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Tapi aku tetep selalu ada kok buat kamu <3",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Di hari ulang tahunmu yang ke 21 ini",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Tetep jadi sayangku yang aku kenal yah",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Lebih dewasa lagi, lebih kuat lagi yah Cantik",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Kalo kamu cape, selalu ada aku kok disini",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Selalu jadi kebanggaan kedua orang tuamu,",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "Selalu jadi kebanggaanku juga yah.",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "I Love You :*",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 1700,
			duration: 3000,
		},
		{
			text: "",
			id: "last",
			y: 0,
			fromCurrentPosition: { y: false },
			delay: 3000,
		},
	],
	{
		fontSize: 18,
		strokeWidth: 2,
		textAlign: "center",
		letterSpacing: 4,
		autoAnimation: false,
	}
);

vara.ready(() => {
	let erase = true;
	text.hidden = true;
	replay.hidden = true;

	play.addEventListener("click", () => {
		play.hidden = true;
		text.hidden = false;
		bgsound.play();
		vara.playAll();
		vara.animationEnd((i, o) => {
			if (i == "last") {
				text.hidden = true;
				replay.hidden = false;
			}
			if (erase) {
				o.container.style.transition = "opacity 1s 1s";
				o.container.style.opacity = 0;
			}
		});
	});
});
