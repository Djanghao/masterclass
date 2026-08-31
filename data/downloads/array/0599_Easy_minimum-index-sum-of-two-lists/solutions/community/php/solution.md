# Simple and fast

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/5981479/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/5981479/)

---



# Code
```php []
class Solution
{

    /**
     * @param String[] $list1
     * @param String[] $list2
     * @return String[]
     */
    function findRestaurant($list1, $list2)
    {
        $min = PHP_INT_MAX;
        $list2 = array_flip($list2);
        $result = [];
        foreach ($list1 as $key => $value) {
            if (!isset($list2[$value]))
                continue;

            $val = $key + $list2[$value];
            if($val == $min){
                $result[] = $value;
            }elseif($val < $min){
                $result = [$value];
                $min = $val;
            }

        }
        return $result;
    }
}
```