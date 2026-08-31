# Esy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5233689/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5233689/)

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
    def duplicateNumbersXOR(nums: Array[Int]): Int = {
        val frequency = nums.groupBy(identity).view.mapValues(_.length).toMap
        val elementWithTwoOccurances=frequency.collect{
            case (element,freq)   if   (freq   ==   2)   =>   element
        }
        elementWithTwoOccurances.foldLeft(0)(_   ^   _)
    }
}
```