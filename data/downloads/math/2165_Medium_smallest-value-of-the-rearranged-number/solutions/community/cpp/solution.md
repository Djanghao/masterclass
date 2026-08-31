# ✅ C++ || Sort and Erase || East Understanding

**Author:** intellisense
**Votes:** 17
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/1749751/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/1749751/)

---

\uD83D\uDC68\u200D\uD83D\uDCBB Friend's if you find this solution helpful \uD83D\uDE0A, PLEASE do UPVOTE. By doing that motivates me to create a better post like this \u270D\uFE0F
____________________________________________________________________________________________________________
____________________________________________________________________________________________________________

#### \u2714\uFE0F **Question Conclusion**
* Make the number given number smallest
#### \u2714\uFE0F **Solution - I (Best Approach)**
##### **Intuition :-**
* convert integer into string and Sort and Erase.
##### **Code :-**
```
class Solution
{
public:
    long long smallestNumber(long long num)
    {
        if (num < 0)
        {
            string s = to_string(-num);
            sort(s.rbegin(), s.rend());
            return -stoll(s);
        }
        else if (num == 0)
            return 0;
        string s = to_string(num);
        sort(s.begin(), s.end());
        int i = 0;
        while (s[i] == '0')
            i++;
        char c = s[i];
        s.erase(s.begin() + i);
        s = c + s;
        return stoll(s);
    }
};
```
_____________________________________________________________________________________________________________
_____________________________________________________________________________________________________________

\uD83D\uDCBBIf there are any suggestions/questions in my post, comment below \uD83D\uDC47