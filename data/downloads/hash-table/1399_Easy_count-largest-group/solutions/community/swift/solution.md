# Runtime: 31% - Memory: 54%

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/5307556/](https://leetcode.com/problems/count-largest-group/solutions/5307556/)

---

```
class Solution {
func countLargestGroup(_ n: Int) -> Int {
  var dict = [Int: [Int]]()
  var count = 0
  for num in 1...n {
    let sumDigitOfNum = sumDigit(num)
    dict[sumDigitOfNum, default: []].append(num)
  }
  
  let sortedDict = dict.sorted(by: { item1, item2 in
    item1.value.count > item2.value.count
  })

  var maxSize = sortedDict.first?.value.count
  
  for element in sortedDict {
    if element.value.count == maxSize {
      count += 1
    }
  }
  
  return count
}


//
//
//// Helper
//
func sumDigit(_ n: Int) -> Int {
  let arrN = Array(String(n))
  return arrN.map { Int(String($0))!}.reduce(0, +)
}
}
```