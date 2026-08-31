# MOST OPTIMISED || C++ || EASY TO UNDERSTNAD

**Author:** ganeshkumawat8740
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3522531/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3522531/)

---

make an array of size n. initially no one have ball so all are false.
1st person have ball
than 1+i*k person have ball (i = ith step)
modulo is use for circular

# Code
```
class Solution {
public:
    vector<int> circularGameLosers(int n, int k) {
        int x = 1,y=1;
        vector<int> v(n+1,false);
            // cout<<y<<" ";
        while(!v[y]){
            v[y] = true;
            y = ((y+x*k)%n);
            if(y==0)y = n;
            // cout<<y<<" ";
            x++;
        }
        vector<int> ans;
        for(x = 1; x <= n; x++){
            if(!v[x])ans.push_back(x);
        }
        return ans;
    }
};
```