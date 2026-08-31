# Ruby Solution

**Author:** user3019m
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5111631/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5111631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->
slice every word according to pref

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n * pref_length)


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {String[]} words
# @param {String} pref
# @return {Integer}
def prefix_count(words, pref)
    count = 0
    pref_length = pref.size

    for word in words
        if(word[0..pref_length - 1] == pref)
            count += 1
        end    
    end
    return count
end
```