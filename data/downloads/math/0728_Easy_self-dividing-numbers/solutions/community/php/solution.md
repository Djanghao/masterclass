# [PHP] Split and check

**Author:** agzamov
**Votes:** 3
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/794705/](https://leetcode.com/problems/self-dividing-numbers/solutions/794705/)

---

```
function selfDividingNumbers($left, $right) {
	$res = [];
	for($i = $left; $i <= $right; $i++) {
		if(strpos($i, '0') !== false) {
			continue;
		}

		foreach(str_split($i) as $num) {
			if($i % $num !== 0) {
				continue 2;
			}
		}

		$res[] = $i;
	}

	return $res;
}
```