# Ruby Simple Solution

**Author:** user0589f
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/2079744/](https://leetcode.com/problems/maximum-repeating-substring/solutions/2079744/)

---

```
# @param {String} sequence
# @param {String} word
# @return {Integer}
def max_repeating(sequence, word)
    k = 0
    substring = word
    while sequence.include?(substring)
        k += 1
        substring += word 
    end
    return k
end