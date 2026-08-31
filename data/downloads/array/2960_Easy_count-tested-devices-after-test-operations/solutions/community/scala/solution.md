# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4410278/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4410278/)

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
  def countTestedDevices(batteryPercentages: Array[Int]): Int = {
    val n = batteryPercentages.size
    def f(i: Int, curr: Int, ans: Int): Int = {
      if(i == n) ans
      else {
        if(batteryPercentages(i) > curr) f(i + 1, curr + 1, ans + 1)
        else f(i + 1, curr, ans)
      }
    }

    f(0, 0, 0)
  }
}
```