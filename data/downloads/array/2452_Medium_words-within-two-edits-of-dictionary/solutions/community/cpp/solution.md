# [C++] Clean Code

**Author:** theomkumar
**Votes:** 4
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2756371/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2756371/)

---

```
//Bruteforce Approach 

    bool isValid(string &q, string &d)
    {
		int editCnt = 0;
        for (int i = 0; i < size(q); i++)
            if (q[i] != d[i]) 
                if (++editCnt > 2)  return false; //max 2 edit allowed
        return true;
    }

    vector<string> twoEditWords(vector<string>& q, vector<string>& d) {
        vector<string> ans;
        
        for (int i = 0; i < size(q); i++)
            for (int j = 0; j < size(d); j++)
                if (isValid(q[i], d[j]))
                {
                    ans.push_back(q[i]);
                    break;
                }

        return ans;
    }

```