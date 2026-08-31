# Longest Substring with At Least K Repeating Characters | PHP - Recursive solution, with explode

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/950152/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/950152/)

---

```
function longestSubstring($s, $k) {
	$len = strlen($s);
	if ($len<$k) return 0;
	$val = array_count_values(str_split($s));
	foreach ($val as $key=>$v) {
		if ($v<$k) {
			$parts = explode($key, $s);
			$res = 0;
			foreach ($parts as $str) {
				$res = max($res, $this->longestSubstring($str, $k));
			}
			return $res;
		}
	}
	return $len;
}
```