# [We💕Simple] 7 Ways to Count Bits (Easy to Hard)

**Author:** YooSeungKim
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/4341034/](https://leetcode.com/problems/number-of-1-bits/solutions/4341034/)

---

## 1. Using native method
```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        return n.bit_count()
```
``` Kotlin []
class Solution {
    fun hammingWeight(n:Int):Int {
        return n.countOneBits()
    }
}
```

## 2. Using binary string representation
```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count("1")
```
``` Kotlin []
class Solution {
    fun hammingWeight(n:Int):Int {
        return Integer.toBinaryString(n).count { it == '1' }
    }
}
```

## 3. Bit shifting and masking
```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        return sum((n >> i) & 1 for i in range(32))
```
``` Kotlin []
class Solution {
    fun hammingWeight(n: Int): Int {
        return (0..31).sumOf { (n ushr it) and 1 }
    }
}
```

## 4. Bit shifting and masking (2) - Recursive
```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        return (n&1)+self.hammingWeight(n>>1) if n else 0
```
``` Kotlin []
class Solution {
    fun hammingWeight(n: Int): Int {
        return if (n != 0) (n and 1) + hammingWeight(n ushr 1) else 0
    }
}
```

## 5. n & (n - 1) trick
```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        return 1 + self.hammingWeight(n & (n - 1)) if n else 0

```
``` Kotlin []
class Solution {
    fun hammingWeight(n: Int): Int {
        return if (n != 0) 1 + hammingWeight(n and (n - 1)) else 0
    }
}
```

## 6. Lookup table approach

```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        # table=[bin(i).count('1') for i in range(256)]
        table=[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,4,5,5,6,5,6,6,7,5,6,6,7,6,7,7,8]
        return (table[n & 0xff] +
                table[(n >> 8) & 0xff] +
                table[(n >> 16) & 0xff] +
                table[(n >> 24) & 0xff])
```
```Kotlin []
class Solution {
    fun hammingWeight(n: Int): Int {
        val table = arrayOf(0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,1,2,2,3,2,3,3,4,2,3,3,4,3,4,4,5,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,2,3,3,4,3,4,4,5,3,4,4,5,4,5,5,6,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,3,4,4,5,4,5,5,6,4,5,5,6,5,6,6,7,4,5,5,6,5,6,6,7,5,6,6,7,6,7,7,8)
        return table[n and 0xff] + table[(n ushr 8) and 0xff] + table[(n ushr 16) and 0xff] + table[(n ushr 24) and 0xff]
    }

}
```

## 7. Bit manipulation with masks and shifts:
```Python []
class Solution:
    def hammingWeight(self, n: int) -> int:
        n = (n & 0x55555555) + ((n & 0xAAAAAAAA) >> 1)
        n = (n & 0x33333333) + ((n & 0xCCCCCCCC) >> 2)
        n = (n & 0x0F0F0F0F) + ((n & 0xF0F0F0F0) >> 4)
        n = (n & 0x00FF00FF) + ((n & 0xFF00FF00) >> 8)
        n = (n & 0x0000FFFF) + ((n & 0xFFFF0000) >> 16)
        return n        
```
```Kotlin []
class Solution {
    fun hammingWeight(n: Int): Int {
        var n = n
        n = (n and 0x55555555) + ((n ushr 1) and 0x55555555)
        n = (n and 0x33333333) + ((n ushr 2) and 0x33333333)
        n = (n and 0x0F0F0F0F) + ((n ushr 4) and 0x0F0F0F0F)
        n = (n and 0x00FF00FF) + ((n ushr 8) and 0x00FF00FF)
        n = (n and 0x0000FFFF) + ((n ushr 16) and 0x0000FFFF)
        return n
    }
}
```

1.  **Using `bitCount` method**: Directly uses a built-in function to count the number of one bits in the binary representation of the number.

2.  **Using binary string representation**: Converts the number to its binary string form and counts the number of '1' characters.
3.  **Bit shifting and masking**: Iteratively shifts the number to the right and checks the least significant bit in each step, counting the number of times this bit is 1.
4.  **Recursive approach with bit shifting**: Uses recursion to shift the number right by one bit at each step, adding the least significant bit to the count, until the number becomes zero.
5.  **Recursive approach using n & (n - 1) trick**: Each iteration of this recursion removes the lowest set bit from the number, counting each such operation, until no bits are left.
6.  **Lookup table approach**: Breaks the number into 8-bit chunks and uses a precomputed table to quickly find the number of set bits in each chunk.
7.  **Bit manipulation with masks and shifts**: Applies a series of bit masks and shifts to progressively sum the number of set bits in groups of 1, 2, 4, 8, 16, and finally 32 bits.

Here are the binary representations of the hexadecimal numbers:

- `0x55555555` in binary: `01010101010101010101010101010101`
- `0x33333333` in binary: `00110011001100110011001100110011`
- `0x0F0F0F0F` in binary: `00001111000011110000111100001111`
- `0x00FF00FF` in binary: `00000000111111110000000011111111`
- `0x0000FFFF` in binary: `00000000000000001111111111111111`

The process implemented in this algorithm is designed to efficiently count the number of set bits (bits with a value of 1) in a 32-bit integer. The approach it uses is more sophisticated and faster than simply checking each bit one by one.

1. **Bitwise Masking and Addition**: The algorithm uses specific bitwise masks (like `0x55555555`, `0x33333333`, etc.) to partition the integer into smaller groups of bits. For each group, it calculates the number of set bits by applying these masks and then adding the results. This step is repeated, combining increasingly larger groups of bits.

2. **Efficient Counting**: Instead of counting each bit individually, the algorithm simultaneously counts multiple bits. It starts by counting 1s in pairs of bits, then in groups of four, eight, and finally sixteen bits. By doing so, it reduces the number of operations needed compared to checking each bit separately.

3. **Divide and Conquer**: This method embodies the divide and conquer strategy. It breaks down the 32-bit number into smaller parts, counts the set bits in these smaller parts, and then combines the results to get the total count.

4. **Final Accumulation**: After processing all groups, the algorithm adds up the counts from the upper and lower 16 bits. This final sum gives the total number of set bits in the entire 32-bit integer.

In essence, this process significantly optimizes the task of counting set bits in an integer, leveraging bitwise operations to enhance efficiency and reduce computational complexity.