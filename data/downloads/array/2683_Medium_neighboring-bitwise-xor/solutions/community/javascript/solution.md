# ✅🔥EASY and FAST solution🔥✅||O(n) TIME - O(1) SPACE||🚀

**Author:** UchihaKim
**Votes:** 3
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3522031/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3522031/)

---

# Approach
we just need to try it but remember that 0 ^ 1 is same as 1 ^ 0 so it doesn't matter how we start because we need to know if it's true or false so it's like easy 1d dp like fib problem

# Code
```
var doesValidArrayExist = function(derived) {
    let n = derived.length;
    let original = 1
    for(let i = 1; i < n; i++){
        original = original ^ derived[i - 1];
    }
    return 1 ^ original == derived[n - 1];
};
```