let db=[
    {
        id:1,
        name:"Dijana",
        lastname:"Djordjevic",
        email:"dijana.1986@live.com",
        phone:'33-33-55-78'
    },
    {
        id:2,
        name:"Milos",
        lastname:"Stankovic",
        email:"milos.1988@live.com",
        phone:'77-44-55-78'
    },
    {
        id:3,
        name:"Tedy",
        lastname:"Djordjevic-Stankovic",
        email:"tedy.2018@live.com",
        phone:'40-33-55-78'
    }
];

if(localStorage.db){
    db=JSON.parse(localStorage.db);
}