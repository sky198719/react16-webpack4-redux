import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import less from './index.less';

class Formwork extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
			<div className="formwork">
				<label>工作信息：</label><input type="text" />
			</div>
		)
	}
}

export default Formwork