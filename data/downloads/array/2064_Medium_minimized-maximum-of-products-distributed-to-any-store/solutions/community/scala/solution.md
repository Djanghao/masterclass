# BinarySearch tailrec

**Author:** maciejwadowski
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043613/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043613/)

---

# Intuition
Actually struggle for a while, did not read that we could possibly return 0 amount of products to store...

# Approach
Hints in description lead me to this solution

# Complexity
- Time complexity:
 $$O(log(max(quantity)))$$

- Space complexity:
$$O(1)$$ 

# Code
```scala []
object Solution {
    def minimizedMaximum(n: Int, quantities: Array[Int]): Int = {
        
        @scala.annotation.tailrec
        def binarySearch(start: Int, end: Int, best: Int): Int = 
            if (start > end) best
            else 
                val k = (start + end) / 2
                val valid = quantities.foldLeft(0)((acc, q) => acc + (q-1) / k + 1) <= n 
                if (valid) 
                    binarySearch(start, k-1, k)
                else 
                    binarySearch(k+1, end, best)
                
        binarySearch(1, quantities.max, -1)

    }   
}
```