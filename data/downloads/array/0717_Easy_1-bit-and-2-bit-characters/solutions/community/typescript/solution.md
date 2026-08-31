# Incremental Solution

**Author:** Januston
**Votes:** 0
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/5056540/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/5056540/)

---

# Intuition
if you see a 1 increment by 2 else increment by 1. If you reach the second last index and its 1 then return false. Else return true

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
function isOneBitCharacter(bits: number[]): boolean {
    let len = bits.length;
    if(len < 2) return true;
    if(bits[len-2] == 0) return true
    for(let i = 0 ; i < bits.length-1; i++) {
        if(i == bits.length-2) return false
        if(bits[i] == 1) i++;
    }
    return true;
};
```