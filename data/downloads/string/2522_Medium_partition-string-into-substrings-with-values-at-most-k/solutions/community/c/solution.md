# Greedy

**Author:** votrubac
**Votes:** 57
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/2977270/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/2977270/)

---

It can take you a moment to figure out why greedy works here.
    
We track the current number `n`, and start a new partition when `n` exceeds `k`.
    
**C++**
```cpp
int minimumPartition(string s, int k) {
    long long n = 0, res = 1;
    for (int i = 0; i < s.size(); ++i) {
        n = n * 10 + s[i] - '0';
        if (n > k) {
            ++res;
            n = s[i] - '0';
        }
        if (n > k)
            return -1;
    }
    return res;
}
```