import { connect } from 'react-redux'
import { deleteBusiness } from '../redux/actions'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        business: state.business,
        loggedIn: state.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBusiness: (index) => dispatch(deleteBusiness(index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
