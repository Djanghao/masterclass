# still sharing

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/5782974/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/5782974/)

---

```swift []
class Solution {
func maxSum(_ nums: [Int]) -> Int {
    var sortedNums = nums.sorted(by: <)
    var candidate = -1
    var possibles = [Int]()
    for i in 0..<sortedNums.count {
        for j in (i+1)..<sortedNums.count {
            if maxDigitOfNum(sortedNums[i]) == maxDigitOfNum(sortedNums[j]) {
                candidate = sortedNums[i] + sortedNums[j]
                possibles.append(candidate)
            }
        }
    }
    return possibles.max() ?? -1
}


func maxDigitOfNum(_ num: Int) -> Int {
    var stringNum = String(num)
    var arrInt = [Int]()
    
    for char in stringNum {
        arrInt.append(Int(String(char))!)
    }
    
    return arrInt.max()!
    
}
}
```