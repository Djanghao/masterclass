# JavaScript Solution

**Author:** gpambasana
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/2806972/](https://leetcode.com/problems/find-median-from-data-stream/solutions/2806972/)

---

# Code
```
class MedianFinder {
    finder: Array<number>;

    constructor() {
        this.finder = [];
    }

    addNum(num: number): void {
        const len = this.finder.length;
        if (len === 0 || this.finder[len - 1] <= num)
            this.finder.push(num);
        else {
            const i = this.finder.findIndex(n => n > num);
            this.finder.splice(i, 0, num);
        }
    }

    findMedian(): number {
        const len = this.finder.length;
        const mid = Math.floor(len / 2);
        if (len % 2) return this.finder[mid];
        else return (this.finder[mid - 1] + this.finder[mid]) / 2;
    }
}
```