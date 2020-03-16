import AddNumber from '../components/AddNumber';
import {connect} from 'react-redux';

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick:function(size){ 
            dispatch({type:'INCREMENT', 
            size:size});
        }
    }
}

export default connect(null,mapReduxDispatchToReactProps)(AddNumber);

/*react-redux tool 이 적용되지 않은 코드 
import React, { Component } from 'react';
import store from '../store';

export default class extends Component{
    render() {
        return <AddNumber onClick={function(size){ 
            store.dispatch({type:'INCREMENT', 
            size:size});
        }.bind(this)}></AddNumber>
    }
}
*/