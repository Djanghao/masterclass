# ✅100.0%🔥Easy Solution🔥With Explanation🔥

**Author:** MrAke
**Votes:** 169
**Link:** [https://leetcode.com/problems/number-complement/solutions/5671548/](https://leetcode.com/problems/number-complement/solutions/5671548/)

---

# Intuition
#### When asked to find the complement of an integer, the idea is to flip every bit in its binary representation\u2014changing `0`s to `1`s and `1`s to `0`s. For example, the complement of 5 (which is `101` in binary) is `010`, which is `2` in decimal.
---

# Approach
#### `Determine the Binary Length`: First, calculate the bit length of the integer. This is the number of bits required to represent the number in binary.
#### `Create a Mask`: Generate a binary number (mask) that has all bits set to 1 for the same length as the number's binary representation. This mask helps in flipping all bits when XORed with the original number.
#### `Flip the Bits`: Perform the XOR operation between the number and the mask. XORing with 1 flips the bit (0 becomes 1 and 1 becomes 0).
#### `Return the Result`: The result of the XOR operation is the complement of the original number.
---




- # Time complexity:
##### The time complexity is $$O(1)$$. The operations (finding bit length, shifting bits, XOR operation) are all constant time operations regardless of the size of the integer.
- # Space complexity:
##### The space complexity is $$O(1)$$. We are using a constant amount of extra space (only a few variables) that does not scale with the input size.
---
# Code
```python []
class Solution:
    def findComplement(self, num: int) -> int:
        bit_length = num.bit_length()
        
        mask = (1 << bit_length) - 1
        
        return num ^ mask
```
```C++ []
class Solution {
public:
    int findComplement(int num) {
        if (num == 0) return 1;
        
        unsigned int mask = ~0;
        
        while (num & mask) {
            mask <<= 1;
        }
        
        return ~mask & ~num;
    }
};

```
```javascript []
var findComplement = function(num) {
    if (num === 0) return 1;

    const bitLength = num.toString(2).length;
    
    const mask = (1 << bitLength) - 1;
    
    return num ^ mask;
};

```
```java []
class Solution {
    public int findComplement(int num) {
        if (num == 0) return 1;

        int bitLength = Integer.toBinaryString(num).length();
        
        int mask = (1 << bitLength) - 1;
        
        return num ^ mask;
    }
}

```
```C# []
public class Solution {
    public int FindComplement(int num) {
        int bitLength = (int)Math.Log(num, 2) + 1;
        
        int mask = (1 << bitLength) - 1;
        
        return num ^ mask;
    }
}

```
---

![Screenshot 2023-08-20 065922.png](./images/0.png)

