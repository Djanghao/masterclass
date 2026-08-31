# C++ short and clean code beat 100%

**Author:** gingerale
**Votes:** 19
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/347835/](https://leetcode.com/problems/alphabet-board-path/solutions/347835/)

---

move UP and LEFT before DOWN and RIGHT to avoid "trapped" in 'z'. Add 'a' to string for initialization.

```
    string alphabetBoardPath(string target) {
        unordered_map<char, pair<int,int>> mp;
        for(int i = 0; i < 26; ++i) {
            mp[i+'a'] = {i/5, i%5};
        }
        target = 'a' + target;
        string path;
        int dx = 0, dy = 0;
        for(int i = 1; i < target.size(); ++i) {
            auto cur = mp[target[i]];
            auto prev = mp[target[i-1]];
            dx = cur.first - prev.first;
            dy = cur.second - prev.second;
            if(dy < 0) path += string(-dy, 'L');
            if(dx < 0) path += string(-dx, 'U');
            if(dy > 0) path += string(dy, 'R');
            if(dx > 0) path += string(dx, 'D');
            path += '!';
        }
        return path;
    }
```