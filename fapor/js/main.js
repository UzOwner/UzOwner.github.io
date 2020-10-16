window.onscroll = function() {scrolling()};

var headerTop = document.querySelector(".header-top");
var sticky = headerTop.offsetTop;

function scrolling() {
  if (window.pageYOffset > sticky) {
    headerTop.classList.add("sticky");
  } else {
    headerTop.classList.remove("sticky");
  }
}

const items = document.querySelectorAll(".accordeon-section__header");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
	for (i = 0; i < items.length; i++) {
	  	items[i].setAttribute('aria-expanded', 'false');
	}
  	if (itemToggle == 'false') {
    	this.setAttribute('aria-expanded', 'true');
  	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

$(function() {
	let filter = $("[data-filter]");

	filter.on("click", function(event) {
		event.preventDefault();
		$(this).addClass("recent-active");
		if ($(this).hasClass("recent-active")) {
			filter.removeClass("recent-active");
			$(this).addClass("recent-active");
		}

		let cat = $(this).data('filter');

		if (cat == 'all') {
			$('[data-cat]').removeClass("hide");
		} else {
			$("[data-cat]").each(function() {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});
});
