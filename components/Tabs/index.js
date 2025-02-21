// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        console.log(response);
        const topicBar = document.querySelector(`.topics`);
        response.data.topics.forEach((element) => {
            topicBar.appendChild(buildTab(element));
        });
    });

function buildTab(topic) {
    //Construct elements
    const
        tab = document.createElement(`div`);

    //Set contents/styling
    tab.textContent = topic;

    //Set classes
    tab.classList.add(`tab`);

    //Define structure


    //Add events


    return tab;
}