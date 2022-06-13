class Room{
    private family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }
    showFamily(){
        console.log(this.family);
    }
    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room} with ${soap}`);
    }
}

const nab = new Room('Nabendu');
const shi = new Room('Shikha');
const hri = new Room('Hriday');
const mou = new Room('Mousam');
nab.dobShikha;
nab.addFamilyMember('Nabendu');
nab.addFamilyMember('Shikha');
nab.addFamilyMember('Hriday');
mou.cleanRoom('Lizol');
nab.showFamily();