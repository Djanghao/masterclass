# Verbal Arithmetic Puzzle (PHP)

**Author:** jacintolutrezehue
**Votes:** 0
**Link:** [https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/5449245/](https://leetcode.com/problems/verbal-arithmetic-puzzle/solutions/5449245/)

---

# Intuition

When faced with the problem of solving a verbal arithmetic equation like "SEND + MORE = MONEY," the initial idea is to figure out how to assign digits (0-9) to each unique letter so that the equation holds true. Each letter must represent a unique digit, and the sum of the words on the left side should equal the word on the right side.

# Approach

1. **Mapping Letters to Digits:** 
   - We start by mapping each letter from the words (both left and right sides) to a potential digit. For instance, in "SEND + MORE = MONEY," each letter ('S', 'E', 'N', 'D', 'M', 'O', 'R', 'Y') needs to be assigned a digit (0-9).

2. **Backtracking to Find Solutions:**
   - We use a backtracking approach to explore all possible assignments of digits to letters while ensuring that no two letters map to the same digit.
   - The `solveEquation` function starts by trying different combinations of digits and checks if they satisfy the equation.
   - If a digit assignment leads to a contradiction (like two letters mapping to the same digit), we backtrack and try a different assignment.

3. **Checking Validity:**
   - The `assignDigits` function checks each possible assignment:
     - It computes the sum of digits for each letter based on the current assignment.
     - It checks if this assignment meets the conditions of the arithmetic equation (no leading zeros, correct sum, etc.).
     - If all letters are successfully assigned without conflicts and the equation holds true, we mark the solution as found (`solutionFound`).

4. **Implementation Details:**
   - The process involves iterating through each word and its characters, handling edge cases like words with leading zeros or different lengths between the left and right sides of the equation.
   - The solution uses arrays (`charToDigit`, `digitUsed`, `letterPositions`) to keep track of digit assignments and ensure efficient backtracking.

5. **Conclusion:**
   - By systematically testing different digit assignments using backtracking, we can determine if there exists a valid solution for the given verbal arithmetic puzzle.

This approach ensures that all possible combinations are explored efficiently to either find a valid solution or determine that no solution exists for the given puzzle.

# Code
```
class Solution {
    public $result;
    public $maxWordLength = 0;
    public $charToDigit = [];
    public $digitUsed = [];
    public $letterPositions = [];
    public $solutionFound = false;

    function assignDigits($level, $startIndex, $currentSum, $carry) {
        if ($this->solutionFound) return;
        
        if ($startIndex == count($this->letterPositions[$level])) {
            $newSum = $currentSum + $carry;
            $lowDigit = $newSum % 10;
            $highDigit = intval($newSum / 10);
            $digitReference = &$this->charToDigit[ord($this->result[$level]) - ord('A')];
            $temp = $digitReference;
            
            if ($digitReference >= 0 && $digitReference != $lowDigit) return;
            if ($digitReference < 0 && $this->digitUsed[$lowDigit]) return;
            
            if ($highDigit > 0) {
                if ($level == $this->maxWordLength - 1) {
                    if ($level + 1 >= strlen($this->result)) return;
                    $nextDigit = $this->charToDigit[ord($this->result[$level + 1]) - ord('A')];
                    if ($nextDigit >= 0 && $nextDigit != $highDigit) return;
                }
            } else if ($level == $this->maxWordLength - 1 && $level + 1 < strlen($this->result)) return;
            
            $digitReference = $lowDigit;
            $this->digitUsed[$lowDigit] = true;
            $this->solveEquation($level + 1, $highDigit);
            $digitReference = $temp;
            $this->digitUsed[$lowDigit] = false;
            
            return;
        }
        
        if ($this->charToDigit[$this->letterPositions[$level][$startIndex]] >= 0) {
            $this->assignDigits($level, $startIndex + 1, $currentSum + $this->charToDigit[$this->letterPositions[$level][$startIndex]], $carry);
            return;
        }
        
        for ($digit = 0; $digit <= 9; $digit++) {
            if ($this->digitUsed[$digit]) continue;
            
            $currentChar = $this->letterPositions[$level][$startIndex];
            $temp = $this->charToDigit[$currentChar];
            
            if ($digit == 0 && $temp == -2) continue;
            
            $this->digitUsed[$digit] = true;
            $this->charToDigit[$currentChar] = $digit;
            $this->assignDigits($level, $startIndex + 1, $currentSum + $digit, $carry);
            $this->digitUsed[$digit] = false;
            $this->charToDigit[$currentChar] = $temp;
        }
    }

    function solveEquation($level, $carry) {
        if ($this->solutionFound) return;
        
        if ($level == $this->maxWordLength) {
            $this->solutionFound = true;
            return;
        }
        
        $this->assignDigits($level, 0, 0, $carry);
    }

    function isSolvable($words, $result) {
        $this->result = strrev($result);
        
        for ($i = 0; $i < 26; $i++) {
            $this->charToDigit[$i] = -1;
        }
        
        foreach ($words as $word) {
            $length = strlen($word);
            if ($length > 1) {
                $this->charToDigit[ord($word[0]) - ord('A')] = -2;
            }
            
            $reversedWord = strrev($word);
            
            for ($j = 0; $j < $length; $j++) {
                $this->letterPositions[$j][] = ord($reversedWord[$j]) - ord('A');
            }
            
            $this->maxWordLength = max($this->maxWordLength, $length);
        }
        
        if (strlen($this->result) < $this->maxWordLength) return false;
        if (strlen($this->result) - $this->maxWordLength >= 2) return false;
        
        $this->solveEquation(0, 0);
        
        return $this->solutionFound;
    }
}

```