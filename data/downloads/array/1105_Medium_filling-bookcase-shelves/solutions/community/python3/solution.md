# Pure DP code (98% margin).. No memoization followed

**Author:** Success_Code
**Votes:** 55
**Link:** [https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561109/](https://leetcode.com/problems/filling-bookcase-shelves/solutions/5561109/)

---

Python result:
![Screenshot_31-7-2024_6373_leetcode.com.jpeg](./images/0.jpeg)
Java Result:
![Screenshot_31-7-2024_63456_leetcode.com.jpeg](./images/1.jpeg)

# Explanation:
- The variable f[i] denotes the least height necessary to accommodate the first i books on the shelves.

- We begin with a vacant shelf, where the height f[0] is set to 0, as having no books results in no height requirement.

- For each book i, the approach evaluates whether to place it on the same shelf as the preceding books or to initiate a new shelf. It systematically assesses if the addition of the current book to the existing shelf would surpass the shelf's width. If it does not, the height of the shelf is determined by the tallest book already present on that shelf. The value of f[i] is then updated to reflect the lesser of its current value and the height achieved by including the book on the current shelf.

- Should the inclusion of a book cause the current shelf to exceed its maximum width, the process halts, prompting the start of a new shelf.

This methodology guarantees that the overall height of the bookshelves is minimized while adhering to the width limitations of each shelf.

# Complexity
- Time complexity:
O(n**2)

- Space complexity:
O(n)

# Code

```python []
class Solution:

    def minHeightShelves(self, books: List[List[int]], shelfWidth: int) -> int:

        n = len(books)

        f = [0] * (n + 1)

        for i, (w, h) in enumerate(books, 1):

            f[i] = f[i - 1] + h

            for j in range(i - 1, 0, -1):

                w += books[j - 1][0]

                if w > shelfWidth:

                    break

                h = max(h, books[j - 1][1])

                f[i] = min(f[i], f[j - 1] + h)

        return f[n]    
```
```java []
class Solution {
    public int minHeightShelves(int[][] books, int shelfWidth) {
        int n = books.length;
        int[] f = new int[n + 1];
        for (int i = 1; i <= n; ++i) {
            int w = books[i - 1][0], h = books[i - 1][1];
            f[i] = f[i - 1] + h;
            for (int j = i - 1; j > 0; --j) {
                w += books[j - 1][0];
                if (w > shelfWidth) {
                    break;
                }
                h = Math.max(h, books[j - 1][1]);
                f[i] = Math.min(f[i], f[j - 1] + h);
            }
        }
        return f[n];
    }
}
```
```C++ []
class Solution {
public:
    int minHeightShelves(vector<vector<int>>& books, int shelfWidth) {
        int n = books.size();
        int f[n + 1];
        f[0] = 0;
        for (int i = 1; i <= n; ++i) {
            int w = books[i - 1][0], h = books[i - 1][1];
            f[i] = f[i - 1] + h;
            for (int j = i - 1; j > 0; --j) {
                w += books[j - 1][0];
                if (w > shelfWidth) {
                    break;
                }
                h = max(h, books[j - 1][1]);
                f[i] = min(f[i], f[j - 1] + h);
            }
        }
        return f[n];
    }
};
```



