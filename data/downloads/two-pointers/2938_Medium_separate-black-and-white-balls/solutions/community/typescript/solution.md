# Efficient Backward Traversal to Count Minimum Steps Between '1's and '0's

**Author:** akhi1N
**Votes:** 3
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5914618/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5914618/)

---

# Intuition
The problem seems to involve counting the number of steps between certain characters in the string. After thinking about it, a backward traversal might help in efficiently counting the minimum number of steps needed.

# Approach
- We traverse the string from right to left.
- We maintain a `count` to keep track of how many `'0'` characters we have encountered so far.
- For each `'1'`, we increment the `out` value by the current `count` because each `'1'` contributes steps equal to the number of `'0'`s to its right.
- This way, we can calculate the minimum number of steps in a single pass from right to left.

# Complexity
- Time complexity:  
  $$O(n)$$ where `n` is the length of the string. We only need a single pass through the string.

- Space complexity:  
  $$O(1)$$ since we are only using a few variables for counting and summing.

# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let count =0 , out = 0;
    for( let i = s.length-1; i >= 0; i-- ){
        if( s[i] == '0') count++
        else out+=count
    }
    return out 
};
```

```TypeScript []
function minimumSteps(s: string): number {
    let count : number = 0;
    let out : number = 0;
    for( let i = s.length-1; i >= 0; i-- ){
        if( s[i] == '0') count++
        else out += count
    }
    return out 
};
```