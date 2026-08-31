# Minimum Domino Rotations For Equal Row | PHP 100% time + 100% space | O(n)

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/902061/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/902061/)

---

Runtime: 380 ms, faster than 100.00% of PHP online submissions for Minimum Domino Rotations For Equal Row.
Memory Usage: 20.4 MB, less than 100.00% of PHP online submissions for Minimum Domino Rotations For Equal Row.

```
function minDominoRotations($A, $B) {
	$cnt = count($A);
	$a = $A[0];
	$b = $B[0];
	if ($a===$b) $b=false;
	$changeA = 0;
	$changeB = 0;
	$double = 0;
	for ($i=0; $i<$cnt; $i++) {
		$dbl = $A[$i]===$B[$i];
		if ($a!==false) {
			if ($a!==$A[$i] && $a!==$B[$i]) {
				$a = false;
			}
			if (!$dbl && $a===$B[$i])
				$changeA++;
		}
		if ($b!==false) {
			if ($b!==$A[$i] && $b!==$B[$i]) {
				$b = false;
			}
			if (!$dbl && $b===$A[$i])
				$changeB++;
		}
		if (!$a && !$b) return -1;
		if ($dbl) {
			$double++;
		}
	}
	$min = $a===false ? INF : min($changeA,$cnt-$changeA-$double);
	return $b===false ? $min : min($changeB,$cnt-$changeB-$double);
}
```

This is a completly different second solution which is a little faster (364 ms instead of 380 ms):

```
function minDominoRotations2($A, $B) {
	$cnt=count($A);
	$same=null;
	$quantity=0;
	for ($i=0; $i<$cnt; $i++) {
		if ($A[$i]===$B[$i]) {
			if ($same) {
				if ($same !== $A[$i])
					return -1;
				else
					$quantity++;
			} else {
				$same = $A[$i];
				$quantity = 1;
			}

		}
	}
	$cntA = array_count_values($A);
	$cntB = array_count_values($B);

	if ($same) {
		return (($cntA[$same] ?? 0) + ($cntB[$same] ?? 0) - $quantity === $cnt) ? min($cntA[$same] - $quantity,$cntB[$same] - $quantity) : -1;
	} else {
		$first=$A[0];
		if ($cntA[$first] + ($cntB[$first] ?? 0) === $cnt)
			return ($cntA[$first] >= $cnt/2) ? $cntB[$first] : $cntA[$first];
		else {
			$first=$B[0];
			if ($cntB[$first] + ($cntA[$first] ?? 0) === $cnt)
				return ($cntB[$first] >= $cnt/2) ? $cntA[$first] : $cntB[$first];
			else
				return -1;
		}
	}
```