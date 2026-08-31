# C# Two Pointer Technique with Modulo

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/5455592/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/5455592/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Given that the array length can be up to 3000, a brute-force approach would be too slow. Instead, we can use a combination of counting and two-pointer techniques.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Count Occurrences: We use a dictionary count to store the frequency of each number in the array.
//  Two-Pointer Technique: We iterate through each unique pair of numbers (x, y). For each pair, we 
//  calculate the required third number z = target 0 x 0 y. We then check if z exists in the dictionary.
//  *Case 1: All three numbers are the same (x == y == z).
//  *Case 2: Two numbers are the same, one is different (x == y and x != z).
//  *case 3: All three numbers are different (x < y < z).
//  Modulo Operation: Since the result can be very large, we take the result of modulo 10^9 + 7.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n) where n is the length of the array.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public int ThreeSumMulti(int[] arr, int target) {
        const int MOD = 1000000007;
        int n = arr.Length;
        Dictionary<int, long> count = new Dictionary<int, long>();

        // Count the occurrences of each number in the array
        foreach (int num in arr) {
            if (!count.ContainsKey(num)) {
                count[num] = 0;
            }
            count[num]++;
        }

        long result = 0;

        // Iterate through each unique pair (i, j) where i <= j
        foreach (var x in count.Keys) {
            foreach (var y in count.Keys) {
                int z = target - x - y;
                if (count.ContainsKey(z)) {
                    if (x == y && y == z) {
                        // Case 1: all three numbers are the same
                        result += count[x] * (count[x] - 1) * (count[x] - 2) / 6;
                    } else if (x == y && y != z) {
                        // Case 2: Two numbers are the same, one is different
                        result += count[x] * (count[x] - 1) / 2 * count[z];
                    } else if (x < y && y < z) {
                        // Case 3: All three numbers are different
                        result += count[x] * count[y] * count[z];
                    }
                }
            }
        }

        return (int)(result % MOD);
    }
}
```