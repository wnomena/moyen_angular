import { Observer } from "rxjs"

//admin or member
export let bool:number[] = []
class type {
    name : String
    value : String

    constructor (a:string,b:string){
        this.name = a
        this.value = b
    }
}
//value for subscription
export let subscription_value:type[] = []
export class member_model {
    nom_complet:String
    mail : String
    mot_de_passe:String


    constructor(a:String,b:String,c:String, d:String){
        this.nom_complet = b
        this.mail = c
        this.mot_de_passe = d
    }
}
export class commentary_model {
    _id : String
    identifiant : Number
    mail : String
    string_commentary : String
    created : String

    constructor(a:String,b : String , c : Number , d : String , e : String) {
        this._id = a
        this.created = b
        this.identifiant = c
        this.mail = d
        this.string_commentary = e
    }
}
export class presentation_image {
    name : String
    src : String
    constructor(a:String,b:String){
        this.name = a
        this.src= b
    }
}
export class parent_road_list {
    identifiant : Number
    name : String
    about_all_road : String
    presentation_image : String
    price : number
    period : string
    confort : string
    difficulty : string


    constructor(a:Number,b : String, c: String, d : String,e:number,f : string){
        this.identifiant = a
        this.name = b
        this.about_all_road = c
        this.presentation_image = d
        this.price = e
        this.period = f
        this.confort = f
        this.difficulty = f
    }
}
export class fetch {
    message : String
    data : parent_road_list[]

    constructor(a:String,data : parent_road_list[]){
        this.message = a
        this.data = data
    }
}
class image {
    name : string
    image: string
    constructor(a:string,b:string) {
        this.image = a
        this.name = b
    }
}
export function Month(number : number) {
    if(number == 1) return "January"
    else if(number == 2) return "February"
    else if(number == 3) return "March"
    else if(number == 4) return "April"
    else if(number == 5) return "May"
    else if(number == 6) return "June"
    else if(number == 7) return "July"
    else if(number == 8) return "August"
    else if(number == 9) return "September"
    else if(number == 10) return "October"
    else if(number == 11) return "November"
    else if(number == 12) return "December"
    else return false
}
export function inversed_month(month : string) {
    if(month == "January") return 1
    else if(month == "February") return 2
    else if(month == "March") return 3
    else if(month == "April") return 4
    else if(month == "May") return 5
    else if(month == "June") return 6
    else if(month == "July") return 7
    else if(month == "August") return 8
    else if(month == "September") return 9
    else if(month == "October") return 10
    else if(month == "November") return 11
    else if(month == "December") return 12
    else return false
}
export class indexedDB_model {
    identifiant : number
    data : parent_road_list[]

    constructor(a:number,b : parent_road_list[] ) {
        this.identifiant = a
        this.data = b
    }
}
class like {
    mail : string
    constructor(a:string) {
        this.mail = a
    }
}
export class child_road_for_display {
    id : number
    name : string
    description : string
    distance : number
    presentation_image : string
    sejour_delay : string
    price : number
    difficulty : number
    like_by_membes : like[]
    confort : number
    period : string

    constructor(a:string,b : string, c: number, d : string, e : string, f : number,g : number,h : like[],i : number,j : string) {
        this.id = f
        this.name = a
        this.description = b
        this.distance = c
        this.presentation_image = d
        this.sejour_delay = e
        this.price = f
        this.difficulty = g
        this.like_by_membes = h
        this.confort = i
        this.period = j
    }
}
export class child_road_list {
    name : string
    description : string
    distance : number
    presentation_image : string
    sejour_delay : string
    price : number
    difficulty : number
    like_by_membes : like[]
    confort : number
    period : string

    constructor(a:string,b : string, c: number, d : string, e : string, f : number,g : number,h : like[],i : number,j : string) {
        this.name = a
        this.description = b
        this.distance = c
        this.presentation_image = d
        this.sejour_delay = e
        this.price = f
        this.difficulty = g
        this.like_by_membes = h
        this.confort = i
        this.period = j
    }
}
export class fetch_clild_road {
    message : string
    data : child_road_list[]
    
    constructor(a : string,data : child_road_list[]) {
        this.message = a
        this.data = data
    }
}
export class fetch_clild_road_2 {
    message : string
    data : child_road_list
    
    constructor(a : string,data : child_road_list) {
        this.message = a
        this.data = data
    }
}
export class observable {
    next: void
    err : void
    complete : void
    constructor(x : void,err : void, complete : void) {
        this.next = x
        this.err = err
        this.complete = complete
    }
}
export function reload() {
    location.reload()
}
export class typeofquality {
    title : string
    content : string

    constructor(a:string) {
        this.title = a
        this.content = a
    }
}
export class confirmation_deletion {
    display : boolean
    value : Number
    constructor(a:boolean,b : Number) {
        this.display = a
        this.value = b
    }
}