# Python recursive solution, need some observation, so far 97%

**Author:** orbuluh
**Votes:** 185
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/67275/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/67275/)

---

Some observation to the sequence:

n == 1:   [0, 1, 8]

n == 2:   [11, 88, 69, 96]

How about n == `3`? 
=> it can be retrieved if you insert `[0, 1, 8]` to the middle of solution of n == `2`

n == `4`?
=> it can be retrieved if you insert `[11, 88, 69, 96, 00]` to the middle of solution of n == `2`

n == `5`?
=> it can be retrieved if you insert `[0, 1, 8]` to the middle of solution of n == `4`

the same, for n == `6`, it can be retrieved if you insert `[11, 88, 69, 96, 00]` to the middle of solution of n == `4`

        
        
    
    def findStrobogrammatic(self, n):
        evenMidCandidate = ["11","69","88","96", "00"]
        oddMidCandidate = ["0", "1", "8"]
        if n == 1:
            return oddMidCandidate
        if n == 2:
            return evenMidCandidate[:-1]
        if n % 2:
            pre, midCandidate = self.findStrobogrammatic(n-1), oddMidCandidate
        else: 
            pre, midCandidate = self.findStrobogrammatic(n-2), evenMidCandidate
        premid = (n-1)/2
        return [p[:premid] + c + p[premid:] for c in midCandidate for p in pre]