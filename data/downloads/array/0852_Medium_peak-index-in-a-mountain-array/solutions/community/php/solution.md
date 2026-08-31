# easy solution

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/5355879/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/5355879/)

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
     * @param Integer[] $arr
     * @return Integer
     */
    function peakIndexInMountainArray($arr) {
        $s=0;
        $e=count($arr)-1;
        // $mid=intdiv($s+$e,2);
            
        while($s<$e){
                $mid=intdiv($s+$e,2);
            if($arr[$mid]<$arr[$mid+1]){
                $s=$mid+1;   
                }  
                if($arr[$mid]>$arr[$mid+1])
            {
                $e=$mid;
            }
            }
        return $s;
     }
}
```