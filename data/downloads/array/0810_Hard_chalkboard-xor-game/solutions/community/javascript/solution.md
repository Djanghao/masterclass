# 🔥 Simple Javascript Solution - Easy to Understand

**Author:** joenix
**Votes:** 1
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/2041865/](https://leetcode.com/problems/chalkboard-xor-game/solutions/2041865/)

---

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums, xor = 0) {
    // get length
    let len = nums.length;

    // loop nums and reassign as remainder
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    // according to the meaning of the problem
    return xor === 0 || len % 2 === 0;
};
```