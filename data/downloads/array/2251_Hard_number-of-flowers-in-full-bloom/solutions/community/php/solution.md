# binary search

**Author:** tenderhe
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4159130/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4159130/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Separate two arrays to get the start and end time of the flowering period
Search for the position each people in this two arrays
Sub them to get the answer
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(2*people*log(flowers))$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $flowers
     * @param Integer[] $people
     * @return Integer[]
     */
    function fullBloomFlowers($flowers, $people) {
        for($i = 0; $i<count($flowers);$i++){
            $st[$i] = $flowers[$i][0];
            $ed[$i] = $flowers[$i][1];
        }
        sort($st);
        sort($ed);
        $n = count($people);
        $ans = [];
        for($i = 0; $i<$n;$i++){
            $x = $this->binarySearch($st,$people[$i]+1);
            $y = $this->binarySearch($ed,$people[$i]);
            $ans[$i]=$x-$y;
        }
        return $ans;
    }
    function binarySearch($arr,$target){
        $len = count($arr);
        $l = 0; $r = $len -1;
        while($l<=$r){
            $m = ($l + $r) >> 1;
            if($arr[$m] >= $target){
                $len = $m;
                $r = $m - 1;
            }else{
                $l = $m + 1;
            }
        }
        return $len;
    }
}
```