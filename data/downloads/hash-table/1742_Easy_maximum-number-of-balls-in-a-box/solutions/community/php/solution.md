# Solution with less space

**Author:** MangoSha
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/5670036/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/5670036/)

---



# Complexity
- Time complexity:
144 ms

- Space complexity:
less

# Code
```php []
class Solution {

    /**
     * @param Integer $lowLimit
     * @param Integer $highLimit
     * @return Integer
     */
    function countBalls($lowLimit, $highLimit) {
        $res = [];
        for ($i = $lowLimit; $i <= $highLimit; $i++){
            $iSum = array_sum(str_split($i));
            if (!isset($res[$iSum])){
                $res[$iSum] = 0;
            }
            $res[$iSum]++;
        }
        return max($res);
    }
}
```