# Scala functional very simple

**Author:** maxmtmn
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-element/solutions/2215870/](https://leetcode.com/problems/remove-element/solutions/2215870/)

---

```
def removeElement(nums: Array[Int], z: Int): Int = {
	nums.foldLeft(0) {
		case (index, value) if value != z => 
			nums(index) = value
			index + 1
		case (index, value) => 
			nums(index) = value
			index
	}
}
```