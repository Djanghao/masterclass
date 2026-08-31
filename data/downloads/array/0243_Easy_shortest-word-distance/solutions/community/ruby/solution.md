# 7 lines in Ruby

**Author:** StefanPochmann
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/67024/](https://leetcode.com/problems/shortest-word-distance/solutions/67024/)

---

`i1` and `i2` are the indexes where word1 and word2 were last seen, initialized with +/- infinity.

    def shortest_distance(words, word1, word2)
        i1 = dist = 1.0 / 0
        i2 = -i1
        words.each_with_index.map { |word, i|
            i1 = i if word == word1
            i2 = i if word == word2
            (i1 - i2).abs
        }.min
    end