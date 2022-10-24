class Server
{
    constructor(name, id, owner)
    {
        this.name = name; //nazwa serwera
        this.id = id; //discordowe ID serwera, nie wiem czy jako tekst czy jako liczba
        this.owner = owner; //włodarz
    }
}

module.exports = Server;