const React = require('react')
const Default = require('./layouts/Default')

function index({breads, bakers, title}) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker)=>{
                        return(
                            <li key={baker._id}>
                                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Breads</h3>
            <ul>
                {
                    breads.map((bread, index) => {
                        return (<li key={bread_id}>
                            <a href={`/breads/${bread._id}`}>
                                {bread.name}
                            </a>
                            <p>{bread.getBakedBy()}</p>
                        </li>)
                    })
                }
            </ul>
        </Default>

    )
}

module.exports = index
