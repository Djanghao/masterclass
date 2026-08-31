# Simple solution with SplMaxHeap

**Author:** humblerat
**Votes:** 0
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6140001/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6140001/)

---

# Complexity
- Time complexity: $$O(N + K * log N)$$

- Space complexity: $$O(n)$$

# Code
```php []
class Solution {

    /**
     * @param Integer[] $gifts
     * @param Integer $k
     * @return Integer
     */
    function pickGifts($gifts, $k) {
        $heap = new SplMaxHeap();
        
        foreach ($gifts as $gift) {
            $heap->insert($gift);
        }

        while ($k > 0) {
            $heap->insert(floor(sqrt($heap->extract())));

            $k--;
        }

        return array_sum(iterator_to_array($heap));
    }
}
```