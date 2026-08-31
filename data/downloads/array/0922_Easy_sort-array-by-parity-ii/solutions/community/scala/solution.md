# Scala tailrec inplace result

**Author:** skaz_
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/4729393/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/4729393/)

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
import scala.annotation.tailrec

object Solution {
        def sortArrayByParityII(nums: Array[Int]): Array[Int] = {
            @tailrec
            def loop(i: Int = 0, j: Int = 1): Unit = {
                if (i < nums.length && j < nums.length){
                    if (nums(i) % 2 == 0) loop(i + 2, j)
                    else if (nums(j) % 2 == 1) loop(i, j + 2)
                    else {
                        val num = nums(i)
                        nums(i) = nums(j)
                        nums(j) = num
                        loop(i + 2, j + 2)
                    }
                }
                else ()
            }

            loop()
            nums
    }
}
```