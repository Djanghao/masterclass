# PHP - Solution beats 100%, recursion

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/936689/](https://leetcode.com/problems/sum-of-left-leaves/solutions/936689/)

---

Runtime: 0 ms, faster than 100.00% of PHP online submissions for Sum of Left Leaves.

```
function sumOfLeftLeaves($root, $start=true, $left=false) {
	if ($start) {
		if ($root===null) return 0;
		$this->sum = 0;
	}
	$leave = $root->left===null && $root->right===null;
	if ($leave) {
		if ($left) $this->sum += $root->val;
	} else {
		if ($root->left!==null)
			$this->sumOfLeftLeaves($root->left, false, true);
		if ($root->right!==null)
			$this->sumOfLeftLeaves($root->right, false, false);
	}
	if ($start)
		return $this->sum;
}
```