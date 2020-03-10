import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { addAd, changeAd, deleteAd } from './actions'
import './style.css'
import AllAds from './containers/allAds'
import EditAd from './containers/editAd'
import AddAd from './containers/addAd'

let App = props => {
  const { ads, addAd, changeAd, deleteAd } = props;

  return (
    <div className="wrap">
      <Switch>
        <Route exact path="/" render={() => <AllAds ads={ads} deleteAd={deleteAd} />} />
        <Route path="/edit-ad" render={() => <EditAd ads={ads} changeAd={changeAd} />} />
        <Route path="/create-add" render={() => <AddAd addAd={addAd} />} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ads: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAd: (id, createdAt, name, title, updatedAt, image) => dispatch(addAd(id, createdAt, name, title, updatedAt, image)),
    changeAd: (id, createdAt, name, title, updatedAt, image) => dispatch(changeAd(id, createdAt, name, title, updatedAt, image)),
    deleteAd: (id) => dispatch(deleteAd(id))
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;
