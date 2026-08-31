# Greedy

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4713700/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4713700/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String[]} words
# @return {Integer}
def max_palindromes_after_operations(words)
    # here we do not need to worry about matching each and every pair
    # what we need to check is how many pairs we have of each characters. 
    # every string may be of odd length or even length 
    # if odd length we will ignore the odd character since that will not matter 
    # if even length we will just count the number of pairs required and if we have that in out bucket 
    char_count = Hash.new(0)
    count = 0 
    words.each do |word|
        word.chars.each do |char|
            char_count[char] += 1 
        end 
    end 

    words = words.sort_by{|a| a.length}
    
    pairs = 0 

    char_count.each do |key, val|
        pairs += val/2 
    end 

    words.each do |word|        
        pairs_needed = word.length/2
        if pairs-pairs_needed >= 0
            pairs -= pairs_needed
            count += 1
        end 
    end 

    count 
end 
```