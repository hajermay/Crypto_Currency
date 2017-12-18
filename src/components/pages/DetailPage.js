import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { ElementDetailBlock } from '../common';
import { getElementDetail } from '../../actions/GetElementsAction.js';


class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentWillMount() {
    this.props.getElementDetail(this.props.navigation.state.params.idElement);
  }
  render() {
    console.log('this.props.ElementDetail', this.props.ElementDetail)
    return (
      <View>
        <ElementDetailBlock label='id' detail='fdsf' />
        <ElementDetailBlock label='name' detail={this.props.ElementDetail.name} />
        <ElementDetailBlock label='symbol' detail={this.props.ElementDetail.symbol} />
        <ElementDetailBlock label='rank' detail={this.props.ElementDetail.rank} />
        <ElementDetailBlock label='price_usd' detail={this.props.ElementDetail.price_usd} />
        <ElementDetailBlock label='price_btc' detail={this.props.ElementDetail.price_btc} />
        <ElementDetailBlock label='24h_volume_usd' detail={this.props.ElementDetail.price_btc} />
        <ElementDetailBlock label='market_cap_usd' detail={this.props.ElementDetail.market_cap_usd} />
        <ElementDetailBlock label='available_supply' detail={this.props.ElementDetail.available_supply} />
        <ElementDetailBlock label='total_supply' detail={this.props.ElementDetail.total_supply} />
        <ElementDetailBlock label='max_supply' detail={this.props.ElementDetail.max_supply} />
        <ElementDetailBlock label='percent_change_1h' detail={this.props.ElementDetail.percent_change_1h} />
        <ElementDetailBlock label='percent_change_24h' detail={this.props.ElementDetail.percent_change_24h} />
        <ElementDetailBlock label='percent_change_7d' detail={this.props.ElementDetail.percent_change_7d} />
        <ElementDetailBlock label='last_updated' detail={this.props.ElementDetail.last_updated} />
      </View>
    );
  }
}
const styles = {

};

const mapStateToProps = state => {
	return {
		ElementDetail: state.GetElementDetail.ElementDetail
	};
};
export default connect(mapStateToProps, { getElementDetail })(DetailPage);
