# Scala Single Line Solution

**Author:** imran-sarwar
**Votes:** 6
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/966313/](https://leetcode.com/problems/contains-duplicate/solutions/966313/)

---

```
def containsDuplicate(nums: Array[Int]): Boolean = {
	nums.size != nums.toSet.size
}
```