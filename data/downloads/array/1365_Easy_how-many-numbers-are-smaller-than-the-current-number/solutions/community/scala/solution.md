# Scala shortest one line solution

**Author:** tarasbabii18
**Votes:** 3
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1129471/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1129471/)

---

```
object Solution {
    def smallerNumbersThanCurrent(nums: Array[Int]): Array[Int] = {
        nums.map(x => nums.count(_ < x))
    }
}
```