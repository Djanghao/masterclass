# Beats 100.00% of users with C#

**Author:** robin_abraham
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4563312/](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/solutions/4563312/)

---

# Intuition
using KMP algorithm & Linear Check

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n);

- Space complexity:O(n)

# Code
```
public class Solution {
    public IList<int> BeautifulIndices(string s, string a, string b, int k) {
        List<int> result = new List<int>();
        int ai = 0;
        int bi = 0;
        List<int> listA = new List<int>();
        List<int> listB = new List<int>();
        int[] lpsA=ComputeLPSForPattern(a);
        int[] lpsB=ComputeLPSForPattern(b);   
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == a[ai])
            {
                ai++;
                if (ai == a.Length)
                {
                    listA.Add(i - a.Length + 1);
                    ai = lpsA[ai-1];
                }
            }
            else if(ai>0)
            {
                ai = lpsA[ai-1];
                i--;
            }
        }
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == b[bi])
            {
                bi++;
                if (bi == b.Length)
                {
                    listB.Add(i - b.Length + 1);
                    bi = lpsB[bi-1];
                }
            }
            else if(bi>0)
            {                      
                bi=lpsB[bi-1];
                i--;
            }
        }
        for (int i = 0,j=0; i < listA.Count;i++)
        {
            while(j<listB.Count && listA[i]>listB[j] && Math.Abs(listA[i]-listB[j])>k)
            {
                j++;
            }
            if(j<listB.Count && Math.Abs(listA[i]-listB[j])<=k)
            {
                result.Add(listA[i]);
            }
        }
        return result;
    } 

    private int[] ComputeLPSForPattern(string pattern)
    {
        int patLen=pattern.Length;
        int[] lps=new int[patLen];
        int len=0;
        int i=1;
        lps[0]=len;
        while(i<patLen)
        {
            if(pattern[i]==pattern[len])
            {
                len++;
                lps[i]=len;
                i++;
            }
            else
            {
                if(len!=0)
                {
                    len=lps[len-1];
                }
                else
                {
                    lps[i]=len;
                    i++;
                }
            }
        }
        return lps;
    }

}
```