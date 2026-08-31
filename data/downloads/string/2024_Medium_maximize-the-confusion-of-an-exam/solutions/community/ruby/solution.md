# Ruby sliding window

**Author:** anthonyto
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1792148/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1792148/)

---

```
# @param {String} answer_key
# @param {Integer} k
# @return {Integer}
def max_consecutive_answers(answer_key, k)
  f_count = t_count = 0
  length = l = r = 0
  
  while r < answer_key.length
    answer_key[r] == 'F' ? f_count += 1 : t_count += 1
    
    while [f_count, t_count].min > k
      answer_key[l] == 'F' ? f_count -= 1 : t_count -= 1
      l += 1
    end
    
    length = [length, r-l+1].max
    r += 1
  end
  
  length
end
```