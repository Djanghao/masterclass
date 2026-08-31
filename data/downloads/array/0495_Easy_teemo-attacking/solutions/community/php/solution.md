# [PHP] 100% faster + 100 % space | Simple solution, one pass | O(n)

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/865416/](https://leetcode.com/problems/teemo-attacking/solutions/865416/)

---

Runtime: 80 ms, faster than 100.00% of PHP online submissions for Teemo Attacking.
Memory Usage: 16.6 MB, less than 100.00% of PHP online submissions for Teemo Attacking.

	function findPoisonedDuration($timeSeries, $duration) {
		$sum = 0;
		$last = -INF;
		foreach ($timeSeries as $t) {
			$sum += min($t-$last, $duration);
			$last = $t;
		}
		return  $sum;
	}

