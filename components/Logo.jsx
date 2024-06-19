import React from 'react'

export const Logo = ({className}) => {
  return (
    <img src='/profile.svg' alt="profile-logo" className={className ?? ''} />
  )
}
