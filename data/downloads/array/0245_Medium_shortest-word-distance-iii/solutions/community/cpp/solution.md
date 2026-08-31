# 12-16 lines Java, C++

**Author:** StefanPochmann
**Votes:** 136
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/67097/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/67097/)

---

**Solution 1 ... Java "short"**

`i1` and `i2` are the indexes where word1 and word2 were last seen. Except if they're the same word, then `i1` is the previous index.

    public int shortestWordDistance(String[] words, String word1, String word2) {
        long dist = Integer.MAX_VALUE, i1 = dist, i2 = -dist;
        for (int i=0; i<words.length; i++) {
            if (words[i].equals(word1))
                i1 = i;
            if (words[i].equals(word2)) {
                if (word1.equals(word2))
                    i1 = i2;
                i2 = i;
            }
            dist = Math.min(dist, Math.abs(i1 - i2));
        }
        return (int) dist;
    }

---

**Solution 2 ... Java "fast"**

Same as solution 1, but minimizing the number of string comparisons.

    public int shortestWordDistance(String[] words, String word1, String word2) {
        long dist = Integer.MAX_VALUE, i1 = dist, i2 = -dist;
        boolean same = word1.equals(word2);
        for (int i=0; i<words.length; i++) {
            if (words[i].equals(word1)) {
                if (same) {
                    i1 = i2;
                    i2 = i;
                } else {
                    i1 = i;
                }
            } else if (words[i].equals(word2)) {
                i2 = i;
            }
            dist = Math.min(dist, Math.abs(i1 - i2));
        }
        return (int) dist;
    }

---

**Solution 3 ... C++ "short"**

C++ version of solution 1.

    int shortestWordDistance(vector<string>& words, string word1, string word2) {
        long long dist = INT_MAX, i1 = dist, i2 = -dist;
        for (int i=0; i<words.size(); i++) {
            if (words[i] == word1)
                i1 = i;
            if (words[i] == word2) {
                if (word1 == word2)
                    i1 = i2;
                i2 = i;
            }
            dist = min(dist, abs(i1 - i2));
        }
        return dist;
    }

---

**Solution 4 ... C++ "fast"**

C++ version of solution 2.

    int shortestWordDistance(vector<string>& words, string word1, string word2) {
        long long dist = INT_MAX, i1 = dist, i2 = -dist;
        bool same = word1 == word2;
        for (int i=0; i<words.size(); i++) {
            if (words[i] == word1) {
                i1 = i;
                if (same)
                    swap(i1, i2);
            } else if (words[i] == word2) {
                i2 = i;
            }
            dist = min(dist, abs(i1 - i2));
        }
        return dist;
    }