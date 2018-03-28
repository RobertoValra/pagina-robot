$(document).ready(function(){
	var clickValue,
		operation,
		total = 0,
		kryptonQty = 0, occulusQty = 0, irisQty = 0, everestQty = 0, boyaQty = 0,
		kryptonTotal = 0, occulusTotal = 0, irisTotal = 0, everestTotal = 0, boyaTotal = 0;
		
	valPerOption = function(){
		$('.modal .modal-body .pack-item-body .moreless-btn').click(function(){
			if($(this).hasClass('more')){
				operationClicked = true;
			}else{
				operationClicked = false;
			}
			var thisCliked = $(this).closest('li.item-list').children();
			if ( thisCliked.hasClass('krypton')){
				clickValue = 10;
				if ( operationClicked ){
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
				console.log($(this).siblings());
				$(this).siblings('span.number').text(kryptonQty)
				$(this).parent().prev().find('span.total').text("$" + kryptonTotal)
			}
			if ( thisCliked.hasClass('occulus')){
				clickValue = 20;
				if ( operationClicked ){
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
				$(this).siblings('span.number').text(occulusQty)
				$(this).parent().prev().find('span.total').text("$" + occulusTotal)
			}
			if ( thisCliked.hasClass('iris')){
				clickValue = 30;
				if ( operationClicked ){
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
				$(this).siblings('span.number').text(irisQty)
				$(this).parent().prev().find('span.total').text("$" + irisTotal)
			}
			if ( thisCliked.hasClass('everest')){
				clickValue = 40;
				if ( operationClicked ){
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
				$(this).siblings('span.number').text(everestQty)
				$(this).parent().prev().find('span.total').text("$" + everestTotal)
			}
			if ( thisCliked.hasClass('boya')){
				clickValue = 50;
				if ( operationClicked ){
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
				$(this).siblings('span.number').text(boyaQty)
				$(this).parent().prev().find('span.total').text("$" + boyaTotal)
			}
			total = kryptonTotal + occulusTotal + irisTotal + everestTotal + boyaTotal;
			
			$('.modal-dialog .modal-content .modal-footer h2').text("Total: $" + total);
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
	resetVal();
})