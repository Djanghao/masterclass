# Simple 2 loops Only, beats 100%

**Author:** 31b4
**Votes:** 19
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276665/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276665/)

---

# Explanation
To distribute $$n$$ candies among 3 children with a limit, you need to consider the different possibilities for each child. Let's assume the limit is $$L$$. Here are the steps to find the total number of ways:

1. Iterate through all possible values for the first child's share `i`from 0 to $$L$$
2. forr each `i`, iterate through all possible values for the second child's share `j` from 0 to 
`min(L-i, n-i)`
3. The third child's share is then determined by `n \u2212 i \u2212 j`.
4. Count each combination of `(i,j,n\u2212i\u2212j)` as a valid distribution.
# Code
```
class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        count = 0

        for i in range(min(n, limit) + 1):
            for j in range(min(n - i, limit) + 1):

                k = n - i - j
                if 0 <= k <= limit:
                    count += 1

        return count
```
please upvote :D