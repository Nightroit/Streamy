import React from 'react' 
import { connect } from 'react-redux'; 
import { signIn, signOut} from '../actions'

let style = {
    height: '35px', 
    width: '120px',
    position: 'absolute',
    right: '190px'
}

class GoogleAuth extends React.Component{

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: 
                    '19900653687-mnp1ogf8njtembbr0stcm3p1bc40a2ag.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        }); 
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId()); 
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.props.isSignedIn === null)  {
        return( <div> 
                    <div className="ui black basic button" style = {style}>
                        <i aria-hidden="true" className="spinner loading icon"></i>
                    </div>
                </div>
                )
        } 
        else if(this.props.isSignedIn) 
        {
            return( 
                    <div>
                        <button onClick = {this.onSignOutClick} className="ui black basic button" style = {style}>
                            <i className="google icon"></i>
                                Sign Out
                        </button>
                    </div>                   
                )
        } else {
            return( 
                    <div >
                        <button onClick = {this.onSignInClick} className="ui black basic button" style = {style}>
                            Sign In
                        </button>
                    </div>
                )
        }
    }

    render() 
    {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);