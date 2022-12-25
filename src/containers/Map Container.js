import { connect } from 'react-redux'
import Map_Container from '../components/Map Container'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(Map_Container)