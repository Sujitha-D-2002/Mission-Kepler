import './Card.css';

export default function Card({user}){
    return(
        <div className="card-container">
          <div className="user-profile-container">
            <img src={user.profile} alt="image"></img>
          </div>
          <div>
            <div className="user-info-container">
            <h2 className='userName'>{user.name}</h2>
            <h4>{user.location}</h4>
            </div>
            <div className="tag-container">
                <ul>
                  {user.tags.map((tags)=>(
                    <li key={tags}>{tags}</li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
    )
}