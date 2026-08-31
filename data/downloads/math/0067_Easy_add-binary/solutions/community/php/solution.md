# PHP (n00b)

**Author:** nishuptg
**Votes:** 2
**Link:** [https://leetcode.com/problems/add-binary/solutions/2937926/](https://leetcode.com/problems/add-binary/solutions/2937926/)

---

my noob solution, but without the muitlple if and else condition checking, it looks less complex and shorter (relatively) than the other submitted php ones so far, is it good or bad?

# Code
```
class Solution {

    /**
     * @param String $a
     * @param String $b
     * @return String
     */
    function addBinary($a, $b) {
        $a = array_reverse(str_split($a));
        foreach(array_reverse(str_split($b)) as $k => $v) {
            $a[$k] = ($a[$k] ?? 0) + $v;
        }
        
        foreach($a as $k => $v) {
            if($a[$k] > 1) {
                $a[$k] = $a[$k] - 2;
                $a[$k + 1] = ($a[$k + 1] ?? 0) + 1;
            }
        }
        
        return implode(array_reverse($a));
    }
}
```