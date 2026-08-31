# + 90% Solution with PHP

**Author:** bekhruzbekswe
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5897945/](https://leetcode.com/problems/hash-divided-string/solutions/5897945/)

---

# Intuition
As the saying goes - If monkey asks a banana, give him a banana.
- Divide the string into k subtrings 
- Calculate sum of ords of each substring
- Devide with % and turn leftover to char
- return group of resulting chars as a string

# Approach
If we used the word each/every, that means we are using loop here.
In our case we need loop to divide into k parts, and to find sum of ords within each substring. Once found we will immediately find leftover of 26 and turn it into char and place it in an array.

# Complexity
- Time complexity:
- O(n)

- Space complexity:
- O(n / k)

# Code
```php []
class Solution {

    /**
     * @param string $s
     * @param integer $k
     * @return string
     */
    function stringHash($s, $k) {
        $res = [];
        $n = strlen($s);

        for ($i = 0; $i < $n; $i+=$k) {
            $sum = 0;
     
            for ($j = $i; $j < $i+$k; $j++) {
                $sum += ord($s[$j])-97;
            }

            $res[] = chr(($sum % 26) +97);
        }

        return implode($res);
    }
}
```