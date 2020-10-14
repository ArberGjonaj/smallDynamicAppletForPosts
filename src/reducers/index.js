import {combineReducers} from "redux";




const newsReducer=(state=[],action=[])=>{

if(action.type==="ADD_NEWS"){
    return [  ...state,

        {
            id:action.id,
          headline: action.payload[0],
          description: action.payload[1],
         author:action.payload[2],
         date:action.payload[3]
        }]}

if(action.type==="REMOVE_NEWS"){
  var arr=state.filter(a=>a!==action.payload)
  return  arr

}
return state

}



export default combineReducers({
    news: newsReducer
  });