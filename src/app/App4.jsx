import userFatch from "../hooks/userFatch";

const App = () => {
    const userDatas = userFatch('https://jsonplaceholder.typicode.com/users')
    const userPost = userFatch('https://jsonplaceholder.typicode.com/posts', (tata) => tata.slice(0, 5))
    return (
        <div className="container">
            <div className="userList">
                <h1>USER LIST</h1>
                {
                    userDatas.loading && <h1><img width={"200px"} src="https://www.kindpng.com/picc/m/392-3926418_loading-spinner-loading-icon-png-transparent-png-download.png" alt="" /></h1>
                }
                {
                    userDatas.data.map(user => (<li key={user.id}>{user.name}</li>))
                }
            </div>
            <hr />
            <div className="postList">
                <h1>POST LIST</h1>
                {
                    userPost.data.map(post => (<li>{post.title}</li>))
                }
            </div>
            <hr />
        </div>
    );
};

export default App;