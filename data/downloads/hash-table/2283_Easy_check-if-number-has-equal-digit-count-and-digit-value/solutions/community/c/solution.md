# Brute-Force and One-Liner

**Author:** votrubac
**Votes:** 35
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2083839/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2083839/)

---

I am sure some clever solution exists, but I did not want to spend too much time.

You can realize that the number of strings that match the criteria is very small - 7, to be exact (see the second solution below).

#### Brute-Force
**C++**
```cpp
bool digitCount(string num) {
    int cnt[10] = {};
    for (auto n : num)
        ++cnt[n - '0'];
    for (int i = 0; i < num.size(); ++i)
        if (cnt[i] != num[i] - '0')
            return false;
    return true;
}
```

#### One-Liner
```cpp
bool digitCount(string &num) {
    return unordered_set<string>{"1210", "2020" , "21200", "3211000", "42101000", "521001000", "6210001000"}.count(num);
}
```