# 1+7 lines Python (length prefixes)

**Author:** StefanPochmann
**Votes:** 105
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/70448/](https://leetcode.com/problems/encode-and-decode-strings/solutions/70448/)

---

    class Codec:
    
        def encode(self, strs):
            return ''.join('%d:' % len(s) + s for s in strs)
    
        def decode(self, s):
            strs = []
            i = 0
            while i < len(s):
                j = s.find(':', i)
                i = j + 1 + int(s[i:j])
                strs.append(s[j+1:i])
            return strs