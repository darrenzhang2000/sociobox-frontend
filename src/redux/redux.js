import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
// import Podcast from '../component/podcasts/podcast';


const STORE_EMAIL = 'STORE_EMAIL';
const STORE_USER_PROFILE = 'STORE_USER_PROFILE'
const STORE_ARTICLES = 'STORE_ARTICLES'
const UPDATE_SOCIAL_ISSUE = 'UPDATE_SOCIAL_ISSUE'

const initialState = {
    email: "d",
    articles: [],
    socialIssueOfTheMonth: "Plastic Pollution"
}

export function storeEmail(email){
    console.log('store user action')
    return {
        type: STORE_EMAIL,
        payload: {
            email: email,
        }
    }
}

export function storeUserProfile(profile){
    return {
        type: STORE_USER_PROFILE,
        payload: {
            profile: profile
        }
    }
}

export function storeArticles(articles){
    console.log('store art red', articles)
    return {
        type: STORE_ARTICLES,
        payload: {
            articles: articles
        }
    }
}

export function updateSocialIssue(socialIssue){
    return {
        type: UPDATE_SOCIAL_ISSUE,
        payload: {
            socialIssue: socialIssue
        }
    }
}

function userReducer(state=initialState, action){
    console.log('reducer hit')
    const {payload} = action;
    switch(action.type){
        case STORE_EMAIL:
            console.log('case store email')
            return {
                ...state,
                email: payload.email,
            }
        case STORE_USER_PROFILE:
            const { firstName, lastName, dateOfBirth, university, graduationDate, degree, major } = payload.profile
            return {
                ...state,
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                university: university,
                graduationDate: graduationDate,
                degree: degree,
                major: major
            }

        case STORE_ARTICLES:
            console.log(payload.articles, 'case')
            return {
                ...state,
                articles: payload.articles
            }
        
        case UPDATE_SOCIAL_ISSUE:
            return {
                ...state,
                socialIssueOfTheMonth: payload.socialIssue
            }

        default:
            return state
    }
}

let store = createStore(userReducer, composeWithDevTools());

export default store;