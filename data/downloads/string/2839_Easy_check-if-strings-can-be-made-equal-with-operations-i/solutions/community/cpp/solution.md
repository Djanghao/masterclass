# Easy C++ O(1) Check if characters at even and odd indices in both strings match.

**Author:** rajatjc
**Votes:** 22
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3992861/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3992861/)

---

## Intuition
The problem asks us to determine whether two strings can be made equal by swapping two of their characters. To solve this, we can check if the characters at even and odd indices of the two strings match. If they do, it means that we can swap characters at those positions to make the strings equal.

## Approach
1. Initialize two boolean variables, `evenCheck` and `oddCheck`, to check if characters at even and odd indices match respectively.
2. For even indices (0 and 2):
   - Check if `s1[0]` matches `s2[0]` and `s1[2]` matches `s2[2]`, or if `s1[0]` matches `s2[2]` and `s1[2]` matches `s2[0]`.
   - Update `evenCheck` accordingly.
3. For odd indices (1 and 3):
   - Check if `s1[1]` matches `s2[1]` and `s1[3]` matches `s2[3]`, or if `s1[1]` matches `s2[3]` and `s1[3]` matches `s2[1]`.
   - Update `oddCheck` accordingly.
4. Return `true` if both `evenCheck` and `oddCheck` are `true`, indicating that we can make the two strings equal by swapping characters.

## Complexity
- Time complexity: O(1) - The algorithm always performs a fixed number of character comparisons, so the time complexity is constant.
- Space complexity: O(1) - The algorithm uses a constant amount of additional space to store the boolean variables `evenCheck` and `oddCheck`.

```cpp
class Solution {
public:
    bool canBeEqual(string s1, string s2) {
        // Check even indices (0 and 2)
        bool evenCheck = (s1[0] == s2[0] && s1[2] == s2[2]) || (s1[0] == s2[2] && s1[2] == s2[0]);
        
        // Check odd indices (1 and 3)
        bool oddCheck = (s1[1] == s2[1] && s1[3] == s2[3]) || (s1[1] == s2[3] && s1[3] == s2[1]);
        
        // Return true if either even or odd check succeeds
        return evenCheck && oddCheck;
    }
};
```