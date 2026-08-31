# Beats 100.00% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/5270488/](https://leetcode.com/problems/make-three-strings-equal/solutions/5270488/)

---


```
class Solution {
    func findMinimumOperations(_ s1: String, _ s2: String, _ s3: String) -> Int {
        var arr_s1 = Array(s1)
        var arr_s2 = Array(s2)
        var arr_s3 = Array(s3)
        var count = 0

        for i in 0..<min(arr_s1.count, arr_s2.count, arr_s3.count){
            if arr_s1[i] != arr_s2[i] || arr_s1[i] != arr_s3[i] {
                break
            }
            count += 1
        }

        if count == 0 { return -1}

        return (arr_s1.count - count) + (arr_s2.count - count) + (arr_s3.count - count)
    }
}
```