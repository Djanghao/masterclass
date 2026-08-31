# Simple C++ solution using sort. Idea Explained.

**Author:** user7570L
**Votes:** 414
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3111642/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3111642/)

---

# Approach
First, there are two special cases: when $k=1$ or $n=k$, there is just one possible distribution. When $k=1$ we can do nothing but put all marbles in one bag. When $n=k$, we can only put one marble in each bag. Since there is just one possible distribution, the difference between the one with maximum score and the one with minimum score would obviously be 0. 

Now let's think about the general case. Suppose there are $n$ marbles and $k$ bags. We can observe that regardless how we put the marbles, the weight of the first marble and the last marble would always be counted. The score differs among different distributions which depends on how we split the marbles in the middle. 

Consider the marbles (I will just note the indices below): $[0, 1, 2, ..., n-1]$. To split them into $k$ different bags, we just need to put $k-1$ bars in the gaps of the marbles. That being said, we have $n-1$ gaps, and we put $k-1$ bars there. When we put a bar after $i$-th marble, the score of such distribution would increase by $weights[i] + weights[i+1]$

Taking $n=10, k = 3$ as an example, One possible distribution is $[0, 1, 2, | 3, 4, 5, 6, 7, | 8, 9]$. When we put a bar after marble 2, the score increases by $weights[2] + weights[3]$. 

Hence, the problem turns into that, with $n-1$ gaps, and the score added after placing a bar after $i$-th marble is $weights[i] + weights[i+1]$, we want to find the minimum/maximum score after placing $k-1$ bars.

With this understanding, the solution is simple: record $weights[i] + weights[i+1]$ for each $0 \\leq i < n-1$, sort them, select $k-1$ smallest/largest ones from them, and find the difference in score. 

# Complexity
- Time complexity:
$$O(n\\log n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
public:
    long long putMarbles(vector<int>& weights, int k) {
        int n = weights.size();
        if (k == 1 || n == k) return 0;
        vector<int> candidates;
        for (int i = 0; i < n-1; i++)
        {
            candidates.push_back(weights[i] + weights[i+1]);
        }
        sort(candidates.begin(), candidates.end());
        long long mins = 0, maxs = 0;
        for (int i = 0; i < k-1; i++)
        {
            mins += candidates[i];
            maxs += candidates[n-2-i];
        }
        return maxs - mins;
    }
};
```