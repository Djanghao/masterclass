# Bit shorter C++

**Author:** StefanPochmann
**Votes:** 166
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/76976/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/76976/)

---

Same algorithm as most, just written a bit shorter.

    int maxProduct(vector<string>& words) {
        vector<int> mask(words.size());
        int result = 0;
        for (int i=0; i<words.size(); ++i) {
            for (char c : words[i])
                mask[i] |= 1 << (c - 'a');
            for (int j=0; j<i; ++j)
                if (!(mask[i] & mask[j]))
                    result = max(result, int(words[i].size() * words[j].size()));
        }
        return result;
    }

**Update:** Here's an O(n+N) variation, where n is the number of words and N is the total number of characters in all words. Thanks to junhuangli for the suggestion.

    int maxProduct(vector<string>& words) {
        unordered_map<int,int> maxlen;
        for (string word : words) {
            int mask = 0;
            for (char c : word)
                mask |= 1 << (c - 'a');
            maxlen[mask] = max(maxlen[mask], (int) word.size());
        }
        int result = 0;
        for (auto a : maxlen)
            for (auto b : maxlen)
                if (!(a.first & b.first))
                    result = max(result, a.second * b.second);
        return result;
    }

**Or:** (thanks to junhuangli's further comment)

    int maxProduct(vector<string>& words) {
        unordered_map<int,int> maxlen;
        int result = 0;
        for (string word : words) {
            int mask = 0;
            for (char c : word)
                mask |= 1 << (c - 'a');
            maxlen[mask] = max(maxlen[mask], (int) word.size());
            for (auto maskAndLen : maxlen)
                if (!(mask & maskAndLen.first))
                    result = max(result, (int) word.size() * maskAndLen.second);
        }
        return result;
    }