# Ruby - Straightforward beats 100

**Author:** zacharylupstein
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5315306/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5315306/)

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
# @return {String}
def modify_string(s)
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet_index = 0
    for i in 0..s.length - 1
        if s[i] == "?"
            while true 
                if i == 0
                    if s[i+1] != alphabet[alphabet_index]
                        s[i] = alphabet[alphabet_index]
                        alphabet_index = 0
                        break
                    else
                        alphabet_index = alphabet_index + 1
                    end
                elsif i == s.length - 1
                    if s[i-1] != alphabet[alphabet_index]
                        s[i] = alphabet[alphabet_index]
                        alphabet_index = 0
                        break
                    else
                        alphabet_index = alphabet_index + 1
                    end
                else
                    if s[i-1] != alphabet[alphabet_index] && s[i+1] != alphabet[alphabet_index]
                        s[i] = alphabet[alphabet_index]
                        alphabet_index = 0
                        break
                    else
                        alphabet_index = alphabet_index + 1
                    end
                end
            end
        end
    end

    s
end
```