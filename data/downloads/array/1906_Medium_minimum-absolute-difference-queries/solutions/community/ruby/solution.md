# Minimum Absolute Differnece Queries

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/6125586/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/6125586/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} nums
# @param {Integer[][]} queries
# @return {Integer[]}
def min_difference a, q
    ks, vs = *(0...a.size).group_by { a[_1] }
            .sort_by(&:first).transpose
    vz = vs.size
    q.map do | (l, r) |
        prev, m = 0, 100
        for iv in 0...vz
            if (v = vs[iv]).last >= l &&
                v.first <= r && v.bsearch do
                    if _1 < l; 1
                    elsif _1 > r; -1
                    else 0 end
                end
            x = ks[iv]
            if prev > 0 && (d = x - prev) < m
                break if (m = d) == 1
            end
            prev = x
            end
        end
        m > 99 ? -1 : m
    end
end
```