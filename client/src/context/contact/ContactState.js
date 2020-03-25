import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER
} from '../types';

const ContactState = (props) => {
	const initialState = {
		contacts: [
			{
				type: 'personal',
				id: 1,
				name: 'Mel Williams',
				email: 'melwil@gm.com',
				phone: '111-1125-11-19'
			},
			{
				type: 'personal',
				id: 2,
				name: 'Sara Wattson',
				email: 'sara@gm.com',
				phone: '111-1125-12-19'
			},
			{
				type: 'professional',
				id: 3,
				name: 'Harry White',
				email: 'hwhite@gm.com',
				phone: '112-1125-11-19'
			}
		]
	};

	const [ state, dispatch ] = useReducer(contactReducer, initialState);

	//Add Contact
	const addContact = (contact) => {
		contact.id = uuidv4();
		dispatch({
			type: ADD_CONTACT,
			payload: contact
		});
	};

	//Delete Contact

	//Set Current Contact

	//Clear Current Contact

	//Update Contact

	//Filter Contacts

	//Clear Filter

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				addContact
			}}>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
