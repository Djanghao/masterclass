# O(n)

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3267407/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3267407/)

---

There is a game like that in elementary school: kids pick number cards and make smallest sum or multiple.

The algorightm is to pick numbers in increasing order, alternating between two numbers.

**C++**
A bit lengthy, but avoids creating and sorting a string.

```cpp
int splitNum(int num) {
    int cnt[10] = {}, n1 = 0, n2 = 0, first = true;
    for(; num; num /= 10)
        ++cnt[num % 10];
    for (int i = 0; i < 10; i += cnt[i] == 0) {
        if (cnt[i]) {
            --cnt[i];
            n1 = first ? n1 * 10 + i : n1;
            n2 = !first ? n2 * 10 + i : n2;
            first = !first;
        }
    }
    return n1 + n2;
}
```