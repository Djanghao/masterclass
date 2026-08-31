# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/4711739/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/4711739/)

---

```
# @param {String} s
# @return {String}
def replace_digits(s)
    ans = []
    s.chars.each_slice(2) do |char, dig|
        ans << char
        ans << (char.ord + dig.to_i).chr if dig
    end
    
    ans.join
end
```