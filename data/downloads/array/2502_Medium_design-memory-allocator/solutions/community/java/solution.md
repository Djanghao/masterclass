# [Java] | 🔥TreeMap | Merge Interval | Brute Force | 🔥12ms | Range Module

**Author:** byegates
**Votes:** 13
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/2902331/](https://leetcode.com/problems/design-memory-allocator/solutions/2902331/)

---

PLEASE UPVOTE IF YOU FIND THIS POST HELPFUL, THANKS!
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Use TreeMaps to track ranges of each mID, including mID = 0 which represents free memories
- Both free and allocated memories can have mulitple segments
    - For one time allocation, memory must be consecutive, but there can be mulitple allocations to one mID to create segments
- Allocate: remove a range from free memory and insert it into allocated memory
- Free: remove all ranges (intervals) for a mID, and insert them into free memory TreeMap one by one
- All insert require merge considerations which is same as problem: [715. Range Module](https://leetcode.com/problems/range-module/description/)

# Approach
<!-- Describe your approach to solving the problem. -->
Refer to intuition

# Complexity
- Time complexity: to add
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: to add
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
[12ms](https://leetcode.com/problems/design-memory-allocator/submissions/858284993/)
```java
class Allocator {
    private TreeMap<Integer, Integer>[] m = new TreeMap[1001]; // Track all allocations for each mID, use array for convienience, should use real map
    public Allocator(int n) {
        m[0] = new TreeMap<>(); // 0 means free, positive # means allocations to a valid mID
        m[0].put(0, n); // [0, n)
    }
    
    public int allocate(int size, int mID) {
        int start = -1;
        // loop through all available ranges to find the first available
        // use it, if there's range left, save
        for (var e : m[0].entrySet()) {
            int l = e.getKey(), r = e.getValue(); // l and right bound
            if (r-l >= size) { // found the leftmost free space
                start = l;
                m[0].remove(l);
                if (r - l > size) m[0].put(l+size, r); // if there's space left after allocation, save it
                // add new range into TreeMap of mID, with merge logic
                insert(mID, start, start+size);
                // System.out.printf("m[%d](New Size: %d): %s\
m[0]: %s\
", mID, size, m[mID], m[0]);
                return start;
            }
        }

        return -1;
    }
    
    public int free(int mID) {
        if (m[mID] == null) return 0;

        // free all ranges
        int size = 0;
        for (var e : m[mID].entrySet()) {
            size += e.getValue() - e.getKey();
            insert(0, e.getKey(), e.getValue()); // recover free space, with merge logic
        }
        m[mID].clear();

        // System.out.printf("To free m[%d]: %s, m[0]: %s\
", mID, m[mID], m[0]);
        return size;
    }

    private void insert(int mID, int s, int e) { // s: start, e: end
        if (m[mID] == null) m[mID] = new TreeMap<>();
        // found overlap ranges, calc merged range, clear overlapped ranges, insert merged range
        var L = m[mID].floorEntry(s); // left possible overlap entry
        var R = m[mID].floorEntry(e); // right possible overlap entry

        if (L != null && L.getValue() >= s) s = L.getKey(); // update overlap start
        if (R != null && R.getValue() > e) e = R.getValue(); // update overlap end

        m[mID].subMap(s, e).clear(); // clear all overlapped entries
        m[mID].put(s, e); // save final merged entry
    }
}

/**
 * Your Allocator object will be instantiated and called as such:
 * Allocator obj = new Allocator(n);
 * int param_1 = obj.allocate(size,mID);
 * int param_2 = obj.free(mID);
 */
```

# Optimize free with map (mid -> List of ranges)
[23ms](https://leetcode.com/problems/design-memory-allocator/submissions/858262622/)
```java
class Allocator {
    record Node (int l, int r) {}

    private boolean[] a; // certain area of memory is allocated or not
    private List<Node>[] m = new List[1001]; // Track all allocations for each mID
    public Allocator(int n) {
        a = new boolean[n];
    }
    
    public int allocate(int size, int mID) {
        int l = findFirstAvailable(size);
        if (l == -1) return -1;
        // find the list of memories allocated for this mID
        if (m[mID] == null) m[mID] = new ArrayList<>(); // if new, create the empty memList for this mID
        m[mID].add(new Node(l, l+size)); // append to memList allocated to this mID

        // allocate memory
        for (int i = l, r=l+size; i < r; i++) a[i] = true;
        return l;
    }
    
    public int free(int mID) {
        if (m[mID] == null) return 0;
        int size = 0;
        for (var node : m[mID]) { // free all memory allocated to this mID
            size += node.r - node.l;
            for (int i = node.l; i < node.r; i++) a[i] = false; // free memory
        }
        m[mID].clear(); // this mID is gone
        return size;
    }

    private int findFirstAvailable(int size) {
        for (int i = 0; i <= a.length - size;) {
            int j = i, r = i+size;
            for (; j < r; j++) if (a[j]) {i = -1; break;} // true is allocated, so can't be used, we go to next section
            if (i == -1) i = j + 1;
            else return i;
        }
        return -1;
    }
}

/**
 * Your Allocator object will be instantiated and called as such:
 * Allocator obj = new Allocator(n);
 * int param_1 = obj.allocate(size,mID);
 * int param_2 = obj.free(mID);
 */
```

# Brute Force simulation
24 ms
- TC:
    - Allocate: Worst: O(1000)
    - Actual run time is likely better
    - Free: O(1000)
- SC: O(1000)
```java
class Allocator {
    private int[] a; // THE MEMORY
    public Allocator(int n) {
        a = new int[n];
    }
    
    public int allocate(int size, int mID) {
        for (int i = 0; i <= a.length - size;) { // starting from 0 to search for consecutive free space
            int j = i, r = i+size; // range we need to search for every starting point
            for (; j < r; j++) if (a[j] != 0) {i = -1; break;} // a[j] != 0 means it's used, i = -1: not found
            if (i != -1) { // i != -1 means found free space of size, starting at i
                for (j = i; j < r; j++) a[j] = mID; // allocate
                return i; // return starting index
            } else i = j+1; // when not found that means from i to j are not good, starting next search from j+1
        }

        return -1; // couldn't find the the consecutive space needed
    }
    
    public int free(int mID) {
        int size = 0;
        for (int i = 0; i < a.length; i++)
            if (a[i] == mID) {a[i] = 0;size++;}
        return size;
    }
}
```