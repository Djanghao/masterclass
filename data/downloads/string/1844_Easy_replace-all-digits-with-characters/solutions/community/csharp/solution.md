# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/3401331/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/3401331/)

---


![photo_2023-04-10_21-31-47.jpg](./images/0.jpeg)
![wqd.jpg](./images/1.jpeg)

```C++ []
class Solution {
public:
    string replaceDigits(string s) {
         for(int i=1;i<s.length();i+=2)
         s[i]+=s[i-1]-'0';
        return s;
    }
};
```
```C# []
public class Solution {
    public string ReplaceDigits(string s) {
        StringBuilder s1=new();
    
        for(int i=0;i<s.Length-1;i+=2){
            s1.Append(s[i]);
            s1.Append((char)((int)s[i]+s[i+1]-'0'));
        }
       if(!char.IsDigit(s[s.Length-1]))
       s1.Append(s[s.Length-1]);
        return s1.ToString();
    }
}
```
