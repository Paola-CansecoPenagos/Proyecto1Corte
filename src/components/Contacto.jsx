import Card from './Card'

function Contacto() {
    const users = [
    {
        telephone: "999-999-999",
        address: "Direccion1 calle1 ente avenida1",
    }
    ];
    return (
        <div className="container" >
            {users.map((user)=> {
                return (
                    <Card 
                        telephone={user.telephone}
                        address={user.address}
                    />
                )
            })}
        </div>
    );
}

export default Contacto;