class Server
{
    constructor(name, id, owner)
    {
        this.name = name; //nazwa serwera
        this.id = id; //discordowe ID serwera, nie wiem czy jako tekst czy jako liczba
        this.owner = owner; //włodarz
    }

    counted = yes; //czy serwer będzie wliczany i to wszyko. Stworzone w sumie nie wiem czemu. Serwery, które nie chcą być pokazywane na stronię nie będą nawet w src.

}

module.exports = Server;

//teraz się zaczołem zastaniawiać, a może ts?