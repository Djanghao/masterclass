# Rightmost Smallest

**Author:** votrubac
**Votes:** 16
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243325/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5243325/)

---

For each star, we need to remove the rightmost instance of the smallest character.

To do that, we store positions of each character in `pos` as we go left to right.

When we see a star:
- Find the smallest available character.
	- We can do it by iterating through 26 characters, or use a set or a heap.
- Change the last position of that characer in `s` to `*`.
- Remove the last position from `pos`.

Finally, we remove all star characters, and return the string.

The complexity of this solution is O(26 n) for the simple iteration, and O(n log 26) for the set/heap.

However, the runtime seems to favor the simple iteration:
- Simple iteration: 80 ms
- Set: 150 ms
- Heap: 120 ms

This is, perhaps, because 26 is small enough number, and the set/heap add some overhead:

### Simple Iteration
**C++**
```cpp
string clearStars(string s) {
    array<vector<int>, 26> pos;
    for (int i = 0; i < s.size(); ++i)
        if (s[i] == '*')
            for (auto &p : pos) {
                if (!p.empty()) {
                    s[p.back()] = '*';
                    p.pop_back();
                    break;
                }
            }
        else
            pos[s[i] - 'a'].push_back(i);
    erase(s, '*');
    return s;
}
```

### Set
**C++**
```cpp
string clearStars(string s) {
    set<int> sm;
    array<vector<int>, 26> pos;
    for (int i = 0; i < s.size(); ++i)
        if (s[i] == '*') {
            while (pos[*begin(sm)].empty())
                sm.erase(begin(sm));
            s[pos[*begin(sm)].back()] = '*';
            pos[*begin(sm)].pop_back();
        }
        else {
            pos[s[i] - 'a'].push_back(i);
            sm.insert(s[i] - 'a');
        }
	erase(s, '*');
    return s;
}
```

### Heap
**C++**
```cpp
string clearStars(string s) {
    priority_queue<int, vector<int>, greater<int>> sm;
    array<vector<int>, 26> pos;
    for (int i = 0; i < s.size(); ++i)
        if (s[i] == '*') {
            while (pos[sm.top()].empty())
                sm.pop();
            s[pos[sm.top()].back()] = '*';
            pos[sm.top()].pop_back();
        }
        else {
            if (pos[s[i] - 'a'].empty())
                sm.push(s[i] - 'a');
            pos[s[i] - 'a'].push_back(i);
        }
    erase(s, '*');
    return s;
}
```