# Greedy O(N^2) solution, clean C++ code with description

**Author:** metal4people
**Votes:** 44
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/346487/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/346487/)

---

**Description**

* Until the size of the array is more than 1;
  * Find the least a[i] * a[i+1] product and accumulate it;
  * Remove the least element which is min of the multipliers
  
 ```
   int mctFromLeafValues(vector<int>& a) 
    {
        int sum = 0;
        while(a.size() > 1)
        {
            int min_product = INT_MAX;   // min(a[0]*a[1], ... a[N-1]*a[N])
            int me_index = -1;           // min(a[i], a[i+1])
            
            for(int i = 1; i < a.size(); ++i)
            {
                if( min_product > a[i-1]*a[i])
                {
                    me_index = a[i-1] < a[i] ? i - 1 : i;
                    min_product = a[i-1]*a[i];
                }
            }
            sum += min_product;
            a.erase(a.begin() + me_index);
        }
        
        return sum;
    }
```
	
Please, upvote if you find my post useful.