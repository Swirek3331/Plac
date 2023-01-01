//Pytanie czy to jQuerry tu zadziała.

class Server {

    //Strings
    name;
    id;
    owner = null;
    joinDate;
    invateLink = null;

    //Booleans
    publicInvateLink = false; //czy zaprosznie ma być na stronie
    publicOwner = false; //czy właściciel ma być na stronie

    //Numbers
    mebmers; 

    constructor(name) {
        this.name = name;
    }
}