import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

import { db } from "../../../config/firebaseConfig";
import * as firestoreFunctions from 'firebase/firestore'

export default NextAuth({

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),

    ],
    adapter: FirebaseAdapter({
        
        db:db,
        ...firestoreFunctions,
    }),

});