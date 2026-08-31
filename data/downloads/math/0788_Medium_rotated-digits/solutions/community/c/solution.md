# Easy C++ Solution, 0ms, less than 100% memory

**Author:** Pooja0406
**Votes:** 23
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/379257/](https://leetcode.com/problems/rotated-digits/solutions/379257/)

---

Runtime: 0 ms, faster than 100.00% of C++ online submissions for Rotated Digits.
Memory Usage: 8.1 MB, less than 100.00% of C++ online submissions for Rotated Digits.

```
int rotatedDigits(int N) {
        
        int count = 0;
        for(int i=1; i<=N; i++)
        {
            bool flag = false;
            int num = i;
            while(num > 0)
            {
                int d = num%10;
                if(d == 3 || d == 4 || d == 7)
                {
                    flag = false;
                    break;
                }
                if(d == 2 || d == 5 || d == 6 || d == 9)
                    flag = true;
                
                num = num/10;
            }
            if(flag) count++;
        }
        return count;
    }