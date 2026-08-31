# My python 40ms solution

**Author:** ycsung
**Votes:** 31
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/49599/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/49599/)

---

    class Solution:
    # @param buf, Destination buffer (a list of characters)
    # @param n,   Maximum number of characters to read (an integer)
    # @return     The number of characters read (an integer)
    def __init__(self):
        self.queue = []
    
    def read(self, buf, n):
        idx = 0
        while True:
            buf4 = [""]*4
            l = read4(buf4)
            self.queue.extend(buf4)
            curr = min(len(self.queue), n-idx)
            for i in xrange(curr):
                buf[idx] = self.queue.pop(0)
                idx+=1
            if curr == 0:
                break 
        return idx