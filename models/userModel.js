const User ={}

User.register = async ()=>{
    return await sql.query`insert into Login(Name, ContactNo, EmailID, Password, Address, LatAdd, LongAdd, UserType, IsActive) values ('a', '87', 'aj@gmail.com', '12345678', 'address', '20.58', '50.65', 'user', 'active')`
}
export default User;
