# Easy solution

**Author:** vemohan15
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5940953/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-i/solutions/5940953/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int NumberOfSubstrings(string s, int k) {
        int n=s.Length;
        int start=0,end=0;
        Dictionary<char,int> dic=new Dictionary<char,int>();
        int ans=0;
        char ch=' ';
        
        
        for(end=0;end<n;end++)
        {
            if(dic.ContainsKey(s[end]))
            {
                dic[s[end]]++;
            }
            else
            {
                dic.Add(s[end],1);
            }
            if(dic[s[end]]>=k)
            {
                ch=s[end];
            }
            
            while(ch!=' ')
            {
                dic[s[start]]--;
                Console.WriteLine(start+"*"+end+"*"+ch+"*"+ans+"**");
                if(ch==s[start] && dic[s[start]]<k)
                {
                    ch=' ';
                }
                start++;
                ans+=n-end;
                Console.WriteLine(start+"*"+end+"*"+ch+"*"+ans+"*");
            }
        }
        return ans;
    }
}
```