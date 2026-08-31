# Kotlin / C++: follow-up of 157: easy solution

**Author:** kotlinvim
**Votes:** 2
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/955193/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/955193/)

---

````
// Kotlin

class Solution:Reader4() {
    val mBuf4 = CharArray(4)
    var mCount = 0
    var mConsumed = 0
    var mEOF = false

    /**
      * @param  buf Destination buffer
      * @param  n   Number of characters to read
      * @return     The number of actual characters read
      */
    override fun read(buf:CharArray, n:Int): Int {
        var total = 0

        while (total < n) {
            while (mConsumed < mCount && total < n) {
                buf[total++] = mBuf4[mConsumed++];
            }

            if (total == n || mEOF) {
                break
            }

            mCount = read4(mBuf4)
            mConsumed = 0
            mEOF = mCount < 4
        }

        return total
    }
}

// C++

class Solution {
public:
    int read(char *buf, int n) {
        int total = 0;
        while (total < n) {
            while (total < n && mConsumed < mCount) {
                buf[total++] = mBuf4[mConsumed++];
            }
            if (total == n || mEOF) {
                break;
            }
            mCount = read4(mBuf4);
            mConsumed = 0;
            mEOF = mCount < 4;
        }        
        return total;
    }
private:
    char mBuf4[4];
    int mCount = 0;
    int mConsumed = 0;
    bool mEOF = false;
};