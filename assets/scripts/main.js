class Server {

    //Strings
    name;
    id; //nie wiem po co, ale jest.
    owner = null;
    joinDate;
    invateLink = null;
    img; //Link do obrazu

    //Booleans
    publicInvateLink = false; //czy zaprosznie ma być na stronie
    publicOwner = false; //czy właściciel ma być na stronie

    //Numbers
    mebmers = totalMebers - bots; //liczba ludzi na serwerze

    //Long strings
    description; //opis serwera

    constructor(name) {
        this.name = name;
    }
}

const plac = new Server("Plac", {
    id: "1033027380870123660",
    owner: "[PL][KT][ZPGM]Swirek3331#0611",
    joinDate: "Always have been",
    invateLink: "https://discord.gg/A9rNQdJgZZ",
    img: "https://swirek3331.github.io/Plac/assets/images/icons/servers/plac.png",
    
    publicInvateLink: true,
    publicOwner: true,

    totalMebers: 4,
    bots: 1,

    description: "Serwer do którego strona się odnosi."
});