# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 4
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/3057945/](https://leetcode.com/problems/duplicate-zeros/solutions/3057945/)

---

```
class Solution {
    func duplicateZeros(_ arr: inout [Int]) {

        var i = 0
        
        while i < arr.count {
            if arr[i] == 0 {
                arr.insert(0, at: i)
                arr.removeLast()
                i += 2
            }
            else {
                i += 1
            }
        }
    }
}
```

Here is more optimal solution created by [@Parankush](/u/Parankush) and modified by mee (see comments):

```
class Solution {
    func duplicateZeros(_ arr: inout [Int]) {

        let initialArrCount = arr.count
        var currentCount = 0
        var index = 0
        
        while currentCount < initialArrCount {

            arr.append(arr[index])
            currentCount += 1

            if arr[index] == 0, currentCount < initialArrCount {
                arr.append(0)
                currentCount += 1
            }

            index += 1
        }
        
        arr.removeFirst(initialArrCount)
    }
}
```