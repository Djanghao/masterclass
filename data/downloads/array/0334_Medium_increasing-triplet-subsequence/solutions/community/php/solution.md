# PHP Solution Runtime 409 ms Beats 25% Memory 70 MB Beats 75%

**Author:** SurgeonDeath
**Votes:** 2
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3500984/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3500984/)

---

# PHP Solution
![1232.jpg](./images/0.jpeg)

# Code
```
class Solution
{
	/**
	 * @param Integer[] $nums
	 * @return Boolean
	 */
	function increasingTriplet(array $nums): bool
	{
		$numsCount = count($nums);

		if ($numsCount < 3) {
			return false;
		}

		$smallest = PHP_INT_MAX;
		$secondSmallest = PHP_INT_MAX;

		foreach($nums as $num) {
			if ($num <= $smallest) {
				$smallest = $num;
			} elseif ($num <= $secondSmallest) {
				$secondSmallest = $num;
			} else {
				return true;
			}
		}

		return false;
	}
}
```