// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    // create Elements for the component
    let headerConatiner = document.createElement('div')
    headerConatiner.classList.add('header')
    let headerSpan = document.createElement('span')
    headerSpan.classList.add('date')
    headerSpan.textContent = "MARCH 28, 2019"
    let headerHeading = document.createElement('h1')
    headerHeading.textContent = "Lambda Times"
    let headerTemp = document.createElement('span')
    headerTemp.classList.add('temp')
    headerTemp.textContent = "98°"
    
    // append child elements to container element
    headerConatiner.appendChild(headerHeading)
    headerConatiner.appendChild(headerSpan)
    headerConatiner.appendChild(headerTemp)

    // return the container
    return headerConatiner
}

document.querySelector('.header-container').appendChild(Header())