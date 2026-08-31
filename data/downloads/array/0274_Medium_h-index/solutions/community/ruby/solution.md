# 1 line Ruby, 5 lines C++, 6 lines Java

**Author:** StefanPochmann
**Votes:** 7
**Link:** [https://leetcode.com/problems/h-index/solutions/71043/](https://leetcode.com/problems/h-index/solutions/71043/)

---

I saw [the picture](https://commons.wikimedia.org/wiki/File%3AH-index-en.svg) in the Wikipedia article and thought I'll just count the papers above the diagonal (first sort by decreasing citation number, then count the papers whose citation number is larger than their array index).

---

**Ruby**

    def h_index(citations)
      citations.sort.reverse.each_with_index.count(&:>)
    end

---

**C++**

    int hIndex(vector<int>& citations) {
        sort(citations.rbegin(), citations.rend());
        int h = 0, i = 0;
        for (int c : citations)
            h += c > i++;
        return h;
    }

---

**Java**

Since Java doesn't let me sort in reverse order nicely, I sort in normal order and reverse the array indexes instead.

    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int h = 0, i = citations.length;
        for (int c : citations)
            if (c > --i)
                ++h;
        return h;
    }