# Two Pointers

**Author:** votrubac
**Votes:** 92
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/2322338/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/2322338/)

---

We count consequitive zeros `(i - j + 1)`.

For each zero, we add `(i - j + 1)` subarrays:
- `0` -> +1
- `00` -> +2 (`_0` and `00`)
- `000` -> +3 (`__0`, `_00`, and `000`)
- and so on...

**Java**
```java
public long zeroFilledSubarray(int[] nums) {
    long res = 0;
    for (int i = 0, j = 0; i < nums.length; ++i) {
        if (nums[i] != 0)
            j = i + 1;
         res += i - j + 1;
    }
    return res;
}
```
**C++**
```cpp
long long zeroFilledSubarray(vector<int>& nums) {
    long long res = 0;
    for (int i = 0, j = 0; i < nums.size(); ++i) {
        if (nums[i] != 0)
            j = i + 1;
         res += i - j + 1;
    }
    return res;
}
```