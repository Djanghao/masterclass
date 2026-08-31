# C++ Explained 🔥 Easy Solution 🔥Priority Queue 🔥

**Author:** ribhav_32
**Votes:** 114
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/3448875/](https://leetcode.com/problems/last-stone-weight/solutions/3448875/)

---

# **PLEASE UPVOTE \uD83D\uDC4D**
# Intuition
- #### To solve this problem, we can use a priority queue to keep track of the heaviest stones. 
- #### At each turn, we can pop the two heaviest stones from the heap, smash them together according to the given rules, and then push the resulting stone (if any) back onto the heap. 
- #### We repeat this process until there is at most one stone left in the heap.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- #### In this code, we first create the priority queue by negating the values of the stones. 
- #### We then loop until there is at most one stone left in the heap. Inside the loop, we pop the two heaviest stones from the queue and check whether they are equal or not.
    1. #### If they are not equal, we calculate the weight of the resulting stone and push it back onto the Queue (priority queue heapify itself after every push operation).
- #### Finally, we return the weight of the last remaining stone (or 0 if there are no stones left).
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(NLogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# **PLEASE UPVOTE \uD83D\uDC4D**
# Code
```
class Solution {
public:
    int lastStoneWeight(vector<int>& a) {
        priority_queue<int>pq(a.begin(),a.end());

        while(pq.size() > 1)
        {
            int a = pq.top();
            pq.pop();
            int b = pq.top();
            pq.pop();

            if(a != b)
                pq.push(abs(a-b));
        }
        return pq.empty() ? 0 : pq.top();
    }
};
```
![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)
