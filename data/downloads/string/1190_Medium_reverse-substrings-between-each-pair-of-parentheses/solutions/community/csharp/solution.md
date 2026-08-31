# C# Solution for Reverse Substrings Between Each Pair of Parentheses Problem

**Author:** Aman_Raj_Sinha
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457451/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457451/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to use a stack to manage the positions of the parentheses and directly reverse the substrings between matching parentheses. By iterating through the string and reversing substrings as we encounter closing parentheses, we can efficiently handle nested parentheses.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Traversal and Stack Usage:
	\u2022	Convert the input string to a character array for easy manipulation.
	\u2022	Use a stack to keep track of the positions of opening parentheses \u2018(\u2019.
	\u2022	When encountering a closing parenthesis \u2018)\u2019, pop the position of the last unmatched opening parenthesis from the stack and reverse the substring between these positions.
2.	Reversal:
	\u2022	The Reverse method reverses the characters in the array between the given indices left and right.
3.	Build Result:
	\u2022	After processing all characters, use a StringBuilder to construct the final result string by excluding the parentheses.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Traversal: We traverse the string once, resulting in O(n) time complexity, where n is the length of the string.
\u2022	Reversal Operations: Each character can be part of at most one reversal. Even though reversing a substring takes O(m) time, where m is the length of the substring, the total number of operations remains O(n) because each character is reversed at most once.

Thus, the overall time complexity is O(n).

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Stack Storage: The stack stores positions of opening parentheses. In the worst case, the stack may store all the opening parentheses in the string, leading to O(n) space complexity.
\u2022	Result Construction: We use a StringBuilder to build the final result, which uses O(n) space.

Therefore, the overall space complexity is O(n).

# Code
```
public class Solution {
    public string ReverseParentheses(string s) {
        // Convert the input string to a character array
        char[] arr = s.ToCharArray();
        // Stack to store the positions of opening parentheses
        Stack<int> stack = new Stack<int>();

        for (int i = 0; i < arr.Length; i++) {
            if (arr[i] == '(') {
                // Push the position of '(' onto the stack
                stack.Push(i);
            } else if (arr[i] == ')') {
                // Pop the position of the last '('
                int j = stack.Pop();
                // Reverse the substring between the positions j and i
                Reverse(arr, j + 1, i - 1);
            }
        }

        // Build the final result string, excluding parentheses
        StringBuilder result = new StringBuilder();
        foreach (char ch in arr) {
            if (ch != '(' && ch != ')') {
                result.Append(ch);
            }
        }

        return result.ToString();
    }

     private void Reverse(char[] arr, int left, int right) {
        while (left < right) {
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}
```