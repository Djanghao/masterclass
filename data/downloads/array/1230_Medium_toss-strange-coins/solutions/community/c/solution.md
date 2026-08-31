# C++ DP solution with intuitive explanation

**Author:** LeetcodeKZ
**Votes:** 50
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/408518/](https://leetcode.com/problems/toss-strange-coins/solutions/408518/)

---

This problem can be solved using a __dynamic programming__ approach. 
Our DP array is *d[i][j]* which answers the question => **What is the probability of having j items till i-th coin inclusively?**
**1**.
```c++
The base case is when we have a zero target.
This can be computed using the recurrence relation as the cumulative product of prob[i] negations. 
```
**2**.
For all other variations of filling *d[i][j]*, we have two options.
* **i-th coin has a tail**
	```c++
	P1 = (proability of having j coins till i) * (probability of having a tail)
	```
* **i-th coin has a head**
	```c++
	P2 = (probability of having j - 1 coins till i) * (probability of having a head)
	```
Therefore, the probability of having *j heads till i-th coin inclusively will be*
```c++
P = P1 + P2;
```



```c++
class Solution {
public:
    double probabilityOfHeads(vector<double>& prob, int target) {
        vector<vector<double> > d(prob.size() + 1, vector<double>(target + 1, 0));
        d[0][0] = 1.0;
        for (int i = 1; i <= prob.size(); ++i)
            for (int j = 0; j <= target; ++j)
                if (j == 0) d[i][j] = d[i - 1][j] * (1 - prob[i - 1]);
                else  d[i][j] =  d[i - 1][j - 1] * prob[i - 1] + d[i - 1][j] * (1.0 - prob[i - 1]);
        return d[prob.size()][target];
    }
};
```

**Complexity:**
**Time complexity:** O(target * n) => **O(n^2)**, because the target is in range [0,n]
**Space complexity:**  **O(n^2)**. 
However, the space complexity might be reduced to **O(n)**
**Hint:** for filling results of *d[i][j]* we only need to have an access to the vector with j-1 coins.

P.S. If you like this solution, please upvote so more people can see this post.