# Ruby

**Author:** binarbaum
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/5909342/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/5909342/)

---

```ruby []
def maximum_removals(s, p, removable)
    rindex = [nil] * s.size
    removable.each_with_index do |r, i|
        rindex[r] = i
    end
    subseq = lambda do |k|
        i = j = 0
        while i < s.size && j < p.size
            if s[i] == p[j]
                j += 1 if rindex[i].nil? || rindex[i] >= k
            end
            i += 1
        end
        j == p.size
    end
    # Check for all and nothing to prevent TLE.
    return 0 unless subseq.(1)
    return removable.size if subseq.(removable.size)
    lo = 0
    hi = removable.size
    while lo < hi
        # +1 to offset lo/mid by 1 so that it's a count, not an index.
        mid = (lo + hi + 1) / 2
        if subseq.(mid)
            lo = mid
        else
            hi = mid - 1
        end
    end
    lo
end
```