# Typescript || Union Find || Sorting || Matrix || Commented

**Author:** onifs10
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3928723/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/3928723/)

---

# Approach
- Get the values of each the matrix and map the value to the positions this value exit in matrix
- sort values in ascending order
- then start assigning ranks the to values position one after the other
    - create a group of similar values that are linked either on the same row or column.
    - then assign the rank of this group based on the highest rank for the row and cols of this grouped similar value


# Complexity
- Time complexity:
$$O(m*n)log(m*n)$$

- Space complexity:
$$O(m*n)$$

# Code || Commented
```
function matrixRankTransform(matrix: number[][]): number[][] {
    // map values to all positions they appear
    const valueToPosition: Map<number, [number,number][]> = new Map() 
    // store unique values that exist in the matrix
    const values:number[] = []
    // unions array 
    let unions = new Array(matrix.length + matrix[0].length).fill(0)
    unions.forEach((_,i) => {unions[i] = i})

    // to store current max rank of rows and cols position
    const rows :number[] = new Array(matrix.length).fill(0)
    const cols :number[] = new Array(matrix[0].length).fill(0)
    
    for(let x = 0; x < matrix.length; x++){
        for(let y = 0; y < matrix[0].length; y++){
            const value = matrix[x][y]
            if(valueToPosition.has(value)){
                valueToPosition.get(value).push([x,y])
            }else{
                values.push(value)
                valueToPosition.set(value,[[x,y]])
            }
        }
    }

    //O((m*n)log(m*n))
    // sort unique values of matrix in ascending order 
    values.sort((a,b) => a - b)

    // start assigning matrix position value
    //O(m*n)
    for(const value of values){
        //matrix cells are grouped if they have the same value and are linked by row or col

        // new unions for value
        const unionsNew = [...unions]
        
        //function to find parent
        const find = (i:number) => {
            if(unionsNew[i] == i){
                return i
            }
            return find(unionsNew[i])
        }

        // create unions (linking row and col)
        valueToPosition.get(value).forEach(([x,y]) => {
            unionsNew[find(x)] = find(matrix.length + y)
        })

        // get maxValue of unions
        const maxValues = new Array(unions.length).fill(0)
        valueToPosition.get(value).forEach(([x,y]) => {
            maxValues[find(x)] = Math.max(maxValues[find(x)],rows[x],cols[y])
        })


        // set result of each cell = max_of_union + 1, and update row max and col max of cells
        valueToPosition.get(value).forEach(([x,y]) => {
            let max = maxValues[find(x)]
            matrix[x][y] = max+1
            rows[x] = max+1
            cols[y] = max+1
        })

        
    }

    return matrix
};
```