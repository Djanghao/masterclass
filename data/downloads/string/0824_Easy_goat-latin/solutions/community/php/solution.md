# Runtime 8 ms, PHP

**Author:** ni_kush
**Votes:** 0
**Link:** [https://leetcode.com/problems/goat-latin/solutions/3210078/](https://leetcode.com/problems/goat-latin/solutions/3210078/)

---



# Code
```
class Solution {

    /**
     * @param String $sentence
     * @return String
     */
    function toGoatLatin(string $sentence):string {
        
        $words = explode(' ',$sentence);

        $aCount = 1;

        $result = '';

        foreach($words as $word){

            if(preg_match('/[a,e,i,o,u]/i',$word[0])){

                $result .= $word.'ma'.str_repeat('a',$aCount).' ';

            } 
            else{

                $lastChar = substr($word,0,1);

                $removeFirstChar = substr($word,1);

                $result .= $removeFirstChar.$lastChar.'ma'.str_repeat('a',$aCount).' ';
            }

            $aCount++;
        }

        return rtrim($result);
    }
}
```