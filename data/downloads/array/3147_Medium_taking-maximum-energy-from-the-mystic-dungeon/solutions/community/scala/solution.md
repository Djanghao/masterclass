# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5311971/](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/solutions/5311971/)

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
  def maximumEnergy(energy: Array[Int], k: Int): Int = {
    energy.indices.foldLeft(Array.fill(k)(-1000))((acc, i) =>  {
      acc(i % k) = Math.max(energy(i), acc(i % k) + energy(i))
      acc
    }).max
  }
}
```