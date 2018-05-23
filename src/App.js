import React, { Component } from 'react';
import {InstantSearch,SearchBox,Hits,Highlight,Stats,SortBy,Pagination,RefinementList} from 'react-instantsearch/dom';
const Hit =({hit}) =>
    <div className="hit">
        <div className="hit-image">
          <img src={hit.image}/>
        </div>
        <div className="hit-content">
            <div className="hit-price">
                ${hit.price}
            </div>
            <div className="hit-name">
                <Highlight attributeName="name" hit={hit}/>
            </div>
        </div>
    </div>
class Sidebar extends Component {
  render(){
    return(
      <div className="sidebar">
        <h5> category</h5>
          <RefinementList attributeName="categories"/>
            <h5> Brand</h5>
              <RefinementList attributeName="brand" withSearchBox />

      </div>
    );
  }
}
class Content extends Component {
  render(){
    return(
      <div className="content">
          <div classname="info">
              <Stats/>
              <SortBy
                defaultRefinement="instant_search"
                items={[
                  {value:'instant_search',label:'MostRelevant'},
                  {value:'instant_search_price_asc',label:'Lowest Price'},
                  {value:'instant_search_price_desc',label:'Highest Price'}
                ]}
                />
          </div>
          <Hits hitComponent={Hit}/>
          <div className="pagination">
              <Pagination showLast/>
          </div>
      </div>

    );
  }
}
class App extends Component {
  render() {
    return (
    <InstantSearch
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        appId="latency"
        indexName="instant_search">
        <header className="header">
            <SearchBox transitions={{placeholder:'search the product'}}/>
        </header>
        <main>
        <Content/>
        <Sidebar/>
        </main>

    </InstantSearch>
    );
  }
}

export default App;
