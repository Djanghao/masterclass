# C++ | Set | Easy Understanding

**Author:** kiranpalsingh1806
**Votes:** 22
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2646628/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2646628/)

---

**Approach** 
- We will insert number in set `s`.
- When the `longest()` function will be called, the set will try to increase the answer by checking the next values.

**C++ Code**

```cpp
class LUPrefix {
   public:
    set<int> s;
    int t = 0;
    LUPrefix(int n) {
    }

    void upload(int video) {
        s.emplace(video);
    }

    int longest() {
        while (s.count(t + 1)) {
            t++;
        }
        return t;
    }
};
```