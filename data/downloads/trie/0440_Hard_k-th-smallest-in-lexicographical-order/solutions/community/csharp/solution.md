# C# Solution for K-th Smallest In Lexicographical Order Problem

**Author:** Aman_Raj_Sinha
**Votes:** 6
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818177/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5818177/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about finding the k-th lexicographically smallest integer in the range [1, n]. Instead of generating and sorting all numbers up to n, which is computationally expensive for large n, the solution leverages the concept of a prefix tree (trie) to simulate the traversal of numbers in lexicographical order.

\u2022	The idea is to traverse numbers as if they were organized in a hierarchical tree structure, where each number can be expanded into its children by adding digits (e.g., 1 expands to 10, 11, 12, ...).
\u2022	By counting the number of nodes (numbers) between any two prefixes, we can efficiently decide whether to move to the next sibling (lexicographical neighbor) or descend into the next level.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Initialization: Start with current = 1, representing the first node in our simulated tree. Decrement k because the first number (1) is already considered.
2.	Counting Steps: Use the CountSteps function to count the number of integers between current and the next prefix (current + 1). This count helps determine how far k is from current.
3.	Decide Movement:
	\u2022	If the count of steps is less than or equal to k, move to the next sibling (current++) and reduce k by the number of steps.
	\u2022	If k is still within the subtree rooted at current, move down to the next level (current *= 10) and reduce k by 1.
4.	Termination: Repeat this process until k reaches zero, at which point current will be the k-th lexicographically smallest number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(log(n) * log(n)):
	\u2022	The first log(n) factor comes from the number of digits in n, representing the levels of the \u201Ctree\u201D.
	\u2022	The second log(n) factor comes from counting the number of steps between two prefixes, as we traverse the tree level by level.
Therefore, the overall complexity is efficient for large values of n (up to 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1):
	\u2022	The solution uses a constant amount of space, with only a few integer variables (current, k, etc.).
	\u2022	No additional data structures that grow with the input size are used, making the approach memory efficient.

# Code
```csharp []
public class Solution {
    public int FindKthNumber(int n, int k) {
        int current = 1; // Start with 1 since we consider numbers starting from 1
        k--; // Decrement k because the first element (1) is already considered

        while (k > 0)
        {
            // Count the steps between current prefix and the next prefix
            long steps = CountSteps(n, current, current + 1);
            
            if (steps <= k)
            {
                // Move to the next sibling
                current++;
                k -= (int)steps;
            }
            else
            {
                // Move down to the next level
                current *= 10;
                k--;
            }
        }

        return current;
    }

    // Helper function to count the number of steps between two prefixes
    private long CountSteps(int n, long current, long next)
    {
        long steps = 0;

        // Calculate the steps between current and next prefixes up to n
        while (current <= n)
        {
            steps += Math.Min(n + 1, next) - current;
            current *= 10;
            next *= 10;
        }

        return steps;
    }
}
```