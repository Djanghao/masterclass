# PHP. T - O(32*n), M - O(64).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4979079/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4979079/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Keep sliding window, cache of "1" bits and their count
2. Change current number if needed (inside window)
3. Check minimal result
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(32*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(64)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function minimumSubarrayLength($nums, $k) {
        $res = 51;
        $l = 0;
        $r = 0;
        $cur = 0;
        while($r<count($nums) && $l <= $r){
            $this->build($nums[$r]);
            while($this->cur >= $k && $l <= $r){
                $this->reduct($nums[$l]);
                $res = min($res, $r-$l+1);
                $l++;
            }
            $r++;
        }

        return $res === 51 ? -1 : $res;
    }
    private $arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    private $number = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    private $cur = 0;

    function build($n){
        $count = 0;
        $flag = false;
        while($n > 0){
            $t = $n & 1;
            $n = $n >> 1;
            if($t === 1){
                $this->arr[count($this->arr)-1-$count] += $t;
                if($this->arr[count($this->arr)-1-$count] === 1){
                    $this->number[count($this->number)-1-$count] = 1;
                    $flag = true;
                }
            }
            $count++;
        }
        if($flag){
            $this->cur = bindec(implode("",$this->number));
        }
    }

    function reduct($n){
        $count = 0;
        $flag = false;
        while($n > 0){
            $t = $n & 1;
            $n = $n >> 1;
            if($t === 1){
                if($this->arr[count($this->arr)-1-$count] > 0){
                    $this->arr[count($this->arr)-1-$count] -= $t;
                    if($this->arr[count($this->arr)-1-$count] > 0){
                        $this->number[count($this->number)-1-$count] = 1;
                    } else {
                        $flag = true;
                        $this->number[count($this->number)-1-$count] = 0;
                    }
                }
            }
            $count++;
        }
        if($flag){
            $this->cur = bindec(implode("",$this->number));
        }
    }
}
```