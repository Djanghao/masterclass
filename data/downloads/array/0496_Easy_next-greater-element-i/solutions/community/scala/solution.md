# i solve this just to feel good about my life no chat gpt nothing

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/5976203/](https://leetcode.com/problems/next-greater-element-i/solutions/5976203/)

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
```scala []
object Solution {
    import scala.util.control.Breaks._
    def nextGreaterElement(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        var ls = List[Int]()
        for(j <- 0 until nums1.size){
            val index = nums2.indexOf(nums1(j))
            breakable{ 
            var found  = false
            for(i <- index+1 until nums2.size){
                if(  nums2(i) > nums2(index) ){
                    ls = nums2(i) :: ls
                    found=true
                    break
                }
            }
            if(found == false) ls = -1 :: ls
           }
           
            
        }
        ls.reverse.toArray
    }
}
```