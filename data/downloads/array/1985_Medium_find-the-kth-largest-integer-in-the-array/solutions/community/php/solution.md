# PHP | Faster than 100.00% of PHP online submissions ;)

**Author:** darkoracic
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2184844/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2184844/)

---

```
function kthLargestNumber($nums, $k) {
	rsort($nums);
	return($nums[$k-1]);
}
```