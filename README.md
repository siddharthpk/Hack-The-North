# Refugee Response

## Inspiration
Refugee Response was inspired by the current events taking place in Afghanistan, with many new Refugees, as a team coming from immigrant families we understand how difficult it can be to come to a new country and learn the language and its culture. We created a platform that Refugees can turn to and rely on to have their questions answered. Things such as,

- Where is the nearest halal grocer?
- Where can I find a Temple in Mississauga?
- What resources can I use to start learning English?
- How does the Canadian high school/post-secondary system work?

## What it does
Refugee response is a web app that anyone can access for FREE. A Refugee can get their question's answered by a Helper, They would do this by clicking on the "I'm looking for help" button found on our landing page and will be able to create a post with a title and main body. Similarly, a Helper (i.e anyone looking to help) can create an account and have their field populated with posts created by Refugees which they can then respond to and assist the Refugee from anywhere in the world!

## How we built it
Refugee Response has a frontend built using **React-Redux** and styled with **Material UI** library. The backend runs on a **NodeJs** Server with a **Cockroach Cloud Cluster** connected via **Sequelize**. We deployed the frontend on **Netlify** and the backend on **Heroku**.

## Challenges we ran into
We ran into issues while creating the posts form along with creating a working API that can connect to our backend, as well as fetch and upload data. Other backend errors were switching our DB from MongoDB (used for testing) to CockroachDB's server and performing cert checks while deploying the backend. Some front-end challenges were creating and styling using the Material Ui library. Deployment on Azure was creating issues for us with the GitHub authorization and due to time constraints, we had to go with Heroku.

We also had some first-time hackers and users of git but we were all there to provide our help and advice to each other on the team which created a very educational/productive environment.

## Accomplishments that we're proud of
We were able to get a working model set up in only 36 hours! As well as the meaningful work we put in, showing us that with our passion for software, we can change the lives of others for the better.

## What we learned
The frontend team got a more in-depth understanding of how to create a React app along with the caveats of styling the page using the Materials Ui library. Some of our members also got a look into git and how it's used to collaborate on projects in a professional environment.

## What's next for Refugee Response
Refugee Response with more development would expand into developing its own chat room so users have a more organized way to view their messages. We would also look into offering volunteer hours to Helpers. This is because it's required for Canadian High-school students to complete a minimum of forty volunteer hours. This can allow us to have far more active and participating helpers online that in exchange can earn their volunteer hours from the comfort of their device. As users grow on our site we'd also like to improve security measures such as Google's OAuth to allow users to sign in with their email and have the peace of mind that their data is protected and safe.
