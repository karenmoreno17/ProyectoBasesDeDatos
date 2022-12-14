import { useCallback, useContext } from 'react'

import Context from '../context/userContext'

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)

  const login = useCallback(() => {
    setJWT('Prueba.')
  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}