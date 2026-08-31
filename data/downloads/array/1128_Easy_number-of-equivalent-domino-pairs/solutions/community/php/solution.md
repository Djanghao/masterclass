# PHP Solution

**Author:** ngkute001
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/4267989/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/4267989/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

	/**
	* @param Integer[][] $dominoes
	* @return Integer
	*/
	function numEquivDominoPairs($dominoes) {
		$result = 0;
		$match = [];

		foreach ($dominoes as $d) {
			$a = $d[0]; $b = $d[1];

			if ($a > $b) {
				$a = $d[1]; $b = $d[0];
			}

			$key = "{$a},{$b}";

			if (array_key_exists($key, $match)) {
				$match[$key]++;
			} else {
				$match[$key] = 1;
			}
		}

		foreach ($match as $v) {
			if ($v > 1) {
				$result += $v * ($v - 1) / 2;
			}
		}

		return $result;
	}
}
```