const ConnectedUsers = ({ users }) => <div className="float-left bg-gray-800 text-blue-400 w-44 text-center " style={{height:'65vh',marginTop:'-70px'}}>
    <h4>Connected Users</h4>
    {users.map((u, idx) => <h6 key={idx} className="text-white text-center">{u}</h6>)}
</div>

export default ConnectedUsers;
