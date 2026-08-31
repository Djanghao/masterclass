# Swift O(n)

**Author:** nuscherbakov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/5674029/](https://leetcode.com/problems/find-anagram-mappings/solutions/5674029/)

---

# Intuition
For

# Approach
HashMap

# Complexity
- Time complexity:
 O(N)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func anagramMappings(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        var answ: [Int] = []
    
         var dict: [Int: Int] = [:]
    
         for i in nums2.indices {
             dict[nums2[i]] = i
         }
    
         for int in nums1 {
             let index = dict[int]
             answ.append(index!)
         }
    
         return answ
    }
}
```