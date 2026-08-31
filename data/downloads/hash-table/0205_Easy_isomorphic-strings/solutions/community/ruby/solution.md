# Ruby short functional solution

**Author:** Rowan441
**Votes:** 14
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/2207768/](https://leetcode.com/problems/isomorphic-strings/solutions/2207768/)

---

```ruby
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_isomorphic(s, t)
    s.chars.map{ |c| s.index(c) } == t.chars.map{ |c| t.index(c) }
end
```

* For both inputs (`s` & `t`) map each letter to the index of the first occurence of that letter in the string (e.g egg => [0, 1, 1])
* If the mapped values are the same, the string is isomorphic