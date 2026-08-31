# C++ || Easy to understand || hashMap

**Author:** VineetKumar2023
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1802606/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1802606/)

---


Goal: find the minimum numbers of step to make the strings anagram.
Approach:
```
we need to make all the occurances of a character in both the string equal.
          for example:    leetcode        c d eee l o t
                          coats         a c         o t  s
          so in the first string d eee l are present in the string 1 which is not present in string 2
          these 5 character need to be appended to string 2
          and similarly string1 doesn't contain a and s which is in string 2.
          so these 2 character need to be added.
          
          from this we can have a array which increases the the value when a character occurs in string 1 and reduces the
          value when a character occurs in string 2.

          and then we can traverse the array and add the absolute value of all the entries in the array.
```

Code: 
```
class Solution {
public:
    int minSteps(string s, string t) {
        int cnt=0;
        vector<int> v(26,0);
        // for each character in string s we will increment the value present at the index corresponding to the character
        for(int i=0;i<s.size();i++)
            v[s[i]-'a']++;
        // we will decrement the value for the same
        for(int i=0;i<t.size();i++)
            v[t[i]-'a']--;
        for(int i=0;i<26;i++)
        {
            // add the aboslute value of every entry
            cnt+=abs(v[i]);
        }
        return cnt;
    }
};
```

time complexity:  O(n)
space complexity: O(1)
