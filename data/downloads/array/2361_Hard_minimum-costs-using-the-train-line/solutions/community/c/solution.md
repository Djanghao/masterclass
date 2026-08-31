# C++ || bottom up DP || O(n) time, O(1) space

**Author:** heder
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/2536627/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/2536627/)

---

### Solution 1: bottom up DP

We only need to keep track the cost of getting the previous station either regular or express and take the switching cost from regular to express into account.

```cpp
    vector<long long> minimumCosts(vector<int>& regular, vector<int>& express, int expressCost) {
        vector<long long> ans;
        ans.reserve(size(regular));

        long long r_prev = 0;
        // If we start on the express route we need to pay |expressCost|.
        long long e_prev = expressCost;
        
        for (int i = 0; i < size(regular); ++i) {
            // If we stay on the same route.
            const long long r_only = r_prev + regular[i];
            const long long e_only = e_prev + express[i];
            
            // Switching from express to regular is for free.
            const long long r_curr = min(r_only, e_only);
            // Switching from regular to express costs |expressCost|.
            const long long e_curr = min(r_only + expressCost, e_only);

            // As it doesn't matter how we reach a stop take the minimum.
            ans.push_back(min(r_curr, e_curr));
            
            r_prev = r_curr;
            e_prev = e_curr;
        }
        
        return ans;
    }
```

We could express this a little bit more compact with fewer intermediate variables:

```
    vector<long long> minimumCosts(vector<int>& regular, vector<int>& express, int expressCost) {
        vector<long long> ans;
        ans.reserve(size(regular));

        long long r_prev = 0;
        long long e_prev = expressCost;
        
        for (int i = 0; i < size(regular); ++i) {
            const long long r_curr = min(r_prev, e_prev) + regular[i];
            const long long e_curr = min(r_prev + expressCost, e_prev) + express[i];

            ans.push_back(min(r_curr, e_curr));
            
            r_prev = r_curr;
            e_prev = e_curr;
        }
        
        return ans;
    }
```

**Complexity Analysis**
  * Time Complexity: O(n) as we loop over ```regular``` and ```epxress``` just once.
  * Space Complexity: O(1) as we only have loop variables and if we don't count the ouput, in which case it would be O(n).

_As always: Feedback, comments, and questions are welcome. Upvote if you like to post_
