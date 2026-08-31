# [PHP] Solution is based on array_reverse

**Author:** agzamov
**Votes:** 1
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/794640/](https://leetcode.com/problems/increasing-decreasing-string/solutions/794640/)

---

```
function sortString($s) {
	$s = str_split($s);
	sort($s);

	$res = '';
	while(count($s)) {
		$prev = '';

		foreach($s as $key => $char) {
			if($char == $prev) {
				continue;
			}

			$prev = $char;
			$res .= $char;
			unset($s[$key]);
		}

		$s = array_reverse($s);
	}

	return $res;
}
```