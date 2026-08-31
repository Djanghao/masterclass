# C++ | Clear Implementation | 100% Faster

**Author:** windrunner15
**Votes:** 11
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/2535024/](https://leetcode.com/problems/guess-the-word/solutions/2535024/)

---

There are a lot of posts with great explanations, so you can refer those, but few had clear C++ implementations that were beginner friendly. 
![image](./images/0.png)

```
class Solution {
public:
    int check( string &a, string &b) {
        int ct = 0 ; 
        for(int i =0 ; i < 6 ; i++) 
            if(a[i] == b[i])
                ct++ ; 
        return ct ; 
    }
    
    void findSecretWord(vector<string>& words, Master& master) {
        for(int i=0, matches = 0; i < 30 and matches !=6 ; i++) {
            string trial = words[words.size()/2]  ; // since we have to pick a random word for each iteration
            matches = master.guess(trial) ; 
            vector<string> possibilities ; 
            for(auto word: words) {
                if(check(word, trial) == matches)
                    possibilities.push_back(word); 
            }
            words = possibilities ; 
        }
    }
};
```