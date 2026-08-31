# 1-liners Ruby+Python

**Author:** StefanPochmann
**Votes:** 26
**Link:** [https://leetcode.com/problems/encode-and-decode-strings/solutions/70465/](https://leetcode.com/problems/encode-and-decode-strings/solutions/70465/)

---

Double the pipes inside the strings, then use standalone pipes to mark string endings.

**Ruby**

    def encode(strs)
      strs.map { |s| s.gsub('|', '||') + ' | ' }.join
    end
    
    def decode(s)
      s.split(' | ', -1)[0..-2].map { |s| s.gsub('||', '|') }
    end

**Python**

    def encode(self, strs):
        return ''.join(s.replace('|', '||') + ' | ' for s in strs)

    def decode(self, s):
        return [t.replace('||', '|') for t in s.split(' | ')[:-1]]

---

**Python, joking**

It's forbidden, but I find it neat that Python lets me write the entire thing like that, so there :-)

    class Codec: encode, decode = repr, eval