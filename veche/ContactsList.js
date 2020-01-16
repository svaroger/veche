import React from 'react'
import { SectionList, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'
// item: { name: String, phone: String }, ...obj.item - all props of contact

/* renderSeparator = () => {  
    return (  
        <View  
            style={{  
                height: 1,  
                width: "100%",  
                backgroundColor: "#737373",  
            }}  
        />  
    );  
};  
*/

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>

const ContactsList = props => {
  const  renderItem = ({ item }) => (
  <Row {...item}
    onSelectContact={(contact) => {
    props.onSelectContact(contact);
  }} />
  );

  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    }
  }, {})

  const sections = Object.keys(contactsByLetter).sort().map(letter => ({
    title: letter,
    data: contactsByLetter[letter],

  }))


  const renderSeparator = () => {  
      return (  
        <View  
          style={{  
            height: 1,  
            width: "79%",  
            backgroundColor: "#CED0CE",
            marginLeft: '14%',
            marginRight: '7%',
          }}  
        />    
      );  
  };  


  return (
  <SectionList
    sections={sections}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    SectionSeparatorComponent={renderSeparator}
    ItemSeparatorComponent={renderSeparator}
    />
  );
};



  // таким образ. Реакт скажет если в будут приведен неверный тип данных
ContactsList.propTypes = {
  	contacts: PropTypes.array
}

export default ContactsList
