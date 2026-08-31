# Swift: Straightforward BFS Solution

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/5213344/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/5213344/)

---

I tried first using DP which seems the natural approach. DP works by breaking a problem into simpler subproblems, but the "increment by 1" operation increases the range of numbers to consider rather than decreasing it. There are ways around it but it gets complicated.

Instead I use BFS. I start at node "x" and then visit x + 1, x - 1 and possibly x / 5 and x / 11. I do this again with the resulting numbers until I reach "y".

Note: the code is as simple as possible. It is not optimized and can be made a bit faster. For example if y > x, one could return directly "y - x".

# Complexity
It can be shown that each number is added at most 5 times to the queue. It can also be shown that the absolute value of any number in the queue is O(max(x, y)).

- Time complexity: O(max(x, y))
- Space complexity: O(max(x, y))

# Code
```
class Solution {
    func minimumOperationsToMakeEqual(_ x: Int, _ y: Int) -> Int {
        var queue = [x]
        var visited = Set<Int>()
        var count = 0

        while !queue.contains(y) {
            var newQueue = [Int]()
            for num in queue {
                if visited.contains(num) { continue }
                newQueue.append(num - 1)
                newQueue.append(num + 1)
                if num % 5 == 0 { newQueue.append(num / 5) }
                if num % 11 == 0 { newQueue.append(num / 11) }
                visited.insert(num)
            }
            count += 1
            queue = newQueue
        }

        return count
    }
}
```