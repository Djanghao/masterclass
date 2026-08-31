# Another accepted Java solution

**Author:** jeantimex
**Votes:** 241
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/49496/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/49496/)

---

    public int read(char[] buf, int n) {
      boolean eof = false;      // end of file flag
      int total = 0;            // total bytes have read
      char[] tmp = new char[4]; // temp buffer
      
      while (!eof && total < n) {
        int count = read4(tmp);
        
        // check if it's the end of the file
        eof = count < 4;
        
        // get the actual count
        count = Math.min(count, n - total);
        
        // copy from temp buffer to buf
        for (int i = 0; i < count; i++) 
          buf[total++] = tmp[i];
      }
      
      return total;
    }