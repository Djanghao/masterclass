# Using sort and array_unique.

**Author:** Pal007
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5343373/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/5343373/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function countVowelSubstrings($word) {
        $vowels = ['a', 'e', 'i', 'o', 'u'];
        sort($vowels);
        $wordArr = str_split($word);
        $len = count($wordArr);
        $sumSub = 0;
        $i = -1;
        $counter = 5;

        while($i < $len - 5) {
            $i++;
            $current = array_unique(array_slice($wordArr, $i, $counter));
            sort($current);
            
            if(in_array($wordArr[$counter + $i - 1], $vowels)) {
                $counter++;
                $i--; 
                if($current == $vowels && isset($wordArr[$counter + $i - 1])) {
                    $sumSub++;
                }
            } else {
                $counter = 5;
            }
        }

        return $sumSub;
    }
}
```