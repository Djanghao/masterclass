# [C++] Simple Solutions Explained, 100% Time (0ms), ~80% Space (22MB)

**Author:** Ajna2
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1565344/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/1565344/)

---

I am not sure if there is a single problem easier than this on the whole suite of 2000+ problems published so far, as this one is literally just about following instructions, but, hey, whatever.

Still worth giving it a shot and in an interview you might still gain some points in the eyes of your interviewer if you mention that since modulo operations are rather expensive, we will not bother with them when the currently parsed argument is `> 9`.

Other than that, we will have a main loop to parse the whole `nums`, `return` the first index `i` matching our condition (if any) and otherwise, exiting the loop, `return` `-1`.

The code:

```cpp
class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        for (int i = 0, len = nums.size(), n; i < len; i++) {
            n = nums[i];
            if (n < 10 && n == i % 10) return i;
        }
        return -1;
    }
};
```

Even better if we rule out the modulo operation altogether:

```cpp
constexpr int mods[101] = {
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
};

class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        for (int i = 0, len = nums.size(), n; i < len; i++) {
            n = nums[i];
            if (n < 10 && n == mods[i]) return i;
        }
        return -1;
    }
};
```

In constant space, maybe? Hell, yeah - this one gave me `0` ms \uD83D\uDC4D :

```cpp
class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        for (int i = 0, j = 0, len = nums.size(), n; i < len; i++, j++) {
            n = nums[i];
            if (j == 10) j -= 10;
            if (n < 10 && n == j) return i;
        }
        return -1;
    }
};
```