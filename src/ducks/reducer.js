const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: false,
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '3b',
  firstName: 'doug dimadome owner of the dimesdale dimadome',
  lastName: '',
  email: ''
}

const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'; 
const UPDATE_CITY = 'UPDATE_CITY'; 
const UPDATE_PROP = 'UPDATE_PROP'; 
const UPDATE_FOUND = 'UPDATE_FOUND'; 
const UPDATE_AGENT = 'UPDATE_AGENT'; 
const UPDATE_COST = 'UPDATE_COST'; 
const UPDATE_CREDIT = 'UPDATE_CREDIT'; 
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT'; 
const UPDATE_HISTORY = 'UPDATE_HISTORY'; 
const UPDATE_EMAIL = 'UPDATE_EMAIL'; 
const UPDATE_FIRST = 'UPDATE_FIRST'; 
const UPDATE_LAST = 'UPDATE_LAST'; 
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE'; 
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO'; 
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE'; 

function reducer( state = initialState, action ){ 
   switch( action.type ){
     case UPDATE_LOAN_TYPE:
         return Object.assign( {}, state, { loanType: action.payload } );
     case UPDATE_ADDRESS_ONE:
         return Object.assign( {}, state, { addressOne: action.payload } );
     case UPDATE_ADDRESS_TWO:
         return Object.assign( {}, state, { addressTwo: action.payload } );
     case UPDATE_ADDRESS_THREE:
         return Object.assign( {}, state, { addressThree: action.payload } );
     case UPDATE_PROPERTY_TYPE:
         return Object.assign( {}, state, { propertyType: action.payload } );
     case UPDATE_CITY:
         return Object.assign( {}, state, { city: action.payload } );
     case UPDATE_EMAIL:
         return Object.assign( {}, state, { email: action.payload } );
     case UPDATE_FIRST:
         return Object.assign( {}, state, { firstName: action.payload } );
     case UPDATE_LAST:
         return Object.assign( {}, state, { lastName: action.payload } );
     case UPDATE_PROP:
         return Object.assign( {}, state, { propToBeUsedOn: action.payload } );
     case UPDATE_FOUND:
         return Object.assign( {}, state, { found: action.payload } );
     case UPDATE_AGENT:
         return Object.assign( {}, state, { realEstateAgent: action.payload } );
     case UPDATE_COST:
         return Object.assign( {}, state, { cost: action.payload } );
     case UPDATE_DOWN_PAYMENT:
         return Object.assign( {}, state, { downPayment: action.payload } );
     case UPDATE_CREDIT:
         return Object.assign( {}, state, { credit: action.payload } );
     case UPDATE_HISTORY:
         return Object.assign( {}, state, { history: action.payload } );

     default: return state;
   }
} 

export function updateAddressOne( addressOne ){
 return {
   type: UPDATE_ADDRESS_ONE,
   payload: addressOne
 }
}
export function updateEmail( email ){
 return {
   type: UPDATE_EMAIL,
   payload: email
 }
}
export function updateFirst( name ){
 return {
   type: UPDATE_FIRST,
   payload: name
 }
}
export function updateLast( name ){
 return {
   type: UPDATE_LAST,
   payload: name
 }
}
export function updateAddressTwo( addressTwo ){
 return {
   type: UPDATE_ADDRESS_TWO,
   payload: addressTwo
 }
}
export function updateAddressThree( addressThree ){
 return {
   type: UPDATE_ADDRESS_THREE,
   payload: addressThree
 }
}
export function updateLoanType( loanType ){
 return {
   type: UPDATE_LOAN_TYPE,
   payload: loanType
 }
}
export function updateHistory( history ){
 return {
   type: UPDATE_HISTORY,
   payload: history
 }
}
export function updateCost( cost ){
 return {
   type: UPDATE_COST,
   payload: cost
 }
}
export function updateCredit( credit ){
 return {
   type: UPDATE_CREDIT,
   payload: credit
 }
}
export function updateDownPayment( downPayment ){
 return {
   type: UPDATE_DOWN_PAYMENT,
   payload: downPayment
 }
}
export function updateFound( found ){
 return {
   type: UPDATE_FOUND,
   payload: found
 }
}
export function updateAgent( agent ){
 return {
   type: UPDATE_AGENT,
   payload: agent
 }
}
export function updatePropertyType( property ) {
 return {
   type: UPDATE_PROPERTY_TYPE,
   payload: property
 }
}
export function updateCity(city){
  return {
    type: UPDATE_CITY,
    payload: city
  }
}
export function updateProp(prop){
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export default reducer; 