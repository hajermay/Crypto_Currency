import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ElementBlock } from '../common';
import { getAllElements } from '../../actions/GetElementsAction.js';


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      startNumber: 1
    };
  }
  componentWillMount() {
    this.props.getAllElements();
  }
  /*_ElementsLoadMore() {
    if (!this.onEndReachedCalledDuringMomentum) {
      this.props.getAllElements(this.state.startNumber + 10);
      this.onEndReachedCalledDuringMomentum = true;
    }
    this.setstate({ startNumber: this.state.startNumber + 10 });
  }*/
  renderItem=({ item, index }) => {
           return (<ElementBlock ElementList={item} key={index}
                                  onPress={() => { this.props.navigation.navigate('Detail', { idElement: item.id })
                                  }} />)
  }
  render() {
    return (
      <View>
        <View style={styles.HeaderElementContainer}>
            <View style={styles.TextElementContainer}><Text style={styles.textStyle}>Name</Text></View>
            <View style={styles.TextElementContainer}><Text style={styles.textStyle}>Price_USD</Text></View>
            <View style={styles.TextElementContainer}><Text style={styles.textStyle}>Percent_Change_24h</Text></View>
        </View>
        <ScrollView>
          <FlatList
            data={this.props.ElementList}
            renderItem={this.renderItem}
            /*onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
            onEndReachedThreshold={0.5}
            onEndReached={({ distanceFromEnd }) => {
                   this._ElementsLoadMore();
                }}*/
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  HeaderElementContainer: {
     alignSelf: 'stretch',
     height: 60,
     flexDirection: 'row',
     backgroundColor: '#fff',
     marginTop: 10,
     borderBottomWidth: 1,
     borderBottomColor: '#000'
  },
  TextElementContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth:1,
    borderLeftColor: '#ddd'
  },
  textStyle: {
    textAlign: 'center'
  }
};

const mapStateToProps = state => {
	return {
		ElementList: state.GetElements.ElementList
	};
};
export default connect(mapStateToProps, {getAllElements})(HomePage);
