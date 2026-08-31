# Explained - Greedy || Very simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 61
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312319/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3312319/)

---

#### Up vote if you like the solution

# Approach 
At begining I was thinking about each condintions, but was littile bit tricky.

Then I come up with following way of figuring out the solution with out thinking much condition.

Keep on assigning 8 to each children until the remaining is greater than or equal to remainig children ( So that it is always possible to give at least 1 to each children). 

# Code
```
class Solution {
public:
    int distMoney(int money, int children) {
        int ans = 0;
        if(money < children) return -1;
        if(money > children * 8) return children - 1;
        
        while(money > 0 && money - 8 >= children - 1){
          ans++; money -= 8; children--;
        }
        if(money == 4 && children == 1) ans--;
        return ans;
    }
};
```

<b>Here is an article of my interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted