# C# Solution for Lexicographical Numbers Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5814255/](https://leetcode.com/problems/lexicographical-numbers/solutions/5814255/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to generate numbers in lexicographical order efficiently. Instead of using sorting or a depth-first search, this approach iteratively generates the next lexicographical number using arithmetic operations. The idea is to build the sequence directly by manipulating the current number\u2014multiplying by 10 to go deeper, incrementing when possible, and backtracking when necessary.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Start with the smallest number 1:
	\u2022	The smallest number is always 1, so the sequence begins there.
2.	Generate the next number in lexicographical order:
	\u2022	Multiply by 10 when possible: This step lets you go to the next lexicographical \u201Clevel\u201D (e.g., from 1 to 10).
	\u2022	Increment the current number when it\u2019s still within bounds and doesn\u2019t end in 9 (since 9 signals a switch point).
	\u2022	Backtrack and increment if you cannot continue directly: Divide the number back (remove digits) until you find the next valid number that can be incremented.
3.	Edge Handling:
	\u2022	If the current number exceeds n, backtrack by dividing by 10 until you can find a valid increment.
	\u2022	Continue adjusting to find the smallest lexicographical successor.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time Complexity: O(n)
	\u2022	Each number from 1 to n is processed exactly once. The loop runs n times, generating the next number in O(1) time.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space Complexity: O(1) extra space
	\u2022	Only a few variables (current and counters) are used. The result list is not counted as extra space since it\u2019s part of the output requirement.
	\u2022	No recursion or additional data structures grow with n.

# Code
```csharp []
public class Solution {
    public IList<int> LexicalOrder(int n) {
        List<int> result = new List<int>();
        int current = 1;

        for (int i = 0; i < n; i++) {
            result.Add(current);
            
            // Try to go deeper (multiply by 10)
            if (current * 10 <= n) {
                current *= 10;
            } 
            // Increment current, or handle boundary and end digits
            else if (current % 10 != 9 && current + 1 <= n) {
                current++;
            } 
            // Backtrack until we can increment to next valid number
            else {
                while ((current / 10) % 10 == 9) {
                    current /= 10;
                }
                current = current / 10 + 1;
            }
        }

        return result;
    }
}
```