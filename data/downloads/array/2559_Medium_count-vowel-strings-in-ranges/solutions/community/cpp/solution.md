# Prefix-sum Array || Very Simple and Easy To Understand Solution

**Author:** kreakEmp
**Votes:** 30
**Link:** [https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143758/](https://leetcode.com/problems/count-vowel-strings-in-ranges/solutions/3143758/)

---

### Up vote if you like this solution.

# Approach
As there is no mutation in the array word we can simply take prifix sum.

=>  ["aba","bcb","ece","aa","e"] 
=>  [ 1,     0,    1,   1,  1]  ( converted above array to 0/1 array -  set 1 if first and last character of the word are both vowel)
=>[0, 1,     1,    2,   3,  4]  ( evaluated prefix sum array)

Note : there is an extra 0 at the begining which ease the query evaluation.

# Code
```

    bool check(char c){ 
        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' ||  c == 'u') return true; 
        return false;
    }

    vector<int> vowelStrings(vector<string>& words, vector<vector<int>>& queries) {
        vector<int> v, ans;
        v.push_back(0);
        for(auto w: words){ 
            if( check(w[0]) && check(w.back()) ) v.push_back( v.back() + 1);  
            else v.push_back( v.back() );
        }
        for(auto q: queries) ans.push_back(v[q[1]+1] - v[q[0]]);
        return ans;
    }

```
Here is an article of my recent interview experience at Amazon, you may like : 
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted