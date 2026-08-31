# So beautiful so elegant, feeling like a cow now

**Author:** ifelsethenthat
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674172/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4674172/)

---

# Code
```
# @param {String} word
# @param {Integer} k
# @return {Integer}
def minimum_time_to_initial_state(word, k)
  n = word.length
  count = 0

  i = k
  while i < n
    remains = word[i..]
    if word.index(remains) == 0
      count += 1
      break
    end
    
    count += 1
    i += k
  end

  i < n ? count : count + 1
end

```