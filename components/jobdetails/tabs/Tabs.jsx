import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { useCallback, useState } from "react";

import styles from './tabs.style'
import { SIZES } from '../../../constants'



const TabButton = ({ name, activeTab, onHandleSearchType}) => {
  return (
    <TouchableOpacity 
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
      
    </TouchableOpacity>
  )
}

const Tabs = (tabs, activeTab, setActiveTab) => {
  console.log(tabs)
  return (
    
    <View style={styles.container}>
      <FlatList
        data = {tabs.tabs}
        renderItem={ ({item})  => (
          <TabButton
            name={item}
            activeTab={tabs.activeTab}
            onHandleSearchType={() => setActiveTab(tabs.setActiveTab(item))}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2}}
      />

    </View>
  )
}

export default Tabs