# Correct Solution

**Author:** mukhila
**Votes:** 0
**Link:** [https://leetcode.com/problems/contiguous-array/solutions/4884719/](https://leetcode.com/problems/contiguous-array/solutions/4884719/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxLength($nums) {
        if(count($nums) == 0)
		{
			return 0;
		}
		$node = []; 
        $sum = 0; 
        $max = 0; 
        for($i=0;$i < count($nums);$i++){
            $sum +=$nums[$i] == 0 ? -1:1;  
            if($sum == 0){ 
                $max = $i+1; 
            }else if(isset($node[$sum])){ 
                $max = max($max, $i -$node[$sum]);
            }
            else{ 
                $node[$sum] = $i;
            }
        }
        return $max;
    }
}
```