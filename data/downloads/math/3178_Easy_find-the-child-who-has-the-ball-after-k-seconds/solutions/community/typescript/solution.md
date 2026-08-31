# TypeScript | Efficient O(1) solution

**Author:** cbsingh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5425856/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5425856/)

---



# Code
```
function numberOfChild(n: number, k: number): number {
    //Same as Leetcode 2582

    const fullRounds = Math.floor(k/(n-1));
    const extraTime = k % (n-1);

    return fullRounds%2===0 ? extraTime : n-extraTime-1;
};
```