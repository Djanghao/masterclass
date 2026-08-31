# PHP Solution

**Author:** ngkute001
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/4372654/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/4372654/)

---

# Code
```
class Solution {

	/**
	* @param String[] $words
	* @return Integer
	*/
	function numSpecialEquivGroups($words) {
		$result = [];

		foreach ($words as $word) {
			$odd = []; $even = [];

			for ($i = 0; $i < strlen($word); $i++) {
				if ($i % 2 === 0) {
					$even[] = $word[$i];
				} else {
					$odd[] = $word[$i];
				}
			}

			sort($even);
			sort($odd);

			$key = implode([...$even, ...$odd]);

			$result[$key] = true;
		}

		return count($result);
	}
}
```