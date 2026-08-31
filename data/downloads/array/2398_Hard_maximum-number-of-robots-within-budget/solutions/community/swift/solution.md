# Swift Monotonic Deque + Prefix Sum + Sliding Window, using Swift Collections' Deque

**Author:** DevilDimon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/4849167/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/4849167/)

---

# Approach

Prepare a prefix sum array to efficiently count the sum of running costs as we move along them.
Use sliding window to maintain the current longest array of robots.
Use a monotonically decreasing queue when moving the right pointer to keep the set of max charge times.
When moving the left pointer, remove the fist element from the deque (hence the need to use the deque and not just stack) if it is no longer within the window. Recalculate the budget and update the result.

Note that the deque stores indices and not the elements, it is required to be able to check if the front is within the window.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
import Collections

class Solution {
    func maximumRobots(_ chargeTimes: [Int], _ runningCosts: [Int], _ budget: Int) -> Int {
        // build a prefix sum, we'll need this to quickly calculate subsums of running costs
        var prefix = [runningCosts[0]]
        for i in 1..<runningCosts.count {
            prefix.append(prefix[i - 1] + runningCosts[i])
        }

        // deque will be used to maintain max charge costs at any point
        var deque = Deque<Int>()
        var result = 0
        var left = 0
        for right in 0..<runningCosts.count {
            let charge = chargeTimes[right]
            // add to keep it monotonically decreasing with the first elem being maximum
            while let last = deque.last, chargeTimes[last] < charge {
                deque.removeLast()
            }
            deque.append(right)

            // move the left pointer until we are within budget
            while let first = deque.first, 
                chargeTimes[first] + (right - left + 1) * (prefix[right] - prefix[left] + runningCosts[left]) > budget {
                
                left += 1
                // it's guaranteed that an element to remove here will always be first in deque
                // otherwise, it would have been eliminated earlier when adding the right boundary
                if first < left {
                    deque.removeFirst()
                }
            }

            result = max(result, right - left + 1)
        }

        return result
    }
}
```