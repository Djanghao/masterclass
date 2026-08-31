# Short and easy to read code

**Author:** YarKo04
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4653861/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4653861/)

---


```
class Solution {
    func findMissingAndRepeatedValues(_ grid: [[Int]]) -> [Int] {
        var array: [Int] = (1...(grid.count * grid.count)).map {$0}
        for element in Array(grid.joined()) {
            if array.contains(element) {
                array.remove(at: array.firstIndex(of: element)!)
            } else {
                array.insert(element, at: 0)
            }
        }

        return array
    }
}
```