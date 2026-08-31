# [C++] Binary Search-based Solution Explained, 100% Time, ~100% Space

**Author:** Ajna
**Votes:** 28
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/814382/](https://leetcode.com/problems/find-right-interval/solutions/814382/)

---

This problem is interesting, since you can tackle it from multiple points of view:
* you might decide to go for a quadratic brute force approach and check the whole vector for each point, in order to find the closest interval to its right, but that is probably going to fail any performance tests and in any case would be abysmally slow;
* you might wish to optimise a bit, storing the beginning values and their relative positions in an `unordered_map`, but then you would still have to go through multiple values in order to find the first closest to it, just avoiding a few searches when you know already the maximim you would get there;
* you might adopt the above approach, adding a container with all the keys, sorting it and then using a BS approach to find the first element which is not less than the ending of each element you are looping;
* you eschew needlessly data structures (particularly if they have a significant overhead like `unordered_map`s) and just store `<startingValue, position>` pairs into an array, applying the logic of the previous point directly to it.

That was my approach and apparently it gave me rather good performances :)

So, to recap:
* we initialise 3 support variables:
  *  `len` which stores the size of our initial input;
  *  `res`, to store our results and already set to the necessary size to avoid reallocations;
  *  `pos` to store our `<startingValue, position>` pairs
*  we populate `pos` with the necessary values and we sort it (mandatory condition for our BS);
*  we iterate through `intervals` again and get a pointer for the lower bound for each value (ie: the first element *not less than* said value);
*  if such a value is not found (ie:  `p == endOfPos`), then we write `-1` in the matchin cell of `res`, otherwise it will contain the value of its second element.

Step by step, let's assume we start with `[[4,5],[2,3],[1,2],[0,1],[7,8],[5,6]]`; after populating `pos`, it will be filled like this:

```cpp
{{4, 0},{2, 1},{1, 2},{0, 3},{7, 4},{5, 5}}
```

We then sort (and C++ is smart enough to know that by default you do that with the `.first` element of a pair) and then we get `pos` to look like this:

```cpp
{{0,3},{1,2},{2,1},{4,0},{5,5},{7,4}}
```

And now we are reasoning! We will loop through the initial `intervals` array call our BS function to keep getting the position of the first value whose `.first` is *not less* the the end of the interval at hand:
* the first value *not less* than `5` (end of the first interval) is `5` from `[5,6]`, which is in position `5`;
* the first value *not less* than `3` (end of the second interval) is `4` from `[4,5]`, which itself is in position `0`;
* the first value *not less* than `2` (end of the third interval) is `2` from `[2,3]`, which itself is in position `1`;
* ...

We proceed like that, ultimately getting:

```cpp
[5,0,1,2,-1,4] // notice you will always get a single -1 value
```

Once done, we return it as `res` :)

The code:

```cpp
class Solution {
public:
    vector<int> findRightInterval(vector<vector<int>>& intervals) {
        // support variables
        int len = intervals.size();
        vector<int> res(len);
        pair<int, int> pos[len];
        auto endOfPos = pos + len;
        // populating and sorting the map of positions
        for (int i = 0; i < len; i++) pos[i] = {intervals[i][0], i};
        sort(pos, endOfPos);
        // finding the matching right interval
        for (int i = 0; i < len; i++) {
            auto p = lower_bound(pos, endOfPos, intervals[i][1], [](auto it, int val){return it.first < val;});
            res[i] = p == endOfPos ? -1 : p->second;
        }
        return res;
    }
};
```