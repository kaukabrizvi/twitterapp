import React, {useState} from "react";
import "./Tweet.css"


// props are parameters in Java script
const Tweet = props => {
    let img = "https://www.pngitem.com/pimgs/m/491-4919478_empty-heart-heart-line-icon-png-transparent-png.png"
    let trendimg = "data:image/png;base64,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";
    let nottrendimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOA8XBAAGwGMP0AAAAAElFTkSuQmCC";
    let other = "https://freeiconshop.com/wp-content/uploads/edd/heart-outline-filled.png"
    const [retweets, setRetweets] = useState(0);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [trending, setTrending] = useState(false);
    const increaseLikes = () => {
        setLiked(!liked);
        !liked?addLikes():decreaseLikes();
    }
    const addLikes = () =>{
      setLikes(likes+1);
      likes >= 9 || retweets >=10 ? setTrending(true) : setTrending(false);
    }
    const decreaseLikes = () =>{
      setLikes(likes-1);
      likes <= 10 && retweets <=9 ? setTrending(false) : setTrending(true);
    }
    const increaseRetweets =() => {
        setRetweets(retweets+1);
        retweets >= 9 || likes>=10 ? setTrending(true) : setTrending(false);
    }
    return(

      <div class="container">
        <img class="pic" src={props.pic} alt="profile pic"/>
        <div class="author-info">
        <p class="author">{props.author}</p>
        <p class="tag">{"@"+props.tag}</p>
        </div>
        <div class = "trend">
          <img src = {trending? trendimg: nottrendimg} width = "25" height = "25"/>
          </div>
        <p class="content">{props.content}</p>
        <div class = "time-info">
        <p class = "time">{props.time}</p>
        <p class = "divider"> | </p>
        <p class="date">{props.date}</p>
        </div>
        <br></br>
        <div class = "likemod">
          <button class = "prolike" onClick = {addLikes}>Like</button>
          <button class = "dislike" onClick = {decreaseLikes}>Dislike</button>
        </div>
        <div class = "stats">
        <img src={liked ? other: img} onClick = {increaseLikes} class="liked" alt="like button"/>
        <p class="likes">{likes}</p>
        <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADh4eFQUFCLi4vc3NxXV1fp6ekhISFiYmL39/fw8PBGRkbl5eX09PS2trbOzs5nZ2czMzMNDQ1zc3O/v78pKSmYmJiurq4vLy8WFhbU1NR7e3scHBzIyMihoaE+Pj6EhIRubm5cXFyenp7NhYewAAAExklEQVR4nO2d61rqQAxFrSj3myAoKIqX93/Gw+UoBTudZLIzp35nr99AulqsaSYTrq4IIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGE/GfcXuMYZzzuhfiV9wWObm/q6HRGr5ArPgMVi+Ld0erioOVnE6vYc/T65uEQ6lb8euQXtSheHc3+8niMtB6J33GHNNz0Hd0OTL5CrQfi90AVXxzl9rycQs3kZ7MHNHxwtNvxVI7Vkr+vjTO88bPbMZqfBVPc2Fq/w3Cwvoh2L38v7Cp6GvZXlnCoq+hpOKyIp/j3tG284UdlwEf5B1SdoSYZhlITeYrahyi6Gd4EQz7JFRFfVC/Dz5qY13LFZWMNH+tizjtyxVlDDRf1QZfyp++BWdHF8CkWdSv/rMGmgYa38bBthWK3cYadeTysprzQsd1u8IZj2QE9yz9xZPqi4g2ltwbFc9uoUYbyhFmRoo5acUIJENrwXXF2J9DIoQsNNtSVAqEllNAdHGsYTkarkZcY42QxrEtGq5GXGKPkMJwEYtTQlaeoMTIYvgRC1KIoMUbwNxTkalUMvePDDK/TBHFrJ96GnfT8WFFirMPZ0PSk+gY5BGdDW0EFsrTga1hdOJSjKDEGcTW0r2nKS4xBPA3fzIKaEuM/MHwACAJSVD/D2sKhnI01RXUzjBQO5ayMDT5ehlOU4C5FbaRhYjJajWIVPJuhrQr2g7vGGY5/LvLaUJQY8xiiBU2H42GI65c4kd6k5WAI7Vz6JrnEiDfE9hCeSE1R4YaTbaQGHVq+GEbet00sTuWpl5YJ1U5x1bVzmmMoX8XXQUM8NERDQzw0RENDPDREQ0M8NERDQzw0RENDPLkNM/W1lQAbDobtPfrexNVHu5ZhcnUPfQ2TGpIEpLeCwL+lCU1lAgztPPi/w1cHQUtLlsOdRtvcGWdlaavzuJei6+yKrS2ZDMFrJYod9NkMsetdxv4Pp//49q1e31jngjgZjmGK5j4sr6xtdLlBPBF7L51bXorp/wD0Q/pl3tHNfwIsPRH+hoA+LMhkHs+nJ2sv3QfgGJyfD239kFvEIXg/Ab8ZBE3JaAnnZ/z0vmTYPh3vKkbylB5YGcW9TpM4UwK3X87dMG2PB3DPo3+tLWWfDnLfaoZqon4H9CcueJ56qTZFzbNjFloR1pUYEcloiTx9bZoSo6nJuoKQYaw3cY+ifiIvMdoa5RWGIhQXWpqiGjc7oA01O2hkJcaufGxjFsNiqbiKkjkOc+C+eIyh6pwL5vMhZxuADIuNQjG6hdVloLB5kWEmV4zNxMHOGIEZFjP5qkL9XCOnSbuAhaKl/GG8bhyA14xWxFKYYqZEuMSI2QzvZFgM5YqhEqPfSG/McqZijba6xIgpHDoaFlt5xKoUFTZYpALUkrQiYf4ZUnGv0gNbdFfM57ssMa69tiAdwLUVKK7ieYlx7tV/dQTYOKG4imer4PZBDbVgRi0ckbf1lOdPe8+bh40i2CMvQJxmiPskoyX6oNXoI/Kr+LUKnuFnH7BNWvLU5Ji/Of9gwBHkLxxoSoFT1atNaMZEIhUXeX58Zc+0ZxyRe4a8ExQwskjMGPj7TR61FkIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGN5g8q00OsFiF57wAAAABJRU5ErkJggg=="} onClick = {increaseRetweets} class = "rt" alt="retweet button"/>
        <p class="retweets">{retweets}</p>
        </div>
      </div>
    )
};

export default Tweet;