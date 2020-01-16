import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'

import TegRow from './TegRow'
// item: { name: String, phone: String }, ...obj.item - all props of contact

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>


const TegsList = props => {
  const  renderItem = ({ item }) => (
  <TegRow {...item}
    onSelectTeg={(teg) => {
    props.onSelectTeg(teg);
  }} />
  );

  const tegsByLetter = props.tegs.reduce((obj, teg) => {
    const firstLetter = teg.tegName[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), teg],
    }
  }, {})

  const sections = Object.keys(tegsByLetter).sort().map(letter => ({
    title: letter,
    data: tegsByLetter[letter],

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
TegsList.propTypes = {
  	tegs: PropTypes.array
}

export default TegsList
