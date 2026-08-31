# Clearly Explained Python Solution Using Binary Search | Time complexity O(log n)

**Author:** KhadimHussainDev
**Votes:** 35
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/5022909/](https://leetcode.com/problems/time-based-key-value-store/solutions/5022909/)

---

## Problem Description

The problem requires implementing a time-based key-value store where you can set a key-value pair with an associated timestamp and retrieve the value of a key at a specific timestamp.

## Approach Explanation

This solution uses a dictionary (`self.dic`) to store key-value pairs where each value is a list of `[value, timestamp]` pairs associated with the key:
- **Initialization (`__init__`)**:
  - Initialize an empty dictionary `self.dic` to store key-value pairs.

- **Set Method (`set`)**:
  - If the key does not exist in `self.dic`, initialize it with an empty list.
  - Append the `[value, timestamp]` pair to the list associated with the key in `self.dic`.

- **Get Method (`get`)**:
  - Retrieve the list of `[value, timestamp]` pairs associated with the given `key` from `self.dic`.
  - Use binary search to find the most recent value (`res`) that has a timestamp less than or equal to the given `timestamp`:
    - Initialize `l` to 0 and `r` to the index of the last element in the list.
    - While `l` is less than or equal to `r`:
      - Calculate the `mid` index.
      - If the timestamp at `mid` is less than or equal to the given `timestamp`, update `res` with the value at `mid` and adjust `l` to search the right half of the list.
      - Otherwise, adjust `r` to search the left half of the list.
  - Return `res` as the value associated with the key at the specified `timestamp`.

```python
class TimeMap:

    def __init__(self):
        self.dic = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.dic:
            self.dic[key] = []
        self.dic[key].append([value , timestamp])

    def get(self, key: str, timestamp: int) -> str:
        res = ""
        values = self.dic.get(key , [])
        l , r = 0 , len(values) - 1
        while l <= r :
            mid = (l + r) >> 1
            if values[mid][1] <= timestamp:
                l = mid + 1
                res = values[mid][0]
            else:
                r = mid - 1
        return res


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
```

## Complexity Analysis

- **Time Complexity**:
  - `set`: O(1) for inserting a `[value, timestamp]` pair into the list associated with a key in `self.dic`.
  - `get`: O(log n) for performing binary search on the list of `[value, timestamp]` pairs associated with a key in `self.dic`, where `n` is the number of entries for the key.
  
- **Space Complexity**:
  - O(n) for storing all `[value, timestamp]` pairs in `self.dic`, where `n` is the total number of key-value pairs inserted using the `set` method.

> #### ***If You Found it helpful, please upvote it. Thanks***
![Image](./images/0.jpeg)
