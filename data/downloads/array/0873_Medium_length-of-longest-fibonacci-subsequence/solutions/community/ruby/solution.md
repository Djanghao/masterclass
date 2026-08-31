# Non-DP

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/3288897/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/3288897/)

---

```ruby
def len_longest_fib_subseq a
    r, s = 2, a.to_set
    for i in 0..(z = a.size) - 2
        x = a[i]
        for j in i + 1...z
            c, d, l = (y = a[j]), x + y, 2
            c, d, l = d, c + d, l + 1 while s === d
            r = l if l > r
        end
    end
    r > 2 ? r : 0
end
```