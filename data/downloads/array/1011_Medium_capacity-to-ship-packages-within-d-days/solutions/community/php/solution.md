# php book allocation like problem

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/4779601/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/4779601/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $weights
     * @param Integer $days
     * @return Integer
     */
    function shipWithinDays($weights, $days) {
        $s=0;
        $e=array_sum($weights);
        $mid=floor($s+(($e-$s)/2));
        $ans=0;
        while($s<=$e){
                if($this->isPossibleSol($weights,$days,$mid)){
                    $ans=$mid;
                    $e=$mid-1;
                }else{
                    $s=$mid+1;
                }
              $mid=floor($s+(($e-$s)/2));
        }
        return $ans;
    }

    function isPossibleSol($weight,$days,$mid){
        $sum=0;
        $k=1;
        for($i=0;$i<count($weight);$i++){
            if($sum+$weight[$i]<=$mid){
                $sum+=$weight[$i];
            }else{
                $k++;
                if($k>$days || $weight[$i]>$mid){
                    return false;
                }
                $sum=0;
                $sum+=$weight[$i];
            }
        }
            return true;
    }
}
```