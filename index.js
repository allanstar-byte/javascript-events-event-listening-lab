function addingEventListener() {
    alert("'I was clicked!'")
    const input_2 = document.getElementById("input")
    input_2.addEventListener("click", addingEventListener)
}

// const input_2 = document.getElementById("input")

// input_2.addEventListener("click", addingEventListener)

let input_1 = document.getElementById('input');
input_1.addEventListener('click', function() {
    alert('I was clicked!');
});

let input = document.getElementById("input")

function lisner() {
    // if (input != String)
    alert("Kiss me Bono !")
}

input.addEventListener("mouseleave", lisner)