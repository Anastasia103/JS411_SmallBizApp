import { connect } from 'react-redux'
import SignIn from '../components/SignIn'
import { isLoggedIn } from "../redux/actions"

const mapStateToProps = (state) => {
    return {
        users: state.users,
        loggedIn: state.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isLoggedIn: (boolean) => dispatch(isLoggedIn(boolean))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)