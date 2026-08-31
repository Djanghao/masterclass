# Easy to understand PHP solution with comment

**Author:** Vlados117
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5561896/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/5561896/)

---

Upvote if it helps to you
Have a nice day, champion!)

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function makeSmallestPalindrome($s) {
        //We will iterate through the string from both ends. Our goal is to make the letters the same. 
        //We will convert the letters to the smaller letter. If one letter remains in the middle, we do not change it.

        $left_index = 0;
        $right_index = strlen($s) - 1;

        //Since the algorithm is greedy, we make the locally optimal choice.
        while ($left_index <= $right_index) {
            if ($s[$left_index] <= $s[$right_index]) {
                $s[$right_index] = $s[$left_index];
            } else {
                $s[$left_index] = $s[$right_index];
            }

            $left_index++;
            $right_index--;
        }

        return $s;
    }
}
```