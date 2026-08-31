# 2 lines O(n) Ruby with explanation/proof

**Author:** StefanPochmann
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/71290/](https://leetcode.com/problems/find-the-celebrity/solutions/71290/)

---

    def find_celebrity(n)
      candi = (0...n).max { |new, old| knows(old, new) ? 1 : 0 }
      (0...n).all? { |i| i == candi || knows(i, candi) && !knows(candi, i) } ? candi : -1
    end

First find a candidate "most known" person by going through everybody and replacing the old candidate with the new person if the old candidate knows that new person. The `max` function can be abused for that.

Everybody who's not the final candidate either never were the candidate (because when they were considered, the then-candidate didn't know them) or once were the candidate but then got replaced (because they knew someone else). In either case, they're not a celebrity, so if there's a celebrity, it really must be the candidate.

And then just check the candidate against the celebrity definition.