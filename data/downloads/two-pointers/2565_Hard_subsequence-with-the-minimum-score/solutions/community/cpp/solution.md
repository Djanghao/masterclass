# Comments + Video Solution || prefix - Suffix || O(N) complexity|| C++ Solution

**Author:** u-day
**Votes:** 14
**Link:** [https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3185048/](https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3185048/)

---



# Approach
Just construct the prefix and suffix array based on no of subsequence matching characters and then just see how many characters are matching from left and how many are matching from right. Then take the unmatched part for every index and return the minimum

Link : https://www.youtube.com/watch?v=eVAeTG5VjVM
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:

    int minimumScore(string s, string t) 
    {
        int m = s.size();
        int n = t.size();

        int mini = 1e9;
        vector<int>pref(m, 0), suff(m, 0);

        int j = 0;
        for(int i=0; i<m && j<n; i++)
        {
            if(s[i] == t[j])
            {
                pref[i]++;
                j++;
            }

            if(i>0) pref[i] += pref[i-1];
        }

        j=n-1;
        for(int i=m-1; i>=0 && j>=0; i--)
        {
            if(s[i] == t[j])
            {
                suff[i]++;
                j--;
            }

            if(i<m-1) suff[i] += suff[i+1];
        }

        for(int i=0; i<m-1; i++)
        {
            mini = min(mini, n-(pref[i]+suff[i+1]));
        }

        mini = min(mini, n-(pref[m-1]));
        mini = min(mini, n-(suff[0]));

        return max(mini, 0);
    }
};
```