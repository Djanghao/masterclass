# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/3091910/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/3091910/)

---

```
# @param {String} s1
# @param {String} s2
# @return {Boolean}
def check_if_can_break(s1, s2)
    s1 =s1.chars.sort.join
    s2 = s2.chars.sort.join
    s1_breaks_s2, s2_breaks_s1 = true, true
    
    s1.size.times do |i|
        s1_breaks_s2 = false if s2[i] > s1[i]
        s2_breaks_s1 = false if s1[i] > s2[i]
    end
    
    return s1_breaks_s2 || s2_breaks_s1
end
```