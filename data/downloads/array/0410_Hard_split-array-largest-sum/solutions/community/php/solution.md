# Binary Seacrch Approach

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-largest-sum/solutions/4779624/](https://leetcode.com/problems/split-array-largest-sum/solutions/4779624/)

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
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function splitArray($nums, $k) {
            $s=0;
            $e=array_sum($nums);
            $mid=floor($s+(($e-$s)/2));

            while($s<=$e){
                if($this->isSol($nums,$k,$mid)){
                    $ans=$mid;
                    $e=$mid-1;
                }else{
                    $s=$mid+1;
                }
                $mid=floor($s+(($e-$s)/2));
            }
            return $ans;
    }

    function isSol($nums,$kk,$mid){
        $sum=0;
        $k=1;

        for($i=0;$i<count($nums);$i++){
            if($sum+$nums[$i]<=$mid){
                $sum+=$nums[$i];
            }else{
                $k++;
                if($k>$kk || $nums[$i]>$mid){
                    return false;
                }
                    $sum=0;
                    $sum+=$nums[$i];
            }
        }
        return true;

    }
}
```