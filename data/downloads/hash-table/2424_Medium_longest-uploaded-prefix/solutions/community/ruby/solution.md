# Segment tree

**Author:** galm4w
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/3645022/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/3645022/)

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
```
# https://leetcode.com/problems/longest-uploaded-prefix/description/
# Port from
# https://leetcode.com/problems/longest-uploaded-prefix/solutions/2646593/segment-tree-binary-search/

class SegTree
  def initialize
    @t = Array.new(4 * 400_001, 0)
  end

  def update(v, tl, tr, pos, new_val)
    return unless tl <= pos && pos <= tr

    if tl == tr && tl == pos
      @t[v] = new_val
    else
      tm = (tl + tr) / 2
      update(v * 2, tl, tm, pos, new_val)
      update(v * 2 + 1, tm + 1, tr, pos, new_val)
      @t[v] = @t[v * 2] + @t[v * 2 + 1]
    end
  end

  def sum(v, tl, tr, l, r)
    return 0 if tl > r || tr < l
    return @t[v] if tl >= l && tr <= r

    tm = (tl + tr) / 2
    sum(v * 2, tl, tm, l, r) + sum(v * 2 + 1, tm + 1, tr, l, r)
  end
end

class LUPrefix
  def initialize(n)
    @t = SegTree.new
    @n = n
    @LUP = 0
    @recompute = false
  end

  def upload(video)
    @t.update(1, 1, @n, video, 1)
    @recompute = true if video - 1 == @LUP
  end

  def longest
    bsearch if @recompute
    @recompute = false
    @LUP
  end

  def bsearch
    l = 1
    r = @n

    while l < r
      m = r - (r - l) / 2
      t = @t.sum(1, 1, @n, 1, m)

      if t < m
        r = m - 1
      else
        l = m
      end
    end

    @LUP = @t.sum(1, 1, @n, 1, l) != l ? 0 : l
  end
end
```