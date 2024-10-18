const user = {
    name : "Sandeep",
    address : {
        address : {
            area : "Pragathi Nagar",
            landmark : "Hosa road metro station"
        },
        alternateAddress : {
            area : "JC Nagar",
            landmark : "Malnad donne biryani"
        }
    }
}

function getVariableName(variable) {
    const handler = {
      get(target, property) {
        return property;
      }
    };
    const proxy = new Proxy(variable, handler);
    return proxy.name;
}
const keyName = getVariableName({ user });

function getVariableData(variable, name) {
    return flattenAddress({ [name]: variable });
}

console.log(getVariableData(user,keyName));

function flattenAddress(data){
    if(typeof data === 'string'){
        return {key : data}
    }
    let key = ''
    for(let data of Object.keys(data)){
        if(key === ''){
            key = key + data
        }else{
            key = key + "_" + data
        }
        return flattenAddress(user)
    }
}