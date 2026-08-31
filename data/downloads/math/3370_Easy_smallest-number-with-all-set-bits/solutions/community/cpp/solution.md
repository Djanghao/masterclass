# 🔥 Find the Smallest Number with Only Set Bits 🔢

**Author:** lasheenwael9
**Votes:** 9
**Link:** [https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6102920/](https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6102920/)

---

# Intuition \uD83D\uDCA1  

The problem revolves around finding the smallest number greater than or equal to a given number `n` where the binary representation of the number contains only `1`s.  

1. **Key Insight**:  
   - Numbers with only `1`s in their binary representation (e.g., 1, 3, 7, 15) follow the form $$ 2^b - 1 $$, where `b` is the total number of bits.  
   - The smallest such number greater than or equal to `n` will have a binary representation of all set bits and at least `b` bits where $$ b = \\lceil \\log_2(n + 1) \\rceil $$.  

2. **Approach**:  
   - Determine the number of bits `b` needed to represent `n`.  
   - Calculate the result as $$ 2^b - 1 $$.

---

# Approach \uD83D\uDEE0\uFE0F  

1. Compute the number of bits `b` using the formula `b = log2(n) + 1`.  
2. Return the value $$ (1 << b) - 1 $$, which represents $$ 2^b - 1 $$ with all bits set.  

---

# Complexity \u23F3  

- **Time Complexity**:  
  $$ O(1) $$ since the calculations involve constant-time operations.  

- **Space Complexity**:  
  $$ O(1) $$ as no extra space is used.  

---
![c1ee5054-dd07-4caa-a7df-e21647cfae9e_1709942227.5165014.png](./images/0.png)


# Code \uD83D\uDCBB  

```cpp []
class Solution {
public:
    int smallestNumber(int n) {
        int b = log2(n) + 1;           // Calculate the number of bits
        return (1 << b) - 1;          // Return 2^b - 1
    }
};
```

```java []
class Solution {
    public int smallestNumber(int n) {
        int b = (int) (Math.log(n) / Math.log(2)) + 1;  // Calculate the number of bits
        return (1 << b) - 1;                           // Return 2^b - 1
    }
}
```

```python []
class Solution:
    def smallestNumber(self, n: int) -> int:
        b = n.bit_length()         # Calculate the number of bits
        return (1 << b) - 1        # Return 2^b - 1
```

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let b = Math.floor(Math.log2(n)) + 1; // Calculate the number of bits
    return (1 << b) - 1;                 // Return 2^b - 1
};
```

---

# Explanation \uD83D\uDCD8  

## Example  
```plaintext
Input: n = 6  
Output: 7  

Explanation:  
- Binary of 6 = `110`  
- Smallest number with all set bits >= 6 is `111` (7 in decimal).  

Input: n = 10  
Output: 15  

Explanation:  
- Binary of 10 = `1010`  
- Smallest number with all set bits >= 10 is `1111` (15 in decimal).  
```

---

# Takeaway \uD83D\uDE80  

This problem showcases how mathematical properties of binary numbers simplify implementation! If this helped, **drop a \uD83D\uDC4D and share the love! \uD83D\uDC96** 

![1HBC0324_COV.jpg](./images/1.jpeg)
