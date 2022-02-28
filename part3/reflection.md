# Part 3
The scope for the Lego tests can be considered as System Tests and Accepting Tests.  Theses tests written are ensuring the functionality of at least two features the page has: 

 - Searching 
 -  Purchase

Each feature has its own workflow and procedures. For instance, purchasing can contain functionality tests but also load tests. Purchasing can be part of the Acceptance Tests due to its a core functionality of our product. Without sales, the company cannot live. 

To automate these features, we need to see what the project requirements are and also any limitations of our tool. Knowing this information, business analysts and quality analysts can design user stories accurately. Automation is critical for this page, due to the large range of products and global availability.

One of the cons of automating these features is that the flow is not always consistent. We have popup windows depending on the locality of the page, offers, or surveys. The survey popups happen at "random" moments. So, when this element is visible, our tests will fail - if no function is written for them. 

Lastly, although the website contains selectors designed for QA, there are still sections that will relay on xpath for easier targeting.

