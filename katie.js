// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var myTable = document.getElementById("myTable");
var myInput = $("#katie__category");
function find(game) {
	for (i = 0; i < pairs.length; i++) {
		if (pairs[i]["game"].toLowerCase() === game.toLowerCase()){
			return i;
		}
	}
	return -1;
};
function countRow(){
	return myTable.rows.length;
};
$(function () {
	var all_capital =[];
	for (i=0;i<pairs.length;i++){
		all_capital.push(pairs[i]["game"])
	};
    $("#katie__category").autocomplete({
        source: all_capital,
        select: function(event, ui) {
        			if(ui.item){
            			$("#katie__category").val(ui.item.value);
            			$('#search').click();
            			$(this).value = "";
            			return false;

        			}
    			},
    	delay: 0
    });
 });
$(document).ready(function() {
  $("#katie__category").keyup(function (event) {
    if (event.keyCode === 13) {
        answerQuestion();
        return false;
    }
  });
});
function addRow (value1, value2, value3, value4) {
	var numRows = myTable.rows.length;
  	var newRow = myTable.insertRow(3);
  	newRow.id = value4;

  	var newCell = newRow.insertCell(0);
  	var newCell1 = newRow.insertCell(1);
  	newCell1.id = 'newCell1'
  	var newCell2 = newRow.insertCell(2);
  	newCell2.id = 'cell';
  	newCell.innerHTML = value1; 
  	newCell1.innerHTML = value2;
  	newCell3 = newRow.insertCell(3);
  	
  	
 	newCell2.innerHTML = value3;
 	if (value4 == 'correct'){
 		newCell3.innerHTML += '<button type="button" id="Link" value="Goto" onclick="searchName(this.parentNode.parentNode)" style="float: right;"><b>Go to Tutorial</b></button>';
 	}
};
function searchName(row){
	var cell = row.cells[0];
	var game = cell.textContent + " board game tutorial";
    href = "https://www.google.com/search?source=hp&ei=EsjFXLa7LYGR8gX6q67oDw&q="  + game + "&btnK=Google+Search&oq=" + game;
    window.open(href);
};
function answerQuestion(){
	var myInput = $("#katie__category");
	var check_all = document.getElementById('check_all');
	var check_corr = document.getElementById('check_corr');
	var check_wrong = document.getElementById('check_wrong');
	if (myInput.val().length !== 0) {
		var index = find(myInput.val());
		if (index != -1){
			var game = pairs[i]["game"];
			var category = pairs[i]["category"];
			if (myInput.val().toLowerCase().length%2 ==0) {
				addRow(game, category, 'Available', 'correct');	
			}
			else{
				addRow(game, category, 'Coming Soon', 'wrong');
			}
		}
		else{
			if (category == null){
				addRow(myInput.val(), 'Unknown', 'Unavailable', 'wrong');
			}
		}
	myInput.val('');
	}		
};
function All(){
	var all = document.getElementById('All');
	var numRows = countRow();
	if (all.checked == true){
		for(i=0;i<numRows;i++){
			myTable.rows[i].style.display = '';
		}
	}
};
function Available(){
	var available = document.getElementById('Available');
	if (available.checked == true){
		var numRows = countRow();
		for(i=0;i<numRows;i++){
			var row = myTable.rows[i];
			if (row.id === 'wrong'){
				row.style.display = 'none';
			}else if(row.id === 'correct'){
				row.style.display = '';
			} 
		}
		
	}
};
function Unavailable() {
	var unavailable	= document.getElementById('Unavailable')
	if (unavailable.checked == true){
		var numRows = countRow();
		for(i=0;i<numRows;i++){
			var row = myTable.rows[i];
			if (row.id ==='correct'){
				row.style.display = 'none';
			}else if(row.id ==='wrong'){
				row.style.display = '';
			} 
		}
		
	} 

};





