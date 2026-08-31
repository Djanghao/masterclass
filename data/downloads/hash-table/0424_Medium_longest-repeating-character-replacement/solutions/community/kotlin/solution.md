# O(N) + Sliding Window + Simple with explanation + Kotlin solution

**Author:** learn4Fun
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/971458/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/971458/)

---

- The idea here is to find a window that satisfies the condition -
	 *count of most repeatable character + no. of allowed replacements <= length of the window*
- Since the no. of allowed replacements is fixed, then the window size is directly proportional to the count of the most repeating character.
- Initially the window keeps growing from the end, until all the allowed replacements are added up in the window until it reaches the max size. 
- The moment the condition is not satisfied (*i.e., count of most repeatable character + no. of allowed replacements > size of the window*), then we need to slide the window (not shrink) to the right and decrement the frequency of the character that is moved out of the window. 
- If the next character coming in is the most repeating character, then the window grows or else it simply slides again.

```
class Solution {
    fun characterReplacement(s: String, k: Int): Int {
        var mostFreqCharCount = 0; var start = 0; var max=0
        val map = mutableMapOf<Char, Int>()
        
        for(end in 0 until s.length){
            map.put(s[end], map.getOrDefault(s[end], 0) + 1)
            mostFreqCharCount = Math.max(map.get(s[end])!!, mostFreqCharCount)
            if(end - start + 1 > mostFreqCharCount + k){
                map.put(s[start], map.get(s[start])!! - 1)
                start++                
            }
            max = Math.max(max, end - start + 1)
        }
        return max
    }
}
```