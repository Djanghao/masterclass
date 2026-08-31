# [Ruby] Binary Search

**Author:** mistersky
**Votes:** 4
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/1177885/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/1177885/)

---

```
# @param {Integer[]} heights
# @param {Integer} bricks
# @param {Integer} ladders
# @return {Integer}
def furthest_building(heights, bricks, ladders)
  left = 0
  right = heights.count - 1
  result = 0
  
  while left <= right
    mid = (left + right)/2
    if can_reach?(heights[0...mid+1], bricks, ladders)
      result = mid
      left = mid + 1
    else
      right = mid - 1
    end
  end
  
  result
end

def can_reach?(heights, bricks, ladders)
  diffs = []
  n = heights.count
  
  heights.each_with_index do |h, i|
    break if i >= n - 1
    diffs << heights[i+1] - h if h < heights[i+1]
  end
  
  diffs.sort!
  
  diffs.each do |diff|
    if bricks >= diff
      bricks -= diff
    elsif ladders > 0
      ladders -= 1
    else
      return false
    end
  end
  
  true
end
```