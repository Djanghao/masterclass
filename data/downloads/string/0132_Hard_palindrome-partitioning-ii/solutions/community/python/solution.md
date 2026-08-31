# 56 ms python with explanation

**Author:** zhuyinghua1203
**Votes:** 67
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/42205/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/42205/)

---

Algorithm (460 ms) credits go to:
[https://leetcode.com/discuss/9476/solution-does-not-need-table-palindrome-right-uses-only-space][1]

The main algorithm idea is if s[i,j] is a palindrome, then the minCut(s[:j]) is **at most** minCut(s[:i-1])+1. This literally needs to find out all possible palindromes in the list. The above post provides an efficient search algorithm. O(n) space and O(n^2) time complexity.

Further acceleration (460 ms -> 56 ms) credits go to:
[https://leetcode.com/discuss/43950/python-100ms-extra-dealing-super-cases-reduces-576ms-100ms][2]

The main idea for acceleration is to quickly check and exclude a few long palindrome tests..

    def minCut(self, s):
        # acceleration
        if s == s[::-1]: return 0
        for i in range(1, len(s)):
            if s[:i] == s[:i][::-1] and s[i:] == s[i:][::-1]:
                return 1
        # algorithm
        cut = [x for x in range(-1,len(s))]  # cut numbers in worst case (no palindrome)
        for i in range(len(s)):
            r1, r2 = 0, 0
            # use i as origin, and gradually enlarge radius if a palindrome exists
            # odd palindrome
            while i-r1 >= 0 and i+r1 < len(s) and s[i-r1] == s[i+r1]:
                cut[i+r1+1] = min(cut[i+r1+1], cut[i-r1]+1)
                r1 += 1
            # even palindrome
            while i-r2 >= 0 and i+r2+1 < len(s) and s[i-r2] == s[i+r2+1]:
                cut[i+r2+2] = min(cut[i+r2+2], cut[i-r2]+1)
                r2 += 1
        return cut[-1]

The following code simply implements the algorithm without any optimization (1800 ms), and should be easier to understand. O(n) space and O(n^3) time complexity.

    def minCut(self, s):
        cut = [x for x in range(-1,len(s))]
        for i in range(0,len(s)):
            for j in range(i,len(s)):
                if s[i:j] == s[j:i:-1]:
                    cut[j+1] = min(cut[j+1],cut[i]+1)
        return cut[-1]


  [1]: https://leetcode.com/discuss/9476/solution-does-not-need-table-palindrome-right-uses-only-space
  [2]: https://leetcode.com/discuss/43950/python-100ms-extra-dealing-super-cases-reduces-576ms-100ms