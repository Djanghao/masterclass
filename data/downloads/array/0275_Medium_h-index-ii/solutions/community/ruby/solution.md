# 1-liner in Ruby

**Author:** StefanPochmann
**Votes:** 2
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/71139/](https://leetcode.com/problems/h-index-ii/solutions/71139/)

---

**Solution**

    def h_index(citations)
      (0...citations.size).bsearch { |i| citations[~i] <= i } || citations.size
    end

Or a bit shorter, by adding a virtual dummy paper with zero citations:

    def h_index(citations)
      (0..citations.size).bsearch { |i| (citations[~i] || 0) <= i }
    end

---

**Explanation**

Think/access in reversed order, for example input [0,1,3,5,6] is:

                          i:  0 1 2 3 4
    citations of i-th paper:  6 5 3 1 0        (implemented as citations[~i])

The index of the first paper having too few citations (`citations[~i] <= i`) is the number of papers with enough citations.