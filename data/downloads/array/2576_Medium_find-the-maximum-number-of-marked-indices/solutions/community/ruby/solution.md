# 1-liner

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3265714/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3265714/)

---

```ruby
def max_num_of_marked_indices(a) =
    ((z = a.sort!.size) - z / 2...z).reduce(0) do
        _1 + (a[_1] * 2 <= a[_2] ? 1 : 0)
    end * 2
```