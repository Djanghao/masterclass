# One Liner Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/5068695/](https://leetcode.com/problems/self-dividing-numbers/solutions/5068695/)

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
    def selfDividingNumbers(left: Int, right: Int): List[Int] = {
        (left to right).filter(num => num.toString.forall(digit => digit != '0'   &&  num % (digit- '0')== 0)).toList
    }
}
```