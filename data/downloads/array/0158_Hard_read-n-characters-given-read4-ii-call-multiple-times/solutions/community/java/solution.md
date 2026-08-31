# A simple Java code

**Author:** totalheap
**Votes:** 418
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/49598/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/49598/)

---

        private int buffPtr = 0;
        private int buffCnt = 0;
        private char[] buff = new char[4];
        public int read(char[] buf, int n) {
            int ptr = 0;
            while (ptr < n) {
                if (buffPtr == 0) {
                    buffCnt = read4(buff);
                }
                if (buffCnt == 0) break;
                while (ptr < n && buffPtr < buffCnt) {
                    buf[ptr++] = buff[buffPtr++];
                }
                if (buffPtr >= buffCnt) buffPtr = 0;
            }
            return ptr;
        }


I used buffer pointer (buffPtr) and buffer Counter (buffCnt) to store the data received in previous calls. In the while loop, if buffPtr reaches current buffCnt, it will be set as zero to be ready to read new data.