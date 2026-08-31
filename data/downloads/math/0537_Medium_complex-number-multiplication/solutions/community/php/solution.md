# PHP regexp solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/1422811/](https://leetcode.com/problems/complex-number-multiplication/solutions/1422811/)

---

```
class Solution {

    /**
     * @param String $num1
     * @param String $num2
     * @return String
     */
    function complexNumberMultiply($num1, $num2) {
        preg_match('/(?<a>-?\\d+)\\+(?<b>-?\\d+)i/', $num1, $n1);
        preg_match('/(?<a>-?\\d+)\\+(?<b>-?\\d+)i/', $num2, $n2);
        
        return ($n1['a']*$n2['a']-$n1['b']*$n2['b']) ."+".($n1['a']*$n2['b']+$n1['b']*$n2['a']) ."i";
    }
}
```