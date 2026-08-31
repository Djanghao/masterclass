# Longest Valid Parentheses (PHP)

**Author:** eDZwrqsSdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/6095393/](https://leetcode.com/problems/longest-valid-parentheses/solutions/6095393/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

/**
 * Finds the length of the longest valid parentheses sequence.
 *
 * @param string $s The input string containing parentheses to be evaluated.
 * @return int The length of the longest valid parentheses sequence.
 */
public function longestValidParentheses($s): int
{
    if (strlen($s) == 0) {
        return 0;
    }

    $parentheses = $s;
    $bucket = [];

    for ($i = 0; $i < strlen($parentheses); $i++) {
        if ($parentheses[$i] == '(') {
            $bucket[] = $parentheses[$i];
        }
        if ($parentheses[$i] == ')') {
            if (end($bucket) == ')' || empty($bucket)) {
                $bucket[] = $parentheses[$i];
            } elseif (in_array('(', $bucket)) {
                foreach (array_reverse($bucket, true) as $key => $value) {
                    if ($value == '(') {
                        $bucket[$key] = $value . $parentheses[$i];
                        break;
                    }
                }
            } else {
                $bucket[] = $parentheses[$i];
            }
        }
    }

    $result = $this->findLongestValidSequence($bucket);
    return $result;
}

/**
 * Finds the length of the longest valid parentheses sequence in an array.
 *
 * @param array $array An array where each element represents a valid or invalid parentheses pair (e.g., "()").
 * @return int The length of the longest valid parentheses sequence in the array.
 */
public function findLongestValidSequence($array): int
{
    $maxLength = 0;
    $currentLength = 0;

    foreach ($array as $item) {
        if ($item === "()") {
            $currentLength++;
            if ($currentLength > $maxLength) {
                $maxLength = $currentLength;
            }
        } else {
            $currentLength = 0;
        }
    }

    return $maxLength * 2;
}

}
```