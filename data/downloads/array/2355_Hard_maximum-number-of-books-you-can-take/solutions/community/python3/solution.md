# [Python] DP and Stack, O(N)

**Author:** xil899
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/2343220/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/2343220/)

---

**Step 1:** Create a `dp` array where `dp[i]` is the maximum number of books that we can take from bookshelves `0` to `i` and we must take all books from bookshelf `i`.
**Step 2:** Keep taking as many books as we can (i.e. starting from bookshelf `i` and going backwards, you take `arr[i], arr[i] - 1, arr[i] - 2`, \u2026, books).
**Step 3:** Keep a stack of possible indices for `j`. If `x` is the number at the top of the stack, keep popping from the stack while `arr[x] \u2265 arr[i] - (i - x)`. This is because if the inequality mentioned before is true, `x` will never be an index `j` as index `i` will run out of items first.

Please upvote if you find this solution helpful. Thanks!
```
class Solution:
    def maximumBooks(self, books: List[int]) -> int:
        n = len(books)
        dp, stack = [0] * n, []
        for i in range(n):
            if books[i] == 0:
                stack.append(i)
                continue
            while stack:
                j = stack[-1]
                if books[j] >= books[i] - (i - j):
                    stack.pop()
                else:
                    break
            if not stack:
                j = -1
            if books[i] - i + j + 1 < 0:
                dp[i] = books[i] * (books[i] + 1) // 2
            else:
                dp[i] = (books[i] + books[i] - i + j + 1) * (i - j) // 2
            if j >= 0:
                dp[i] += dp[j]
            stack.append(i)
        return max(dp)
```