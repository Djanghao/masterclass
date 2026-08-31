# Easy Scala One-Liner And Recursive Approach .

**Author:** HARSHIDAS_21
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5404904/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5404904/)

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
    def intersect(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
        //APPROACH1 = ONE LINER APPROACH
        // nums1 intersect nums2

        //APPROACH2= USING RECURSION 
        def hlpr(num1:Array[Int]=nums1.sorted,num2:Array[Int]=nums2.sorted,result:Array[Int]=Array(),i:Int=0,j:Int=0):Array[Int]=
        {
            if   (i   >=   num1.length   ||   j   >=   num2.length)   result

            else if   (num1(i)   ==   num2(j))   hlpr(num1,num2,result   :+   num1(i),i+1,j+1)
            else if   (num1(i)   >   num2(j))   hlpr(num1,num2,result,i,j+1)
            else   hlpr(num1,num2,result,i+1,j)
        }
        hlpr()
    }
}
```