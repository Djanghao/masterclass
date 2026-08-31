# JavaScript  | Simple Greedy Solution | O(N)

**Author:** christinashoe22
**Votes:** 1
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4616198/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4616198/)

---

# Approach
The solution implements a greedy approach to reconstruct two rows, row1 and row2, based on a given column sum array (colsum), upper and lower constraints. The algorithm iterates through each column, making decisions on how to distribute ones in both rows to match the column sums efficiently. It uses conditions to handle cases where colsum is 0, skips unnecessary iterations, and adjusts the distribution based on the values of upper and lower. The code ensures the total sum of the reconstructed rows aligns with the given upper and lower constraints, returning a valid reconstruction or an empty array if not possible.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    const length = colsum.length; 
    const row1 = new Array(length).fill(0);
    const row2 = new Array(length).fill(0);
    let totalSum = colsum.reduce((acc, currValue)=> acc + currValue, 0);

    if(totalSum!==upper+lower) return [];
    
    for(let i = 0 ; i<colsum.length; i++){
        if(upper <0 || lower<0) return [];
        if(colsum[i]===0) continue;
        if(colsum[i]===2) {
            row1[i] = 1;
            upper--;
            row2[i] = 1;
            lower--;
        } 
        else if(upper>lower) {
            upper--;
            row1[i]++;
        }
        else {
            lower--;
            row2[i]++;
        }
    }
    return [row1, row2];
};
```