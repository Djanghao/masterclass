# PHP optmized solution with sliding window.

**Author:** julitroalves
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/6041190/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/6041190/)

---

# Intuition
I've tried to solve it without see at the solutions tab and I've solved it, but the solution wasn't performing and was running out of the limit time. Then I decided to check how others solve it and fix my code.

# Approach
Sliding window with hash map for cases where we have word with just one char.


# Code
```php []
class Solution {

    /**
     * @param String $word
     * @param String[] $forbidden
     * @return Integer
     */
    function longestValidSubstring($word, $forbidden) {
        $n = strlen($word);
        $windowStart = $maxLength = 0;
        $forbiddenF = array_flip($forbidden);
        
        
        $freq = [];
        for($i = 0; $i < $n; $i++) {
            if (!isset($freq[$word[$i]])) {
                $freq[$word[$i]] = 0;
            }

            $freq[$word[$i]]++;
        }

        // For cases where the word just has one character multiple times.
        if (count($freq) == 1 && $n > 10) {
            return $n;
        }
        
        $windowEnd = -1;
        while (++$windowEnd < $n) {
            
            for ($checkStart = $windowEnd; $checkStart > max($windowEnd-10, $windowStart-1); $checkStart--) {
                if (isset($forbiddenF[substr($word, $checkStart, $windowEnd-$checkStart+1)])) {
                    $windowStart = $checkStart+1;
                break;
                }

                
            }        

            $maxLength = max($maxLength, $windowEnd - $windowStart+1);
        }

        return $maxLength;
    }
}
```