# Simple Ruby Solution

**Author:** remy727
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3331449/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/3331449/)

---

# Complexity
- Time complexity:
O(m), where m is the number of connections (union operations). Since we are using the path compression, a single union operation is O(log*(m)) per this Wikipedia article. With ranking, it is O(\u03B1(m)), where \u03B1 is the inverse of the Ackerman function. For practical purposes, we can consider \u03B1(m) a constant. So, we are performing m operations, each taking a constant time.

- Space complexity:
O(n) for the disjoint set.

# Code
```
# Runtime 135 ms, Beats 100%
# Memory 215.3 MB, Beats 100%
# @param {Integer} n
# @param {Integer[][]} connections
# @return {Integer}
def make_connected(n, connections)
  return -1 if connections.size < n - 1

  number = n
  ds = Array.new(n, -1)

  connections.each do |c|
    i = find(ds, c[0])
    j = find(ds, c[1])

    if i != j
      if ds[j] < ds[i]
        i, j = j, i
      end

      ds[i] += ds[j]
      ds[j] = i
      number -= 1
    end
  end

  number - 1
end

def find(ds, i)
  ds[i] < 0 ? i : ds[i] = find(ds, ds[i])
end
```