# Easy Solution O(n)

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/5745394/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/5745394/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
L' moves left: In "XL" \u2192 "LX", 'L' is allowed to move left but cannot jump over an 'R' or another 'L'. Hence, 'L' in start should never be to the right of its corresponding position in end.

'R' moves right: In "RX" \u2192 "XR", 'R' can move right but should not jump over an 'L' or another 'R'. Thus, 'R' in start should never be to the left of its corresponding position in end.

Ignore 'X': Since 'X' only serves as empty space and doesn't move, we need to focus on the relative positions of 'L' and 'R' in the two strings.

Given this understanding, the solution involves two main checks:

The sequence and count of 'L' and 'R' should be the same in both start and end.
The 'L' characters in start must not be to the right of their corresponding positions in end, and the 'R' characters must not be to the left.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool CanTransform(string start, string end) {
        if (start.Replace("X", "") != end.Replace("X", "")) {
            return false; // If the 'L' and 'R' sequences do not match
        }

        int p1 = 0, p2 = 0;
        int n = start.Length;

        while (p1 < n && p2 < n) {
            // Move pointers to the next non-X character
            while (p1 < n && start[p1] == 'X') p1++;
            while (p2 < n && end[p2] == 'X') p2++;

            // If both pointers reached the end, strings are transformable
            if (p1 == n && p2 == n) return true;
            if (p1 == n || p2 == n) return false; // One string has extra characters

            // Check if characters at p1 and p2 are different
            if (start[p1] != end[p2]) return false;

            // Check if 'L' moves left or 'R' moves right properly
            if (start[p1] == 'L' && p1 < p2) return false;
            if (start[p1] == 'R' && p1 > p2) return false;

            // Move to the next character
            p1++;
            p2++;
        }

        return true;
    }

    private void Swap(char[] ch, int i, int j)
    {
        char c = ch[i];
        ch[i] = ch[j];
        ch[j] = c;
    }
}
```