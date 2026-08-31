# [PHP] Faster then 100% - Easy solution | 4ms

**Author:** dragon13
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/823981/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/823981/)

---

Easy solution (**faster then 100%**):
* Get numbers from low to high.
* If sum of high and low is **odd** it doesn't matter if it's begin with odd or even because there are allways half of the numbers odd.
* If it's **even** and `low` is **even** then round off half of the numbers are odd. 
* Otherwise round up of half of the number are odd.


```
	function countOdds($low, $high) {
		$count = $high - $low + 1;
		if (($high+$low)%2)
			return $count/2;
		else
			return ($low%2) ? ($count+1)/2 : ($count-1)/2;
	}
```