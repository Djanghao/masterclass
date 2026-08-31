# Easiest solution with the help of Ruby

**Author:** nehady40
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5831747/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5831747/)

---

# Intuition
Instead of performing lot's of operations just do this question in 2 lines.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {String[]} words
# @return {Integer[]}
def sum_prefix_scores(words)
    [1,0].map(*h={}){|d| words.map{|w,t=h|
    w.chars.sum{ (t=t[_1]||={c:0})[:c]+=d } } }.pop
end
```