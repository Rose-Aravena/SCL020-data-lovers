// estas funciones son de ejemplo

function fetchData(id){
fetch("./data.json")
.then(res => res.json()) 
.then(data => console.log(data))
}

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
