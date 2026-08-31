# Convert to minutes

**Author:** votrubac
**Votes:** 58
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908779/](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/solutions/1908779/)

---

Since we can only add minutes, the greedy approach would work.

**C++**
```cpp    
int convertTime(string current, string correct) {
    auto toMin = [](string &s) { 
 \xA0 \xA0 \xA0 \xA0return s[0] * 600 + s[1] * 60 + s[3] * 10 + s[4] ;
    };
    int d = toMin(correct) - toMin(current);
    return d / 60 + d % 60 / 15 + d % 15 / 5 + d % 5;
}
```