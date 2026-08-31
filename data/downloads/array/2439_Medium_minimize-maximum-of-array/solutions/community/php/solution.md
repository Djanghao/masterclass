# [JavaScript][PHP] - Minimize Maximum of Array by Calculating Sum and Finding Max of Sum / i+1

**Author:** akunopaka
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3383460/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3383460/)

---

# Approach
This approach to solving the problem of minimizing the maximum value in an array is to calculate the sum of all the values in the array, and then find the maximum of the ceiling of the sum divided by the index plus one. This approach takes advantage of the fact that the sum of all the values in the array will always be larger than the maximum value, so by dividing the sum by the index plus one, we can find the maximum of the ceiling of the division, which will give us the minimum maximum value.

# Complexity
*Time Complexity:* O(n) as the algorithm iterates through the array only once. 
*Space Complexity:* O(1) as the algorithm uses only one variable to store the sum, and no additional data structures are used.


```php []
class Solution
{
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimizeArrayValue(array $nums): int {
        $numLength = count($nums);
        $sum = 0;
        $mixMaxResult = 0;
        for ($i = 0; $i < $numLength; $i++) {
            $sum += $nums[$i];
            $mixMaxResult = max($mixMaxResult, ceil($sum / ($i + 1)));
        }
        return $mixMaxResult;
    }
}
```
```javascript []
var minimizeArrayValue = function (nums) {
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        res = Math.max(res, Math.ceil(sum / (i + 1)));
    }
    return res;
};
```