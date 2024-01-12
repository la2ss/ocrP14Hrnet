import { createSlice } from "@reduxjs/toolkit";
// import React from "react";

const initialState = {
    employe: [{
        firstname: "aokiji",
        lastname:"zoro",
        date: '2010-06-05',
        departement:'Sales',
        birth: '2011-12-25',
        street:'Bollywood',
        city: 'first',
        state:'New York',
        code:'20459'
    },{
            firstname: "bardok",
            lastname:"yamamoto",
            date: '1910-06-05',
            departement:'Sales',
            birth: '1914-12-25',
            street:'Hollywood',
            city: 'Manhatthan',
            state:'New York',
            code:'20459'
    },
    {
        firstname: "c17",
        lastname:"xiaomi",
        date: '1970-06-05',
        departement:'Sales',
        birth: '1972-12-25',
        street:'Manhatthan',
        city: 'Hollywood',
        state:'New York',
        code:'20459'
},{
    firstname: "dende",
    lastname:"world",
    date: '1710-06-05',
    departement:'Sales',
    birth: '1736-12-25',
    street:'Hollywood',
    city: 'Manhatthan',
    state:'New York',
    code:'20459'
},
{
    firstname: "endevor",
    lastname:"vendeta",
    date: '1975-06-05',
    departement:'Sales',
    birth: '1976-12-25',
    street:'Hollywood',
    city: 'Manhatthan',
    state:'New York',
    code:'20459'
},
{
firstname: "frost",
lastname:"ululu",
date: '2000-06-05',
departement:'Sales',
birth: '2000-12-25',
street:'Hollywood',
city: 'Manhatthan',
state:'New York',
code:'20459'
},{
firstname: "gogeta",
lastname:"trunk",
date: '1989-06-05',
departement:'Sales',
birth: '1991-12-25',
street:'Hollywood',
city: 'Manhatthan',
state:'New York',
code:'20459'
},
{
    firstname: "haku",
    lastname:"Saint seiya",
    date: '2010-06-05',
    departement:'Sales',
    birth: '2016-12-25',
    street:'Hollywood',
    city: 'Manhatthan',
    state:'New York',
    code:'20459'
},
{
firstname: "ichigo",
lastname:"razor",
date: '1999-06-05',
departement:'Sales',
birth: '1999-12-25',
street:'Hollywood',
city: 'Manhatthan',
state:'New York',
code:'20459'
},{
firstname: "Clark",
lastname:"Kent",
date: '1980-06-05',
departement:'Sales',
birth: '1981-12-25',
street:'Hollywood',
city: 'Manhatthan',
state:'New York',
code:'20459'
},
{
    firstname: "Jaeger",
    lastname:"quincy",
    date: '2003-06-05',
    departement:'Sales',
    birth: '2004-12-25',
    street:'Hollywood',
    city: 'Manhatthan',
    state:'New York',
    code:'20459'
},
{
firstname: "kobayashi",
lastname:"pepero",
date: '1989-06-05',
departement:'Sales',
birth: '1994-12-25',
street:'Hollywood',
city: 'Manhatthan',
state:'New York',
code:'20459'
},{
firstname: "loki",
lastname:"onaziri",
date: '1967-06-05',
departement:'Sales',
birth: '1977-12-25',
street:'wyoming',
city: 'last',
state:'New York',
code:'20459'
}
    ]
}

const employeSlice = createSlice({
    name:'employe',
    initialState,
    reducers:{
        addEmploye:(state,action) => {
            state.employe.push({...action.payload})
        }
    }
})

export const {addEmploye} = employeSlice.actions
export default employeSlice.reducer