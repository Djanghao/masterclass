# Bruteforce

**Author:** DemetriSam
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3781903/](https://leetcode.com/problems/make-number-of-distinct-characters-equal/solutions/3781903/)

---

# Code
```
class Solution {

    public $alphabet = ['q','w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

    /**
     * @param String $word1
     * @param String $word2
     * @return Boolean
     */
    function isItPossible($word1, $word2) {
        for($i = 0; $i < 26; $i++) {
            $char1 = $this->alphabet[$i];
            $pos1 = strpos($word1, $char1);
            if($pos1 === false) {
                continue;
            }

            for($j = 0; $j < 26; $j++) {
                $char2 = $this->alphabet[$j];
                $pos2 = strpos($word2, $char2);
                if($pos2 === false) {
                    continue;
                }

                $r1 = substr_replace($word1, $char2, $pos1, 1);
                $r2 = substr_replace($word2, $char1, $pos2, 1);

                if($this->distQ($r1) === $this->distQ($r2)) {
                    return true;
                }
            }
        }
        return false;
    }

    function distQ($word)
    {
        $cnt = 0;
        foreach($this->alphabet as $char) {
            $pos = strpos($word, $char);
            if($pos === false) {
                continue;
            }
            $cnt++;
        }

        return $cnt;
    }
}
```