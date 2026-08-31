# EASY FOR BEGINNERS: DETERMINING SPECIAL ARRAYS 🔥

**Author:** seba1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5179785/](https://leetcode.com/problems/special-array-i/solutions/5179785/)

---

# Intuition
To determine if the array is "special," we need to check that every two consecutive elements have different parities (one is odd and the other is even).

# Approach
1. Iterate through the array starting from the second element.
2. For each element, check if it has the same parity as the previous element.
3. 3.If any two consecutive elements have the same parity, return false.
4. If we complete the iteration without finding any such pair, return true.

# Complexity
- Time complexity:
`O(n)`, where \uD835\uDC5B is the length of the array. We iterate through the array once, checking the parity of each element.
- Space complexity:
`O(1)`, since we only use a constant amount of extra space for our variables.

# Code
```
function isArraySpecial(nums: number[]): boolean {
    
    for (let i = 1; i < nums.length; i++) {
        const parity_1 = nums[i] % 2 
        const parity_2 = nums[i - 1] % 2
    
        if (parity_1 === parity_2) {
            return false
        }
    }

    return true
};
```