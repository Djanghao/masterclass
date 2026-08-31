# Fastest Swift Solution - [Heap]

**Author:** jacob-min
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5728127/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5728127/)

---

# Intuition
Heap is almost always the solution in any "*kth highest*" problem.  Here we don't actually ever need our heap to be larger than 3 elements.  We just iterate through queries and keep the smallest two distances at all times.

# Complexity
- Time complexity:
$$O(nlogk)$$ - *n* number of queries, and *logk* each time you insert into heap

- Space complexity:
$$O(k)$$ - *k* number of distances in heap (technically there are *n* number of results, but output is not considered)

# Code
```swift []
import Collections

class Solution {
    func resultsArray(_ queries: [[Int]], _ k: Int) -> [Int] {
        var results: [Int] = []
        var heap: Heap<Int> = []

        for i in 0..<queries.count {
            var dist = abs(queries[i][0]) + abs(queries[i][1])
            heap.insert(dist)

            if i+1 < k {
                results.append(-1)
            } else if i+1 == k {
                if let max = heap.max {
                    results.append(max)
                }
            } else {
                while heap.count > k {
                    heap.popMax()
                }
                if let max = heap.max {
                    results.append(max)
                }
            }
        }

        return results
    }
}
```