# 2 Pointers

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4829623/](https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/solutions/4829623/)

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
# @param {String} s
# @return {Integer}
def minimum_length(s)
     
    n = s.length 
    i = 0 
    j = n-1 
    count = n 

    while(i < j) do 
        break if s[i] != s[j]
        char_i = s[i]
        char_j = s[j]
        count_i = 1
        count_j = 1
        i += 1

        while(s[i] == char_i and i < j) do 
            i += 1
            count_i += 1
        end 
        j -= 1

        while(s[j] == char_j and j > i) do 
            j -= 1
            count_j += 1
        end 

        count = count-count_i-count_j


    end 

    return count 
end
```