# Php solution with sorting

**Author:** Toxic17
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4298161/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4298161/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minPairSum($nums) {
        sort($nums);
		$res = 0;
		for($i=0;$i<count($nums);$i++)
		{
			$sum = $nums[$i] + $nums[count($nums) - $i - 1];
			$res = max($sum,$res);
		}
		return $res;
    }
}
```