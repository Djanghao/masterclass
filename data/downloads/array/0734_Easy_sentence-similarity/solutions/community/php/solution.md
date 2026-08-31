# PHP solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/3126431/](https://leetcode.com/problems/sentence-similarity/solutions/3126431/)

---

The method creates an associative array \\$similarMap where each key is a string concatenating two words from a pair in \\$similarPairs, separated by an underscore (e.g. "word1_word2"). This array is used to check if two words are considered similar.

Finally, the method iterates over the words in \\$sentence1 and \\$sentence2 and compares them. If the words are different, the method checks if there is a key in \\$similarMap that concatenates the two words. If such a key does not exist, the method returns **false**, as the words are not considered similar. If all words are either equal or considered similar, the method returns **true**, indicating that the two sentences are similar.

# Code
```
class Solution {

    function areSentencesSimilar($sentence1, $sentence2, $similarPairs) {
        if (count($sentence1) != count($sentence2)) return false;
        
        $similarMap = [];
        foreach($similarPairs as $similarPair){
            $similarMap[$similarPair[0]."_".$similarPair[1]] = true;
            $similarMap[$similarPair[1]."_".$similarPair[0]] = true;
        }
        
        for($i=0;$i<count($sentence1);$i++){
            if($sentence1[$i] != $sentence2[$i]){
                if (!isset($similarMap[$sentence1[$i]."_".$sentence2[$i]])){
                    return false;
                }
            }
        }
        return true;
    }
}
```