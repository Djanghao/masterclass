# Java O(n) time and space

**Author:** hobiter
**Votes:** 118
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/661521/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/661521/)

---

You can always swap to make another if the they are the same set of elements.

```
public boolean canBeEqual(int[] a, int[] b) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < a.length; i++) {
        map.put(a[i], map.getOrDefault(a[i], 0) + 1);
        map.put(b[i], map.getOrDefault(b[i], 0) - 1);
    }
    for (int i : map.keySet()) {
        if (map.get(i) != 0) return false;
    }
    return true;
}
```