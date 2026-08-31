# True O(n). No hashmaps. Single pass. 0ms in C++.

**Author:** sergei99
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029083/](https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/solutions/4029083/)

---

# Intuition
When iterating through the input data, we have enough information about the ultimate group where index should belong. And we have a small range of indexes, so we can keep track of all groups in a separate structure. Thus the problem could be solved in linear time with a single pass.

# Approach
We populate the ultimate groups as we traverse through the input data sequence. For this to work, all we need to do is track indexes of unfinished groups per group size (i.e. a max of 500 2-byte shorts, which is less than a kilobyte). If a group is populated to its size, and we need to add another element, we append a new group and redirect the tracked group index to it.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Measurements

| Language | Execution Time | Beating | Memory Used | Beating |
|---|---|---|---|---|
| C++ | 0 ms | 100% | 12.3 Mb | 99.80% |
| Java | 5 ms | 95.16% | 44.2 Mb | 77.95% |
| Scala | 557 ms | 97.5% | 52.28 Mb | 95.00% |

# Code

```C++ []
auto init = []()
{ ios::sync_with_stdio(false);
  cin.tie(nullptr);
  cout.tie(nullptr);
  return 'c';
}();

class Solution {
public:
    vector<vector<int>> groupThePeople(vector<int>& groupSizes) {
        constexpr unsigned short INV_SZ = 501;
        const unsigned short n = groupSizes.size();
        vector<vector<int>> r;
        unsigned short bySize[n];
        fill(bySize, bySize + n, INV_SZ);
        for (unsigned short i = 0; i < n; i++) {
            const unsigned short sz = groupSizes[i];
            auto &idx = bySize[sz-1];
            if (idx == INV_SZ || r[idx].size() >= sz) {
                r.emplace_back();
                r.back().reserve(sz);
                idx = r.size() - 1;
            }
            r[idx].push_back(i);
        }
        return r;
    }
};
```

```Java []
class Solution {
    private static final short[] bySize = new short[500];

    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        final short INV_SZ = 501;
        final short n = (short)groupSizes.length;
        final List<List<Integer>> r = new ArrayList<>();
        Arrays.fill(bySize, 0, n, INV_SZ);
        for (short i = 0; i < n; i++) {
            final short sz = (short)groupSizes[i];
            if (bySize[sz-1] == INV_SZ || r.get(bySize[sz-1]).size() >= sz) {
                r.add(new ArrayList<>(sz));
                bySize[sz-1] = (short)(r.size() - 1);
            }
            r.get(bySize[sz-1]).add(Integer.valueOf(i));
        }
        return r;
    }
}
```

```Scala []
object Solution {
    def groupThePeople(groupSizes: Array[Int]): List[List[Int]] = {
        val n = groupSizes.length.toShort
        var r: List[List[Int]] = Nil
        val bySize: Array[List[Int]] = Array.fill(n)(Nil)
        for (i <- (0 until n)) {
            val sz = groupSizes(i).toShort
            if (bySize(sz-1) != Nil && bySize(sz-1).size >= sz) {
                r = bySize(sz-1) :: r
                bySize(sz-1) = Nil
            }
            bySize(sz-1) = i :: bySize(sz - 1)
        }
        r.prependedAll(bySize.filter(_ != Nil))
    }
}
```

Here indexes of unfinished groups are stored in the array `bySize` prepopulated with an invalid value (max(n) + 1).
As we consider the next element group `groupSizes`, we have 3 possible situations:
* Group is not initialized (index equals INV_SZ).
* Group is populated to its max size.
* Group is initialized, but is not full.

As for the first two cases, we just allocate a new group at the end of the result list and store its index in `bySize`. As for the remaining case, no special actions need to be taken. In all cases we end up adding the current index to the chosen group.

Note that the index tracking does not require us to walk through the groups afterwards because they are already in place, ready to be returned. And the way `groupSizes` is organized ensures true constant-time lookup. This would not be the case if we used a hash map, which is provides $$O(1)$$ lookup time only in theory, but in practice it is highly sensitive to the input data (which LeetCode in some cases carefully chooses to maximize the collision rate).

The Java solution is very similar, differing only in syntax. And in order to put GC out of the way, we allocate the max possible `bySize` array once and store it in a static class member (but we only initialize the first n entries prior to iteration).

For both solutions it's possible to store pointers/references to the actual lists instead of indexes in `bySize`, but this would increase the memory footprint of the array from 1k to 4k (in a 64-bit architecture).

As for Scala solution, it employs just the same imperative loops, differing only in the format of the return value.