// import {Dispatch, ReducerAction} from "react";
import {ShoppingCartItem, BookItem} from "../types";


export const CartTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    CLEAR:'CLEAR'
};

type AppActions = {
    id:number;
    type: 'ADD' | 'REMOVE'  | 'CLEAR';
    item: BookItem;
}
const existingItem = (cart: ShoppingCartItem[], id:number) => cart.find((item)  => item.id ===id);

export const cartReducer = (state:ShoppingCartItem[], action:AppActions) => {
    switch (action.type) {
        case CartTypes.ADD:
             if(existingItem(state, action.item.bookId)){
                 return state.map((book) =>
                     book.id === action.item.bookId
                     ? {...book, quantity:book.quantity + 1 }
                         :book

                 );
             }
            // console.log(quantity);
                 return [
                     ...state,
                     {id: action.item.bookId, book: action.item, quantity: 1}
                 ];
        // case CartTypes.REMOVE:
        //     /*
        //        will be defiend in Project 7
        //      */
        //     return state;
        // case CartTypes.CLEAR:
        //     return state;    // will be defined in Project 7
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
};