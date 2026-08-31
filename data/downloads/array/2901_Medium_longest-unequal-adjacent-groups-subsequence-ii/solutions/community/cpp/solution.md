# LIS + Parent (Greedy Fail 🔥) || (Easy Video Solution with all scenarios) 🔥 || C++ || JAVA

**Author:** ayushnemmaniwar12
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4168736/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4168736/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I* recommend breaking down the problem into smaller parts and, with small examples, visually simulate the different scenarios. Consider various ways to solve the problem, and eventually, you'll find a solution that works.*

# ***Detailed and easy Video Solution***

https://youtu.be/84Y4BDsl8d8

# Approach
<!-- Describe your approach to solving the problem. -->
To find the longest subsequence of words with one edit, I use dynamic programming to store the length and previous index of the longest subsequence ending at each index. Then, I backtrack through the previous index vector to reconstruct the subsequence.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

```C++ []
class Solution {
public:
     bool check(string &a,string &b)
    {
        int n=a.size()-1,m=b.size()-1;
        if(n!=m)
            return 0;
        int c=0;
        while(n>=0)
        {
            if(a[n]!=b[n])
                c++;
            n--;
        }
        return c==1;
    }
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        vector<int>dp(n+1,1);
        vector<int>prev(n+1,-1);
        int maxdp=1,maxprev=0;
        for(int i=0;i<n;i++)
        {   
            for(int j=i-1;j>=0;j--)
            {
                string a=words[i],b=words[j];
                if(groups[j]!=groups[i])
                {
                    bool k=check(a,b);
                    if(k)
                    {   
                        if(1+dp[j]>dp[i])
                        {
                            dp[i]=1+dp[j];
                            prev[i]=j;
                            if(dp[i]>maxdp)
                            {
                                maxdp=dp[i];
                                maxprev=i;
                            }
                        }
                    }
                }
            }
        }
        vector<string>res;
        res.push_back(words[maxprev]);
        while(prev[maxprev]!=-1)
        {
            res.push_back(words[prev[maxprev]]);
            maxprev=prev[maxprev];
        }
        reverse(res.begin(),res.end());
        return res;
       
    }
};
```
```Python []
class Solution:
    def check(self, a, b):
        n = len(a) - 1
        m = len(b) - 1
        if n != m:
            return 0
        c = 0
        while n >= 0:
            if a[n] != b[n]:
                c += 1
            n -= 1
        return c == 1

    def getWordsInLongestSubsequence(self, n, words, groups):
        dp = [1] * (n + 1)
        prev = [-1] * (n + 1)
        maxdp = 1
        maxprev = 0
        for i in range(n):
            for j in range(i - 1, -1, -1):
                if groups[j] != groups[i]:
                    k = self.check(words[i], words[j])
                    if k:
                        if 1 + dp[j] > dp[i]:
                            dp[i] = 1 + dp[j]
                            prev[i] = j
                            if dp[i] > maxdp:
                                maxdp = dp[i]
                                maxprev = i
        res = []
        res.append(words[maxprev])
        while prev[maxprev] != -1:
            res.append(words[prev[maxprev]])
            maxprev = prev[maxprev]
        res.reverse()
        return res


```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public boolean check(String a, String b) {
        int n = a.length() - 1;
        int m = b.length() - 1;
        if (n != m)
            return false;
        int c = 0;
        while (n >= 0) {
            if (a.charAt(n) != b.charAt(n))
                c++;
            n--;
        }
        return c == 1;
    }

    public List<String> getWordsInLongestSubsequence(int n, List<String> words, List<Integer> groups) {
        List<Integer> dp = new ArrayList<>();
        List<Integer> prev = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            dp.add(1);
            prev.add(-1);
        }
        int maxdp = 1;
        int maxprev = 0;

        for (int i = 0; i < n; i++) {
            for (int j = i - 1; j >= 0; j--) {
                String a = words.get(i);
                String b = words.get(j);
                if (!groups.get(j).equals(groups.get(i))) {
                    boolean k = check(a, b);
                    if (k) {
                        if (1 + dp.get(j) > dp.get(i)) {
                            dp.set(i, 1 + dp.get(j));
                            prev.set(i, j);
                            if (dp.get(i) > maxdp) {
                                maxdp = dp.get(i);
                                maxprev = i;
                            }
                        }
                    }
                }
            }
        }

        List<String> res = new ArrayList<>();
        res.add(words.get(maxprev));
        while (prev.get(maxprev) != -1) {
            res.add(words.get(prev.get(maxprev)));
            maxprev = prev.get(maxprev);
        }
        Collections.reverse(res);
        return res;
    }
}
```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00
