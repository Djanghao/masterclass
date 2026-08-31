# Simple, string manipulation

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/5981740/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/5981740/)

---


# Code
```php []
class Solution {

    /**
     * @param Integer $num
     * @return Integer
     */
    function minMaxDifference($num) {

        $max = (string)$num;
        $min = (string)$num;

        for ($i = 0; $i < strlen($max); $i++) {
            if($max[$i] != '9'){
                $max = str_replace($max[$i], '9', $max);
                break;
            }
        }

        $min = str_replace($min[0], '0', $min);

        return $max - $min;
    }
}
```