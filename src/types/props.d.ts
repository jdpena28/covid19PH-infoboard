interface covidData {
updated:number
country:string
countryInfo:{
    _id:number
    iso2:string
    iso3:string
    lat:number
    long:number
    flag:string
    }
cases:number
todayCases:number
deaths:number
todayDeaths:number
recovered:number
todayRecovered:number
active:number
critical:number
casesPerOneMillion:number
deathsPerOneMillion:number
tests:number
testsPerOneMillion:number
population:number
continent:string
oneCasePerPeople:number
oneDeathPerPeople:number
oneTestPerPeople:number
activePerOneMillion:number
recoveredPerOneMillion:number
criticalPerOneMillion:number
}

interface today {
    todayCases: string|undefined
    todayDeaths: string|undefined
    todayRecovered:string|undefined
}

interface total {
    active: string|undefined
    critical:string|undefined
    deaths: string|undefined
}