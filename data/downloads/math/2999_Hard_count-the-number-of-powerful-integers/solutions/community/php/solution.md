# PHP Digit Dynamic Programming

**Author:** sswspb
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4545746/](https://leetcode.com/problems/count-the-number-of-powerful-integers/solutions/4545746/)

---

# Intuition
A "powerful integer" must end with the given string s and each digit must be less than or equal to limit. We can explore all possible digit combinations using dynamic programming, keeping track of two states:

- freeDigit: Indicates whether all previously seen digits were equal to their corresponding digits in s (allowing more flexibility) or not.
- index: Current position in the number being built.

# Approach
1. Memoization: Store the number of powerful integers up to any position and freeDigit state to avoid redundant calculations.
2. Recursive exploration: Start from the end of the desired range and explore all possible digits, updating freeDigit based on choices made.
3. Base cases:
- If length of remaining digits is less than s, no valid integers exist.
- If reaching the end and freeDigit is 1, only matching numbers from s are valid (count 1).
- If reaching the end and s is a suffix of the built number, count one.
4. Iteration: For each possible digit (up to min(limit, current digit) if freeDigit is 0), recursively explore further with updated state and add results to the current count.
5. Final answer: Calculate the difference between the total number of powerful integers in the [1, finish] and [1, start - 1] ranges.

# Complexity
- Time complexity: O(n * d), where n is the length of the range and d is the maximum limit (number of possible digits).
- Space complexity: O(n * d), due to the memoization table.

# Code
```
class Solution {

    private $memo = [];

    /**
     * @param Integer $start
     * @param Integer $finish
     * @param Integer $limit
     * @param String $s
     * @return Integer
     */
    public function numberOfPowerfulInt(int $start, int $finish, int $limit, string $suffix): int
    {
        if ((int)$suffix > $finish) {
            return 0;
        }
        return $this->helper($finish, $limit, $suffix) - $this->helper($start - 1, $limit, $suffix);
    }

    private function helper(int $number, int $limit, string $suffix): int
    {
        $numberString = (string)$number;
        $this->memo = array_fill(0, strlen($numberString) + 10, []);
        return $this->helper2($numberString, $limit, $suffix, 0, 0);
    }

    private function helper2(string $finish, int $limit, string $suffix, int $index, int $freeDigit): int
    {
        if (isset($this->memo[$index][$freeDigit])) {
            return $this->memo[$index][$freeDigit];
        } elseif (strlen($finish) < strlen($suffix)) {
            return 0;
        } elseif (strlen($finish) - $index === strlen($suffix)) {
            if ($freeDigit === 1) {
                return 1;
            } elseif ((int)substr($finish, $index) >= (int)$suffix) {
                return 1;
            } else {
                return 0;
            }
        }
        $res = 0;
        $currChar = (int)$finish[$index] - '0';
        $max = $freeDigit === 1 ? 9 : $currChar;
        for ($i = 0; $i <= min($max, $limit); $i++) {
            $nextFreeDigit = $freeDigit === 0 && $currChar === $i ? 0 : 1;
            $res += $this->helper2($finish, $limit, $suffix, $index + 1, $nextFreeDigit);
        }
        return $this->memo[$index][$freeDigit] = $res;
    }
}
```