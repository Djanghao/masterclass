# php solution

**Author:** ginayang_bibi
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/1777240/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/1777240/)

---

```
$arr = $nums;
sort($arr);
$different_nums = array_diff_assoc($nums,$arr);
if(empty($different_nums)){
	return 0;
}else{
	return max(array_keys($different_nums)) - min(array_keys($different_nums))+1;
}
```