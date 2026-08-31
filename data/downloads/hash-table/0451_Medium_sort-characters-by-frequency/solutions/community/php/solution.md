# 4ms php, beats 100%

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-characters-by-frequency/solutions/6127960/](https://leetcode.com/problems/sort-characters-by-frequency/solutions/6127960/)

---

# Code
```php []
class Solution
{

    /**
     * @param String $s
     * @return String
     */
    function frequencySort($s)
    {
        $count = [];
        $len = strlen($s);

        for ($i = 0; $i < $len; $i++) {
            $letter = $s[$i];
            if (isset($count[$letter])) {
                $count[$letter]++;
            } else {
                $count[$letter] = 1;
            }
        }

        arsort($count);
        $result = '';
        foreach ($count as $key => $value) {
            $result .= str_repeat($key, $value);
        }

        return $result;
    }
}
```