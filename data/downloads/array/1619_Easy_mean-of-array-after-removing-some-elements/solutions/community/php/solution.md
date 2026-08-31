# PHP - Solution

**Author:** dragon13
**Votes:** 1
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/898931/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/898931/)

---

	function trimMean($arr) {
		sort($arr);
		$cnt=count($arr);
		$x5= intval($cnt/20);
		$sum= array_sum(array_slice($arr,$x5,$cnt-$x5*2));
		return $sum/($cnt-2*$x5);
	}