# Javascript, simple, ES6 Map and greedy

**Author:** JerryXue
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4895610/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4895610/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} words
 * @return {number}
 */
var maxPalindromesAfterOperations = function(words) {
    let allList = [...words].join("").split("");
    let myMap = new Map();
    let pair = 0;
    let ans = 0; 
    for(let s of allList){
        myMap.set(s, (myMap.get(s))+1 || 1);
        if(myMap.get(s) %2 ==0){
           pair++;
        }
    };
    words.sort((a,b) => a.length - b.length);
    for(let i=0; i< words.length; i++){
        const required = Math.floor(words[i].length/2);
        pair -= required;
        ans += pair >=0 ? 1:0;
    }
    return ans
};
```