# PHP Solution || Not the best, but works

**Author:** AttilaThe13th
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/2722266/](https://leetcode.com/problems/top-k-frequent-words/solutions/2722266/)

---

Not the best solution, but works great.

```
function topKFrequent($words, $k) {
        $frequencyArray = array_count_values($words);
        arsort($frequencyArray);

        $ans = array();
        foreach($frequencyArray as $key => $word) {
            $ans[$word][] = $key;
        }

        foreach($ans as $aKey => $aWord) {
            if(count($aWord) > 1) { sort($aWord); $ans[$aKey] = $aWord; }
        }

        $fReturn = array();
        foreach($ans as $wrds) {
            foreach($wrds as $woord) {
                if(count($fReturn) < $k) $fReturn[] = $woord;
            }
        }

        return $fReturn;
   }
   ```
	