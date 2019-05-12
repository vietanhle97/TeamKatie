function add_to_banner(category, img_url){
	var banner = document.getElementById("banner");
	var link = document.createElement('a');
	link.setAttribute('href','');
	link.className = 'category';
	link.id = category;
	var img = document.createElement('img');
	img.className = "shadow rounded";
	img.style.backgroundColor = 'transparent';
	img.setAttribute('src', img_url);
	var span = document.createElement('span');
	span.className = 'caption';
	span.appendChild(document.createTextNode(category));
	link.appendChild(img);
	link.appendChild(span);
	banner.appendChild(link);
}

function display_category(){
	var categories = pr_loadAllCategories();
	for(i=0;i<categories.length;i++){
		var img = pr_loadCategoryImage(categories[i]);
		var category = categories[i]
		add_to_banner(category, img);
		change(category);
	}
}


function change(i){
	var category = document.getElementById(i);
	category.addEventListener("mousedown", function(){
		category.href = 'category.html'
		sessionStorage.setItem("category",category.id)
		return (category.id);
	})
}
var $progressBar = $('.progress-bar');
var $progress = $('.progress');
var bar_timer = 0;
function progress(){
	if(bar_timer == 20) {
		$progress.css('display','none');
		return;}

	bar_timer++
	var width = bar_timer*5 + "%";

	console.log(width);
	$progressBar.css('width', width);
	setTimeout(progress, 100);
}
progress();
test(display_category)

// setTimeout(function() {
//     $progressBar.css('width', '25%');
//     setTimeout(function() {
//         $progressBar.css('width', '50%');
//         setTimeout(function() {
//             $progressBar.css('width', '75%');
//             setTimeout(function(){
//             	$progressBar.css('width', '100%');
//             	display_category();
//             	$progress.css('display', 'none');
//             }, 500)
//         }, 500); 
//     }, 500); 
// }, 500);
