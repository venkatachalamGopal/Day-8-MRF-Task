// const url="https://restcountries.com/v2/all";

// MAP,FILTER,REDUCE - Method

// a.Get all the countries from the Asia continent /region using the Filter function

    const name=data.filter((obj)=>{
        return obj.region=="Asia";
    })
    name.map((data)=>{
        console.log(data.region); // Output => Asia
    })


// B. Get all the countries with a population of less than 2 lakhs using Filter function
        // console.log(data);
        const value=data.filter((obj)=>{
        return obj.population < 200000;
        })
        value.map((obj,index)=>{
            console.log(obj.name,obj.population);
        })
  

    // C. Print the following details name, capital, flag using forEach function

        data.forEach((obj,index)=>{
            const name=obj.name;
            const capital=obj.capital;
            const flag=obj.flag;
            console.log('S.no    :',index+1);
            console.log("Name    :",name);
            console.log("Capital :",capital);
            console.log("Flag    :",flag);
            console.log('---------------------');
        })

    // d.Print the total population of countries using reduce function

        const totalPopulation=data.reduce((acc,curr)=>{
            return acc+curr.population

        },0)
        console.log("Total Population of Country :",totalPopulation);

    

   
