# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/3397823/](https://leetcode.com/problems/count-asterisks/solutions/3397823/)

---

![photo_2023-04-09_20-39-59.jpg](./images/0.jpeg)
![photo_2023-04-09_20-40-05.jpg](./images/1.jpeg)


```C# []
public class Solution {
    public int CountAsterisks(string s) {
        bool further=false;
        int count=0;
        for(int i=0;i<s.Length;i++){
            if(s[i]=='|' && further==false)
            further=true;
            else if(s[i]=='|' && further==true)
            further=false;
            else if(s[i]=='*' && further==false)
            count++;
        }
        return count;
    }// If you find it helpful,please upvote me.
}
```
```C++ []
class Solution {
public:
    int countAsterisks(string s) {
        bool further=false;
        int count=0;
        for(int i=0;i<s.length();i++){
            if(s[i]=='|' && further==false)
            further=true;
            else if(s[i]=='|' && further==true)
            further=false;
            else if(s[i]=='*' && further==false)
            count++;
        }
        return count;
    }// If you find it helpful,please upvote me.
};
```
