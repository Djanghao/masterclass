# PHP solution, linear time and space complexity

**Author:** Cheburon
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/340514/](https://leetcode.com/problems/word-abbreviation/solutions/340514/)

---

LetterTree - prefix tree, each node contains an array, in which I store the amount of words that passes through this particular node. I divide them by groups with the same last letter and word length.
In the first loop we build the tree, in the next loop we go through each node for each word, and when we encounter a node through which only this word passes, that means that we can start abbreviation from here - since no other word contains the same prefix (among the words with the same last character and length)

```
class LetterTree {
    public $children = [];
    public $lastLetters = [];
}

class Solution {
    
    /**
     * @param String[] $dict
     * @return String[]
     */
    function wordsAbbreviation($dict) {
        $letterTree = new LetterTree();
        foreach ($dict as $word) {
            $currentLevel = $letterTree;
            $lastLetter = substr($word, -1) . strlen($word);
            $chars = str_split($word);
            foreach ($chars as $character) {
                if (!array_key_exists($character, $currentLevel->children)) {
                    $currentLevel->children[$character] = new LetterTree();
                }
                $currentLevel = $currentLevel->children[$character];
                if (!array_key_exists($lastLetter, $currentLevel->lastLetters)) {
                    $currentLevel->lastLetters[$lastLetter] = 0;
                }
                $currentLevel->lastLetters[$lastLetter]++;
            }
        }
        $results = [];
        foreach ($dict as $word) {
            $lastLetter = substr($word, -1) . strlen($word);
            $depth = 0;
            $result = "";
            $currentLevel = $letterTree;
            $chars = str_split($word);
            foreach ($chars as $character) {
                $currentLevel = $currentLevel->children[$character];
                if ($currentLevel->lastLetters[$lastLetter] == 1 && ((strlen($word) - $depth - 2) > 1)) {
                    $result .= $character . (strlen($word) - $depth - 2) . substr($word, -1);
                    break;
                } else {
                    $result .= $character;
                }
                $depth++;
            }
            $results[] = $result;
        }
        return $results;
    }
}
```