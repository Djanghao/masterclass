# [Swift] Simple Sorting Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/558785/](https://leetcode.com/problems/largest-values-from-labels/solutions/558785/)

---

```
class Solution {
    func largestValsFromLabels(_ values: [Int], _ labels: [Int], _ num_wanted: Int, _ use_limit: Int) -> Int {
        var arr:[(Int,Int)] = []
        var map:[Int:Int] = [:]
        for i in 0..<values.count{
            arr.append((values[i], labels[i]))
            map[labels[i]] = 0
        }
        arr.sort { (first, second) -> Bool in
            first.0 > second.0
        }
        var total = 0
        var count = num_wanted
        for i in 0..<arr.count{
            let val = arr[i].0
            let label = arr[i].1
            if count > 0 && map[label]! < use_limit{
                total += val
                map[label]! += 1
                count -= 1
            }
        }
        return total
    }
}
```