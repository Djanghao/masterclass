# Ruby - Greedy, O(N)

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1086041/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1086041/)

---

### Pre

If sum of values in `nums2` less than sum of values in `nums1` then swap `nums1` and `nums2`.  

Now we know that need to increase sum of values in `nums1` and/or decrease sum of values in `nums2`  to make them  equal.

`d`  - sum of values in `nums2` minus sum of values in `nums1`

### Observation

For each element `x` in `nums1` we can reeduce the difference `d` by at most `6 - x`.

For each element `x` in `nums2` we can reeduce the difference `d` by at most `x - 1`.

### Algorithm

Greedily select numbers that can make most `d` decrease while `d > 0`.

```ruby
def min_operations(nums1, nums2)
  nums1, nums2 = nums2, nums1 if nums1.sum > nums2.sum

  k = Array.new(6, 0)
  for x in nums1
    k[6 - x] += 1 # for each number x in nums1 can increase s1 by at most (6 - x) at one operation
  end
  for x in nums2
    k[x - 1] += 1 # for each number x in nums2 can decrease s2 by at most (x - 1) at one operation
  end

  d = nums2.sum - nums1.sum
  ops = 0
  for x in 5.downto(1) # greedy
    if d > 0 && k[x] > 0
      c = [(d + x - 1) / x, k[x]].min
      ops += c
      d -= c * x
    end
  end
  d > 0 ? -1 : ops
end
```

Time complexity: `O(N)`, where `N` - size of `nums1` + size of `nums2`.
Space complexity: `O(1)`.

### Optimization

<details>
<summary>Return <i>-1</i> earlier if max possible sum of <i>nums1</i> less than min possible sum of <i>nums2</i>. (click to open)</summary>

```ruby
def min_operations(nums1, nums2)
  s1 = nums1.sum
  s2 = nums2.sum
  nums1, nums2 = nums2, nums1 if s1 > s2
  n = nums1.size
  m = nums2.size
  return -1 if 6 * n < m

  k = Array.new(6, 0)
  for x in nums1
    k[6 - x] += 1 # for each number x in nums1 can increase s1 by at most (6 - x) at one operation
  end
  for x in nums2
    k[x - 1] += 1 # for each number x in nums2 can decrease s2 by at most (x - 1) at one operation
  end

  res = 0
  d = (s2 - s1).abs
  for x in 5.downto(1)
    if d > 0 && k[x] > 0
      c = [(d + x - 1) / x, k[x]].min
      res += c
      d -= c * x
    end
  end
  res
end
```
</details>

