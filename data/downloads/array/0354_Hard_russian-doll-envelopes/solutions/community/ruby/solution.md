# 6 lines O(nlogn) Ruby

**Author:** StefanPochmann
**Votes:** 3
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/82777/](https://leetcode.com/problems/russian-doll-envelopes/solutions/82777/)

---

Idea from [TianhaoSong's solution](https://leetcode.com/discuss/106946/java-nlogn-solution-with-explanation).

    def max_envelopes(envelopes)
      ends = []
      envelopes.sort_by { |w, h| [w, -h] }.each { |_, h|
        i = (0...ends.size).bsearch { |i| ends[i] >= h }
        ends[i || ends.size] = h
      }
      ends.size
    end

If we had Ruby 2.3 here, this should also work and would be nicer:

        i = ends.bsearch_index { |x| x >= h }