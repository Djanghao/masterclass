# [PHP] Iterate only half size of array

**Author:** agzamov
**Votes:** 1
**Link:** [https://leetcode.com/problems/flipping-an-image/solutions/794681/](https://leetcode.com/problems/flipping-an-image/solutions/794681/)

---

```
function flipAndInvertImage($A) {
	foreach($A as $key => $line) {
		$len    = count($line);
		$half   = intval($len / 2);

		for($i = 0; $i < $half; $i++) {
			$cur = $A[$key][$i];
			$A[$key][$i] = $A[$key][$len - $i - 1] ? 0 : 1;
			$A[$key][$len - $i - 1] = $cur ? 0 : 1;
		}

		if($len % 2 !== 0) {
			$A[$key][$half] = $A[$key][$half] ? 0 : 1;
		}
	}

	return $A;
}
```