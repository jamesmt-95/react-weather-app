import PropTypes from 'prop-types'
const SearchBar = ({handleKeyUp, handleOnChange, search}) => {
  return (
   <div className="search">
     <input placeholder='Search City...' value={search} onChange={(e) =>handleOnChange(e)} onKeyUp={(e) =>handleKeyUp(e)} type="text" />
   </div>
  )
}


SearchBar.propTypes = {
  handleKeyUp: PropTypes.func,
  handleOnChange: PropTypes.func,
  search: PropTypes.string

}

export default SearchBar