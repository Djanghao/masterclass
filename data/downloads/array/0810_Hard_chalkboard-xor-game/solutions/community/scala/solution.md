# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/chalkboard-xor-game/solutions/2670634/](https://leetcode.com/problems/chalkboard-xor-game/solutions/2670634/)

---

```
  def xorGame(nums: Array[Int]): Boolean =
    nums.foldLeft(0)((acc, cur)=>{acc ^ cur}) == 0|| nums.size % 2 == 0

```