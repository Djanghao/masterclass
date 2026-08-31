# PHP solution at O(N+M) time / O(1) space with runtime 16 ms + 19,4 MB memory

**Author:** denis-luttcev
**Votes:** 8
**Link:** [https://leetcode.com/problems/ransom-note/solutions/1894432/](https://leetcode.com/problems/ransom-note/solutions/1894432/)

---

O(N+M) time complexity (N = ransomNode length, M = magazine length).
O(1) space complexity (auxiliary associative array (as map) of M size but maximum 26).

The solution idea is to slice the magazine string to single symbols and put it into the casket with separate cells for each letter. If in magazine string the symbol repeats twice, thrice etc., into the letter's cell places two, three etc. the symbol instances. This casket will be typesetting base for the ransomNote string. Further the ransomNote is typed letter-by-letter: the required symbol is extracted from the letter's cell of the casket if it instance is there. An empty letter's cell in the case when the this symbol is needed to type indicates that the ransomNote can not be construced.
```
class Solution {

    /**
     * @param String $ransomNote
     * @param String $magazine
     * @return Boolean
     */
    function canConstruct($ransomNote, $magazine) {
	
        // An empty array will be indexed by magazine symbols set mapped to its frequency.
		// key = symbol, value = symbol's frequency in magazine string.
		// The casket size is the size of the magazine string unique symbols set,
		// but maximum 26 lowercase English letters.
		
		$casket = [];
        
		// First pass with N iterations through the magazine string fills the casket's cells.
		// Reverse pass order for single string length calculation.
		
        for ($i = strlen($magazine) - 1; $i >= 0 ; $i--) {
		
		    // $magazine[$i] is i-th symbol of the string and it is index (key) of the casket's cell.
			
            $casket[$magazine[$i]]++;
        }
        
		// Second pass with maximum M iterations (in case ransomNote can be constructed)
		// through ransomNote string raids the casket's cells. 
		// Reverse pass order for single string length calculation.
		
        for ($j = strlen($ransomNote) - 1; $j >= 0 ; $j--) {
		
		    // The emptiness the letter's cell of the casket (in case of a lack of the required to
			// type symbol) causes the early breaking of the iteration and the return of a
			// negative result. Decrement is performed after checking!
			
            if ($casket[$ransomNote[$j]]-- == 0) return false;
        }
        
		// The string has successfully typed (typesetting symbols were presented enough).
        return true;
    }
}
```
