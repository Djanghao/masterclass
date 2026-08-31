# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-pow/solutions/3620867/](https://leetcode.com/problems/super-pow/solutions/3620867/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def superPow(a: Int, b: Array[Int]): Int = superPow(a, b, b.length-1)

      def superPow(a: Int, b: Array[Int], index: Int): Int = 
        if (index == 0)pow(a, b(index)) % 1337
        else (pow(superPow(a, b, index-1), 10) * pow(a, b(index))) % 1337

      def pow(x: Int, n: Int): Int = 
        if (n == 0) 1
        else if (n == 1) x % 1337
        else {
          val half = pow(x, n/2)
          if (n % 2 == 0) (half * half) % 1337
          else (((half * half) % 1337) * (x % 1337)) % 1337
        }
}
```