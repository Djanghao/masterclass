# C# Bit Manipulation Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/5708062/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/5708062/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->This type of solution is called a bit manipulation approach. It's designed to take advantage of bitwise operations, which are typically faster and more memory-efficient than other types of operations like string manipulations.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  MOD: We use MOD = 1000000007 to perform modulo operations to keep the number within the range of an 
//  integer.
//  result: This variable stores the intermediate result as we process each number from 1 to n.
//  length: Tracks the number of bits required to represent the current number. Whenever i is a power of 2, 
//  length is incremented, since the binary length of a power of 2 is one bit longer than the previous 
//  numbers.
//  Bitwise Operations:
//  *(i & (i - 1)) == 0 is a quick way to check if i is a power of 2, which helps in adjusting the bit 
//  length length.
//  *result << length shifts the accumulated result to the left by length bits to make space for the binary 
//  digits of i.
//  * | i appends the binary digits of i to the shifted result.
//  * % MOD ensures the result stays within the limit set by MOD.
____

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n log n).
*For each integer 'i' from '1' to 'n', the algorithm determines the number of bits required to represent 'i' in binary (which takes 'O(log i)' time because the length of the binary representation of 'i' is 'log i').
*The loop runs 'n' times, and in each iteration, it performs operations that are preportional to 'log i', resulting in a total time complexity of 'O(n log n)'.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1).
*The space complexity is constant because the algorithm uses a fixed amount of additional space ('result' and 'length' variables), regardless of the input size 'n'.
*There are no large data structures (like arrays or lists) that grow with the input size, so the memory usage does not scale with 'n'.
___

# Code
```csharp []
public class Solution {
    public int ConcatenatedBinary(int n) {
        const int MOD = 1000000007;
        long result = 0;
        int length = 0;
        
        for (int i = 1; i <= n; i++) {
            // Determine if the current integer is a power of 2 by checking if the binary representation length increases
            if ((i & (i - 1)) == 0) {
                length++;
            }
            
            // Shift the result left by 'length' bits and add the current number
            result = ((result << length) | i) % MOD;
        }
        
        return (int)result;
    }
}
```