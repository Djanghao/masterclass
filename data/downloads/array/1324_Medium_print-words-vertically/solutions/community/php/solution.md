# Simple php solution, using (explode, implode)

**Author:** samiimran2016
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/4109568/](https://leetcode.com/problems/print-words-vertically/solutions/4109568/)

---

# Intuition

# Approach
First I need to extract words and put them in an array for 2 reasons:
1. find the longest word
2. loop on each word in the array

Second I loop through the array(words), get a word and get its length, then I loop through the word itself to get characters from it.
If I the word's length less than the longest word we add ' '(empty string).

Final thing we implode(concatenate) characters to get words and do a right trim to remove trailing spaces.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function printVertically($s) {
        $words = explode(' ', $s);
        $result = [];
        $length = count($words);
        $maxlen = max(array_map('strlen', $words));

        for ($i = 0; $i < $length; $i++) {
            $word = $words[$i];
            $wordLength = strlen($word);
            for ($j = 0; $j < $maxlen; $j++) {
                $ch = $word[$j] ?? ' ';
                $result[$j][] = $ch;
            }
        }
        
        $result = array_map(function ($arr) {
            return rtrim(implode($arr));
        }, $result);

        return $result;
    }
}
```