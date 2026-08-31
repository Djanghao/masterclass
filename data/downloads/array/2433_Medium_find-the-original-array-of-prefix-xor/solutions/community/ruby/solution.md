# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2685100/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2685100/)

---

```
# @param {Integer[]} pref
# @return {Integer[]}
def find_array(pref)
  [0, *pref].each_cons(2).map { _1 ^ _2 }
end
```