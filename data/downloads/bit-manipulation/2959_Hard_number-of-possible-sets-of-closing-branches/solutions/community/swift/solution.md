# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4383715/](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches/solutions/4383715/)

---

# Complexity
- Time complexity: $$O(2 ^ n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    private func check(_ cur: Int, _ curDist: Int, _ roads: [[Int]], _ closed: [Bool], _ dists: inout [Int]) {
        guard !closed[cur] else { return }
        guard curDist < dists[cur] else { return }
        dists[cur] = curDist
        for road in roads {
            if road[0] == cur {
                check(road[1], curDist + road[2], roads, closed, &dists)
            } else if road[1] == cur {
                check(road[0], curDist + road[2], roads, closed, &dists)
            }
        }
    }

    private func backtrack(_ cur: Int, _ closed: inout [Bool], _ n: Int, _ maxDistance: Int, _ roads: [[Int]]) -> Int {
        guard cur < n else {
            for i in 0 ..< n where !closed[i] {
                var dists = Array(repeating: Int.max, count: n)
                check(i, .zero, roads, closed, &dists)
                for j in 0 ..< n where !closed[j] {
                    if dists[j] > maxDistance { return 0 }
                }
            }
            return 1
        }
        closed[cur] = true
        var result = backtrack(cur + 1, &closed, n, maxDistance, roads)
        closed[cur] = false
        return result + backtrack(cur + 1, &closed, n, maxDistance, roads)
    }

    func numberOfSets(_ n: Int, _ maxDistance: Int, _ roads: [[Int]]) -> Int {
        var closed = Array(repeating: false, count: n)
        return backtrack(.zero, &closed, n, maxDistance, roads)
    }
}

```