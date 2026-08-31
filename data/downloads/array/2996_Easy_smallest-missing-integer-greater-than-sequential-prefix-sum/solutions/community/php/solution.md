# PHP 3 ms 87%/87%   JS 100 %/100% very simple

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4561137/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4561137/)

---

# Code
```javascript []
var missingInteger = function(nums) {
    let prefixSum = nums[0];
    for(let i=1;i<nums.length;i++){
        if (nums[i]==nums[i-1]+1){
            prefixSum += nums[i];
        }
        else{
            break;
        }
    }
    while (nums.includes(prefixSum)){
        prefixSum++;
    }
    return prefixSum;
};
```
```php []
class Solution {
    function missingInteger($nums) {
        $prefixSum = $nums[0];
        for($i=1;$i<count($nums);$i++){
            if ($nums[$i]==$nums[$i-1]+1){
                $prefixSum += $nums[$i];
            }
            else{
                break;
            }
        }
        while (in_array($prefixSum,$nums)){
            $prefixSum++;
        }
        return $prefixSum;
    }
}
```
