import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component{
    componentDidMount() 
    {
        this.props.fetchStreams();    
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className = "right floated content">
                    <Link to = {`/streams/edit/${stream.id}`} className = "ui button primary">
                        Edit 
                    </Link>
                    <Link to = {`/streams/delete/${stream.id}`} className = "ui button regative">
                        Delete  
                    </Link>
                </div>
            );
        }
    }

    renderList() 
    {
        return this.props.streams.map(stream => {
            return(
                <div className = "item" key = {stream.id}>
                    <div className = "content">
                        {this.renderAdmin(stream)}
                        <i className="play circle outline icon"></i>
                        <Link to = {`/streams/${stream.id}`} className = "header">
                            {stream.title}
                        </Link>
                        <div className = "description">{stream.description}</div>
                    </div>
              
                </div>
            )
        })
    }

    renderCreate() 
    {
        if(this.props.isSignedIn) {
            return(
                <div style = {{textAlign: 'right', marginRight: '80px'}}>
                    <Link to = "/streams/new"> Creat Stream</Link>
                </div>
            )
        }
    }

    render() 
    {
        return( <div>
                    <h2>Streams</h2>
                        <div className = "ui celled list">
                            {this.renderList()}
                        </div>
                            {this.renderCreate()}
                </div>
            )
    }
}

const mapStateToProps = (state) => 
{
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn 
    };
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);