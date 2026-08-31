# C# Greedy Algorithm

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/5496349/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/5496349/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve this problem, we need to construct the lexicographically smallest subsequence of the input string s that contains all the distinct characters of s exactly once.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Last Occurence Tracking: We first iterate over the string to record the last occurence of each 
//  character. This helps in deciding if we can safely remove a character from the stack later.
//  Stack and Seen Array: We use a stack to build the final result and an array 'seen' to keep track of
//  which characters are currently in the stack.
//  Iteration and Greedy Choice:
//  *For each character, if it is already in the stack (seen[c - 'a']), we skip it.
//  *Otherwise, we check if the current character can replace the top of the stack character to form a 
//  smaller lexicographical order while ensuring the top character can appear later using lastIndex.
//  *We push the current character onto the stack and mark it as seen.
//  Result Construction: Finally, we pop characters from the stack to build the result string in the 
//  correct order.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n).
___

# Code
```
public class Solution {
    public string SmallestSubsequence(string s) {
        int[] lastIndex = new int[26];
        for (int i = 0; i < s.Length; i++) {
            lastIndex[s[i] - 'a'] = i;
        }

        Stack<char> stack = new Stack<char>();
        bool[] seen = new bool[26];

        for (int i = 0; i < s.Length; i++) {
            char c = s[i];
            if (seen[c - 'a']) continue;

            while (stack.Count > 0 && stack.Peek() > c && lastIndex[stack.Peek() - 'a'] > i) {
                char removed = stack.Pop();
                seen[removed - 'a'] = false;
            }

            stack.Push(c);
            seen[c - 'a'] = true;
        }

        char[] result = new char[stack.Count];
        for (int i = result.Length - 1; i >= 0; i--) {
            result[i] = stack.Pop();
        }

        return new string(result);
    }
}

```