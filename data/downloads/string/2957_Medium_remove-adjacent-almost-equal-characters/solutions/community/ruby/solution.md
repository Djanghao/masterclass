# Greedy

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4383606/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4383606/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} word
# @return {Integer}
def remove_almost_equal_characters(word)
    count  = 0 
    i = 1 
    while(i < word.length) 
        if check_if_adjacent(word[i], word[i-1])
            count += 1
            i += 1
        end 
        i += 1 
    end 
    count 
end 

def check_if_adjacent(char1, char2)
    return true if char1 == char2 
    return true if (char1.ord - char2.ord).abs == 1 
    
    return false 
end 
```