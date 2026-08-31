# Works with any number of checked chars, i guess

**Author:** leetID
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5792147/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5792147/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function findTheLongestSubstring($s) {
        $wantedCharacters = array( // increse key value exponentially
        'a'=>1,                    
        'e'=>2,                   
        'i'=>4,
        'o'=>8,
        'u'=>16);

        $charactersStagesMap = [];
        $result =0;
        $xorValue = 0;
        $stagesCount =2**count($wantedCharacters);

        for($i =0;$i<$stagesCount;$i++)
        {
            $charactersStagesMap[$i] = -1;
        }

        for($i=0; $i<strlen($s);$i++)
        {
            $xorValue ^= $wantedCharacters[($s[$i])];
            if($charactersStagesMap[$xorValue]== -1 && $xorValue!=0) $charactersStagesMap[$xorValue] = $i;
            
            $result = max($result,$i - $charactersStagesMap[$xorValue]);
        }
        return $result;
    }
}
```