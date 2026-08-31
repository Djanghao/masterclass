# Convert chars to unique hash keys size

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/4367636/](https://leetcode.com/problems/find-and-replace-pattern/solutions/4367636/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {String[]} words
# @param {String} pattern
# @return {String[]}
def find_and_replace_pattern(words, pattern)
    # Convert chars found in pattern into numbers.
    # A char will be converted to the size of the unique hash keys.
    # First element in the hash gets converted to 0, next 1, etc..

    # Also build an array we will later use to determine if a word in words
    # matches the same pattern.
    numb_map = {}
    numb_pattern = []
    pattern.each_char do |char|
        if !numb_map[char]
            numb_map[char] = numb_map.size
        end

        numb_pattern << numb_map[char]
    end

    answer =[]
    words.each do |w|
        match_pattern = {}
        i = 0
        found = true
        # Convert each word char into numbers like we did intially
        # and compare it to elements in numb_pattern array.
        w.each_char do |char|
            
            if !match_pattern[char]
                match_pattern[char] = match_pattern.size
            end
            
            if numb_pattern[i] != match_pattern[char]
                found = false
                break
            end

            i+= 1
        end

        if found 
            answer << w
        end
    end

    answer
end
```