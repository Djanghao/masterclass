# Straightforward Java | O(N*log(N) + Q*(log(N) + sqrt(N))) time | O(N + Q) space | No BIT or SegTree

**Author:** sergey_chebotarev
**Votes:** 1
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5604073/](https://leetcode.com/problems/alternating-groups-iii/solutions/5604073/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The first useful observation is that the array can be split into a set of maximum alternating groups. Each group of size K contains 1 group of K elements, 2 groups of (K-1) elements, ... and K different groups of 1 element.

Now we can easily solve the task for a single count query in linear time or for multiple count queries in `O(N + Q)` time if we index the input data in advance (e.g. by pre-computing all counters).

The problem arises when we need to support update queries. Simple indices like a map with counters get screwed in no time and need to be re-built after every update.

At this moment we can remember about smart ways to handler updates and range queries by using a Binary Index Tree (BIT) or a Segment Tree as the tags and most solutions here suggest.

I though so too and have finally learned how BIT works. I'd been going to do it for a long time and was glad that the moment had finally approached. But the good stuff ends here for me. I still don't get it quite well how to apply these structures to this problem even after checking other solutions.

Thanks to one of previous hard string questions I've noticed that, even though the input array is big, the amount of unique group lengths in it is limited by square root of N. We get this maximum amount of groups if we have groups of size 1, 2, .., K. They represent an arithmetic progression and sum up to `K*(K+1) / 2`. For 50k input elements the max number of unique group sizes we get is 223 (`= sqrt(50_000)`).

As the number looks bearable, let's try to simply implement the brute force approach with grouping of current segment sizes. This way we can support update queries which are explained below.

So here goes my dumb and slow straightforward 120-liner. Beats about 10% of other java solutions.

# Approach
<!-- Describe your approach to solving the problem. -->

Let's proceed with the initial idea and build 2 indices:
- a hash map of maximum segemnts: `map<start, length>`
- a map with counters for each unique group length: `map<group_length, counter>`

For update queries we iterate over all unique lengths, calculating the number of gruops as `max(1 + len - size, 0)` except for a case when all elements are in a cycle and there are N groups of any size from 1 to N.

For update queries we optionally break one of the current group that the updated element belongs to into 1, 2 or 3 groups, e.g. like spliiting '1010101' into '101' + '1' + '101'. In case the updated element is the first or / and the last element of the group it will need extra merging with neighbour groups (both of them if the upgraded group had length equal 1).
Update steps:
1. For the current group containing the updated element:
    - remove the current group from the maps
    - re-add the head / prefix group if it's not empty
    - re-add the tail / suffix group if it's not empty
    - extra attention is needed when breaking the only group of size N not to re-add it twice or select a new start in an inappropriate position in case of a perfect cycle
2. Keep the updated element as a new group of size 1.
    - if the next group's first element is different from the updated value, remove the next group and append it to the new one (actually the next group always has to be merged in case the updated element was the last in its group as the next group's first element was equal to the previous value of the updated element, for that reason they weren't in the same group)
    - if the previous group's last element is different from the updated value, remove the previous group and merge it with the new one
    - special handling is needed when both previous and next groups are the same
    - finally, add the new group to both index maps

# Complexity
- Time complexity: $$O(N*log(N) + Q*(log(N) + sqrt(N)))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

We add the original colors array of `N` elements into the index maps in `N * log(N)` operations (each put call into TreeMap is `log(N)`).
Then for `Q` queries we either count groups in `sqrt(N)` each or updating the index maps in `log(N)` each.

- Space complexity: $$O(N + Q)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

We keep two group index maps of maximum size `N`.
We also need up to `Q` result elements for count queries.

# Code
```
class Solution {
    TreeMap<Integer, Integer> treeMap = new TreeMap<>(); // map[group_start] = len
    Map<Integer, Integer> lengthCnt = new HashMap<>(); // map[group_len] = counter

    public List<Integer> numberOfAlternatingGroups(int[] colors, int[][] queries) {
        int n = colors.length;

        // getting and indexing all alternating group starts
        int start = 1;
        while (start < n && colors[start] != colors[start - 1]) {
            start++; // looking for a good first 'cut'
        }
        start = start % n;
        int lastEnd = start;
        for (int i = start; i < n;) {
            int end = i + 1;
            while (end - i < n && colors[end % n] != colors[(end + n - 1) % n]) {
                end++; // max possible end-start len is N
            }
            addGroup(i, end - i);
            i += end - i;
            lastEnd = end % n;
        }
        if (lastEnd != start) { // the last group spans over the end of the array
            addGroup(lastEnd, (start + n - lastEnd) % n);
        }

        List<Integer> result = new ArrayList<>();
        for (int[] q : queries) {
            if (q[0] == 1) { // count query
                int size = q[1];
                int cnt = 0;
                for (int len : lengthCnt.keySet()) {
                    int subGroups = len == n && isSingleCycle(treeMap.keySet().iterator().next(), len, colors) ?
                        n /* == len -> any positions is a good group start */ :
                        Math.max(1 + len - size, 0);
                    cnt += subGroups * lengthCnt.get(len);
                }
                result.add(cnt);
            } else { // update query
                int updateIdx = q[1];
                int newValue = q[2];
                if (newValue == colors[updateIdx]) {
                    continue; // nothing changes
                }

                updateValue(colors, updateIdx, newValue);
            }
        }
        return result;
    }

    private void updateValue(int[] colors, int updateIdx, int newValue) {
        int n = colors.length;

        // cases: group split, groups merge
        int groupStart = Objects.requireNonNullElse(treeMap.floorKey(updateIdx), treeMap.floorKey(updateIdx + n));
        int groupLen = removeGroup(groupStart);
        int groupEnd = (groupStart + groupLen) % n;

        // 1) let's detach head & tail groups if any, so updateIdx becomes a 1-len group
        int headStart = groupStart;
        int headLen = (updateIdx + n - headStart) % n; // %n is safe here max len is n-1 here
        int tailStart = (updateIdx + 1) % n;
        int tailLen = (groupEnd + n - tailStart) % n; // ^ ... b/c updateLen == 1
        if (isSingleCycle(groupStart, groupLen, colors)) {
            addGroup(tailStart, n - 1);
        } else {
            if (headLen > 0) {
                addGroup(headStart, headLen);
            }
            if (tailLen > 0) {
                addGroup(tailStart, tailLen);
            }
        }

        // 2) now we have a single missing cell - updatedCell, let's merge it with
        // neighbours if possible
        int newStart = updateIdx;
        int newLen = 1;
        int prevStart = Objects.requireNonNullElse(treeMap.floorKey(newStart), treeMap.floorKey(newStart + n));
        int nextStart = Objects.requireNonNullElse(treeMap.ceilingKey(newStart), treeMap.ceilingKey(newStart - n));
        colors[newStart] = newValue;
        boolean nextJoined = false;
        if ((newStart + 1) % n == nextStart && colors[newStart] != colors[nextStart]) {
            // merging with the next group
            newLen += removeGroup(nextStart);
            nextJoined = true;
        }
        if ((prevStart != nextStart || !nextJoined) && colors[(newStart + n - 1) % n] != colors[newStart]) {
            // merging with the previous group
            newLen += removeGroup(prevStart);
            newStart = prevStart;
        }
        addGroup(newStart, newLen);
    }

    private void addGroup(int start, int len) {
        treeMap.put(start, len);
        lengthCnt.compute(len, (k, v) -> (v != null ? v : 0) + 1);
    }

    private int removeGroup(int start) {
        int len = treeMap.remove(start);
        lengthCnt.compute(len, (k, v) -> v == 1 ? null : v - 1);
        return len;
    }

    // checking if we have a single cycle of length N without any break point
    private boolean isSingleCycle(int start, int len, int[] colors) {
        int n = colors.length;
        if (len == n) {
            if (colors[start] != colors[(start + n - 1) % n]) {
                return true;
            }
        }
        return false;
    }
}
```