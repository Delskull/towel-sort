
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const sort = []
    if(!matrix || matrix.length === 0){
        return []
      }
    // console.log(matrix.length)
    for (i=0; i<matrix.length;i++){
      // console.log(matrix.length)
      if ((i + 1) % 2 !== 0){
    sort.push(...matrix[i])
      }
    for (let j = matrix[i].length - 1; j >= 0; j--){
      if ((i + 1) % 2 === 0){
        console.log((i + 1) % 2 === 0)
      sort.push(matrix[i][j]);
      }
    }
    }

    // console.log(sort)

      return sort;
}
