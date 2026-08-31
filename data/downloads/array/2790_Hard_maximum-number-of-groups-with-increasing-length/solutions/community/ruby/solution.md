# Ruby solution with triangle numbers, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3807357/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3807357/)

---

# Intuition
Triangle numbers are formed by summing consecutive numbers starting from 1, e.g. 1, 1+2, 1+2+3, 1+2+3+4, etc.  If usage_limits were a sequence like [1,2,3,4,5], you could form 5 increasing groups.  In general, every time our total reaches a new triangle number (or our previous step left us with more triangle numbers than count), we can add another group.

# Approach
1. Sort the usage limits.
2. Establish variables: count for the number of groups, tri for the next triangle number, i to increment tri, and total for the total usage limits we've hit so far.
3. Iterate through the usage limits and add them to total.
4. Check if total lets you hit the next triangle number.  If so, increment count, tri, and i.
5. Return count, the number of groups.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(log(n))$$

# Code
```
def max_increasing_groups(usage_limits)
  usage_limits.sort!
  count = 0
  i = 1
  tri = 1
  total = 0
  until usage_limits.empty?
    total += usage_limits.shift
    if total >= tri
      i += 1
      tri += i
      count += 1
    end
  end
  count
end
```