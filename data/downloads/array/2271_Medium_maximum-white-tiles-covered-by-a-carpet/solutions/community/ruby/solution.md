# Ruby binary search and prefix sum

**Author:** galm4w
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3822596/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3822596/)

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
def maximum_white_tiles(tiles, carpet_len)
  tiles.sort!

  pref = tiles.each_with_object( [0] ) do |(fr, to), ary|
    ary << ary[-1] + to - fr + 1
  end

  ans = 0
  tiles.each_with_index do |(fr, to), i|
    # Starting at fr, find the idx of the furthest right tiles
    idx = tiles.bsearch_index { |x, y| fr + carpet_len <= x } 
    idx ||= tiles.size
    
    cur = pref[idx] - pref[i]
    # What if the carpet doesn't reach tiles[idx - 1] end?
    to_remove = tiles[idx - 1][1] - (fr + carpet_len - 1)
    cur -= to_remove if to_remove >= 0

    ans = cur if cur > ans
  end

  ans
end
```