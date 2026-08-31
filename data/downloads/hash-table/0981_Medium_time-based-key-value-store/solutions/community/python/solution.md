# Python clean solution, binary search

**Author:** jdjw
**Votes:** 29
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/408651/](https://leetcode.com/problems/time-based-key-value-store/solutions/408651/)

---

```
class TimeMap(object):

    def __init__(self):
        self.map = collections.defaultdict(list)
        

    def set(self, key, value, timestamp):
        self.map[key].append((timestamp, value))
        

    def get(self, key, timestamp):
        values = self.map[key]
        if not values: return ''
        left, right = 0, len(values) - 1
        while left < right:
            mid = (left + right + 1) / 2
            pre_time, value = values[mid]
            if pre_time > timestamp:
                right = mid - 1
            else:
                left = mid
        return values[left][1] if values[left][0] <= timestamp else ''

```