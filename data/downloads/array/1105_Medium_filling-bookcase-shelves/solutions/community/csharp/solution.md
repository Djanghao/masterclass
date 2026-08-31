# C# Solution for Filling Bookcase Shelves Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561533/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561533/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to minimize the height of the bookshelf by optimally placing books on shelves. The challenge is to explore all possible ways of arranging the books while maintaining the order they are given.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Recursive Function with Memoization:
	\u2022	Use a recursive function to explore all possible ways to place books on shelves, starting from a given index.
	\u2022	For each book, consider all possible shelves starting from the current index, compute the total thickness, and keep track of the maximum height for that shelf.
	\u2022	Use memoization to store results of subproblems to avoid redundant calculations and speed up the process.
2.	Base Case:
	\u2022	If we reach the end of the book list, no more height is needed.
3.	Recursive Case:
	\u2022	For each book starting at index i, attempt to place books on the current shelf until the shelf width is exceeded.
	\u2022	Calculate the total thickness and the maximum height of the current shelf.
	\u2022	Recursively determine the minimum height needed for the rest of the books and combine it with the current shelf\u2019s height.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
\u2022	Recursive Calls: The function iterates over all books, leading to nested loops.
\u2022	Worst-Case Scenario: For each book, it checks all possible starting points, resulting in O(n^2) recursive calls in the worst case.

Thus, the time complexity is O(n^2), where n is the number of books.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
\u2022	Memoization Storage: The dictionary stores the results for each starting index, leading to O(n) space complexity.
\u2022	Recursive Call Stack: The depth of the recursion is proportional to the number of books, so the maximum depth is O(n).

Therefore, the space complexity is O(n).

# Code
```
public class Solution {
    public int MinHeightShelves(int[][] books, int shelfWidth) {
        var memo = new Dictionary<int, int>();
        return MinHeight(books, shelfWidth, 0, memo);
    }
    private int MinHeight(int[][] books, int shelfWidth, int index, Dictionary<int, int> memo) {
        if (index == books.Length) {
            return 0;
        }
        
        if (memo.ContainsKey(index)) {
            return memo[index];
        }
        
        int totalThickness = 0;
        int maxHeight = 0;
        int minHeight = int.MaxValue;
        
        for (int i = index; i < books.Length; i++) {
            totalThickness += books[i][0];
            if (totalThickness > shelfWidth) {
                break;
            }
            maxHeight = Math.Max(maxHeight, books[i][1]);
            minHeight = Math.Min(minHeight, maxHeight + MinHeight(books, shelfWidth, i + 1, memo));
        }
        
        memo[index] = minHeight;
        return minHeight;
    }
}
```