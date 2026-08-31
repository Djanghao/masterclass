# Rotated Digits

**Author:** Asjad67
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/5158223/](https://leetcode.com/problems/rotated-digits/solutions/5158223/)

---

# Intuition
The problem requires us to determine the count of "good" numbers in the range [1, n]. A "good" number is one that changes after rotating each of its digits individually by 180 degrees. We need to consider the rules of rotation for each digit to identify good numbers.

# Approach
1. Iterate Through Numbers: We iterate through each number from 1 to n.
2. Check Validity: For each number, we check if it contains any invalid digits (3, 4, 7). If it does, it cannot be a good number. Then, we check if it contains any of the valid digits (2, 5, 6, 9) that rotate to a different number. If it does, it is considered a good number.
3. Count Good Numbers: We maintain a count of good numbers encountered during the iteration.

# Complexity
- Time complexity:
The algorithm iterates through each number from 1 to n once, resulting in a time complexity of O(n).

- Space complexity:
The algorithm doesn't use any extra space proportional to the input size, so the space complexity is O(1).

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function rotatedDigits($n) {
        $count = 0;
        for ($i = 1; $i <= $n; $i++) {
            if ($this->isGoodNumber($i)) {
                $count++;
            }
        }
        return $count;
    }
    
    
    function isGoodNumber($num) {
        $validDigits = ['0', '1', '8', '2', '5', '6', '9'];
        $invalidDigits = ['3', '4', '7'];
        $numStr = strval($num);
        $rotated = false;
        foreach (str_split($numStr) as $digit) {
            if (in_array($digit, $invalidDigits)) {
                return false; 
            }
            if (in_array($digit, $validDigits)) {
                if ($digit === '2' || $digit === '5' || $digit === '6' || $digit === '9') {
                    $rotated = true;
                }
            }
        }
        return $rotated;
    }
}
```