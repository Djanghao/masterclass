# C++ || Easy to understand || 0ms 100% faster

**Author:** suniti0804
**Votes:** 29
**Link:** [https://leetcode.com/problems/count-and-say/solutions/1239584/](https://leetcode.com/problems/count-and-say/solutions/1239584/)

---

```
 string countAndSay(int n) 
    {
        if(n == 1)
          return "1";
        if(n == 2)
          return "11";
          
        string str = "11";
        
        for(int i = 3; i <= n; i++)
         {
             str += '$';
             int len = str.length();
             
             int cnt = 1;
             string tmp = "";
             
             for(int j = 1; j < len; j++)
              {
                  if(str[j] != str[j - 1])
                    {
                        tmp += cnt + '0';
                        tmp += str[j - 1];
                        cnt = 1;
                    }
                   else
                     cnt++;
              }
            str = tmp;  
         }
         
        return str;
    }
```