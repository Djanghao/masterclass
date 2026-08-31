# Python solution with explainations and comments

**Author:** zhuyinghua1203
**Votes:** 58
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/49520/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/49520/)

---

Simplified from solution to #158 in this [post][1]

i.e., easy to extend to multi-call case

    def read(self, buf, n):
        idx = 0
        while n > 0:
            # read file to buf4
            buf4 = [""]*4
            l = read4(buf4)
            # if no more char in file, return
            if not l:
                return idx
            # write buf4 into buf directly
            for i in range(min(l, n)):
                buf[idx] = buf4[i]
                idx += 1
                n -= 1
        return idx

  [1]: https://leetcode.com/discuss/75081/python-solution-with-explainations-and-comments