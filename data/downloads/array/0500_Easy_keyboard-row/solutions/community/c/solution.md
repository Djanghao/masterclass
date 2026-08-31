# C++ easy solution, faster than 100%, with explaination

**Author:** Pooja0406
**Votes:** 32
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/373966/](https://leetcode.com/problems/keyboard-row/solutions/373966/)

---

Have three sets each corresponding to each row of the keyboard.
For each word, check which set the first char belongs to, and set the temprory set to that set accordingly. We will then check for each char whether or not it belongs to this set and not any other set.
If yes, add to result.

*Runtime: 0 ms, faster than 100.00% of C++ online submissions for Keyboard Row.
Memory Usage: 8.6 MB, less than 14.29% of C++ online submissions for Keyboard Row.*

```

vector<string> findWords(vector<string>& words) {
        
        unordered_set<char> set1{'q','w','e','r','t','y','u','i','o','p'};
        unordered_set<char> set2{'a','s','d','f','g','h','j','k','l'};
        unordered_set<char> set3{'z','x','c','v','b','n','m'};
        vector<string> res;
            
        for(string word : words)
        {
            bool flag = true;
            unordered_set<char> setTemp;
            
            if(set1.find(tolower(word[0])) != set1.end())
                setTemp = set1;
            else if(set2.find(tolower(word[0])) != set2.end())
                setTemp = set2;
            else
                setTemp = set3;
            
            for(char ch : word)
            {
                if(setTemp.find(tolower(ch)) == setTemp.end())
                {
                    flag = false;
                    break;
                }
            }
            
            if(flag)
                res.push_back(word);
        }
        
        return res;
    }
	
	