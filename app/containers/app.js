import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect,Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';

//import * as counter from '../reducers/counter';

/* the above statement is equal to below multiple Statements
More here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

you can import reducers in two ways.

when you do * you actyally importing the whole reducers under reducers folder
but in order to import single reduces you can do this.

import reducer1 from '../reducers/reducer1'
import reducer2 from '../reducers/reducer2'
import reducer3 from '../reducers/reducer3'

and Combine all Reducers

Note: be careful with import Statements

http://stackoverflow.com/questions/37060490/store-does-not-have-a-valid-reducer-make-sure-the-argument-passed-to-combinered
http://stackoverflow.com/a/36408850/3666700

*/
import Reducer1 from '../reducers/Reducer1'
import Reducer2 from '../reducers/Reducer2'



import CounterApp from './counterApp';

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Combile Multiple reducers into One using combineReducers
const consolidatedReducers = combineReducers({
   Reducer1:Reducer1,
   Reducer2:Reducer2
});

/*

I thought of reducers as combining Objects, but there is a catch in here

combineReducers(reducer1,reducer2) does not work. ??
Intead wrap them in a object and assign them to another variable and then Combine

combineReducers({reducer1: <reducer1>, reducer2: <reducer2>})

be careful with this Error :
https://www.google.com/search?q=store+does+not+have+a+valid+reducer&oq=store+does+not&aqs=chrome.0.0j69i57j0l4.3902j0j4&sourceid=chrome&ie=UTF-8 */


// Create a Store from Muliple Reduces
// Remember that the store in Redux is one Huge Object,
//Individual Reducers Make up the store
/*Reducer 1 = {
   onePieceOfStore: lego1
}

Reducer 2 = {
   anotherPieceOfStore:lego2
}

First Combine the Lego's I mean Merge individual Legos into One. Or Muliple objects into One.

DoubleLego = singleLego + singleLego

const DoubleLego = combineReducers(singleLego,singleLego)
const DoubleLego = combineReducers(singleLego,singleLego)

Now Two Legos combine to Form a Single Lego, Now two individual Objects combine to form a SIngle Object and
this is our Store, let's create the Store using createStore kinda Imagine that you are painting two logos of different color to look like one.


const someStore = createStore(DoubleLego)

*/
const store = createStore(consolidatedReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
