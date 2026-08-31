# Simple O(n) C++ DP Solution || Space Optimized DP

**Author:** Debarchan_Nayek
**Votes:** 12
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/2032428/](https://leetcode.com/problems/best-sightseeing-pair/solutions/2032428/)

---

**Intuition & Logic :**
We have the formula score = values[i] + values[j] +i -j
Now, we are required to maximise score. So, we can modify the the formula as:
max(score) = max(values[i] + values[j] + i - j) = max(values[i]+i) + max(values[j] - j)

Now, at every index j, values[j]-j is fixed. Hence our obejctive would be to find the best previous index(i) which gives us the maximum score. We will achieve this by storing the values in a dp array, by calculating the max value between the previously stored value and current calculated value, i.e values[i] + i.

Finally, we will calculate score based on our formula, where max(values[i]+i) will be stored in dp[i-1].

The **code** is given below : 

```
class Solution {
public:
    int maxScoreSightseeingPair(vector<int>& values) {
        int score=INT_MIN,n=values.size();
        int dp[n];
        dp[0]=values[0];
        
        for(int i=1;i<n;i++){ 
            score=max(score,dp[i-1]+values[i]-i);		
            dp[i] = max(dp[i-1],values[i]+i);
        }
        
        return score;
    }
};
```

Time Complexity : O(n)
Space Complexity: O(n)

Now, we can reduce the extra space by storing the  max(values[i]+i) in a variable instead of an array.

```
class Solution {
public:
    int maxScoreSightseeingPair(vector<int>& values) {
        int score=INT_MIN,n=values.size();
        int maxLeft = values[0];
        
        for(int i=1;i<n;i++){ 
            score=max(score,maxLeft+values[i]-i);
            maxLeft = max(maxLeft,values[i]+i);
        }
        
        return score;
    }
};
```

T.C: O(n)
S.C: O(1)

**Please upvote if you liked the explanation**