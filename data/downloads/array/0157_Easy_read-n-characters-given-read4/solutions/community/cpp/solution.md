# C++ vanilla

**Author:** jianchao-li
**Votes:** 22
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/49521/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/49521/)

---

Keep reading until you read fewer than 4 characters or the total number of characters you read is not smaller than `n`. Then either you reach the end of file or you need not read more and just return.

```cpp
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
        int total = 0;
        while (total < n) {
            int m = read4(buf + total);
            total += m;
            if (m < 4) {
                break;
            }
        }
        return min(n, total);
    }
};
```