# Javascript solution

**Author:** user8084AS
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/3465286/](https://leetcode.com/problems/lonely-pixel-ii/solutions/3465286/)

---

# Intuition
Scan the array row wise and column wise to find candidates for rule 1 and then apply rule 2 on the candidates

# Approach
It is easy to scan the picture row wise and column wise to find the candidates compliant with rule 1.

The trick is to do a quick equality check of the rows to validate rule 2.
For the quick equality check we create a key of each row while working with rule 1 validations.
And then use these keys to determine equality of two rows while validating rule 2.

# Complexity
- Time complexity:
O(n*m)

- Space complexity:
O(n*m)

# Code
```
/**
 * @param {character[][]} picture
 * @param {number} target
 * @return {number}
 */
var findBlackPixel = function(picture, target) {
    const rMap = new Map()
    const rKeyMap = new Map()
    const cMap = new Map()
    let count, cArr, rArr

    // function to check equality of two rows by their keys
    const isEqual = (r1, r2) => {
        if(r1 === r2) {
            return true
        }

        return rKeyMap.get(r1) === rKeyMap.get(r2)
    }
    
    // row wise traversal to collect rule 1 candidates
    picture.forEach((r, i) => {
        cArr = []
        r.forEach((c, j) => {
            if(c === 'B') {
                cArr.push(j)
            }
        })

        if(cArr.length === target) {
            rMap.set(i, cArr)
            rKeyMap.set(i, r.join('')) // save the key for each row to check quick equality later
        }
    })

    // column to row traversal to collect rule 1 candidates
    for(let c = 0; c < picture[0].length; c++){
        rArr = []
        for(let r = 0; r < picture.length; r++){
            if(picture[r][c] === 'B'){
                rArr.push(r)
            }
        }
        if(rArr.length === target) {
            cMap.set(c, rArr)
        }
    }

    count = 0

    // apply rule 2
    rMap.forEach((cArr, r1) => {
        cArr.forEach(c => {
            if(cMap.has(c)){
                if(cMap.get(c).every(r2 => isEqual(r1, r2))){ // equality check of the two rows
                    count++
                }
            }
        })
    })


    return count
};
```