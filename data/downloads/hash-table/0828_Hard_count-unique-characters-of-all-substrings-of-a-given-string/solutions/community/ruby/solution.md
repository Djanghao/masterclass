# Ruby O(n) time and space complexity

**Author:** jonbirke0927
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/1626059/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/1626059/)

---

Intuition: For a single character `c`, if we know the largest substring `s` where `c` is unique, then we know that `c` will be unique in `s.length!` substrings.

Solution explained: If we iterate through the string, keeping track of the index of each character, we can determine the distance between duplicate characters, and thereby determine how many substrings each duplicated (or non-duplicated) character will be unique within.

```
# @param {String} s
# @return {Integer}
def unique_letter_string(s)
    string_length = s.length
    
	# keep track of character indices
    seen = {}
    
	# track distance between duplicate characters
    prev_dup = Array.new(string_length)
    next_dup = Array.new(string_length)
    
    for i in 0...string_length
        current_char = s[i]
        
		# set default values for distances, which assume that there are no duplicates
        prev_dup[i] = i + 1
        next_dup[i] = string_length - i
        
        prev_dup_idx = seen[current_char]

		# if we have seen this character before
        if prev_dup_idx
			# the distance between that character and this character is the difference in index values
            next_dup[prev_dup_idx] = i - prev_dup_idx
            prev_dup[i] = i - prev_dup_idx
        end
		
		# keep track of the index for the character
		 seen[current_char] = i
    end
    
    sum = 0
    
	# now iterate through your arrays, calculating how many substrings a given character is unique within
    for i in 0...string_length
        sum += prev_dup[i] * next_dup[i]
    end
    
    sum
end
```