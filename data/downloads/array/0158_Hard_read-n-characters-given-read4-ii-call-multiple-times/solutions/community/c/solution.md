# Easy and commented 100% better time C++ Solution

**Author:** suri_kumkaran
**Votes:** 7
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/802951/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/802951/)

---

Just keeping the count of characters left in buf4 and index pointing the current position.
Updating upcoming buf accordingly.
I tried to add comments for better understanding.

```
class Solution {
public:
   
    //  Buffer for calling read4(buf4)
    char buf4[4];
    //  Index pointing current location in buf4
    int idx=0;
    //  Unread characters left in buf4
    int charactersLeft=0;
    
    int read(char *buf, int n) {

        /*  
            Count of charaters in current buf 
            It will also act as a pointer to fill current buf
        */
        int cnt=0;
        
        //  If Unread characters left is 0 then we should call read4 again and update idx
        if(!charactersLeft)
        {
            charactersLeft = read4(buf4);
            idx=0;
        }
        
        /*  
            While Count of charaters in current buf in less than n
            and there is some charater left in buf4 
        */
        while(cnt<n&&charactersLeft)
        {
            //  Copy to buf from buf4 and update necessary variables
            buf[cnt]=buf4[idx];
            idx++;
            cnt++;
            charactersLeft--;
            
            //  If Unread characters left is 0 then we should call read4 again and update idx
            if(!charactersLeft)
            {
                charactersLeft = read4(buf4);
                idx=0;
            }
        }
        
        //  Finally Return the count of charcters filled in buf
        return cnt;
    }
};
```