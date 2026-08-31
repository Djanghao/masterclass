# Python: Two-Pointers + Process for coding interviews

**Author:** tea_for_two
**Votes:** 384
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/765776/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/765776/)

---

Hello,

Here is my solution with my process for coding interview. All feedbacks are welcome.

1. Problem Summary / Clarifications / TDD:
         `Ouput(ABAB, 2): 4`
         `Ouput(AABABBA, 1): 4`
         `Ouput(BAAAABBA, 1): 5`
         `Ouput(BAAAABBA, 3): 8`
         `Ouput(BAAAABBBBBA, 1): 6`
         `Ouput(CBAAAABBBBBA, 1): 6`
         `Ouput(CBAAAABBBBBA, 2): 7`
		 `Ouput(CABAAAABBBBBA, 2): 7`		 
         
2. Intuition:
        - Scan the array with 2 pointers: `left` and `right`
        - Store the frequency of each character
        - Compute the replacement cost:  `cells count between left and right pointers - the highest frequency`
        - if the `replacement cost <= k`: update longest string size
        - if the `replacement cost > k`: decrease frequency of character at `left pointer`; increase `left pointer` and repeat
        - - - Since we are looking for the longest sub-string, we don't need to shrink the sliding window by more than 1 character:
        - - - When we reach a window of size `W`, we know that our target window size is higher or equal to the current one ( `>= W`).
		- - - Therefore, we could continue sliding with a window of `W` cells until we find a larger window `> W`.
        
        0   1   2   3   4   5   6   7   8   9   10  11  12
        C   A   B   A   A   A   A   B   B   B   B   B   A,  k,  Replacement Cost,    max len
	   l^r                                                  2   1 - 1 = 0 <=k           1    => increase r
	   l^  ^r                                               2   2 - 1 = 1 <=k           2    => increase r
	   l^       ^r                                          2   3 - 1 = 2 <=k           3    => increase r
	   l^           ^r                                      2   4 - 2 = 2 <=k           4    => increase r
	   l^               ^r                                  2   5 - 3 = 2 <=k           5    => increase r
	   l^                   ^r                              2   6 - 4 = 2 <=k           6    => increase r
       l^                      r^                           2   7 - 5 = 2 <=k           7    => increase r
	   l^                          r^                       2   8 - 5 = 3 > k           7    => increase l,r
           l^                          r^                   2   8 - 5 = 3 > k           7    => increase l,r
               l^                           r^              2   8 - 4 = 4 > k           7    => increase l,r
                   l^                           r^          2   8 - 4 = 4 > k           7    => increase l,r
                       l^                           r^      2   8 - 5 = 3 > k           7    => increase l,r
                            l^                          r^  2   8 - 4 = 4 > k           7    => STOP
    
3. Tests: you may want to:
		- to use all test cases above
		- to add test cases based on your code (coverage): test your code as soon as you can
		- to test edge & special cases:
	- An empty string, 
	- A string with 1 character, `A`
	- A string with same character: `AAAAA`
	- A string that containing distinct characters: `ABCDEFGHI`

4. Analysis:
        - Time Complexity: O(26 |s|) =  O(|s|)
        - Space Complexity: O(26) = O(1)
    
```
    def characterReplacement(self, s: str, k: int) -> int:
        
        l = 0
        c_frequency = {}
        longest_str_len = 0
        for r in range(len(s)):
            
            if not s[r] in c_frequency:
                c_frequency[s[r]] = 0
            c_frequency[s[r]] += 1
            
            # Replacements cost = cells count between left and right - highest frequency
            cells_count = r - l + 1
            if cells_count - max(c_frequency.values()) <= k:
                longest_str_len = max(longest_str_len, cells_count)
                
            else:
                c_frequency[s[l]] -= 1
                if not c_frequency[s[l]]:
                    c_frequency.pop(s[l])
                l += 1
        
        return longest_str_len
		
```