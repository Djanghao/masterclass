# O(n), for, if > || ==

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/5259583/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/5259583/)

---


```
class Solution {
    func hardestWorker(_ n: Int, _ logs: [[Int]]) -> Int {
        var max_time = 0
        var last_time = 0
        var ans = -1

        for i in 0..<logs.count{
            let time = logs[i][1] - last_time
            if time > max_time || time == max_time && ans > logs[i][0]{
                max_time = time
                ans = logs[i][0]
            } 
            last_time = logs[i][1]
        }

        return ans
    }
}
```