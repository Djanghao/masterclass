# C++ EASY SOL ✅ USING PRIORITY QUEUE , BEATS 100%

**Author:** sailakshmi1
**Votes:** 31
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189359/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189359/)

---

**PLEASE UPVOTE IF YOU FIND THE SOLUTION HELPFUL**
```
class Solution {
public:
    bool isPossible(vector<int>& target) {
        priority_queue<int> pq;
        unsigned int sum = 0;
        for (int x : target){
            sum += x, pq.push(x);
        }
        while (pq.top() != 1) {
            int x = pq.top();
            pq.pop();
            sum-=x;
            if (x<= sum || sum < 1) return false;
            x%= sum;
            sum+=x;
            pq.push(x?x: sum);
        }
        return true;
    }
};