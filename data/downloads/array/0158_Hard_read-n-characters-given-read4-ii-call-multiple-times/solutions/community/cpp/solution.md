# Simple short Java / C++

**Author:** StefanPochmann
**Votes:** 89
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/49618/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/49618/)

---

Just keep copying as long as more is both desired and available (read more on the fly when needed).

It's also fast, 2 ms for Java and 0 ms for C++, there are no faster ones.

**Java**

    public class Solution extends Reader4 {
        public int read(char[] buf, int n) {
            int i = 0;
            while (i < n && (i4 < n4 || (i4 = 0) < (n4 = read4(buf4))))
                buf[i++] = buf4[i4++];
            return i;
        }
        char[] buf4 = new char[4];
        int i4 = 0, n4 = 0;
    }

**C++**

    class Solution {
    public:
        int read(char *buf, int n) {
            int i = 0;
            while (i < n && (i4 < n4 || (i4 = 0) < (n4 = read4(buf4))))
                buf[i++] = buf4[i4++];
            return i;
        }
        char buf4[4];
        int i4 = 0, n4 = 0;
    };