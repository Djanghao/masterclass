# Logarithmic Solution

**Author:** bugbuster001
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5825683/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/5825683/)

---

# Complexity
- Time complexity:

> O(n\u22C5m log m) where n is the number of strings and 
m is the average length of the strings (due to sorting). If you want a purely linear approach, you could use a fixed-size character count array (for the 26 letters of the English alphabet) to represent the character set.

- Space complexity:
> O(k), where \uD835\uDC58 is the number of unique character sets.

# Code
```ruby []
# @param {String[]} words
# @return {Integer}
def similar_pairs(words)

    # Given that we just need to count the number of similar pairs of strings
    # We always know that two strings would be similar if they contain the same character set.

    # All we need to do is to find the total number of combinations (not permutations as position doesn't matter), with which a pair of similar strings can exist.

    # Therefore, if we have a particular string signature that yields more than one occurence, then there exist a total number of nCr pairs, where r is 2

    count = 0
    hash = Hash.new {|hash, key| hash[key] = 0}

    words.each do |word|
        hash[Set.new(word.chars).sort.join] += 1
    end

    
    hash.each_value do |k|
        puts k
        if k > 1
            count +=  (k * (k - 1) / 2 )
        end
    end
    count
end
```