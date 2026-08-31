# Without DP simple iteration

**Author:** abhiraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/4963620/](https://leetcode.com/problems/get-the-maximum-score/solutions/4963620/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxSum(_ nums1: [Int], _ nums2: [Int]) -> Int {
        let mod = Int(1e9+7)
        var common = Set(nums1).intersection(Set(nums2))
        var hashsum = [Int:(Int,Int)]()
        var result = 0
        func helper(_ i:Int, _ isI:Bool, _ sum: Int)  {
            var array = nums2
            if isI {
                array = nums1
            }
            guard i < array.count else {
                return
            }
            var new = sum + array[i]
            result = max(new, result)
           
            if !common.contains(array[i]) {
                helper(i+1,isI, new)
            }else {
                if let old = hashsum[array[i]] {
                    new = max(old.0, new)
                    helper(i+1,isI, new)
                    helper(old.1+1,!isI, new)
                }else {
                    hashsum[array[i]] = (new,i)
                }
            }
            
                
            
            
          
            
        }

        helper(0,false,0)
        helper(0,true,0)
       
        return (result % mod)
        
    }
}
```