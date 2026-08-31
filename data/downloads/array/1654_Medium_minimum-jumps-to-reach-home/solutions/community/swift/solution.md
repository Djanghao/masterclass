# BFS Short And Clever

**Author:** artemvor1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/3277614/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/3277614/)

---


```
class Solution {
    func minimumJumps(_ forbidden: [Int], _ a: Int, _ b: Int, _ x: Int) -> Int {
        var visited = Set<[Int]>()
        forbidden.forEach{ visited.insert([$0, 0]); visited.insert([$0, 1]) }  // add forbidden to visited set with allowed and disabled backwards jump
        var q = [(0, false)]  
        var start = 0

        var jumps = 0
        while start < q.count {
            for _ in start..<q.count {
                let (pos, backAllowed) = q[start]; start += 1
                if pos == x {return jumps}
                if pos < 0 || pos > x + 3*(a+b) ||
                        visited.contains([pos, backAllowed ? 1 : 0]) {continue}
                visited.insert([pos, backAllowed ? 1 : 0])

                q.append((pos + a, true))                      // add with allowed backwards jump
                if backAllowed { q.append((pos - b, false)) }  // add with forbidden backwards jump
            }
            jumps += 1
        }
        return -1
    }
}
```