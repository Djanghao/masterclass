# Typescript - using MaxPriorityQueue

**Author:** ahmedengu
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/1193340/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/1193340/)

---

[Leetcode environment](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-) comes with [@datastructures-js/priority-queue](https://github.com/datastructures-js/priority-queue)  which I always wanted to try, so here we go :)
```
function dominantIndex(nums: number[]): number {
    const numbersQueue = new MaxPriorityQueue({ priority: (o) => o.v });
    nums.forEach((v, i) => numbersQueue.enqueue({ i, v }));
    const max1 = numbersQueue.dequeue().element;
    const max2 = numbersQueue.dequeue()?.element;
    return !max2 || max2.v * 2 <= max1.v ? max1.i : -1;
};
```