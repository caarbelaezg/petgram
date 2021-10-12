import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './containers/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <Logo />
      <GlobalStyles />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <><ListOfCategories /><ListOfPhotoCards /></>
      }

    </>
  )
}
