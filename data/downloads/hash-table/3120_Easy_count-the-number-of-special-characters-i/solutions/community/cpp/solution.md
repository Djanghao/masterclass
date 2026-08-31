# Easy Video Solution ✅ || Set  || Brute Force

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052554/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052554/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can implement


***Easy Video Explanation***

https://youtu.be/962iQxae0aQ


# Code
```
class Solution {
public:
    int numberOfSpecialChars(string s) {
        set<int>s1;
        set<int>s2;
        for(auto i:s) {
            if(i>='a' && i<='z')
                s1.insert(i-'a');
            else
                s2.insert(i-'A');
        }
        int c=0;
        for(auto i:s1) {
            if(s2.find(i)!=s2.end())
                c++;
        }
        return c;
    }
};

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
-   O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
```