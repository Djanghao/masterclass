# php solution by regex

**Author:** ginayang_bibi
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1672040/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/1672040/)

---

```
function countValidWords($sentence) {
	$arr = explode(" ",$sentence);
	$arr = array_diff($arr,array(""));
	$arr = array_values($arr);
	$pattern = "/^[a-z]*([a-z]+-?[a-z]+)?[.,!]?$/";
	return count(preg_grep($pattern,$arr));
}
```