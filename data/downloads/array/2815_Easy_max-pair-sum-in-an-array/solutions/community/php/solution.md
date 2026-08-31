# Beat 100% PHP easy to understand

**Author:** thh100
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3920237/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3920237/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create a function findMaxDigit to get the max digit of a number. Here we use a more native and mathematical way rather than using any php function like "str_split". 
2. Create a hash map of Digit->Max Number, and a varible max to store the mam sum. Loop through the array, get the Max Digit of each number, if there is already a number in the hashmap of that digit, calculate the sum and compare it with $max. After that, compare the hashmap number and the number save the greater one.  
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlog(m)), n is array size, m is the maximum number in the array, log(m) is to find the max digit.  
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSum($nums) {
        $hash = [];
        $max = -1;
        for($i=0;$i<count($nums);$i++){
            $maxD = $this->findMaxDigit($nums[$i]);
            if(isset($hash[$maxD])){
                $max = max($max, $hash[$maxD] + $nums[$i]);
                $hash[$maxD] = max($hash[$maxD], $nums[$i]);
            }else{
                $hash[$maxD] = $nums[$i];
            }
        }
        return $max;
        
    }

    function findMaxDigit($num){
        $max = 0;
        while($num>0){
            $max = max($max, $num%10);
            $num = (int)($num/10);
        }
        return $max;
    }
}
```