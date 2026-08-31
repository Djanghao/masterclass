# 🔥 Cleanest? | Easiest to understand? | TreeMap

**Author:** byegates
**Votes:** 148
**Link:** [https://leetcode.com/problems/range-module/solutions/2904396/](https://leetcode.com/problems/range-module/solutions/2904396/)

---

IF YOU FIND THIS POST HELPFUL, PLEASE UPVOTE, THANKS!
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Save all existing ranges in TreeMap
- Add
    - Find potential overlap at two sides (start and end)
    - merge two sides
    - everything in between can be removed
- Query
    - Check whether query range can be 100% covered by an existing range
- Remove
    - Find potential overlap at two sides (start and end)
    - If any, retain non overlap part of overlapping range at two sides
    - remove all ranges within overlap range

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: logn?
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: logn?
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java
class RangeModule {
    TreeMap<Integer, Integer> m = new TreeMap<>();
    public RangeModule() {}
    
    public void addRange(int s, int e) { // s: start, e: end
        // find overlap ranges, calc merged range, clear overlapped ranges, insert merged range
        var L = m.floorEntry(s); // left possible overlap entry
        var R = m.floorEntry(e); // right possible overlap entry

        if (L != null && L.getValue() >= s) s = L.getKey(); // update overlap start
        if (R != null && R.getValue() > e) e = R.getValue(); // update overlap end

        m.subMap(s, e).clear(); // clear all overlapped entries
        m.put(s, e); // save final merged entry
    }
    
    public boolean queryRange(int s, int e) {
        var L = m.floorEntry(s);
        return L != null && L.getValue() >= e; // if there exist a range: start <+ s, end >= e
    }
    
    public void removeRange(int s, int e) {
        var L = m.floorEntry(s); // left possible overlap entry
        var R = m.floorEntry(e); // right possible overlap entry

        if (L != null && L.getValue() > s) m.put(L.getKey(), s); // after removal, if anything left
        if (R != null && R.getValue() > e) m.put(e, R.getValue()); // after removal, if anything left

        m.subMap(s, e).clear(); // removal
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule obj = new RangeModule();
 * obj.addRange(left,right);
 * boolean param_2 = obj.queryRange(left,right);
 * obj.removeRange(left,right);
 */
```