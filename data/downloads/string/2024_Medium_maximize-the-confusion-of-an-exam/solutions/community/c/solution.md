# C++ | Sliding window | with explanation

**Author:** aman282571
**Votes:** 165
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1499005/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1499005/)

---

**This is a sliding window problem.**
**Idea :-** Problems ask you to find maximum substring of 'T' which contains at most k 'F' or maximum  substring of 'F' which contains at most k 'T'.
I just used two seprate sliding windows for this.
Below is the implementation.
***Similar Problem:-***
[Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
```
class Solution {
public:
    int maxConsecutiveAnswers(string s, int k) {
        int size=s.size(),left=0,res=0,cnt=0;
      //  maximum substring of 'T' which contains k 'F'
        for(int i=0;i<size;i++){
            if(s[i]=='F')
                cnt++;
            while(cnt>k){
                if(s[left]=='F')
                    cnt--;
                left++;
            }
            res=max(i-left+1,res);
        }
    //maximum  substring of 'F' which contains k 'T'
      cnt=0;left=0;
      for(int i=0;i<size;i++){
            if(s[i]=='T')
                cnt++;
            while(cnt>k){
                if(s[left]=='T')
                    cnt--;
                left++;
            }
            res=max(i-left+1,res);
        }
        return res;       
    }
};
```
**Same idea as above but shorter version:-**
```

class Solution {
public:
    int solve(string &s,char b,int &k){
       int left=0,res=0,size=s.size(),cnt=0;
      for(int i=0;i<size;i++){
            if(s[i]==b)
                cnt++;
            while(cnt>k){
                if(s[left]==b)
                    cnt--;
                left++;
            }
            res=max(i-left+1,res);
        }
        return res;
    }
    int maxConsecutiveAnswers(string s, int k) {
      return max(solve(s,'F',k),solve(s,'T',k));  
    }
};
```
Do **UPVOTE** if it helps you :)
If you have any question or suggestion then please ask in comment section.
Thanks.