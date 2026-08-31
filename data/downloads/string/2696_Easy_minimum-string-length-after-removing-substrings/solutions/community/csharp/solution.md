# C# Solution for Minimum String Length After Removing Substrings Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5880065/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5880065/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is that removing substrings \u201CAB\u201D or \u201CCD\u201D can be efficiently managed by using a stack. By pushing characters onto the stack and checking if they form either of the removable substrings with the top of the stack, we can simulate the process of removing these substrings as soon as they are encountered, without needing to re-traverse the string or perform repeated replacements. This stack-based method ensures that we handle each character in the string exactly once.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Stack Usage for Pair Matching: Traverse through the string character by character:
	\u2022	Push each character onto the stack unless it forms a pair (\u201CAB\u201D or \u201CCD\u201D) with the character currently on top of the stack.
	\u2022	If a valid pair is formed (either \u201CAB\u201D or \u201CCD\u201D), pop the top element from the stack (removing both characters).
	\u2022	Continue until the end of the string.
2.	Final Length Calculation: Once the entire string has been processed, the characters remaining in the stack represent the reduced string where no further pairs can be removed. The length of the stack gives the minimum possible length of the resulting string.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) where n is the length of the string. Each character is processed once:
\u2022	Characters are pushed onto or popped from the stack exactly once.
\u2022	Each operation (push or pop) takes constant time, O(1).

Thus, the overall time complexity is O(n), since we traverse the string once and perform constant-time operations per character.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) for the stack. In the worst case, no pairs (\u201CAB\u201D or \u201CCD\u201D) are removed, and all characters are stored in the stack, so the space required is proportional to the length of the string.

# Code
```csharp []
public class Solution {
    public int MinLength(string s) {
        Stack<char> stack = new Stack<char>();

        foreach (char c in s) {
            if (stack.Count > 0) {
                char top = stack.Peek();
                if ((top == 'A' && c == 'B') || (top == 'C' && c == 'D')) {
                    stack.Pop(); 
                    continue; 
                }
            }
            stack.Push(c);
        }
        return stack.Count;
    }
}
```