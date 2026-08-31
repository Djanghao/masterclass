# Kotlin - One or Two Pointers(Sliding Window)

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/950387/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/950387/)

---

```
/**
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 *
 * Time Complexity:     O(`lenS`) / O(1) + O(1) ~ O(`lenS`) / O(1)
 * Space Complexity:    O(1)
 *
 *  `count += lo`
 *   [lo - 1, ..., hi] is the subarray, of the minimum length, ending at `hi`, which contains all three letters.
 *   The validity of the subarray can be extended to `idx == 0`.
 *
 * References:
 *  https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516977/JavaC%2B%2BPython-Easy-and-Concise
 *  https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516955/Java-ELEGANT-No-Sliding-Window-EXPLAINED-(No-of-Sub-Strings-Ending-at-Curr-Index)/456665
 */
class Solution {
    fun numberOfSubstrings(str: String): Int {
        val lenS = str.length
        
        var lo = 0
        var hi = 0
        var freqs = IntArray(3){ 0 }
        var count = 0
        
        while(hi < lenS){
            ++freqs[str[hi] - 'a']
            
            while(containsAll(freqs)){
                --freqs[str[lo] - 'a']
                ++lo
            }
            
            count += lo
            ++hi
        }
        
        return count
    }
    
    private fun containsAll(freqs: IntArray) = freqs[0] > 0 && freqs[1] > 0 && freqs[2] > 0
}
```

```
/**
 * https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
 *
 * Time Complexity:     O(`lenS`) / O(1) + O(1) ~ O(`lenS`) / O(1)
 * Space Complexity:    O(1)
 *
 *  `count += lo`
 *   [lo - 1, ..., hi] is the subarray, of the minimum length, ending at `hi`, which contains all three letters.
 *   The validity of the subarray can be extended to `idx == 0`.
 *
 * References:
 *  https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516977/JavaC%2B%2BPython-Easy-and-Concise
 *  https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/discuss/516955/Java-ELEGANT-No-Sliding-Window-EXPLAINED-(No-of-Sub-Strings-Ending-at-Curr-Index)/456665
 */
class Solution {
    fun numberOfSubstrings(str: String): Int {
        val lenS = str.length
        
        var count = 0
        val lastIndexes = IntArray(3){ -1 }
        
        for(idx in str.indices){
            lastIndexes[str[idx] - 'a'] = idx
            count += 1 + minOf(lastIndexes[0], lastIndexes[1], lastIndexes[2])
        }

        return count
    }
}
```

[#Sliding Window, String - github](https://github.com/zea7ot/leetcode-tags-zea7ot/tree/master/txt/by_data_structure/string/by_technique/n_pointers/2_pointers/sliding_window)

[#N Pointers, String - github](https://github.com/zea7ot/leetcode-tags-zea7ot/tree/master/txt/by_data_structure/string/by_technique/n_pointers)

[#Substring  - github](https://github.com/zea7ot/leetcode-tags-zea7ot/tree/master/txt/by_data_structure/string/by_data_structure/substring)

[#N Pointers - github](https://github.com/zea7ot/leetcode-tags-zea7ot/tree/master/txt/by_technique/n_pointers)

