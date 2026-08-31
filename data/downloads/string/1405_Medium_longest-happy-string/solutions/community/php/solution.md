# Simple way, no fuzz

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-happy-string/solutions/5922425/](https://leetcode.com/problems/longest-happy-string/solutions/5922425/)

---


# Code
```php []
class Solution
{

    function longestDiverseString($a, $b, $c)
    {
        $matrix = [$a, $b, $c];
        $word = '';

        do {
            $valid = false;

            arsort($matrix);
            foreach ($matrix as $key => $value) {
                if ($value == 0) break;
                $char = ['a', 'b', 'c'][$key];
                if (substr($word, -2) === $char . $char) continue;
                $matrix[$key]--;
                $word .= $char;
                $valid = true;
                break;
            }

        } while ($valid);


        return $word;
    }

}
```