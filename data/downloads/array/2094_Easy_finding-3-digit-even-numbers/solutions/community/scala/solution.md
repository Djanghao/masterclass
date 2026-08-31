# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4256122/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/4256122/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3 log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^3)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findEvenNumbers(digits: Array[Int]): Array[Int] = {
      digits.
        combinations(3)
        .flatMap(_.permutations)
        .map(_.mkString.toInt)
        .filter(num => num % 2 == 0 && num.toString.length == 3 && num.toString.head != '0')
        .toArray
        .distinct
        .sorted
    }
}
```