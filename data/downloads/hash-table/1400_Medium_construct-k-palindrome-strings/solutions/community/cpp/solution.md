# C++ Easy T.C.:O(n) and S.C:O(1), beats 98.4% in T.C. and 95% in S.C.

**Author:** aryanshsingla
**Votes:** 6
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/2911162/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/2911162/)

---

# Intuition: 
Count for the number of charachters having odd number of occurences
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach:
If the number of odd occurences of charachters are less than k, we can partition the string in k no.of palndromes.We are counting for odd occurences because eve occurences can be arranged in any order around the 'centre' of the palindrome.And we need to check additionally, if the k is less than the length of the string to be partiotined, then we don't have any way do partition it.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool canConstruct(string s, int k) {

        int a[26];  // to store the count of charachters
        memset(a,0,sizeof(a));
        int n=s.length();
        if(k>n)return 0;
        for(int i=0;i<n;i++)
        {
            a[s[i]-'a']++;
        }
        int res=0;
        for(int i=0;i<26;i++)
        {
            // if count is odd, then increment the resultant
            if(a[i]%2)res++;
        }
        return res<=k;
    }
};
```