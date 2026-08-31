# 🧩  2917. Find the K-or of an Array

**Author:** muqimjon
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4704008/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4704008/)

---

# Intuition
To find the K-or of an array, iterate through each bit position from the most significant bit (MSB) to the least significant bit (LSB), counting how many elements in the array have that bit set. If the count is at least K, set that bit in the result.

# Approach
Iterate through each bit position from 31 to 0. For each bit position, count how many elements in the array have that bit set using bitwise operations. If the count is at least K, set that bit in the result using bitwise OR operations.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```csharp
public class Solution {
    public int FindKOr(int[] nums, int k) {
        int result = 0;

        for (int i = 31; i >= 0; i--) {
            int count = 0;
            foreach (int num in nums)
                count += (num >> i) & 1;

            if (count >= k)
                result |= 1 << i;
        }

        return result;
    }
}
```