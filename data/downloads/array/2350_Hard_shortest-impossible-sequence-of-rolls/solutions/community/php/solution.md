# Simple And Fast Solution

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/5885928/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/5885928/)

---

# Code
```php []
class Solution {
	function shortestSequence($rolls, $k){
		$len = 1;
		$met = [];

		foreach ($rolls as $roll) {
			if (!isset($met[$roll])) {
				$met[$roll] = 0;
			}

			if (count($met) === $k) {
				$len++;
				$met = [];
			}
		}

		return $len;
	}
}
```