import { combineReducers } from 'redux';

//tabReducer
function showTab(state = 'will',action){
	switch (action.type) {
		case 'showWill':
			return 'will'
		case 'showHave':
			return 'have'
		default:
			return state
  }
}

// supdata reducer
function supData(state = [],action){
	switch (action.type) {
		case 'supdata':
			return action.data
		default:
			return state
	}
}

// prodata reducer
function proData(state = [],action){
	switch (action.type) {
		case 'prodata':
			return action.data
		case 'updateProStatus':
			state[action.data].status = 1;
			return state
		default:
			return state
	}
}

// nowSupStatus reducer
function nowSupStatus(state = false,action){
	switch (action.type) {
		case 'updateSupStatus':
			return action.data
		default:
			return state
	}
}

// updateProStatus reducer
function nowProStatus(state = false,action){
	switch (action.type) {
		case 'updateProStatus':
			return action.data
		default:
			return state
	}
}

//loading reducer
function loading(state = false,action){
	switch (action.type) {
		case 'loading':
			return action.status
		default:
			return state
	}
}

const rootReducer = combineReducers({
  showTab,
  supData,
  proData,
  nowSupStatus,
  loading,
});

export default rootReducer;