# Simple Scala Solution

**Author:** Dhaxina
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4424706/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/4424706/)

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
object Solution {
    def findIntersectionValues(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        var result=new Array[Int](2)
        result(0)=0
        result(1)=0
        for(x<-nums1){
            if(nums2.contains(x)){
                result(0)+=1
            }
        }
        for(x<-nums2){
            if(nums1.contains(x)){
                result(1)+=1
            }
        }
        return result
    }
}
```