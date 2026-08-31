# php sol wiht heap

**Author:** elenaizotova
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5895638/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5895638/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maximumProduct($nums, $k) {
        $heap = new SplMinHeap();
        foreach ($nums as $num) {
            $heap->insert($num);
        }
        
        for ($i = 0; $i < $k; $i++) {
            $heap->insert($heap->extract() + 1);
        }
        
        $mod = 1000000007;
        $ans = 1;
        
        while ($heap->count() > 0) {
            $ans = ($ans * $heap->extract()) % $mod;
        }
        
        return $ans;
    }
}
```