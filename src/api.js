function getData  () {
    function apiHandler (){
        const url = 'https://discord.com/api/v9/invites/rdp?with_counts=true&with_expiration=true'
        fetch(url)
        .then((response)=> response.json())
        .then((response)=>{
        localStorage.setItem('memberCount', JSON.stringify(response.approximate_member_count ));
        localStorage.setItem('memberOnline', JSON.stringify(response.approximate_presence_count ));
        })
    }
    apiHandler()
}
export default getData;