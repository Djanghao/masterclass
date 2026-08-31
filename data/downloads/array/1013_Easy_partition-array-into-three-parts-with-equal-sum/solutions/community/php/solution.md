# PHP Solution

**Author:** ngkute001
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4308403/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4308403/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

	/**
	* @param Integer[] $arr
	* @return Boolean
	*/
	function canThreePartsEqualSum($arr) {
		$sum = 0; $parts = 0;
		
		$total = array_sum($arr);

		if ($total % 3 !== 0) return false;

		foreach ($arr as $val) {
			$sum += $val;
			if ($sum === ($total / 3)) {
				$parts++;
				$sum = 0;
			}
		}

		return $parts >= 3;
	}
}
```