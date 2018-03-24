$(document).ready(function(){
	var clickValue,
		operation,
		total = 0,
		kryptonQty = 0, occulusQty = 0, irisQty = 0, everestQty = 0, boyaQty = 0,
		kryptonTotal = 0, occulusTotal = 0, irisTotal = 0, everestTotal = 0, boyaTotal = 0;
		
	valPerOption = function(){
		$('.body span').click(function(){
			var operationClicked = $(this).attr('class')
			var thisCliked = $(this).closest('li.item-list').find('p').attr('class');
			if ( thisCliked == "krypton" ){
				clickValue = 10;
				if ( operationClicked === "more" ){
					kryptonQty = kryptonQty + 1;
					kryptonTotal = clickValue * kryptonQty;
				}else{
					if ( kryptonQty === 0 ){
						alert("No puedes reducir el número")
					}else{
						kryptonQty = kryptonQty - 1;
						kryptonTotal = kryptonTotal - clickValue;
					}
				}
				$(this).siblings().find('span.number').text(kryptonQty)
				$(this).siblings().find('span.total').text(kryptonTotal)
			}
			if ( thisCliked == "occulus" ){
				clickValue = 20;
				if ( operationClicked === "more" ){
					occulusQty = occulusQty + 1;
					occulusTotal = clickValue * occulusQty;
				}else{
					if ( occulusQty === 0 ){
						alert("No puedes reducir el número")
					}else{
						occulusQty = occulusQty - 1;
						occulusTotal = occulusTotal - clickValue;
					}
				}
				$(this).siblings().find('span.number').text(occulusQty)
				$(this).siblings().find('span.total').text(occulusTotal)
			}
			if ( thisCliked == "iris" ){
				clickValue = 30;
				if ( operationClicked === "more" ){
					irisQty = irisQty + 1;
					irisTotal = clickValue * irisQty;
				}else{
					if ( irisQty === 0 ){
						alert("No puedes reducir el número")
					}else{
						irisQty = irisQty - 1;
						irisTotal = irisTotal - clickValue;
					}
				}
				$(this).siblings().find('span.number').text(irisQty)
				$(this).siblings().find('span.total').text(irisTotal)
			}
			if ( thisCliked == "everest" ){
				clickValue = 40;
				if ( operationClicked === "more" ){
					everestQty = everestQty + 1;
					everestTotal = clickValue * everestQty;
				}else{
					if ( everestQty === 0 ){
						alert("No puedes reducir el número")
					}else{
						everestQty = everestQty - 1;
						everestTotal = everestTotal - clickValue;
					}
				}
				$(this).siblings().find('span.number').text(everestQty)
				$(this).siblings().find('span.total').text(everestTotal)
			}
			if ( thisCliked == "boya" ){
				clickValue = 50;
				if ( operationClicked === "more" ){
					boyaQty = boyaQty + 1;
					boyaTotal = clickValue * boyaQty;
				}else{
					if ( boyaQty === 0 ){
						alert("No puedes reducir el número")
					}else{
						boyaQty = boyaQty - 1;
						boyaTotal = boyaTotal - clickValue;
					}
				}
				$(this).siblings().find('span.number').text(boyaQty)
				$(this).siblings().find('span.total').text(boyaTotal)
			}
			total = kryptonTotal + occulusTotal + irisTotal + everestTotal + boyaTotal;
			
			$('h2').text("Total: $" + total);
		});
	}
	
	scrollNav = function() {
	  $('.nav a, .next-section-btn a, .plans a, .go-to-top-btn a').click(function(){ 
		//Toggle Class   
		$(this).closest('li').addClass("active");
		var theClass = $(this).attr("class");
		$('.'+theClass).parent('li').addClass('active');
		//Animate
		$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 1500);
		return false;
	  });
	  $('.scrollTop a').scrollTop();
	}
	
	hoverOnPack = function(){
		$(document).on('mouseenter', '.effect-ming', function(){
			$(this).find('span.pack-img-title').fadeOut();
			$(this).find('h2').css('opacity', '10');
		});
		$(document).on('mouseleave', '.effect-ming', function(){
			$(this).find('span.pack-img-title').fadeIn();
			$(this).find('h2').css('opacity', '0');
		});
	}
	
	scrollNav();
	valPerOption();
	hoverOnPack();
})