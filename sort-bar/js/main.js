/**
* SortItems
* @param listSelector {string} - селектор родителя
* @param listItemsSelector {string} - селектор элемента
*/

sortItems={
	listSelector:'.item__list',
	listItemsSelector:'.item',

	init:function(){
		list=$(sortItems.listSelector);
		listitems=list.children(sortItems.listItemsSelector).get();

		$('.js-sort-bar__btn_duration').on('click', function(){
			$('.sort-bar__btn').not($(this)).removeClass('active desc');
			$(this).addClass('active');
			$(this).toggleClass('desc');
			sortItems.sort('data-duration', $(this).hasClass('desc'));
			return false;
		});

		$('.js-sort-bar__btn_price').on('click', function(){
			$('.sort-bar__btn').not($(this)).removeClass('active desc');
			$(this).addClass('active');
			$(this).toggleClass('desc');
			sortItems.sort('data-price', $(this).hasClass('desc'));
			return false;
		});
	},
	sort:function(param, desc){

		listitems.sort(function(a, b) {
		   var compA = parseInt($(a).attr(param));
		   var compB = parseInt($(b).attr(param));
		   if(desc){
		   	return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
		   } else{
		   	return (compB < compA) ? -1 : (compB > compA) ? 1 : 0;
		   }
		})
		$.each(listitems, function(idx, itm) { list.append(itm); });
			}
};

sortItems.init();