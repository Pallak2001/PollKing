//declaring counter variables
var countOne = 0, countTwo = 0, countThree = 0, countFour = 0;

function pollCount(buttonElement) {//poll counting
    //storing inputs
    var buttonClickedId = buttonElement.id;
    if (buttonClickedId === 'aOne') {
        countOne += 1;
    } else if (buttonClickedId === 'aTwo') {
        countTwo += 1;
    } else if (buttonClickedId === 'aThree') {
        countThree += 1;
    } else if (buttonClickedId === 'aFour') {
        countFour += 1;
    } else {
    }
    
    //totals and percentages
    var totalVotes = countFour + countOne + countTwo + countThree;
    var perOne = Math.round((countOne / totalVotes)* 100) , perTwo = Math.round((countTwo / totalVotes)*100), perThree = Math.round((countThree / totalVotes)*100), perFour = Math.round((countFour / totalVotes)*100); 
    
    //output
        alert("Chocolate: " + countOne + " (" + perOne + "%)" +
        "\n Vanilla: " + countTwo + " (" + perTwo + "%)" +
        "\n Strawberry: " + countThree + " (" + perThree + "%)" +
        "\n Mint: " + countFour + " (" + perFour + "%)" +
        "\n Total Votes: " + totalVotes);
}

function toggleOverlay(){
	var overlay = document.getElementById('overlay');
	var specialBox = document.getElementById('specialBox');
	overlay.style.opacity = .8;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
		overlay.style.display = "block";
		specialBox.style.display = "block";
	}
}

