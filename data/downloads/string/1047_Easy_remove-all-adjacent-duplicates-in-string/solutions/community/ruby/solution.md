# Ruby stack

**Author:** piyushsawaria
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/882142/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/882142/)

---

```
def remove_duplicates(s)
  stack = []
  s.each_char do |c|
    if stack[-1] == c
      stack.pop
    else
      stack << c
    end
  end
  stack.join
end