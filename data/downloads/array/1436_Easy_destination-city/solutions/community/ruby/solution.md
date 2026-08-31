# Ruby, 2 lines, 92.16% speed

**Author:** tomk
**Votes:** 5
**Link:** [https://leetcode.com/problems/destination-city/solutions/641318/](https://leetcode.com/problems/destination-city/solutions/641318/)

---

```
def dest_city(paths)
    path_hash = paths.to_h
    (path_hash.values - path_hash.keys).first
end
```