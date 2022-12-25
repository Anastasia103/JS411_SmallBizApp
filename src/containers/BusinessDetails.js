import { connect } from 'react-redux'
import BusinessDetails from '../components/BusinessDetails'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(BusinessDetails)