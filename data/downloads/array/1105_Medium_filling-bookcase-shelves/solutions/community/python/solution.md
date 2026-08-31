# Easy Solution Beats 100%

**Author:** Sachinonly__
**Votes:** 73
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561272/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561272/)

---

# Approach
1. intialize a dp array of width (len(books) + 1) with the value of float('inf').
2. Run an outer Loop (i from 1 to n)
3. Run an inner Loop (j from i to 1)
    - This loop tries to place the i-th book on the current shelf or start a new shelf from any previous position.
    - **total_width** accumulates the width of books from j to i.
    - If **total_width** exceeds shelfWidth, break out of the loop.
    - **max_height** tracks the maximum height of the books from j to i
4. dp[i] is updated with the minimum height by either placing the book on the current shelf or starting a new shelf from any position j-1.

# Complexity
- Time complexity: O(N**2)

- Space complexity:O(N)

# Code
```python []
class Solution(object):
    def minHeightShelves(self, books, shelfWidth):
        n = len(books)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0  # Base case: no books require 0 height
        
        for i in range(1, n + 1):
            total_width = 0
            max_height = 0
            for j in range(i, 0, -1):
                total_width += books[j-1][0]
                if total_width > shelfWidth:
                    break
                max_height = max(max_height, books[j-1][1])
                dp[i] = min(dp[i], dp[j-1] + max_height)
        
        return dp[n]
```
```C++ []
class Solution {
public:
    int minHeightShelves(std::vector<std::vector<int>>& books, int shelfWidth) {
        int n = books.size();
        std::vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;  // Base case: no books require 0 height
        
        for (int i = 1; i <= n; ++i) {
            int total_width = 0;
            int max_height = 0;
            for (int j = i; j > 0; --j) {
                total_width += books[j-1][0];
                if (total_width > shelfWidth) {
                    break;
                }
                max_height = std::max(max_height, books[j-1][1]);
                dp[i] = std::min(dp[i], dp[j-1] + max_height);
            }
        }
        
        return dp[n];
    }
};
```
```JAVA []
class Solution {
    public int minHeightShelves(int[][] books, int shelfWidth) {
        int n = books.length;
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;  // Base case: no books require 0 height
        
        for (int i = 1; i <= n; ++i) {
            int total_width = 0;
            int max_height = 0;
            for (int j = i; j > 0; --j) {
                total_width += books[j-1][0];
                if (total_width > shelfWidth) {
                    break;
                }
                max_height = Math.max(max_height, books[j-1][1]);
                dp[i] = Math.min(dp[i], dp[j-1] + max_height);
            }
        }
        
        return dp[n];
    }
}
```
![unnamed.jpg](./images/0.jpeg)

