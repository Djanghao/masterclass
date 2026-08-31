# use dp

**Author:** shaktirana
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2958919/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2958919/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $capacity
     * @param Integer[] $rocks
     * @param Integer $additionalRocks
     * @return Integer
     */
    function maximumBags($c, $r, $ad) {
        $n=sizeof($c);
        $a=[];
        for($i=0;$i<$n;$i++){
            $a[$i]=$c[$i]-$r[$i];
        }
        $j=0;
        sort($a);
        while($j<$n){
            $ad=$ad-$a[$j];
            if($ad<0){
            break;
            }
            $j++;
        }
        return $j;
    }
}
```