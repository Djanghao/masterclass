# C# Solution for Buddy Strings Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/3710746/](https://leetcode.com/problems/buddy-strings/solutions/3710746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to identify whether it is possible to swap two letters in string s to obtain string goal.

# Approach
<!-- Describe your approach to solving the problem. -->
- If the lengths of s and goal are not equal or they are shorter than 2 characters, it is not possible to swap two letters, so the function returns false.
- If s is already equal to goal, we check if there are any repeated characters in s. If there are, we can swap them to obtain goal, so the function returns true.
- We iterate through s and goal simultaneously and keep track of the differing indices in the diffIndices list.
- If the number of differing indices is not exactly 2, it means that more than two letters need to be swapped, which is not allowed. So, the function returns false.
- Finally, we check if swapping the characters at the differing indices in s results in s being equal to goal. If it does, the function returns true; otherwise, it returns false.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n), where n is the length of the input strings s and goal. This is because we iterate through the strings once to compare the characters and find the differing indices.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(1), as it uses a constant amount of extra space to store the differing indices and the unique characters in s. The space used does not depend on the input size.

# Code
```
public class Solution {
    public bool BuddyStrings(string s, string goal) {
        if (s.Length != goal.Length || s.Length < 2 || goal.Length < 2)
        return false;

        if (s.Equals(goal)) {
            // Check if there are any repeated characters in s
            HashSet<char> uniqueChars = new HashSet<char>(s);
            return uniqueChars.Count < s.Length;
        }

        List<int> diffIndices = new List<int>();
        for (int i = 0; i < s.Length; i++) {
            if (s[i] != goal[i])
                diffIndices.Add(i);
            if (diffIndices.Count > 2)
                return false;
        }

        if (diffIndices.Count != 2)
            return false;

        return s[diffIndices[0]] == goal[diffIndices[1]] && s[diffIndices[1]] == goal[diffIndices[0]];
    }
}
```