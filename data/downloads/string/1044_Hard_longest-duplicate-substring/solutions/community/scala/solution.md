# Basic Suffix Array And LCP without building it

**Author:** niyodilxwes
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/5862262/](https://leetcode.com/problems/longest-duplicate-substring/solutions/5862262/)

---

# Intuition
The problem asks us to find the length of the longest repeating substring in a given string. My first thought was to use the concept of a **suffix array** combined with **longest common prefix (LCP)** computation to solve this problem efficiently. The key observation is that any repeating substring must appear in consecutive suffixes in the sorted suffix array.

# Approach
1. **Suffix Array Construction**: 
   - Generate all possible suffixes of the string and store their starting indices.
   - Sort these suffixes lexicographically. Once sorted, consecutive suffixes will often share common prefixes, which represent repeated substrings.
   
2. **Longest Common Prefix (LCP) Calculation**: 
   - Iterate over the sorted suffixes and for each consecutive pair, calculate the length of the longest common prefix. This is done by comparing characters of the two suffixes one by one.
   - Keep track of the maximum LCP encountered, as this represents the longest repeating substring.
   
3. **Return the Result**: 
   - After calculating the LCP for all consecutive suffixes, return the maximum value, which is the length of the longest repeating substring.

# Complexity
- **Time complexity**: 
  The time complexity is $$O(n^2 \\log n)$$, where `n` is the length of the string `s`. Constructing the suffix array involves sorting the suffixes, which takes $$O(n \\log n)$$, and for each pair of suffixes, we compare their characters, which can take up to $$O(n)$$ for each comparison. Therefore, the overall complexity is $$O(n^2 \\log n)$$ in the worst case.

- **Space complexity**: 
  The space complexity is $$O(n)$$, where `n` is the length of the string. We need to store the suffix array and a few other variables like the longest common prefix lengths.

# Code
```scala []
object Solution {
    def longestRepeatingSubstring(s: String): Int = {
        // Step 1: Create the suffix array
        val suffixArray = (for(i <- 0 until s.length) yield (s.substring(i), i)).sorted.map(_._2)
        
        var maxSoFar = 0
        
        // Step 2: Iterate through the suffix array and compute LCP for consecutive suffixes
        for (i <- 1 until s.length) {
            var length = 0
            val (suffix1, suffix2) = (s.substring(suffixArray(i - 1)), s.substring(suffixArray(i)))
            
            // Step 3: Find the length of the longest common prefix between suffix1 and suffix2
            while (length < suffix1.length && length < suffix2.length && suffix1(length) == suffix2(length)) {
                length += 1
            }
            
            // Step 4: Update the maximum LCP found so far
            maxSoFar = Math.max(length, maxSoFar)
        }
        
        // Step 5: Return the length of the longest repeating substring
        maxSoFar
    }
}
```