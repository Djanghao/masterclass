# 802 ms but solved

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5396576/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5396576/)

---

```
class Solution {
func occurrencesOfElement(_ nums: [Int], _ queries: [Int], _ x: Int) -> [Int] {
  var hashTable = [Int: Int]()
  var result = [Int]()
  var indicesX = [Int]()
  
  for (index, num) in nums.enumerated() {
    if num == x {
      indicesX.append(index)
    }
  }
  
  var nums = nums
  var queries = queries
  
  if nums.count < queries.count {
    nums = nums + Array(repeating: 0, count: queries.count - nums.count) // trick to make nums.count equal queries.count
  } else if queries.count > nums.count {
    queries = queries + Array(repeating: 0, count: nums.count - queries.count)
  } else {
    ()
  }
  
  for num in nums {
    hashTable[num, default: 0] += 1
  }
  
  for (index, num) in nums.enumerated() {
    
    if index == queries.count {
      break
    }
    
    if let occurenceX = hashTable[x] {
      
      
      if occurenceX >= queries[index] {
        result.append(indicesX[queries[index] - 1])
        
      } else {
        
        result.append(-1)
      }
    } else {
      result.append(-1)
    }
  }

  return result
}
}
```