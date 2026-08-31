# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 7
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3401389/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3401389/)

---

![photo_2023-04-10_21-56-52.jpg](./images/0.jpeg)
![photo_2023-04-10_21-56-58.jpg](./images/1.jpeg)

```C++ []
class Solution {
public:
    int numOfStrings(vector<string>& patterns, string word) {
        int count=0;
        for(string s:patterns){
          if(word.find(s)!=string::npos)
          count++;
        }//If you like it,please upvote me.
    return count;
    }
};
```
```C# []
public class Solution {
    public int NumOfStrings(string[] patterns, string word) {
       int count=0;
       foreach(string item in patterns){
           if(word.Contains(item))
           count++;
       } //If you find it helpful,please upvote.
       return count;
    }
}
```
