class Server
{
    constructor(name, id, owner)
    {
        this.name = name; //nazwa serwera
        this.id = id; //discordowe ID serwera, nie wiem czy jako tekst czy jako liczba
        this.owner = owner; //włodarz
    }

    description = null; //Opis/oferta serwera

    inviteOnWeb = false; //Czy zaproszenie ma być na stronie
    inviteLink = null; //A jak tak to jakie

    icon = null; //Ikona serwera, raczej jako link do obrazka w strukturze, dla https://swirek3331.github.io/kt-servers/assets/img/server-icons/<nazwa serwera>.png. Chociaż nie wiem czy nie lepiej byłoby robienie tego statycznie.

}

module.exports = Server;