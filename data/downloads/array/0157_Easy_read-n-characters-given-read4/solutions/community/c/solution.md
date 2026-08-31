# Simple C++ Solution Accounting for Overflow!

**Author:** douglaz
**Votes:** 1
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/543990/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/543990/)

---

We assume that there will always be at least n characters in the file. We can call read4() n/4 times but if n is not fully divisible by 4, copy the last n % 4 characters separately using a temporary buffer to avoid overflow in buf.

It is also important to return the correct number of characters read or else Leetcode's validation tool will overread the buffer. The two possible edge cases are either we have read less than the requested n characters (return count) or count may be inaccurate if n is not fully divisible by 4 and we have read 4 - n % 4 extra characters due to the additional call to read4() (return n).
```
// Forward declaration of the read4 API.
int read4(char *buf);

class Solution {
public:
    /**
     * @param buf Destination buffer
     * @param n   Number of characters to read
     * @return    The number of actual characters read
     */
    int read(char *buf, int n) {
        int count = 0;
        for (int i = 0; i < n / 4; i++) {
            count += read4(buf);
            buf += 4;
        }
        if (n % 4 != 0) {
            char tempBuf[4];
            count += read4(tempBuf);
            memcpy(buf, tempBuf, n % 4);
        }
        return min(n, count);
    }
};
```