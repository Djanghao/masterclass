# C++ O(n) Solution with explanation

**Author:** 6cdh
**Votes:** 4
**Link:** [https://leetcode.com/problems/car-fleet-ii/solutions/1104018/](https://leetcode.com/problems/car-fleet-ii/solutions/1104018/)

---

Let `c[i]` be the `i`-th car.

If `c[i]` and `c[j]` collide (`i < j`), `speed(c[j])` should less than `speed(c[i])`. The speed and the position
of the new car fleet consist of these two cars should be the same as `c[j]`. That means we can simply
remove `c[i]` and let `c[j]` continue to run as if no collide happened.

Let `r[i]` denote the time that `c[i]` is removed (or the life of `c[i]`). `c[i]` will collide with `c[j]` if and only if

- `i < j` and
- `(pos(c[j]) - pos(c[i])) / (speed(c[i]) - speed(c[j])) <= r[j]` and
- `speed(c[i]) > speed(c[j])` and
- `(pos(c[k]) - pos(c[i])) / (speed(c[i]) - speed(c[k])) > r[k] for all k that i < k < j`.

We can use a stack to maintain the next slower car of `c[i]`:

```c++
class Solution {
   public:
    vector<double> getCollisionTimes(vector<vector<int>>& cars) {
        const auto n = cars.size();
        vector<double> ret(n, -1);
        vector<int> stk;
        for (int i = n; i-- != 0;) {
            while (!stk.empty() && cars[stk.back()][1] >= cars[i][1]) {
                stk.pop_back();
            }
            for (int j = stk.size(); j-- != 0;) {
                const auto c = stk[j];
                const auto t =
                    1.0 * (cars[c][0] - cars[i][0]) / (cars[i][1] - cars[c][1]);
                if (t <= ret[c] || ret[c] == -1) {
                    ret[i] = t;
                    break;
                }
            }
            stk.push_back(i);
        }
        return ret;
    }
};
```

But this solution is slow (`O(n^2)`). Note that if `c[i]` collides with `c[j]`, the cars before `c[i]` would not
collide with the cars between `c[i]` and `c[j]`. Then we have the following code:

```c++
class Solution {
   public:
    vector<double> getCollisionTimes(vector<vector<int>>& cars) {
        const auto n = cars.size();
        vector<double> ret(n, -1);
        vector<size_t> stk;
        for (size_t i = n; i-- != 0;) {
            const auto ci = cars[i];
            while (!stk.empty()) {
                const auto j = stk.back();
                const auto cj = cars[j];
                if (cj[1] < ci[1] &&
                    (!islessgreater(ret[j], -1) ||
                     1.0 * (cj[0] - ci[0]) / (ci[1] - cj[1]) <= ret[j])) {
                    ret[i] = 1.0 * (cj[0] - ci[0]) / (ci[1] - cj[1]);
                    break;
                }
                stk.pop_back();
            }
            stk.push_back(i);
        }
        return ret;
    }
};
```

Time complexity: `O(n)`.

Let me know if the post is incorrect or unclear.