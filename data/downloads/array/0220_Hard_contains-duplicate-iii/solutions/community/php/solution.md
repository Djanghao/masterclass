# [PHP] Easy solution

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/825607/](https://leetcode.com/problems/contains-duplicate-iii/solutions/825607/)

---

**Easy PHP-solution:** Just try sequentielly all possible combinations. 

* Iterate over numbers with a for loop as starting.
* Iterate with a second for-loop starting with next number-element for k elements by pay attention of the array-size.
* If absolute difference from both numbers is not higher then allowed return true.
* If in the loops anything founded return false.

```
function containsNearbyAlmostDuplicate($nums, $k, $t) {
		$end = count($nums)-1;
		for ($i=0; $i<$end; $i++) {
			$end2 = min($i+$k,$end);
			for ($j=$i+1; $j<=$end2; $j++) {
				if (abs($nums[$i] - $nums[$j]) <= $t)
					return true;
			}
		}
		return false;
	}
```