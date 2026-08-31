# Swift Top Down 7ms

**Author:** tinhpv
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/3405405/](https://leetcode.com/problems/video-stitching/solutions/3405405/)

---

# Code
```
class Solution {
    func videoStitching(_ clips: [[Int]], _ time: Int) -> Int {
        let sorted = clips.sorted { $0[0] < $1[0] }
        let n = sorted.count
        let MAX = 1000

        var memo: [[Int]] = Array(
            repeating: Array(repeating: -1, count: n + 2),
            count: n
        )

        func find(_ index: Int, _ prev: Int) -> Int {
            
            if index >= n {
                if prev != n + 1 && sorted[prev][1] >= time {
                    return 0
                }

                return MAX
            }

            if prev == n + 1 && sorted[index][0] != 0 {
                return MAX
            }

            if memo[index][prev] != -1 {
                return memo[index][prev]    
            }

            memo[index][prev] = MAX
            if prev == n + 1 { // choose the first video clip
                memo[index][prev] = min(
                    find(index + 1, index) + 1,
                    find(index + 1, prev)
                )
            } else { // choose next clip
                if sorted[index][0] <= sorted[prev][1] && sorted[index][1] > sorted[prev][1] {
                    memo[index][prev] = find(index + 1, index) + 1
                }

                memo[index][prev] = min(memo[index][prev], find(index + 1, prev))
            }

            return memo[index][prev]
        }

        let res = find(0, n + 1)
        
        if res == MAX {
            return -1
        } 

        return res
    }
}


```