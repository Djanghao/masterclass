# Simple Math

**Author:** 12345556
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/3834073/](https://leetcode.com/problems/largest-palindrome-product/solutions/3834073/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
finding the palindrome and trying to find is there a element n digit elemnet dividing that palinbdrome


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int largestPalindrome(int n) {
        if(n==1)
        {
            return 9;
        }
        int hi=pow(10,n)-1;
        int lo=pow(10,n-1);
        int kk=1337;
        for(int i=hi;i>=lo;i--)
        {
            string s=to_string(i);
            string k=s;
            reverse(k.begin(),k.end());
            s+=k;
            long long int ll=stol(s);
            for(int j=hi;j>=sqrtl(ll);j--)
            {
                if(ll%j==0)
                {
                    return ll%kk;
                }
            }
            
        }
        return 0;
    }
};
```