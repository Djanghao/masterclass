# Typescript bruteforce approach

**Author:** donghwipark
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition/solutions/4363354/](https://leetcode.com/problems/range-addition/solutions/4363354/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using object not array to avoid iterative process
# Approach
<!-- Describe your approach to solving the problem. -->
Put the object and add, on the object
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
N^2

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
N

# Code
```
function getModifiedArray(length: number, updates: number[][]): number[] {
    let resultObj = {}
    for(let i = 0; i < length; i++) { 
        resultObj[i] = 0;
    }

    for(let array of updates) {
        let startIndex = array[0];
        let endIndex = array[1];
        let insertingValue = array[2];
        for(let j = 0; j < endIndex - startIndex + 1; j++) {
            resultObj[j + startIndex] += insertingValue
        }
    }
    return Object.values(resultObj);
};
```