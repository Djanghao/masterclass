# Easy C++ Solution [beats 90%, 100%]

**Author:** Pooja0406
**Votes:** 1
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/373736/](https://leetcode.com/problems/diet-plan-performance/solutions/373736/)

---

Runtime: 36 ms, faster than 90.75% of C++ online submissions for Diet Plan Performance.
Memory Usage: 13 MB, less than 100.00% of C++ online submissions for Diet Plan Performance.

```
int dietPlanPerformance(vector<int>& calories, int k, int lower, int upper) {
        
        int res = 0;
        int n = calories.size();
        int sum = 0;
        
        for(int i=0; i<k; i++)
            sum += calories[i];
        
        if(sum < lower)
            res--;
        if(sum > upper)
            res++;
         
        
        for(int i=0, j=k; j<n; i++, j++)
        {
            sum = sum - calories[i] + calories[j];
            
            if(sum < lower)
                res--;
            if(sum > upper)
                res++;
        }
        
        return res;
    }