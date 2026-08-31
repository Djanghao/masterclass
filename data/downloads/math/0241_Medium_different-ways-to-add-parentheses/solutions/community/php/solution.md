# PHP Recursive solution with memoization

**Author:** konjaks
**Votes:** 0
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5809851/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5809851/)

---

# Intuition
Following NeetCode's solution (check his YouTube video). Split the expression at each operator, recursively compute the left and right part of the subexpression, then combine them by using the operator

# Approach
1. Create a recursive function with two inputs: left and right index of the subexpression.
2. Look for operators in the subexpression, split it into left and right parts once found.
3. Recursively calculate all the results of left and right parts (nums1 and nums2).
4. Combine the results of the two parts using the operator.
5. If the subexpression doesn't have any operators, then it means that it's just a number, add it as a subresult.
6. Use memoization to avoid processing the same subexpression repeatedly.

# Complexity
- Time complexity:
- $$O(2^n)$$ 

- Space complexity:
- $$O(2^n)$$ because of the memoization

# Code
```php []
class Solution {
    private static array $operations = [
        '+' => 'add',
        '-' => 'subtract',
        '*' => 'multiply',
    ];

    private static function add(int $x, int $y): int
    {
        return $x + $y;
    }

    private static function subtract(int $x, int $y): int
    {
        return $x - $y;
    }

    private static function multiply(int $x, int $y): int
    {
        return $x * $y;
    }

    /**
     * @param String $expression
     * @return Integer[]
     */
    public static function diffWaysToCompute(string $expression): array
    {
        $memo = [];

        $backtrack = function (int $left, int $right) use (&$backtrack, &$memo, $expression): array {
            $key = "$left:$right";
            if (isset($memo[$key])) {
                return $memo[$key];
            }

            $res = [];

            for ($i = $left; $i <= $right; $i++) {
                $op = $expression[$i];
                if (isset(self::$operations[$op])) {
                    $nums1 = $backtrack($left, $i - 1);
                    $nums2 = $backtrack($i + 1, $right);

                    $method = self::$operations[$op];
                    foreach ($nums1 as $n1) {
                        foreach ($nums2 as $n2) {
                            $res[] = self::$method($n1, $n2);
                        }
                    } 
                }
            }

            if (empty($res)) {
                $res[] = (int)substr($expression, $left, $right - $left + 1);
            }

            $memo[$key] = $res;
            return $res;
        };

        return $backtrack(0, strlen($expression) - 1);
    }
}
```