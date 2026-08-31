# [C++, Java, Python] Simple Explanation O(N)

**Author:** sachuverma
**Votes:** 41
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/1042904/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/1042904/)

---

### Explanation:

We have given count of all candies of a particular type, 
Now as I have to eat all the candies of `type < i` before eating candy of `type i`, so we can have a prefix sum array for candies count
(int array elements can overflow)

As for each query, we have
*  **type**
*  **day**
*  **capacity**

Now, 
max and min day required to eat are 
`maxDay = prefix[type+1]-1;`
`minDay = prefix[type]/capacity;`

If, day lies between max and min day then query is `true`
else `false`

### Code:
            
**C++**
```
class Solution {
public:
    vector<bool> canEat(vector<int>& candies, vector<vector<int>>& queries) {
      int n = candies.size();
      vector<long long> prefix(n+1, 0);
      for(int i=1; i<n+1; ++i) prefix[i] = prefix[i-1] + candies[i-1];
      
      vector<bool> ans;
      for(auto &query: queries){
        long long type = query[0], day = query[1], capacity = query[2];
        long long maxDay = prefix[type+1]-1;
        long long minDay = prefix[type]/capacity;
        
        if(day <= maxDay && day >= minDay) ans.push_back(true);
        else ans.push_back(false);
      }
      
      return ans;
    }
};
```
                            
**Java** `(by @karthiko)`
```
class Solution {
    // T = O(n) S=O(n)
    public boolean[] canEat(int[] candiesCount, int[][] queries) {
        // calculate prefix sum
        long[] prefix = new long[candiesCount.length+1];
        boolean[] res = new boolean[queries.length];
        prefix[0] = 0;
        
        for(int i=1; i< prefix.length; i++)
            prefix[i] = prefix[i-1]+candiesCount[i-1];
        
        for(int i=0; i< res.length; i++) {
            int type = queries[i][0];
            int day  = queries[i][1];
            int cap  = queries[i][2];
            
            // max and min day required to eat
            // if we eat one candy per day including type candy (prefix[type+1]). we decrement by 1 since we need atleast one candy of type
            long maxDay = prefix[type+1]-1; 
            // if we eat upto capacity each day upto previous candy
            long minDay = prefix[type]/cap; 
        
            // check if query day is within the limits (minDay and maxDay inclusive)
            res[i] = (minDay <= day && day <= maxDay);            
        }
        
        return res;
    }
}
```
                 
**Python** `(by @chimao)`
```
 def canEat(self, candiesCount: List[int], queries: List[List[int]]) -> List[bool]:
        result = [False] * len(queries)
        presum = [0] + candiesCount[:]
        for i in range(1, len(presum)):
            presum[i] += presum[i - 1]
            
        for idx, val in enumerate(queries):
            candType, favDate, cap = val
            mx = presum[candType + 1] - 1
            mn = presum[candType]//cap
            if mn <= favDate <= mx:
                result[idx] = True
                
        return result
```