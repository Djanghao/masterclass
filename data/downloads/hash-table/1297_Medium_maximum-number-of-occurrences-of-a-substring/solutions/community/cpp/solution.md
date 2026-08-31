# C++ || Sliding Window || Detailed Explanation

**Author:** k0adarsh
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/2084398/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/2084398/)

---

# Approach
* One major thing to understand here is we only have to look out for substring with minSize satisfying the condition. Because we are concerned about frequency of occurance, and any substring S1 with size greater than minSize will have frequency less than or equal to substring of S1 with size minSize.
* Lets say substring S1 satisfies our condition and size of substring S1 > minSize then there also exist a substring of S1 of size minSize which will satisfy our condition and will have frequency of occurance greater than S1 in the original string. 

* Now we will construct substring with size minSize using sliding window technique. We will store the frequency of each element in the window and check if it satisfies our condition.
* And we will also store the frequency of each substring made with satisfied condition. 
* Return the largest frequency. 

```
class Solution {
public:
    int maxFreq(string s, int maxLetters, int minSize, int maxSize) {
        
        int i, j, k, ans = 0, res, n = s.length();
        
        string temp;
        unordered_map<char, int> st;
        unordered_map<string, int> mp;
        
        i = 0, j = 0;
        while(i <= n - minSize && j < n)
        {
            temp += s[j];
            st[s[j]] += 1;;
            if(temp.length() == minSize)
            {
                if(st.size() <= maxLetters)
                    mp[temp] += 1;
                i += 1;
                st[temp[0]] -= 1;
                if(st[temp[0]] == 0)
                    st.erase(temp[0]);
                temp.erase(temp.begin());
            }
            j += 1;
        }
        for(auto el : mp)
            ans = max(ans, el.second);
        return ans;
    }
};
```

***Please upvote if you liked the explanation.***