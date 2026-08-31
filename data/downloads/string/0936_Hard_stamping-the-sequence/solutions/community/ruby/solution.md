# Ruby | Greedy approach

**Author:** codingstar1
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/2461010/](https://leetcode.com/problems/stamping-the-sequence/solutions/2461010/)

---

Solution is taken here:
https://leetcode.com/problems/stamping-the-sequence/discuss/189254/Python-Greedy-and-DFS
```ruby
def moves_to_stamp(stamp, target)
    n = target.size
    m = stamp.size
    s = stamp.chars
    t = target.chars
    res = []

    attempts = 0
    changed = true
    while changed && (attempts += 1) < 10*n
        changed = false
        for i in (0..n-m)
            changedi = false
            for j in (0...m)
                next if t[i + j] == '?'
                if t[i + j] != s[j]
                    changedi = false 
                    break
                end
                changedi |= true
            end
            if changedi
                for j in (i...i+m) 
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0t[j] = '?' if t[j] != '?'
 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 end

                # t[i...i+m] = ['?'] * m
                res << i
                changed = true
                break
            end
          end
    end
    t == (['?'] * n) ? res.reverse : []
end
```