# EASY APPROACH !!!

**Author:** izzatillo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5505577/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/solutions/5505577/)

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
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    const hashTable = {
        'a': [],
        'b': []
    };
    for(let i = 0; i < s.length; i++){
        if(a[0] === s[i]){
            if(a === s.slice(i, (i + a.length))){
                hashTable['a'].push(i);
            }
        }
        if(b[0] === s[i]){
            if(b === s.slice(i, (i + b.length))){
                hashTable['b'].push(i);
            }
        }
    }

    if (hashTable['b'].length === 0) {
        return [];
    }

    const result = [];

    for (let i = 0; i < hashTable['a'].length; i++) {
        for (let j = 0; j < hashTable['b'].length; j++) {
            if (Math.abs(hashTable['a'][i] - hashTable['b'][j]) <= k) {
                result.push(hashTable['a'][i]);
                break;
            }
        }
    }

    return result;
};
```