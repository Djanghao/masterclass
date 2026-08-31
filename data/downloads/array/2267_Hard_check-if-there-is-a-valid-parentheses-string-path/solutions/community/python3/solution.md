# ✅ Python Simple Memoisation/Caching

**Author:** constantine786
**Votes:** 18
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2018005/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/2018005/)

---

There are two main parts of the solution:
1. Logic to determine whether a sequence is [Balanced Paranteses](https://leetcode.com/problems/valid-parentheses/). This can be achieved using `Stack`(`O(N) space`) or using a `counter` variable(`O(1) space`). I will be using the latter.
2. A recursive function to check the existence of a valid parantheses sequence in the input `grid`.



```
class Solution:
    def hasValidPath(self, grid: List[List[str]]) -> bool:  
        m = len(grid)
        n = len(grid[0])
        @lru_cache(maxsize=None)
        def hasValidPathInner(x, y, cnt):
            # cnt variable would act as a counter to track 
            # the balance of parantheses sequence
            if x == m or y == n or cnt < 0:
                return False
            
            # logic to check the balance of sequence
            cnt += 1 if grid[x][y] == '(' else -1
            
            # if balanced and end of grid, return True
            if x == m - 1 and y == n - 1 and not cnt:
                return True
            
            return hasValidPathInner(x + 1, y, cnt) or hasValidPathInner(x, y + 1, cnt)

        return hasValidPathInner(0, 0, 0)
```

**Time = O(mn(m+n))** - Due to memoization, the same path won't be visited twice. `M + N` is the max length of a sequence or max depth of recursive stack from `0,0` to `m-1,n-1` in the `grid` 
**Space = O(mn(m+n))**


----
***Please upvote if you find it useful***