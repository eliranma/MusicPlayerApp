export const sortABC = obj => {
  obj.sort( (a, b) =>{
    let textA = a.title.toUpperCase();
    let textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  return obj
};
