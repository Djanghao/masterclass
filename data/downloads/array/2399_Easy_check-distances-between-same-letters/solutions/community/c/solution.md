# Track First vs. Check Second

**Author:** votrubac
**Votes:** 40
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2527292/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2527292/)

---

#### Track First Position
**C++**
```cpp
bool checkDistances(string s, vector<int>& distance) {
    int pos[26] = {};
    for (int i = 0; i < s.size(); ++i) {
        int n = s[i] - 'a';
        if (pos[n] > 0 && distance[n] != i - pos[n])
            return false;
        pos[n] = i + 1;
    }
    return true;
}
```

#### Check Second Position
Thanks [SunnyvaleCA](https://leetcode.com/SunnyvaleCA/) for the idea. The approach above would not work if we change the problem to allow a single letter.

Instead, when we encounter `s[i]` letter for the first time, we can check that `s[i] == s[i + d + 1]`, where `d` is the distance for that letter.

After that, we set the distance to `-1`, so it would work for the second letter (it will be checked against itself). 

**Java**
```java
public boolean checkDistances(String s, int[] dist) {
    for (int i = 0; i < s.length(); ++i) {
        int d = dist[s.charAt(i) - 'a'];
        if (i + d + 1 >= s.length() || s.charAt(i + d + 1) != s.charAt(i))
            return false;
        dist[s.charAt(i) - 'a'] = -1;
    }
    return true;        
}
```
**C++**
```cpp
bool checkDistances(string s, vector<int>& dist) {
    for (int i = 0; i < s.size(); ++i) {
        int d = dist[s[i] - 'a'];
        if (i + d + 1 >= s.size() || s[i + d + 1] != s[i])
            return false;
        dist[s[i] - 'a'] = -1;
    }
    return true;
}
```