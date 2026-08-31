# C# Solution for Number of Steps to Reduce a Number in Binary Representation to One Problem

**Author:** Aman_Raj_Sinha
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223959/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223959/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to reduce a binary number to 1 using two operations: divide by 2 if the number is even, or add 1 if the number is odd. This can be directly simulated by manipulating the binary string itself.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	StringBuilder for Efficient String Manipulation:
	\u2022	Use StringBuilder for modifying the binary string in place.
	\u2022	StringBuilder is more efficient for operations like append, delete, and replace compared to using strings directly in C#.
2.	Simulate the Steps:
	\u2022	Even Number: If the binary number ends in \u20180\u2019, it\u2019s even. Remove the last character to divide by 2.
	\u2022	Odd Number: If the binary number ends in \u20181\u2019, it\u2019s odd. Add 1 to the binary number, which may involve:
	\u2022	Changing trailing \u20181\u2019s to \u20180\u2019s to handle the carry.
	\u2022	If the carry affects the most significant bit, prepend \u20181\u2019.
3.	Count the Steps: Each operation (either removal of the last character or handling the addition and carry) is counted as a step.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	String Manipulation:
	\u2022	Each operation (removal of the last character or adding 1 with carry propagation) takes O(m) time in the worst case, where m is the current length of the binary string.
	\u2022	However, because each step reduces the length of the string or modifies it, the total operations are proportional to the length of the string.
\u2022	Overall Time Complexity: O(n), where n is the length of the binary string. This is because each bit is processed at most a constant number of times.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
StringBuilder Storage:
	\u2022	The StringBuilder needs to store the binary string, which requires O(n) space, where n is the length of the input string.
	\u2022	Auxiliary space is minimal apart from the space used by StringBuilder.

# Code
```
public class Solution {
    public int NumSteps(string s) {
        var sb = new System.Text.StringBuilder(s);
        int steps = 0;

        // Loop until the binary number is reduced to '1'
        while (sb.Length > 1) {
            if (sb[sb.Length - 1] == '0') {
                // If the number is even, remove the last character
                sb.Length--; // Equivalent to sb.Remove(sb.Length - 1, 1)
            } else {
                // If the number is odd, we need to add 1
                int i = sb.Length - 1;
                while (i >= 0 && sb[i] == '1') {
                    sb[i] = '0';
                    i--;
                }
                // If we have a carry past the most significant bit, prepend '1'
                if (i >= 0) {
                    sb[i] = '1';
                } else {
                    sb.Insert(0, '1');
                }
            }
            steps++;
        }

        return steps;
    }
}
```