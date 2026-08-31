# i am obssed with leetcode

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/5875154/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/5875154/)

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
    def kthFactor(n: Int, k: Int): Int = {

        var i = 1
        var l = List[Int]()
        while(i <= n){
            if (n % i == 0 ) l = i ::l
            i+=1
        }
        l = l.reverse
        if (!l.isEmpty && k-1 < l.length) return l(k-1)
        return -1
    }
}
```