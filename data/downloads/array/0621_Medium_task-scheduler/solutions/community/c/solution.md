# C++ Greedy, O(n) time, O(1) space with explanation, in 5 lines.

**Author:** tom0727
**Votes:** 95
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/760569/](https://leetcode.com/problems/task-scheduler/solutions/760569/)

---

This is a very good problem. It makes me immediately think of a problem in atcoder: 
https://atcoder.jp/contests/abc143/tasks/abc143_f
I strongly recommend you trying this problem, it is very good!

For this problem it is simplier but still a bit tricky. Here are my ideas:

Q0. It seems like a greedy problem. How to make the time units being occupied as many as possible?
A0. Choose every `n+1` elements in a round. And choose those with the maximum occurence.

For example: `["A","A","A","A","A","B","B","C"], n = 1`, `A` occurs `5` times, `B` occurs `2`, C occurs `1`. Then in the first round we choose `A,B`. Second round choose `A,B`. Third round choose `A,C`. Fourth round we can only choose `A,null`. Fifth rounds we choose `A` only. We use 5 rounds in total, which need 9 units.

Q1. What is the "lower bound" of the answer? That is, what is "forcing" us to use more units?
A1. Obviously, the lower bound is determined by `maxcnt`, the maximum of the occurence of each element. In the above example, `maxncnt = 5`. So, we have to choose ***at least*** `maxcnt` rounds, hence the answer is at least `(maxcnt-1)*(n+1) + e`. Where `e` is the number of occurences which equals to `maxcnt`. In the above example, there is only one element with occruence equals to `5`, hence `e = 1`.

Q1.5. Wait, why isn't the lower bound equals to `maxcnt * (n+1)`? 
A1.5. See the above example, in last round we don't need to wait for anything. But if there are multiple elements having occurence = `maxcnt`, we still need to handle them.

Q2. What is the "upper bound" of the answer? That is, what if we don't have any idle time units, what is the answer then?
A2. Obviously, it is the size of input array `tasks`.

So we are done! The answer is just: `max(tasks.size(), (maxcnt-1)*(n+1) + e)`.

Q3. But how to prove this? 
A3. A serious proof is a bit long, but the intuition is that, if we are not bounded by the "lower bound". We can fully use all the time units.

```
class Solution {
public:
    int cnt[26], maxcnt = 0, e = 0;
    int leastInterval(vector<char>& tasks, int n) {
        for (char c : tasks) cnt[c-'A']++;
        for (int i = 0; i < 26; i++) maxcnt = max(maxcnt, cnt[i]);
        for (int i = 0; i < 26; i++) 
            if (cnt[i] == maxcnt) e++;
        return max(tasks.size(), (maxcnt-1)*(n+1) + e);
    }
};
```