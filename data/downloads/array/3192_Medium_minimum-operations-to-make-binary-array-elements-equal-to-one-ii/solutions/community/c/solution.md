# Flip Flag

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5353253/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5353253/)

---

It feels like the "II" problem is easier than the "I".

When we see a zero, we must flip it (and the rest of the array):
- We add `1` to the result and invert the `flip` flag.

We can figure out the value of remaining elements using the flip flag.

**C++**
```cpp
int minOperations(vector<int>& nums) {
    int res = 0, flip = 0;
    for (int n : nums)
        if (n + flip != 1) {
            ++res;
            flip = !flip;
        }
    return res;
}
```

As suggested by [jaisw7](https://leetcode.com/u/jaisw7/), we can infer the flag value by looking at the current result. This leads to this nifty one-liner.

**C++**
```cpp
int minOperations(vector<int> &nums) {
    return accumulate(begin(nums), end(nums), 0, [](int res, int n) { 
        return res + (n == res % 2); });
}