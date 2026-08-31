# PHP Solution

**Author:** studenov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1692151/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/1692151/)

---

```
function maxSubsequence($nums, $k) {
	$count = count($nums) - $k;
	if ($count > 0) {
		for ($i=0; $i < $count; $i++) { 
			unset($nums[array_search(min($nums), $nums)]);
		}
	}
	return $nums;
}
```