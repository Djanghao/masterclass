# Count Misplaced Chars

**Author:** votrubac
**Votes:** 77
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1211155/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1211155/)

---

First count the number of zeros and ones; return `-1` if the counts differ by more than one.

If our string is odd-sized, then we know where zeros and ones should be.  For even-sized strings, we need to check two cases: when the string starts with '0', and when with '1'.
> I first used two pointers, but then realized that it can be simplified.

**C++**
```cpp
int minSwaps(string s) {
    int cnt0 = count(begin(s), end(s), '0'), cnt1 = s.size() - cnt0, miss0 = 0, miss1 = 0;
    if (abs(cnt0 - cnt1) > 1)
        return -1;
    for (int i = 0; i < s.size(); i += 2) {
        miss0 += s[i] != '0';
        miss1 += s[i] != '1';
    }
    return cnt0 == cnt1 ? min(miss0, miss1) : cnt0 > cnt1 ? miss0 : miss1;
}
```