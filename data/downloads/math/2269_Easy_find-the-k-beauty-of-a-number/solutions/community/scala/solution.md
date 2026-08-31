# Easy Scala Optimal Solution With 2 Approaches And In-Built Function .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/5221384/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/5221384/)

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
    def divisorSubstrings(num: Int, k: Int): Int = {
        // var ans=0
        // val str=num.toString
        // for   (i<- 0 to str.length-k)
        // {
        //     val j=str.substring(i,i+k).toInt 
        //     if   (j  !=   0   &&   num%j   ==   0)   ans+=1
        // }
        // return ans

        val str=num.toString
        (str.indices.take(str.length - k + 1).map(i => str.substring(i, i + k).toInt).count(j => j != 0 && num % j == 0))

    }
}
```