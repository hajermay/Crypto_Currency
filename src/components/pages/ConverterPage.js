import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Picker, Button } from 'react-native';
import { convertMoney, updateElementTo, updateElementFrom} from '../../actions/ConvertMoneyAction';

class ConverterPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  convertion() {
    this.props.convertMoney(this.props.elementFrom, this.props.elementTo)
  }
  render() {
    let item = `price_${this.props.elementTo}`
    let itemLower = item.toLowerCase()
    console.log('this.props.ConvertedMoney.itemLower', this.props.ConvertedMoney[itemLower])
    return (
      <View>
        <View>
          <Text>amount: 1</Text>
        </View>
        <View>
          <Text>From:</Text>
          <Picker
            selectedValue={this.props.elementFrom}
            onValueChange={(itemValue) => this.props.updateElementFrom(itemValue)}>
             <Picker.Item label="from"  />
            {this.props.ElementList.map(item => <Picker.Item label={item.symbol} value={item.id} />)}
          </Picker>
        </View>
        <View>
           <Text>To:</Text>
           <Picker
             selectedValue={this.props.elementTo}
             onValueChange={(itemValue) => this.props.updateElementTo(itemValue)} >
             <Picker.Item label="to"  />
             {this.props.ElementList.map(item => <Picker.Item label={item.symbol} value={item.symbol} />)}
           </Picker>
        </View>
        <Button title='submit' onPress={this.convertion.bind(this)} />
        <Text>result: { this.props.ConvertedMoney[itemLower]}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
	return {
     ElementList: state.GetElements.ElementList,
     ConvertedMoney: state.ConvertedMoney.convertedMoney,
     elementTo: state.ConvertedMoney.elementTo,
     elementFrom: state.ConvertedMoney.elementFrom,
	};
};
export default connect(mapStateToProps, { convertMoney, updateElementTo, updateElementFrom })(ConverterPage);
