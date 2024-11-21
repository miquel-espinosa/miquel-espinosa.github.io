window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})


// Modal Image functionality
document.addEventListener('DOMContentLoaded', () => {
	// Functions to open and close modal
	function openModal($el) {
	  $el.classList.add('is-active');
	}
  
	function closeModal($el) {
	  $el.classList.remove('is-active');
	}
  
	function closeAllModals() {
	  (document.querySelectorAll('.modal') || []).forEach(($modal) => {
		closeModal($modal);
	  });
	}
  
	// Add click events
	const $imageModal = document.getElementById('imageModal');
	const $openModalBtn = document.getElementById('openModalBtn');
	
	$openModalBtn.addEventListener('click', () => {
	  openModal($imageModal);
	});
  
	// Add modal close events
	(document.querySelectorAll('.modal-background, .modal-close') || []).forEach(($close) => {
	  $close.addEventListener('click', () => {
		closeAllModals();
	  });
	});
  
	// Add keyboard event for closing
	document.addEventListener('keydown', (event) => {
	  if (event.code === 'Escape') {
		closeAllModals();
	  }
	});

	// Add zoom functionality to modal image
	const modalImage = document.getElementById('modalImage');
	
	modalImage.addEventListener('click', function(e) {
	  e.stopPropagation(); // Prevent modal from closing when clicking the image
	  
	  if (this.classList.contains('zoomed')) {
		this.classList.remove('zoomed');
	  } else {
		// Set zoom origin to click position
		const rect = this.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		this.style.transformOrigin = `${x}px ${y}px`;
		this.classList.add('zoomed');
	  }
	});

	// Reset zoom when modal is closed
	const modalClose = document.querySelector('.modal-close');
	const modalBackground = document.querySelector('.modal-background');

	function resetZoom() {
	  modalImage.classList.remove('zoomed');
	}

	modalClose.addEventListener('click', resetZoom);
	modalBackground.addEventListener('click', resetZoom);
  }); 