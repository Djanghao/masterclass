# [C++] Clean and Simple Binary Search-based Solution Explained, ~92% Time, ~80% Space

**Author:** Ajna
**Votes:** 49
**Link:** [https://leetcode.com/problems/h-index/solutions/785444/](https://leetcode.com/problems/h-index/solutions/785444/)

---

So, in order to meet the requirement of this problem, we need to find a way to meet the `N - h` condition described in the specs, and for the maximum possible value.

Well, that seems to me like a good use case of binary search and, since the problem boils down to this, I would not even bother to use the built-in C++ functions for that (`lower_bound` or, rather. `upper_bound`, but it really depends on how you play with them here).

Also, it is rather likely that in an interview you will be asked to avoid them and write your own logic, so I see no reason not to practice it here, not to mention that with the built in solutions you would have needed another vector to also store the respective index of each element (not sure you can otherwise access them, but correct me if I am wrong).

First of all I will need 3 support variables to store the coordinates of my current start (`s`), end (`e`) and average (`avg`), respectively, and (have to) sort my array for the BS (I mean Binary Search!) to work.

Then I will move on with it as long as my current start is `<=` current my end; if the condition is met (`c[avg = (e + s) / 2] < c.size() - avg`), then we move right (ie: towards higher values, since we sorted) updating `s`, otherwise we move left, updating `e` (ie: to lower values).

Once we have found our ideal value, we returrn `c.size - s` and we are done :)

The code:

```cpp
class Solution {
public:
    int hIndex(vector<int>& c) {
        // 3 support variables for us
        int s = 0, e = c.size() - 1, avg;
        // the base of every happy binary search ever: having a sorted dataset
        sort(begin(c), end(c));
        // some good old binary search here to find the maximum element meeting the conditions
        while (s <= e) {
            if (c[avg = (e + s) / 2] < c.size() - avg) s = avg + 1;
            else e = avg - 1;
        }
        return c.size() - s;
    }
};
```