# Easy Optimal Intutive Solutions In Scala .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5309084/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5309084/)

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
    def averageValue(nums: Array[Int]): Int = {
        //APPROACH1 = MOST OPTIMAL SOLUTION . 
        // var arr = List[Int]()
        // for (i <- nums.indices) {
        //     if (nums(i) % 2 == 0 && nums(i) != 3 && nums(i) % 3 == 0) {
        //         arr = arr :+ nums(i) 
        //     }
        // }
        // var sum = 0
        // for (i <- arr.indices) {
        //     sum += arr(i)
        // }
        // if (arr.nonEmpty) sum / arr.length else 0

        val (s,c)=nums.filter(_%6==0).foldLeft((0,0)){case ((s,c),e)=>(s+e,c+1)}
        if   (c==0)0 else s/c
    }
}

```