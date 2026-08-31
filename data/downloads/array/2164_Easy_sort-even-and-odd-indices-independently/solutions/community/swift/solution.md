# Swift Brute Force

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/5417953/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/5417953/)

---

```
class Solution {
func sortEvenOdd(_ nums: [Int]) -> [Int] {
  // index 1,3,5: giam
  // index 0,2,4: tang

  var result = [Int]()
  
  var evenIndices = [Int]()
  var oddIndices = [Int]()
  
  for index in nums.indices {
    if index % 2 == 0 {
      evenIndices.append(nums[index])
    } else {
      oddIndices.append(nums[index])
    }
  }
  
  evenIndices.sort(by: <)
  oddIndices.sort(by: >)
  
  for index in 0..<evenIndices.count {
    if evenIndices.isEmpty || oddIndices.isEmpty {
      break
    }
    result.append(evenIndices.removeFirst())
    result.append(oddIndices.removeFirst())
  }
 
  if !evenIndices.isEmpty { result.append(evenIndices.last!) }
  if !oddIndices.isEmpty { result.append(oddIndices.last!) }
  

  return result
}
}
```