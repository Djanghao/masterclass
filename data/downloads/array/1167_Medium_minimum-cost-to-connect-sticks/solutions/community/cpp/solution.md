# EASY || FREE 99 || BEATS 99% || PRIORITY QUEUE

**Author:** cppshooter
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4573894/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4573894/)

---

# Explanation

Make a min heap, or a priority queue with all the smallest elements first. Add all elements from the sticks vector to it.

    priority_queue<int, vector<int>, greater<int>> q;
    for(int i : s) q.push(i);

While the queue has a size larger than 1 (when the queue has size 1, it has 1 stick left, which is the final combined stick), take the top 2 values of the queue, combine them and add their combined value to the total cost, and then push that combined value back into the queue (the 2 sticks are now 1 longer stick).

    while(q.size() > 1) {
        int s1 = q.top(); q.pop();
        int s2 = q.top(); q.pop();
        cost += s1 + s2;
        q.push(s1+s2);
    }

Return cost.

    return cost;

# Code
```
class Solution {
public:
    int connectSticks(vector<int>& s) {
        priority_queue<int, vector<int>, greater<int>> q;
        int cost = 0;
        for(int i : s) q.push(i);
        while(q.size() > 1) {
            int s1 = q.top(); q.pop();
            int s2 = q.top(); q.pop();
            cost += s1 + s2;
            q.push(s1+s2);
        }
        return cost;
    }
};
```