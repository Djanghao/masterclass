# Easy to understand || Ruby || 100% Faster

**Author:** yashwardhan24_sharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4901659/](https://leetcode.com/problems/number-of-changing-keys/solutions/4901659/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {Integer}
def count_key_changes(s)
    ans = 0
    i = 1
    # s.capitalize!
    while(i<s.length)
        if(s[i].capitalize!=s[i-1].capitalize)
            ans+=1
        end
        i+=1
    end
    return ans

end
```