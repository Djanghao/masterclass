# Swift | Bellman-Ford Algorithm (the most optimal solution)

**Author:** vologirov
**Votes:** 3
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/3162819/](https://leetcode.com/problems/network-delay-time/solutions/3162819/)

---

# Swift | Bellman-Ford Algorithm 

# Complexity
- Time complexity: $$O(N*E)$$
<!-- Add your time complexity here, e.g.  -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func networkDelayTime(_ times: [[Int]], _ n: Int, _ k: Int) -> Int {
        if n == 1 { return 0 }

        var distances: [Int] = Array(repeating: Int.max, count: n)
        distances[k-1] = 0

        for i in 0..<n-1 {
            var changed = false

            for j in 0..<times.count {
                let source = times[j][0]
                let target = times[j][1]
                let weight = times[j][2]

                guard distances[source-1] != Int.max else { continue }
                
                if distances[source-1] + weight < distances[target-1] {
                    distances[target-1] = distances[source-1] + weight
                    changed = true
                }
            }

            if !changed { break }
        }
        let answer = distances.max()!
        return answer == Int.max ? -1 : answer
    }
}
```

> ***Please upvote if you like it***