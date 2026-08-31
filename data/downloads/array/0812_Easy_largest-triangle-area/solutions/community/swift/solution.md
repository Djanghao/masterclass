# My Swift brute force solution beats 100% runtime and memory

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/476143/](https://leetcode.com/problems/largest-triangle-area/solutions/476143/)

---

My Swift brute force solution beats 100% runtime and memory

![image](./images/0.png)

```
class Solution {
    func largestTriangleArea(_ points: [[Int]]) -> Double {
        let c = points.count
        var result: Double = 0.0
        for i in 0...(c - 3) {
            for j in (i + 1)...(c - 2) {
                for k in (j + 1)...(c - 1) {
                    let s: Double = Double(abs((points[j][0] - points[i][0]) * (points[k][1] - points[i][1]) - (points[k][0] - points[i][0]) * (points[j][1] - points[i][1]))) / 2
                    if s > result { result = s }
                }
            }
        }
        return result
    }
}
```