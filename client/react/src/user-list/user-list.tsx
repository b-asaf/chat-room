type User = {
    username: string,
    id: string,
}

type UserListProp = {
    users: User[]
}

export function UserList({ users }: UserListProp) {
    return (
        <ul>
            {
                users.map(user => 
                    <li key={user.id}>{user.username}</li>
            )}
        </ul>
    )
}
