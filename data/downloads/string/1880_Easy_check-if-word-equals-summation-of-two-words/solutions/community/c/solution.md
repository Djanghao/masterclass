# c++

**Author:** rajat_gupta_
**Votes:** 50
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1240398/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/1240398/)

---

```
class Solution {
public:
    bool isSumEqual(string firstWord, string secondWord, string targetWord) {
        int first=0,second=0,target=0;
        for(int i=0;i<firstWord.size();i++)
            first=first*10 + (firstWord[i]-'a');
        
        for(int i=0;i<secondWord.size();i++)
            second=second*10 +(secondWord[i]-'a');
        
        for(int i=0;i<targetWord.size();i++)
            target=target*10 +(targetWord[i]-'a');
        
        
        return first+second == target;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case,**please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
