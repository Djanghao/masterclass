# 8 lines C++, O(n) 8ms

**Author:** StefanPochmann
**Votes:** 62
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/80060/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/80060/)

---

**Solution 1** (array, 8ms)

    int lengthOfLongestSubstringKDistinct(string s, int k) {
        int ctr[256] = {}, j = -1, distinct = 0, maxlen = 0;
        for (int i=0; i<s.size(); ++i) {
            distinct += ctr[s[i]]++ == 0;
            while (distinct > k)
                distinct -= --ctr[s[++j]] == 0;
            maxlen = max(maxlen, i - j);
        }
        return maxlen;
    }

---

**Solution 2** (unordered_map, 56ms)

    int lengthOfLongestSubstringKDistinct1(string s, int k) {
        unordered_map<char, int> ctr;
        int j = -1, maxlen = 0;
        for (int i=0; i<s.size(); ++i) {
            ++ctr[s[i]];
            while (ctr.size() > k)
                if (--ctr[s[++j]] == 0)
                    ctr.erase(s[j]);
            maxlen = max(maxlen, i - j);
        }
        return maxlen;
    }