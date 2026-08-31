# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/4550556/](https://leetcode.com/problems/map-sum-pairs/solutions/4550556/)

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
class MapSum {

    late Map<String, int> m;

    MapSum() {
        m = {};
    }
    
    void insert(String key, int val) {
        m[key] = val;
    }
    
    int sum(String prefix) {
        var sum = 0;
        for (final entry in m.entries) {
            if (entry.key.startsWith(prefix)) {
                sum += entry.value;
            }
        }

        return sum;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = MapSum();
 * obj.insert(key,val);
 * int param2 = obj.sum(prefix);
 */
```