# Solution Compare Strings by Frequency of the Smallest Character

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4895022/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/4895022/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * Menghitung frekuensi karakter terkecil secara leksikografis dalam string.
     * @param string $s
     * @return int
     */
    function f($s) {
        $char_count = array_count_values(str_split($s));
        ksort($char_count);
        return reset($char_count);
    }
    
    /**
     * Menghitung jumlah kata dalam $words yang memiliki frekuensi karakter terkecil lebih kecil dari $query.
     * @param String[] $queries
     * @param String[] $words
     * @return Integer[]
     */
    function numSmallerByFrequency($queries, $words) {
        $query_freq = array_map([$this, 'f'], $queries);
        $word_freq = array_map([$this, 'f'], $words);
        $ans = [];
        
        foreach ($query_freq as $q) {
            $count = 0;
            foreach ($word_freq as $w) {
                if ($q < $w) {
                    $count++;
                }
            }
            $ans[] = $count;
        }
        
        return $ans;
    }
}

```