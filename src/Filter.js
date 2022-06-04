const Filter=({searchKeys,handleSearchKeys})=>
{
    return(
        <p>filter shown with <input value={searchKeys} onChange={handleSearchKeys}/></p>
    )
}
export default Filter;