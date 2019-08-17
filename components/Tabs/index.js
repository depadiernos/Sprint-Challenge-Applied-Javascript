// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const getTopics = callback => {
  axios
    .get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => callback(response))
    .catch(error => console.log(error));
};

// log data to study the response
// const logData = ({ data }) => {
//     console.log(data);
//   };

const filterTopic = ({ currentTarget }) => {
  topic = currentTarget.textContent;
  currentTarget.classList.toggle('active-tab')
  console.log(currentTarget.classList)
  filteredCards = document.querySelectorAll(".card");
  if (currentTarget.classList != 'active-tab'){
    filteredCards.forEach(card => {
      if (card.dataset.topic != topic) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
  } else {
    
  }
};

const tabComponents = ({ data }) => {
  topicContainer = document.querySelector(".topics");
  data.topics.forEach(topic => {
    let tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;
    tab.addEventListener("click", filterTopic);
    topicContainer.appendChild(tab);
  });
};

getTopics(tabComponents);
