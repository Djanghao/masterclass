# C# Solution for Number of Senior Citizens Problem

**Author:** Aman_Raj_Sinha
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5566258/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5566258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The solution leverages LINQ\u2019s Count method along with a lambda expression to succinctly and efficiently count the number of passengers who are over 60 years old. This approach focuses on using declarative programming to express the filtering and counting logic in a concise manner.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Lambda Expression: The lambda expression detail => int.Parse(detail.Substring(11, 2)) > 60 is used within the Count method. This expression:
	\u2022	Extracts the age substring from each detail string.
	\u2022	Parses the age substring into an integer.
	\u2022	Checks if the parsed age is greater than 60.
2.	LINQ Count: The Count method iterates through each element in the details array, applies the lambda expression to each element, and counts how many elements satisfy the condition (int.Parse(detail.Substring(11, 2)) > 60).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this solution is O(n), where n is the number of strings in the details array. The Count method iterates through each element exactly once, and the operations within the lambda expression (Substring, int.Parse, and comparison) are constant time operations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) additional space, not counting the input array. The operations inside the lambda expression (Substring, int.Parse, comparison) use a constant amount of extra space, and the Count method itself operates in constant space.

# Code
```
public class Solution {
    public int CountSeniors(string[] details) {
        return details.Count(detail => int.Parse(detail.Substring(11, 2)) > 60);
    }
}
```