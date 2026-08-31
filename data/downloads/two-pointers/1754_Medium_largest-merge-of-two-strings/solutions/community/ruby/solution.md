# [Ruby] Naive solution

**Author:** ilnurnasyrov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/3320268/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/3320268/)

---

# Approach

Naive solution

# Complexity

- Time complexity (number of cycles multiplied by string comparison complexity):
O((m + n)^2) 

- Space complexity (we need space for merge):
O(m + n)  

# Code
```
# @param {String} word1
# @param {String} word2
# @return {String}
def largest_merge(word1, word2)
  merge = ""

  while true do
    if word1.length == 0
      break merge << word2
    end

    if word2.length == 0
      break merge << word1
    end

    if word1 > word2
      merge << word1.slice!(0)
    else
      merge << word2.slice!(0)
    end
  end

  merge
end
```