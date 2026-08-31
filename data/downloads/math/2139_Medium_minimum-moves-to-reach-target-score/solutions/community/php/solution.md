# PHP Solution

**Author:** studenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1724717/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/1724717/)

---

```
function minMoves($target, $maxDoubles) {
	$count = 0;
	while ($target > 1) {
		if ($target % 2 == 0 && $maxDoubles > 0) {
			$target = $target / 2;
			$maxDoubles--;
			$count++;
		} elseif ($target % 2 !== 0 && $maxDoubles > 0) {
			$target--;
			$count++;
		} else {
			$count += $target - 1;
			break;
		}
	}
	return $count;
}
```