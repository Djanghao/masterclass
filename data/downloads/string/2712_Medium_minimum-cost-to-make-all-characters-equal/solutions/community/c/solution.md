# Single pass Iterative  || Easy Explanation || Think Greedy || One Line || Clean Code || c++

**Author:** yashagrawal20
**Votes:** 118
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3570185/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/3570185/)

---

# Intuition
Don't worry if you were not able to solve this problem during the contest,
Lets get into the question:


It says we have to flip all the bits in a Binary string i.e (0,1) to make the string of same bits of:

        Take ::  000000100
    For this test case first it is feasile to make last two zeroes flip
    i.e
                000000111
    And then make those three one's again flip:
                000000000
    Total step required : 2+3,


# Approach
1. start traversing through the array
    a. If you encounter different element i.e s[i] != s[i-1]:
        check from which side it is feasible for us to take less move to       make it equal min(i,n-i) either from the front or from the back.
2. Maintain a variable ans and keep on adding the min value required for us.

# Complexity
- Time complexity:
**Traversing the Array Once - 0(n)**

- Space complexity:
**No space Requeired - 0(1)**

# Code
```
class Solution {
public:
    long long minimumCost(string s) {
        long long ans = 0;
        int n = s.size();
        for(int i=1;i<n;i++)
        {
            if(s[i] != s[i-1])
            {
                ans += min(i,n-i); // Key Observation
                                    //Think Greedy 
            }
        }return ans;
    }
};
```