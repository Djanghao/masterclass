# php brute force

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1932341/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1932341/)

---

```
class Solution {

    /**
     * @param String $expression
     * @return String
     */
    function minimizeResult($expression) {
        $plusPosition = false;
        $expressionLength = strlen($expression);
        for ($i = 0; $i < $expressionLength; $i++) {
            if ($expression[$i] == '+') {
                $plusPosition = $i;
                break;
            }
        }
        $left = $plusPosition - 1;
        $right = $plusPosition + 1;
        $possibleValue = false;
        $possibleExpression = false;
        for ($left = $plusPosition - 1; $left >= 0; $left--) {
            $leftAddValue = substr($expression, $left, $plusPosition - $left);
            $leftProductValue = substr($expression, 0, $left);
            for ($right = $plusPosition + 1; $right < $expressionLength; $right++) {
                $rightAddValue = substr($expression, $plusPosition + 1, $right - $plusPosition);
                $rightProductValue = substr($expression, $right + 1, $expressionLength - $right);
                $tmpValue = $this->calculateSum($leftAddValue, $leftProductValue, $rightAddValue, $rightProductValue);
                if ($possibleValue === false || $tmpValue < $possibleValue) {
                    $possibleValue = $tmpValue;
                    $possibleExpression = $leftProductValue . '(' . $leftAddValue . '+' . $rightAddValue . ')' . $rightProductValue;
                }
            }
            
        }
        return $possibleExpression;
    }
    
    function calculateSum($leftAddValue, $leftProductValue, $rightAddValue, $rightProductValue) {
        $result = 0;
        if (empty($leftProductValue) && empty($rightProductValue)) {
            $result = ($leftAddValue + $rightAddValue);
        } else if (!empty($leftProductValue) && empty($rightProductValue)) {
            $result = ($leftAddValue + $rightAddValue) * $leftProductValue;
        } else if (empty($leftProductValue) && !empty($rightProductValue)) {
            $result = ($leftAddValue + $rightAddValue) * $rightProductValue;
        } else {
            $result = ($leftAddValue + $rightAddValue) * $leftProductValue * $rightProductValue;
        }
        return $result;
    }
}