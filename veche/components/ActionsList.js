import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'

import ActionRow from './ActionRow'
// item: { name: String, phone: String }, ...obj.item - all props of contact

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>


const ActionsList = props => {
  const  renderItem = ({ item }) => (
  <ActionRow {...item}
    onSelectAction={(action) => {
    props.onSelectAction(action);
  }} />
  );

  const actionsByLetter = props.actions.reduce((obj, action) => {
    const firstLetter = action.actionName[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), action],
    }
  }, {})

  const sections = Object.keys(actionsByLetter).sort().map(letter => ({
    title: letter,
    data: actionsByLetter[letter],

  }))

  return (
  <SectionList
    sections={sections}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    />
  );
};


  // таким образ. Реакт скажет если в будут приведен неверный тип данных
ActionsList.propTypes = {
  	actions: PropTypes.array
}

export default ActionsList
