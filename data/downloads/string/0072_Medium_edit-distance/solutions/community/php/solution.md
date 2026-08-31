# PHP DP O(m*n)

**Author:** jamshad
**Votes:** 2
**Link:** [https://leetcode.com/problems/edit-distance/solutions/661494/](https://leetcode.com/problems/edit-distance/solutions/661494/)

---

```
function minDistance($word1, $word2) {
	$l1 = strlen($word1); 
	$l2 = strlen($word2);

	$dp = [];

	for ($i = 0; $i <= $l1; ++$i) {
		$dp[$i][0] = $i;
	}

	for ($i = 0; $i <= $l2; ++$i) {
		$dp[0][$i] = $i;
	}

	for ($i = 1; $i <= $l1; ++$i) {
		for ($j = 1; $j <= $l2; ++$j) {
			if ($word1[$i - 1] === $word2[$j - 1]) {
				$dp[$i][$j] = $dp[$i - 1][$j - 1];
			} else {
				$dp[$i][$j] = min([$dp[$i - 1][$j], $dp[$i-1][$j-1], $dp[$i][$j - 1]]) + 1;
			}
		}
	}

	return $dp[$l1][$l2];
}