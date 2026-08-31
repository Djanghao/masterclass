# Solution with explanation

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/5683048/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/5683048/)

---

# Approach
1. Convert the input number to an integer and store it in num.

2. Generate a set of boundary palindromes by adding the largest and smallest palindromes that have the same number of digits as the input number.

3. Generate palindromic numbers around the input number by iterating over the possible values of the first half of the number and calling the _make_palindrome function to generate the corresponding palindromic number.

4. Remove the input number from the set if it's present.

5. Iterate over the set of palindromic numbers and find the closest palindrome by comparing the absolute difference between each palindrome and the input number.

6. Return the closest palindrome.

The _make_palindrome function generates a palindrome by taking the first half of the number and appending it to its reverse. If the number has an odd number of digits, it removes the last digit of the first half before appending its reverse.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of digits in the input number.
--The generation of boundary palindromes takes O(1) time, as it only involves creating two palindromes.
-- The generation of palindromic numbers around the input number takes O(n) time, as it involves iterating over the possible values of the first half of the number and calling the _make_palindrome function.
-- The removal of the input number from the set takes O(1) time, as it only involves checking if the input number is present in the set.
The iteration over the set of palindromic numbers to find the closest palindrome takes O(n) time, as it involves iterating over the set of palindromes.
-- Therefore, the overall time complexity is O(n) + O(n) = O(2n) = O(n).

- Space complexity:
$$O(n)$$, where n is the number of digits in the input number.
-- The set of palindromic numbers takes O(n) space, as it stores at most n palindromes.
-- The input number and the variables used to store the closest palindrome take O(1) space.
-- Therefore, the overall space complexity is O(n) + O(1) = O(n).

# Code
```python3 []
class Solution:
    def nearestPalindromic(self, n: str) -> str:
        num = int(n)
        num_length = len(n)

        # Generate boundary palindromes
        boundary_palindromes = {
            str(10**num_length + 1),
            str(10**(num_length-1) - 1)
        }

        # Generate palindromes around the input number
        prefix = int(n[:(num_length + 1) // 2])
        for start in (prefix - 1, prefix, prefix + 1):
            first_half = str(start)
            palindrome = self._make_palindrome(first_half, num_length)
            boundary_palindromes.add(palindrome)

        # Remove the input number from the set if it's present
        boundary_palindromes.discard(n)

        # Find the nearest palindrome
        nearest = None
        min_diff = float('inf')
        for palindrome in boundary_palindromes:
            palindrome_int = int(palindrome)
            diff = abs(palindrome_int - num)
            if diff < min_diff or (diff == min_diff and palindrome_int < int(nearest)):
                nearest = palindrome
                min_diff = diff

        return nearest

    def _make_palindrome(self, first_half: str, length: int) -> str:
        if length % 2:
            return first_half + first_half[:-1][::-1]
        else:
            return first_half + first_half[::-1]
```
``` javascript []
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const num = parseInt(n);
    const numLength = n.length;

    // Generate boundary palindromes
    const boundaryPalindromes = new Set([
        (10 ** numLength + 1).toString(),
        (10 ** (numLength - 1) - 1).toString(),
    ]);

    // Generate palindromes around the input number
    const prefix = parseInt(n.slice(0, Math.floor((numLength + 1) / 2)));
    for (let start of [prefix - 1, prefix, prefix + 1]) {
        const firstHalf = start.toString();
        const palindrome = _makePalindrome(firstHalf, numLength);
        boundaryPalindromes.add(palindrome);
    }

    // Remove the input number from the set if it's present
    boundaryPalindromes.delete(n);

    // Find the nearest palindrome
    let nearest = null;
    let minDiff = Infinity;
    for (const palindrome of boundaryPalindromes) {
        const palindromeInt = parseInt(palindrome);
        const diff = Math.abs(palindromeInt - num);
        if (diff < minDiff || (diff === minDiff && palindromeInt < parseInt(nearest))) {
            nearest = palindrome;
            minDiff = diff;
        }
    }

    return nearest;
}

var _makePalindrome = function(firstHalf, length) {
    if (length % 2) {
        return firstHalf + firstHalf.slice(0, -1).split('').reverse().join('');
    } else {
        return firstHalf + firstHalf.split('').reverse().join('');
    }
}
```
``` php []
class Solution {

    /**
     * @param String $n
     * @return String
     */
    function nearestPalindromic($n) {
        $num = (int)$n;
        $numLength = strlen($n);

        // Generate boundary palindromes
        $boundaryPalindromes = [
            (10 ** $numLength + 1) . '',
            (10 ** ($numLength - 1) - 1) . '',
        ];

        // Generate palindromes around the input number
        $prefix = (int)substr($n, 0, floor(($numLength + 1) / 2));
        foreach ([ $prefix - 1, $prefix, $prefix + 1 ] as $start) {
            $firstHalf = (string)$start;
            $palindrome = $this->_makePalindrome($firstHalf, $numLength);
            $boundaryPalindromes[] = $palindrome;
        }

        // Remove the input number from the array if it's present
        $boundaryPalindromes = array_diff($boundaryPalindromes, [$n]);

        // Find the nearest palindrome
        $nearest = null;
        $minDiff = INF;
        foreach ($boundaryPalindromes as $palindrome) {
            $palindromeInt = (int)$palindrome;
            $diff = abs($palindromeInt - $num);
            if ($diff < $minDiff || ($diff === $minDiff && $palindromeInt < (int)$nearest)) {
                $nearest = $palindrome;
                $minDiff = $diff;
            }
        }

        return $nearest;
    }

    private function _makePalindrome($firstHalf, $length) {
        if ($length % 2) {
            return $firstHalf . strrev(substr($firstHalf, 0, -1));
        } else {
            return $firstHalf . strrev($firstHalf);
        }
    }
}
```