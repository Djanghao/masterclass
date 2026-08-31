# PHP

**Author:** _bekanur
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2725798/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2725798/)

---

```
		$alph = [];
        for ($i = 0; $i < 26; $i++) {
            $alph[chr(97+$i)] = chr(97 + $i);
        }
        $l = strlen($sentence);
        $c = 0;
        for ($i = 0; $i < $l; $i++) {
            if (isset($alph[$sentence[$i]])) {
                $c++;
                unset($alph[$sentence[$i]]);
            }
        }
        return $c == 26;
```