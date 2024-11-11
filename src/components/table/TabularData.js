import './tabularData.css'
const TabularData = ()=>{
    const data = [
        {
            id: 1,
            category: 'Category 1',
            subCategory: 'Sub-Category 1',
            fieldName: 'Field 1',
            accessType: 'Access Type 1',
            maskingPreview: 'Masking Preview 1'
        },
        {
            id: 2,
            category: 'Category 2',
            subCategory: 'Sub-Category 2',
            fieldName: 'Field 2',
            accessType: 'Access Type 2',
            maskingPreview: 'Masking Preview 2'
        },{
            id: 3,
            category: 'Category 1',
            subCategory: 'Sub-Category 1',
            fieldName: 'Field 1',
            accessType: 'Access Type 1',
            maskingPreview: 'Masking Preview 1'
        }
    ]
    return (
<div>
    <table className='table-container'>
    <thead>
    <tr>
        <th>Case Category</th>
        <th>Case sub-category</th>
        <th>Field Name</th>
        <th>Access Type</th>
        <th>Masking Preview</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {data.map((data, id)=>
         (<tr key={id}>
            <td>{data.category}</td>
            <td>{data.subCategory}</td>
            <td>{data.fieldName}</td>
            <td>{data.accessType}</td>
            <td>{data.maskingPreview}</td>
        </tr>))    
    
    } 
    
    </tbody>
    </table>
    </div>
    )
    
}

export default TabularData;