# Max Heap || Easy to Understand || 80% Faster

**Author:** rishiagarwal01
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/2963396/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/2963396/)

---

```
class Solution {
public:
    int halveArray(vector<int>& nums) {
        priority_queue<double> p;
        double sum=0.0;
        for(auto it:nums)
        {
            p.push(it);
            sum+=it;
        }
        double req=sum/2.0;
        double currsum=0.0;
        int c=0;
        while(currsum<req)
        {
            double x=p.top();
            p.pop();
            double m=x/2.0;
            p.push(m);
            c++;
            currsum+=m;
        }
        return c;
    }
};
```