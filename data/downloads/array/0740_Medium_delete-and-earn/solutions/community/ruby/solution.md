# Ruby || 2-liner (well, sort of...)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/1821465/](https://leetcode.com/problems/delete-and-earn/solutions/1821465/)

---

```ruby
def delete_and_earn(nums)
    nums.inject(Array.new(10**4 + 1, 0)) {|r, v| 
        r[v] += v; r 
    }.inject([0, 0]) {|(take, skip), v| 
        [skip + v, [skip, take].max] 
    }.max
end
```