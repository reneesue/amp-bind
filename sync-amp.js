/*
  Content-Type: application/javascript
*/
document.addEventListener("DOMContentLoaded", function() {
	  var urls = [
		"https://heylink.me/Sedap138/",
		"https://heylink.me/slotmudahjackpot2023/",
		"https://heylink.me/sedap138-/",
		"https://heylink.me/situs-slot-pulsa-/",
		"https://heylink.me/Kijang777.id/",
		"https://heylink.me/kijang777-/",
		"https://heylink.me/situsterpercaya777/",
		"https://heylink.me/slot--gacor/",
		"https://heylink.me/situs-slot-gacor-id/",
		"https://heylink.me/situs-slot-terpercaya-2023-agen198/",
		"https://heylink.me/Agen198/",
		"https://heylink.me/situs-slot-gacor-hari/",
		"https://heylink.me/slotmudahjackpot/",
		"https://heylink.me/istana138-/",
		"https://heylink.me/slot-gacor-/",
		"https://heylink.me/SulTan138/",
		"https://heylink.me/IStana138/",
		"https://heylink.me/ubosport2023/",
		"https://heylink.me/bolacuan/",
		"https://heylink.me/ubosportresmi/"
	  ];

	  var btnContainer = document.querySelector(".btn-container");
	  var aElement = btnContainer.querySelectorAll("a[href]");

	  aElement.forEach(function(aElement) {
		aElement.addEventListener("click", function(event) {
		  event.preventDefault();
		  var randomUrl = urls[Math.floor(Math.random() * urls.length)];
		  window.location.href = randomUrl;
	  });
  });
});
