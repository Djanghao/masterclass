# Formula

**Author:** votrubac
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2947014/](https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/solutions/2947014/)

---

What if there is just one array to fill?

We can compute the max element in that array by adding the number of "holes" (multiples of `d`) to the number of elements.

The formula is `cnt + x`, where `x = (cnt + x) / d`.
- `x * d = cnt + add`
- `x (d - 1) = cnt`
- `x = cnt / (d - 1)`.

> Note that, when `cnt` is divisible by `d - 1`, we need one less element.
> E.g. for `cnt == 10` and `d == 3`, the maximum number is 14 (10 + 10 / 2 - 1), because we do not need to skip the fifth hole:
> 1, 2, [], 4, 5,[], 7, 8,[], 10, 11, [], 13, 14, []
> Note that for `cnt == 11` and `d == 3`, the maximum number is 16 (11 + 11 / 2), because we skip all five holes:
> 1, 2, [], 4, 5,[], 7, 8,[], 10, 11, [], 13, 14,[], 16

If we have two arrays, we need to insert total `cnt1 + cnt2` elements. Multiples of `d1` and `d2` can be inserted into the other array, except for multiples of `lcm(d1, d2)`.

> So, it is like a single array with `cnt = cnt1 + cnt2`, and `d = lcm(d1, d2)`.

There is an edge case when one array overpower the other (the other array can be fully populated using `holes` from the first array).

Therefore, we return the largets of three maximum values (first array only, second array only, and both arrays).

**C++**
```cpp
int getMax(int cnt, long long d1, long long d2 = 1) {
    long long d = lcm(d1, d2);
    return cnt + cnt / (d - 1) - (cnt % (d - 1) ? 0 : 1);
}
int minimizeSet(int d1, int d2, int cnt1, int cnt2) {
    return max({getMax(cnt1, d1), getMax(cnt2, d2), getMax(cnt1 + cnt2, d1, d2) });
}
```