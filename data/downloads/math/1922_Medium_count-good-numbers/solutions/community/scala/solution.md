# Scala - easy to understand

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/5318488/](https://leetcode.com/problems/count-good-numbers/solutions/5318488/)

---

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
For given n, we have (n+1)/2 even indices that can be filled using (0,2,4,6,8) i.e 5 possible digits. 
Similarily, we have n/2 odd indices that can be filled using (2,3,5,7) i.e 4 possible digits. 

So, using permutatation, we can have (5^even)*(4^odd) good numbers for n.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    val m = 1000000007L
    def countGoodNumbers(n: Long): Int = {
        val even = (n + 1) / 2
        val odd = n / 2
        
        val ans = (pow(5, even) % m * pow(4, odd) % m) % m
        ans.toInt
    }
    
    def pow(base: Long, exp: Long): Long = {
        if (exp == 0) return 1
        
        val temp = pow(base, exp / 2)
        
        if (exp % 2 == 0) 
            (temp * temp) % m
        else 
            (temp * temp % m * base % m) % m
    }
}


```