# [C++] Simple recursive function

**Author:** dev1988
**Votes:** 5
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/397810/](https://leetcode.com/problems/stepping-numbers/solutions/397810/)

---

We simply start with every number from i =1 to 9, and keep adding next possible entry(+1 and -1 to last digit).
Once we have all the numbers, we sort and return.
PS: Entries are gauranteed to be unique so no need to think about duplicates.

```
class Solution {
public:
    vector<int> countSteppingNumbers(int low, int high) {
        vector<int> res;
        if(low == 0) res.push_back(0);
        for(int i = 1; i < 10; i++){
            helper(low, high, i, res);
        }
        sort(res.begin(), res.end());
        return res;
    }
    /* We use long int so that we do not have to use overflow check for cur value*/
    void helper(int low, int high, long int cur, vector<int> &res){
        if(cur > high) return;
        if(cur >= low) res.push_back(cur);
        
        int last = cur%10;
        long int next = cur*10+last+1;
        long int prev = cur*10+last-1;
        
        if(last != 0) helper(low, high, prev, res);
        if(last != 9) helper(low, high, next, res);
    }
};
```