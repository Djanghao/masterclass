# 1-liners Python + Ruby

**Author:** StefanPochmann
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/86946/](https://leetcode.com/problems/find-the-difference/solutions/86946/)

---

**Ruby:**
```
def find_the_difference(s, t)
  (s + t).bytes.reduce(:^).chr
end
```
(previously I had `unpack("c*")` instead of `bytes`, thanks @hbin)

**Python:**

    def findTheDifference(self, s, t):
        return chr(sum(map(ord, t)) - sum(map(ord, s)))

    def findTheDifference(self, s, t):
        return chr(reduce(int.__xor__, map(ord, s+t)))