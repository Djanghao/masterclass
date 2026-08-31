# php solution

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3464289/](https://leetcode.com/problems/similar-string-groups/solutions/3464289/)

---

# Code
``` php
class Solution {

    /**
     * @param String[] $strs
     * @return Integer
     */
    function numSimilarGroups($strs) {
        $n = count($strs);
        $g = range(0, $n-1);
        for($i=0; $i<$n; $i++) {
            for($j=$i+1; $j<$n; $j++) {
                if(!$this->isSimilar($strs[$i], $strs[$j])) continue;
                $g1 = $this->getG($g, $i);
                $g2 = $this->getG($g, $j);
                if($g1>$g2) [$g1, $g2] = [$g2, $g1];
                $g[$g2] = $g1;
            }
        }
        for($i=0; $i<$n; $i++){
            $g[$i] = $this->getG($g, $i);
        }

        return count(array_unique($g));
    }

    function isSimilar(string $s1, string $s2) {
        $n = strlen($s1);
        for($i=0;$i<$n && $s1[$i]===$s2[$i];$i++) {
        }
        if($i===$n) return true;
        for($j=$i+1;$j<$n && $s1[$j]===$s2[$j];$j++) {
        }

        if($j===$n) return false;

        if($s1[$i]!==$s2[$j] || $s2[$i]!==$s1[$j]) {
            return false;
        }
        for(++$j;$j<$n && $s1[$j]===$s2[$j];$j++) {
        }
        return $j===$n;
    }

    function getG(&$g, $i){
        while($g[$i]!==$i)
            $i=$g[$i]=$g[$g[$i]];
        return $i;
    }
}
```