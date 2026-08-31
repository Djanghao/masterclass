# [C++] Simple C++ Code || O(N) || 100% time

**Author:** _pros_
**Votes:** 6
**Link:** [https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/2524572/](https://leetcode.com/problems/swap-for-longest-repeated-character-substring/solutions/2524572/)

---


# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
public:
    int maxRepOpt1(string text) {
        vector<int> alphabet(26,0);
        int ans = 1;
        for(char &ch : text)
            alphabet[ch-'a']++;
        int n = text.size(), change = 0, val = 1;
        vector<int> v(n);
        v[0] = 1;
        for(int i = 1; i < n; i++)
        {
            if(text[i] == text[i-1])
                v[i] = v[i-1]+1;
            else
                v[i] = 1;
        }
        for(int i = n-1; i > 0; i--)
        {
            if(text[i] == text[i-1])
                val++;
            else
            {
                if(i == 1 || text[i] != text[i-2])
                {
                    val += 1;
                    val = min(val, alphabet[text[i]-'a']);
                    ans = max(val, ans);
                    val = 1;
                }
                else
                {
                    val += v[i-2]+1;
                    val = min(val, alphabet[text[i]-'a']);
                    //cout << alphabet[text[i]-'a'] << " ";
                    ans = max(val, ans);
                    val = 1;
                } 
            }
            ans = max(min(v[i]+1, alphabet[text[i]-'a']), ans);
        }
        return max(ans,val);
    }
};
```