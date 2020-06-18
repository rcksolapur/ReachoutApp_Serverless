import React from 'react'
import PropTypes from 'prop-types'

import { config } from 'aws-cognito-redux-saga'

class Auth extends React.Component {
  static propTypes = {
    getUser: PropTypes.func
  }

  componentWillMount() {
    config.config.set({
      region: 'us-east-2',
      IdentityPoolId: 'us-east-2:003e38a3-7082-4e5e-9ddd-9d54bdd15406',
      UserPoolId: 'us-east-2_Uuu2UkKqR',
      ClientId: '56gn70ptp73m7qn1rjgin3vifa',
    })

    this.props.getUser()
  }

  render() {
    return null
  }
}

export default Auth
