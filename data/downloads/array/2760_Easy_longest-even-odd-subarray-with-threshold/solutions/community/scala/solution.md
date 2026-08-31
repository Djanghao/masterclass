# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3734846/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/3734846/)

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
  def longestAlternatingSubarray(nums: Array[Int], threshold: Int): Int =
    Iterator.iterate((0, 0, 0)) { case (maxLen, currLen, i) =>
      if (nums(i) > threshold) (maxLen, 0, i + 1)
      else {
        val newLen =
          if (currLen == 0) if (nums(i) % 2 == 0) 1 else 0
          else if (nums(i) % 2 == nums(i - 1) % 2) if (nums(i) % 2 == 0) 1 else 0 else currLen + 1
        (maxLen.max(newLen), newLen, i + 1)
      }
    }.dropWhile { case (_, _, i) => i < nums.length }.next()._1
```

or 

```
  def longestAlternatingSubarray(nums: Array[Int], threshold: Int): Int = {
    def f(i: Int, curres: Int, res: Int, OddEven: Boolean, start: Boolean): Int = {
      if(i == nums.length) res max curres
      else if(start && nums(i) % 2 == 0 && nums(i) <= threshold) f(i + 1, 1, res, false, false)
      else if(start)  f(i + 1, 0, res, true, true)
      else if(nums(i) % 2 == 0 && OddEven && nums(i) <= threshold) f(i + 1, curres + 1, res, false, false)
      else if(nums(i) % 2 == 0 && nums(i) <= threshold) f(i + 1, 1, curres max res, false, false)
      else if(nums(i) % 2 == 0) f(i + 1, 0, curres max res, true, true)
      else if(nums(i) % 2 == 1 && !OddEven && nums(i) <= threshold) f(i + 1, curres + 1, res, true, false)
      else f(i + 1, 0, curres max res, true, true)
    }

    f(0, 0, 0, true, true)
  }
    

```