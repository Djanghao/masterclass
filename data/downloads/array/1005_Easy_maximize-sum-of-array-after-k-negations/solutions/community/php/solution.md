# PHP Solution | Heap Queue

**Author:** ngkute001
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/4315581/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/4315581/)

---

# Code
```
class Solution {

	/**
	* @param Integer[] $nums
	* @param Integer $k
	* @return Integer
	*/
	function largestSumAfterKNegations($nums, $k) {
		$heap = new SplMinHeap();

		foreach ($nums as $key => $value) {
			$heap->insert($value);
		}

		while ($k-- > 0) {
			$heap->insert($heap->extract() * -1);
		}

		$sum = 0;

		while (! $heap->isEmpty()) {
			$sum += $heap->extract();
		}

		return $sum;
	}
}
```