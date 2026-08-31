# O(log n) | Accepted

**Author:** theizekry
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-search/solutions/2127763/](https://leetcode.com/problems/binary-search/solutions/2127763/)

---

```
$count = count($nums);
	$low    = 0; // First index.
	$high   = $count - 1; // Last index.

	// Validate the input!
	if (! ($count >= 1 && $count <= pow(10, 4))) {
		return false;
	}

	while ($low <= $high) {

		$middle = floor(($low + $high) / 2);

		if ($nums[$middle] == $target) {
			return $middle;   
		} elseif ($nums[$middle] > $target) {
			$high = $middle - 1;
		} else {
			$low = $middle + 1;
		}
	}

	return -1;
```