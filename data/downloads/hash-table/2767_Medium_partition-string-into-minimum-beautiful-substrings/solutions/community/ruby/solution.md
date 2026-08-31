# 91 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3741249/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3741249/)

---

```ruby
P = (0..).reduce [] do
    s = (5 ** _2).to_s(2)
    break _1 if s.size > 15
    _1 << s
end

def minimum_beautiful_substrings s
    (r = [50] * (z = s.size).succ)[0] = 0
    for i in 0...z
        next if r[i] == 50
        for x in P
            break if (xz = x.size) > z - i
            if s[i, xz] == x
                r[i + xz] = [r[i + xz], r[i] + 1].min
            end
        end
    end
    r.last < 50 ? r.last : -1
end
```