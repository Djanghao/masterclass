# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/6091190/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/6091190/)

---

```php []
class Solution {

    /**
     * @param String[] $tokens
     * @return Integer
     */
    function evalRPN($tokens) {
        $stack[] = 0;
        foreach ($tokens as $token) {
            if (is_numeric($token)) {
                array_push($stack, $token);
                continue;
            }

            $b = array_pop($stack);
            $a = array_pop($stack);
            switch ($token) {
                case '+': array_push($stack, $a+$b); break;
                case '-': array_push($stack, $a-$b); break;
                case '*': array_push($stack, $a*$b); break;
                case '/': array_push($stack, (int)($a/$b)); break;
            }
        }
        return array_pop($stack);
    }
}
```