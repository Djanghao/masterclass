# Greedy

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/2560159/](https://leetcode.com/problems/optimal-partition-of-string/solutions/2560159/)

---

The best strategy is to make each partition as long as possible (can be easily proven).

**Track Position**
We track the start of the current partition, and the last position of each character.

That way, we can detect if a character repeats in the current partition.

This solution is a bit more efficient as we do not need to reset the count.

**Java**
```java
public int partitionString(String s) {
    int[] pos = new int[26];
    int res = 0, last = 0;
    for (int i = 0; i < s.length(); ++i) {
        if (pos[s.charAt(i) - 'a'] >= last) {
            ++res;
            last = i + 1;
        }
        pos[s.charAt(i) - 'a'] = i + 1;
    }
    return res;  
}
```
**C++**
```cpp
int partitionString(string s) {
    int pos[26] = {}, res = 0, last = 0;
    for (int i = 0; i < s.size(); ++i) {
        if (pos[s[i] - 'a'] >= last) {
            ++res;
            last = i + 1;
        }
        pos[s[i] - 'a'] = i + 1;
    }
    return res;        
}
```
**Track Count (Original Solution)**

**C++**
```cpp
int partitionString(string s) {
    int cnt[26] = {}, res = 1;
    for (int i = 0; i < s.size(); ++i) {
        if (cnt[s[i] - 'a']) {
            ++res;
            fill(begin(cnt), end(cnt), 0);
        }
        ++cnt[s[i] - 'a'];
    }
    return res;        
}
```