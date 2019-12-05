import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError (error) {
    return { hasError: true, error }
  }

  render () {
    const { error, hasError } = this.state
    const { children, renderError } = this.props
    if (hasError) {
      return renderError(error)
    }
    return children
  }
}
