# php beats 100% and easy to understand

**Author:** hjoru
**Votes:** 4
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/254044/](https://leetcode.com/problems/generate-parentheses/solutions/254044/)

---

```
class Solution {

    protected $result = [];
    protected $length = 0;
    /**
     * @param Integer $n
     * @return String[]
     */
    function generateParenthesis($n) {
        $this->length = $n * 2;
        $this->backtracking('', 0, 0, $n);
        return $this->result;
    }
    
    function backtracking($parenthesis, $left, $right, $n) {
        if (strlen($parenthesis) == $this->length) { 
            array_push($this->result, $parenthesis);
        }
        if ($left < $n) {
            $this->backtracking($parenthesis . '(', $left + 1, $right, $n); 
        }
        if ($right < $left) { 
            $this->backtracking($parenthesis . ')', $left, $right + 1, $n); 
        }
    }
}
```