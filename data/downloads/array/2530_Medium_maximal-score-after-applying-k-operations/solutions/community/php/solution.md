# Heap solution for PHP (Improved)

**Author:** wolfvit
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5912696/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5912696/)

---

# Complexity
- Time complexity: $$O(nlogn + klogn)$$
- Space complexity: $$O(n)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maxKelements($nums, $k) {
        
        if ($k < 2)
			return max($nums);

		$heap = new SplPriorityQueue();

        foreach ($nums as $num)
            $heap->insert($num, $num);

        $sum = 0;
        while ($k--) {
            $num = $heap->extract();
            $sum += $num;
            $num = (int) ceil($num / 3);
            $heap->insert($num, $num);
        }

		return $sum;
    }
}
```