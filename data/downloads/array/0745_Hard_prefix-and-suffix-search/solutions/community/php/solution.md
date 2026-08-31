# Simple Solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/5495202/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/5495202/)

---

# Code
```
class WordFilter {
    private $prefixes = []; 
    private $suffixes = []; 

    /**
     * @param String[] $words
     */
    function __construct($words) {
        $seen = [];

        for ($i = count($words) - 1; $i >= 0; $i--) {
            $word = $words[$i];

            if (isset($seen[$word])) {
                continue;
            }
            $seen[$word] = true;

            for ($j = 0; $j <= strlen($word); $j++) {
                $prefix = substr($word, 0, $j);
                $suffix = substr($word, $j);
                
                // Using array_push for adding elements to sets (simulating C++ set behavior)
                if (!isset($this->prefixes[$prefix])) {
                    $this->prefixes[$prefix] = [];
                }
                array_push($this->prefixes[$prefix], $i); 

                if (!isset($this->suffixes[$suffix])) {
                    $this->suffixes[$suffix] = [];
                }
                array_push($this->suffixes[$suffix], $i);
            }
        }
    }

    /**
     * @param String $pref
     * @param String $suff
     * @return Integer
     */
    function f($pref, $suff) {
        if (isset($this->prefixes[$pref]) && isset($this->suffixes[$suff])) {
            $prefixIndicies = $this->prefixes[$pref];
            $suffixIndicies = $this->suffixes[$suff];
            $sharedIndicies = array_intersect($prefixIndicies, $suffixIndicies);

            return empty($sharedIndicies) ? -1 : max($sharedIndicies);
        }
        return -1;
    }
}
```