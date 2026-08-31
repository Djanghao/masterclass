# O(n), for - operation, for - zero

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/5217809/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/5217809/)

---


```
class Solution {
    func applyOperations(_ nums: [Int]) -> [Int] {
        var arr = nums
        var index = 0
        for i in 0..<arr.count - 1{
            if arr[i] == arr[i + 1]{
                arr[i] = arr[i]*2
                arr[i + 1] = 0
            }
        }

        for i in 0..<arr.count{
            if arr[i] != 0{
                let temp = arr[index]
                arr[index] = arr[i]
                arr[i] = temp
                index += 1
            }
        }

        return arr

    }
}
```