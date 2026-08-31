# Swift Solution

**Author:** danilovdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-transformation/solutions/3322161/](https://leetcode.com/problems/array-transformation/solutions/3322161/)

---

```
class Solution {
    func transformArray(_ arr: [Int]) -> [Int] {
        var arr = arr
        var copy = arr
        var needChanges = true
        while needChanges { 
            needChanges = false
            for i in 0..<arr.count { 
                if ((i == 0) || (i == (arr.count - 1))) { 
                    continue
                }
                if arr[i] < arr[i - 1] && arr[i] < arr[i + 1] { 
                    needChanges = true
                    copy[i] = arr[i] + 1
                }
                if arr[i] > arr[i - 1] && arr[i] > arr[i + 1] {
                    needChanges = true
                    copy[i] = arr[i] - 1
                }
            }
            arr = copy
        }
        
        return arr
    }
}
```