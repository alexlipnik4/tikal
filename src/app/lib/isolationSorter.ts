import {agentsData} from '../common/mocks/agentsData';
import {IAgent} from '../common/models/AgentData.model';

type Country = {
    name: string;
    agents: string[];
    isolationCount: number;
}

interface ICountries {
    [country: string]: Country
}

type BiggestIsolation = {
    count: number,
    country: string,
}

export const isolationSorter = () => {    
    let countries: ICountries = {};
    agentsData.forEach((mission: IAgent) => {
        if(!countries.hasOwnProperty(mission.country)){
            countries[`${mission.country}`] = {
                name: mission.country,
                agents: [mission.agent],
                isolationCount: 1,
            }
        } else {
            countries[`${mission.country}`].agents.push(mission.agent);
            countries[`${mission.country}`].isolationCount = countries[`${mission.country}`].agents.length;
        };
    })

    let biggestIsolation: BiggestIsolation = {country: '', count: 0}
    for(let country in countries) {
        for(let refCountry in countries) {
            if (country !== refCountry) {
                countries[refCountry].agents.forEach((agent: string) => {
                    if (countries[country].agents.includes(agent)) {
                        countries[country].isolationCount = countries[country].isolationCount - 1;
                    }
                })
            }
        }

        if (biggestIsolation.count < countries[country].isolationCount) {
            biggestIsolation = {
                country,
                count: countries[country].isolationCount
            }
        }
    }

    return biggestIsolation;
}