# Short Python O(log n) Solution

**Author:** girikuncoro
**Votes:** 27
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/71093/](https://leetcode.com/problems/h-index-ii/solutions/71093/)

---

The idea is to do binary search to find the min index such that `citations[i] >= len(citations) - i`, then the answer is `len(citations)-i`

    def hIndex(self, citations):
        n = len(citations)
        l, r = 0, n-1
        while l <= r:
            mid = (l+r)/2
            if citations[mid] >= n-mid:
                r = mid - 1
            else:
                l = mid + 1
        return n-l