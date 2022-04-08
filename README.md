Photographer's App


A Photographer's App Built on Next.js with Firebase Auth and Cloud Firestore
Project by Code the Dream Canary React 2022 Practicum - Crested Canary Team


Code the Dream offers free intensive training in software development to people from diverse low-income backgrounds. Its Practicum curriculum offers opportunities for the Code the Dream School trainees to work collaboratively in dev teams on real-life, deployable software engineering projects.

About
This project is the work by team Crested Canary of the Code the Dream React 2022 Practicum to develop a photographer's app bootstrapped with Create Next App using Firebase Authentocation and Cloud Firestore. The app is deployed on Firebase for personal use by the team members and as the final exercise of the project.

Installation
Clone or fork from this repo if you would like to tweak and add features to the app. You may push a branch back here to give us feedback on how the app has been taken further. You can also clone the app to use it personally in your browser. The app has minimal dependencies and can easily be set up with a Google account, which come with access to Firebase, as follows. In your terminal, run:

$ git clone https://github.com/dumpidum/CTD-Crested-Canary-Photographer.git
or

$ git clone git@github.com:dumpidum/CTD-Crested-Canary-Photographer.git
Once you have cloned the repo, in your local project directory run:

$ npm install
Next, go to the Firebase website and sign in with your Google account. Follow their official documentation to set up a project⎯which can be done with the Spark plan that is free⎯and add your app to the project. In the project console, go to Project Settings, copy the configuration keys for using the Firebase SDK, and create a .env.local file for those keys in the root directory of your project. The configuration variables will then be imported in the /config/firebaseConfig.js file that you cloned along with the project.

Firebase Config

Return to the Firebase console and follow the on-screen instructions to add Cloud Firestore and Authentication to your project⎯choose email and password as the sign-in method. You can find help in the official documentation should you feel uncertain.

Now you are all set and ready to use the Photographer's App.

Usage
In your project directory run:

$ npm run dev
And you have the app in port localhost:3000.


Please let us know of any bugs or imperfections. Your input will be greatly appreciated. It has been a wonderful learning experience for us.

Contributors
Ignat Babenko, Kevin Kirui, Andrew Shapiro, Fabian Aparicio




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
