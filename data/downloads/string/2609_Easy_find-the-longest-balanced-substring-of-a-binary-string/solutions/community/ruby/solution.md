# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3370584/](https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/3370584/)

---

```
# @param {String} s
# @return {Integer}
def find_the_longest_balanced_substring(s)
  (s.scan(/0+1+/).map { |s| [s.count(?0), s.count(?1)].min }.max || 0) * 2
end
```