# PHP Solution with two pointers and comments

**Author:** mamyta
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/4418131/](https://leetcode.com/problems/valid-word-abbreviation/solutions/4418131/)

---

# Code
```
class Solution {
    function validWordAbbreviation($word, $abbr) {
        $i=$j=0;
        $isNum= false;
        while($j<strlen($abbr) && $i < strlen($word)){
            // Check if the current character in $abbr is a number.
            if(is_numeric($abbr[$j])){
                if($isNum === false){
                    // Leading zeros in numbers are not allowed.
                    if ($abbr[$j] == 0) return false;
                    // Mark the start of the numeric sequence in $abbr.
                    $isNum = $j; 
                }
                $j++;
            }else{
                // Process the numeric part if there was any, and adjust 
                // the pointer $i in $word accordingly.
                $this->extractNum($isNum, $i, $abbr, $j);
                // Check if the current characters in $word and $abbr match.
                if ($abbr[$j] != $word[$i]){
                    return false;
                }
                $i++;
                $j++;
            }
        }
        // Process any remaining numeric part in $abbr.
        $this->extractNum($isNum, $i, $abbr, $j);
        // Check if we have reached the end of both the word and the abbreviation.
        if($i != strlen($word) || $j != strlen($abbr)){
            return false;
        }
        return true;
    }

    function extractNum(&$isNum, &$i, &$abbr, &$j){
        if($isNum !== false){
            // Convert the numeric part of $abbr to an integer and 
            //add it to the pointer $i.
            $i += intval(substr($abbr,$isNum,$j-$isNum)); 
            $isNum = false;
        }
    }
}
```