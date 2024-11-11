import './adminpage.css'
const AdminPage = ({onSearchClick, onClearClick})=>{
    return(
                
    <div className="form-section">
    <h2>Maintain Role Level Access Control</h2>
    <div className="border-line"></div>
    <div className='form-container'>
    <div style={{textAlign: 'left'}}>Search Criteria</div>
    <div class="criteria-container">
  
    <div className="form-group">
      <label>Role *</label>
      <div className="input-with-icon">
        <input type="text" placeholder="Branch Manager" />
        <button className="icon-btn">🔍</button>
      </div>
    </div>

     <div className="form-group">
      <label for="role" className="">Access Control Type *</label>
      <select>
        <option>Field Level</option>
      </select>
    </div>
    <div className="form-group">
      <label>Case Category</label>
      <select multiple>
        <option>NRI</option>
        <option>Corporate</option>
      </select>
    </div>
    <div className="form-group">
      <label>Case Sub-category</label>
      <select multiple>
        <option>Address Update</option>
        <option>Stop Check</option>
      </select>
    </div>
    
    </div>
    <div className="form-actions">
      <button className="clear-btn" onClick={onClearClick}>Clear</button>
      <button className="search-btn" onClick={onSearchClick}>Search</button>
    </div>
    
    </div>
    
 </div>
        
    )
}
export default AdminPage;