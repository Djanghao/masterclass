# Short C++, read words on the fly

**Author:** StefanPochmann
**Votes:** 332
**Link:** [https://leetcode.com/problems/word-pattern/solutions/73409/](https://leetcode.com/problems/word-pattern/solutions/73409/)

---

I think all previous C++ solutions read all words into a vector at the start. Here I read them on the fly.

    bool wordPattern(string pattern, string str) {
        map<char, int> p2i;
        map<string, int> w2i;
        istringstream in(str);
        int i = 0, n = pattern.size();
        for (string word; in >> word; ++i) {
            if (i == n || p2i[pattern[i]] != w2i[word])
                return false;
            p2i[pattern[i]] = w2i[word] = i + 1;
        }
        return i == n;
    }