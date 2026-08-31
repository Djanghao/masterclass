# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/4315034/](https://leetcode.com/problems/design-skiplist/solutions/4315034/)

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
class Skiplist {

    Map<int, int> m = {};
  
    bool search(int target) {
        return m.containsKey(target);
    }
    
    void add(int num) {
        if (!m.containsKey(num)) {
            m[num] = 1;
        } else {
            m[num] = m[num]! + 1;
        }
    }
    
    bool erase(int num) {
        if (m[num] == null) {
            return false;
        }

        if (m[num] == 1) {
            m.remove(num);
        } else {
            m[num] = m[num]! - 1;
        }

        return true;
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = Skiplist();
 * bool param1 = obj.search(target);
 * obj.add(num);
 * bool param3 = obj.erase(num);
 */
```