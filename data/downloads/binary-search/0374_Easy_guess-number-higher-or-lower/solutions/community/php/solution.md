# PHP 3ms

**Author:** jtscorpjaxon
**Votes:** 1
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower/solutions/1520491/](https://leetcode.com/problems/guess-number-higher-or-lower/solutions/1520491/)

---

```
  function guessNumber($n) {
        $i = $n;
        $i /= 2;
        while (true) {
           // echo (int)$i.PHP_EOL;
            switch ($this->guess((int)$i)) {
                case 0:
                    return (int)$i;
                    break;
                case -1:
                    $n = (int)$i;
                    $i /= 2;
                    break;
                case 1:
                    $i = ($i + $n) / 2;
                    break;
            }
        }
    }
```