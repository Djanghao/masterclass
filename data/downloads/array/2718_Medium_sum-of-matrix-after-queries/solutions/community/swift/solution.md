# Track Visited Rows & Columns using set | O(n) | Python | Swift

**Author:** aakarshvermaofficial
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/5078068/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/5078068/)

---

# Complexity
- Time complexity: **O(n)** n is number of queries
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(m)** m is the size of the matix
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution:
    def matrixSumQueries(self, n: int, queries: List[List[int]]) -> int:
        visitedCols = set()
        visitedRows = set()
        res = 0
        for query in reversed(queries):
            if query[0] == 0:
                if query[1] not in visitedRows:
                    visitedRows.add(query[1])
                    res += (n - len(visitedCols)) * query[2]
            else:
                if query[1] not in visitedCols:
                    visitedCols.add(query[1])
                    res += (n - len(visitedRows)) * query[2]
        return res
```
```swift []
class Solution {
    func matrixSumQueries(_ n: Int, _ queries: [[Int]]) -> Int {
        var visitedCols: Set<Int> = []
        var visitedRows: Set<Int> = []
        var res = 0
        for query in queries.reversed() {
            if query[0] == 0 {
                if visitedRows.insert(query[1]).inserted {
                    res += (n - visitedCols.count) * query[2]
                }
            } else if visitedCols.insert(query[1]).inserted {
                res += (n - visitedRows.count) * query[2]
            }
        }
        return res
    }
}
```