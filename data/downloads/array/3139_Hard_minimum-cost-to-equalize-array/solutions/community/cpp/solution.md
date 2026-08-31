# C++ Easy Solution || Line by Line Explanation (Brute Force Thinking)

**Author:** Manoj-22
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5115150/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5115150/)

---

```
Given : Make all the array elements as equal

Thoughts :
Our first thought after seeing the given examples is 
make all the array elements to maximum element in array.

What if, making all the arr elements to maximum is costlier than 
making all the arr elements to x (which is greater than max element in arr).

So, our search should between max to x ( > max)


In this way, we may have 3 cases

Case 1: If 2 * cost1 < cost2, then its better increment all elements one by one with cost1
Case 2: If 2 * cost1 > cost2, then its better to increment 2 elements atonce with cost2
Case 3 : For some element, we have to use cost1 and remaining elements we have to use cost2

Now, To increment the array elements, how can we do it ?

Instead of taking each element and increase by 1, 
To simplify it, we should find the difference between the elements and multiply it with cost1/cost2

```


```
class Solution {
    int mod = 1e9 + 7;
    
    long long maxElementInNumsArr = 0, minElementInNumsArr = LLONG_MAX, n, totalNumsArrSum = 0 ;
    
    
public:
    int minCostToEqualizeArray(vector<int>& nums, int cost1, int cost2) {
        
        maxElementInNumsArr = *max_element(nums.begin(), nums.end());
        
        minElementInNumsArr = *min_element(nums.begin(), nums.end());
        
        n = nums.size();
        
        totalNumsArrSum = accumulate(nums.begin(), nums.end(), 0LL);
        
        long long res = LLONG_MAX;
        
        // our search from max to x( > max i.e 2*max,3*max,......1e6+1)
        for(long long equalizeElement = maxElementInNumsArr; equalizeElement < 2*maxElementInNumsArr; equalizeElement++){
            // denotes the count which makes all ele equal to cur equalizeElement
            long long totalRequired = (equalizeElement * n) - totalNumsArrSum;
            
            // denotes the max count to make arr ele equal to cur equalizeEleme nt
            long long maxRequired = equalizeElement - minElementInNumsArr;
            
            // dentoes how many sets of pairs do we have to consider
            long long pair = min(totalRequired / 2, totalRequired - maxRequired);
            
            // 2 * cost1 => denotes taking 2 elements and increment it
            // whereas cost2 already denotes taking 2 elements
            long long totalCost = min(2 * cost1 * pair, cost2 * pair);
            
            // when you have less than 2 elements, then your only way to use cost1
            totalCost += cost1 * (totalRequired - 2 * pair);
            
            res = min(res, totalCost);
        }
        
        res %= mod;

        
        return res;
    }
};
```