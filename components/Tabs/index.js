// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsEntry = document.querySelector('.topics');

function tabs(object) {
    const tabsDiv = document.createElement('div');

    tabsDiv.classList.add('tab');

    tabsDiv.textContent = object.topics;

    topicsEntry.appendChild(tabsDiv);
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response, 'Data from Lambda School');
        response.data.topics.forEach((item) => {
            topicsEntry.appendChild(tabs(response.data));
        });
    })
    .catch(error => {
        console.log(error, 'The data was not returned');
    });
    
        // response.data.topics.forEach((item) => {
        //     topicsEntry.appendChild(tabs(response.data.topics));
        // });
 

