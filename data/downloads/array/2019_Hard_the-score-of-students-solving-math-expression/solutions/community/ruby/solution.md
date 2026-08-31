# 2804 ms (Near TLE)

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/3405441/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/3405441/)

---

```ruby
def score_of_students e, q
    a, m, e = eval(e), {}, e.gsub(/\\d|\\D/).map do
        _1[/\\d/] ? _1.to_i : _1.to_sym
    end
    f = -> i, j do
        return [e[i]] if j - i == 1
        m[(i << 5) | j] ||= (i + 1...j).step(2).flat_map do | k |
            x, y, s = f.(i, k), f.(k + 1, j), e[k]
            x.product(y).map! { _1[0].send s, _1[1] }
        end .filter { _1 <= 1000 } .uniq
    end
    s = f.(0, e.size).to_set
    q.sum { _1 == a ? 5 : (s === _1 ? 2 : 0) }
end
```