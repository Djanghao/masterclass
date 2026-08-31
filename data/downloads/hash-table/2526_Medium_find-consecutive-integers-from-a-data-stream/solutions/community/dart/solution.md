# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3920677/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3920677/)

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
class DataStream {

    var lastKIntegers = 0;
    var target = 0;
    final List<int> res = [];

    DataStream(int value, int k) {
        lastKIntegers = k;
        target = value;
    }
    
    bool consec(int num) {
        res.add(num);
        if (res.length < lastKIntegers) {
            return false;
        }
        var c = 0;
        for (int i = res.length - 1; i >= res.length - lastKIntegers; i--) {
            if (res[i] == target) {
                c += 1;
            }
        }
        return c == lastKIntegers;
    }
}

/**
 * Your DataStream object will be instantiated and called as such:
 * DataStream obj = DataStream(value, k);
 * bool param1 = obj.consec(num);
 */
```