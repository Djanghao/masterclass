# [C++] Simple sliding window solution

**Author:** dev1988
**Votes:** 2
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/372382/](https://leetcode.com/problems/diet-plan-performance/solutions/372382/)

---

The OJ accepts a solution where we keep a fixed window of size k and calculate the points, however the sample case suggests different.

Simple sliding window approach is as follows:
```
class Solution {
public:
    int dietPlanPerformance(vector<int>& c, int k, int lower, int upper) {
        int count = 0, sum = 0, res = 0;
        
        for(int i = 0; i < c.size(); i++){
            sum += c[i];
            count++;
            if(count == k){
                if(sum > upper) res++;
                else if(sum < lower) res--;
                count--;
                sum = sum - c[i-k+1];
            }
        }
        return res;
    }
};
```