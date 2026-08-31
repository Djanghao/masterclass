# Simple one iteration solution

**Author:** DominickDA
**Votes:** 0
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/5953712/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/5953712/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Iterate through the list a single time to count each value. Iterating through the list more than once is not required.
# Approach
<!-- Describe your approach to solving the problem. -->
The code maintains four variables:

- longestOnes: Stores the length of the longest consecutive sequence of '1's encountered so far.
- currentOnes: Keeps track of the length of the current consecutive sequence of '1's.
- longestZeros: Stores the length of the longest consecutive sequence of '0's encountered so far.
- currentZeros: Keeps track of the length of the current consecutive sequence of '0's.

The code iterates through the string s. For each character:

- If it's a '1':
    - Increment currentOnes.
    - Reset currentZeros to 0, as the consecutive sequence of '0's is broken.
    - Update longestOnes if currentOnes is greater.
- If it's a '0':
    - Increment currentZeros.
    - Reset currentOnes to 0.
    - Update longestZeros if currentZeros is greater.
    -

Finally, the code returns true if longestOnes is greater than longestZeros, indicating that the longest consecutive sequence of '1's is longer than the longest consecutive sequence of '0's. Otherwise, it returns false.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) Beats 100% runs in 0ms

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) 39mb beats 63.83%

# Code
```csharp []
public class Solution {
    public bool CheckZeroOnes(string s) {
        int longestOnes = 0, currentOnes = 0;
        int longestZeros = 0, currentZeros = 0;

        for (int i = 0; i < s.Length; i++) {
            if (s[i] == '1') {
                currentOnes++;
                currentZeros = 0; // Reset count of consecutive zeros
                longestOnes = Math.Max(longestOnes, currentOnes);
            } else {
                currentZeros++;
                currentOnes = 0; // Reset count of consecutive ones
                longestZeros = Math.Max(longestZeros, currentZeros);
            }
        }

        return longestOnes > longestZeros;
    }
}
```