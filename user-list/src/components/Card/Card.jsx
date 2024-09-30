import Users from '../../constants/userData.js';
import './Card.css';

export default function Card(){
    return(
        <>
        {Users.map((users,index)=>(
        <div className="card-container" key={index}>
          <div className="user-profile-container">
            <img src={users.profile} alt="image"></img>
          </div>
          <div>
            <div className="user-info-container">
            <h2 className='userName'>{users.name}</h2>
            <h4>{users.location}</h4>
            </div>
            <div className="tag-container">
                <ul>
                  {users.tags.map((tags)=>(
                    <li key={tags}>{tags}</li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
        ))}
        </>
    )
}