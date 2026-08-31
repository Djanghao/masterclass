# Scala Functional Solution

**Author:** malexj93
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-i/solutions/5281596/](https://leetcode.com/problems/special-array-i/solutions/5281596/)

---

## Intuition / Approach
<!-- Describe your first thoughts on how to solve this problem. -->
The sum of numbers with different parity is always odd, i.e. `(curr + next) % 2 == 1`. Check this for every pair by using a fold, returning Some of the next value to be the new current, and using None as a fall-through fail state. If we get through the whole list (feed in the head and go left to right on the tail) and don't have None, it's special; otherwise it's not.


## Complexity
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
### Time complexity: $O(n)$
We run `acc` once for every number in the tail, i.e. $n-1$ times. Since `mod` is constant time on bounded inputs, so is `acc`, and so the solution has linear time complexity.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
### Space complexity: $O(1)$
At any given time, we're only storing the current and next values, which doesn't scale with list size, thus constant space complexity.


## Code
```
object Solution {
  def acc(currOption: Option[Int], next: Int): Option[Int] = currOption match {
    case Some(curr) if (curr + next) % 2 == 1 => Some(next)
    case _ => None
  }

  def isArraySpecial(nums: Array[Int]): Boolean = {
    if (nums.isEmpty) true
    else nums.tail.foldLeft(Some(nums.head))(acc).isDefined
  }
}
```