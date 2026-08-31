# JavaScript Solution - Beat's 100%

**Author:** amolkalra94
**Votes:** 3
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/3163109/](https://leetcode.com/problems/naming-a-company/solutions/3163109/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
The approach for the code is to find the number of distinct names in the given array "ideas". It works as follows:

Initialize an array "sets" of 26 sets, each representing the unique names starting with a different letter (a-z).

For each idea in the "ideas" array, the first letter is used to index into the "sets" array, and the rest of the name is added to the corresponding set.

Initialize a two-dimensional array "same" to store the count of names that are common between each set.

For each set in the "sets" array, compare it with the other sets to find the common names, and increment the count in the "same" array for the corresponding indices.

Initialize a variable "res" to store the result.

For each set in the "sets" array, calculate the number of distinct names as the product of the size of each set minus the count of common names, and add it to the "res" variable.

Return the "res" variable as the final result.

# Code
```
/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let sets = [];
    for (let i = 0; i < 26; i++) {
        sets[i] = new Set();
    }
    for (let s of ideas) {
        sets[s.charCodeAt(0) - 97].add(s.substring(1));
    }
    let same = [];
    for (let i = 0; i < 26; i++) {
        same[i] = Array(26).fill(0);
    }
    for (let i = 0; i < 26; i++) {
        for (let s of sets[i]) {
            for (let j = i + 1; j < 26; j++) {
                if (sets[j].has(s)) {
                    same[i][j]++;
                }
            }
        }
    }
    let res = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            res += (sets[i].size - same[i][j]) * (sets[j].size - same[i][j]) * 2;
        }
    }
    return res;

};
```