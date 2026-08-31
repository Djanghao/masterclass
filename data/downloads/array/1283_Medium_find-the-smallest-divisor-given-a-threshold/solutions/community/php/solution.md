# Find Smallest Divisor Given a Threshold | PHP - Solution with explaination | 100% fastest

**Author:** dragon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/926282/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/926282/)

---

Binary search is in most cases faster then brute force.
* First check edge-case that sum is not greater then threshold.
* Possible result is minimum  division from sum through threshold, so test it.
* Maximum is result is max number.
* Call recursive test with range [min, max] and test there if the middle is a possible solution.
* If sum sum is greater then threshold test next with [middle, max] else test with [min, middle].
* Because max is allways a solution test till there exists no integer between min and max. If ending return max as result.

```
   function smallestDivisor($nums, $threshold) {
		$sum = array_sum($nums);
		if ($sum<=$threshold) return 1;

		$min = ceil($sum/$threshold);
		$sum = $this->getSum($nums, $min);
		if ($sum<=$threshold) return $min;

		$max = max($nums);

		return $this->checkMiddle($nums, $min, $max, $threshold);
    }

    function checkMiddle(&$nums, $min, $max, $threshold) {
		if ($min+1>=$max) return $max;
		$mid = ceil(($min+$max)/2);
		$sum = $this->getSum($nums, $mid);
		if ($sum>$threshold) return $this->checkMiddle($nums, $mid, $max, $threshold);
		else return $this->checkMiddle($nums, $min, $mid, $threshold);
	}

    function getSum(&$nums, $min) {
		return array_reduce($nums, function($acc, $n) use ($min) {$acc += ceil($n/$min); return $acc;});
	}
```