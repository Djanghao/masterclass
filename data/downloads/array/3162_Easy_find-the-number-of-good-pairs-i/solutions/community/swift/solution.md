# easy swift solution

**Author:** sayedadinan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5229046/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5229046/)

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
    func numberOfPairs(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> Int {
        var count=0
        for i in 0..<nums1.count{
            for  j in 0..<nums2.count{
                if nums1[i]%(nums2[j]*k)==0{
                    count+=1
                }
            }
        }
        return count
    }
}
```