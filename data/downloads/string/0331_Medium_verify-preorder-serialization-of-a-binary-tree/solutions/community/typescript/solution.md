# Javascript problem Time O(N) Space O(1)

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/5296728/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/5296728/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {

    let preOrderArr = preorder.split(",");
    let slots = 1;

    for(let node of preOrderArr){
        // console.log(node);
        if(slots <= 0 ) return false;

        if(node == "#"){
            slots += -1 
        } else {
            slots += 1;
        }
    }

    return slots == 0;
};
```