# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/4567459/](https://leetcode.com/problems/maximum-subsequence-score/solutions/4567459/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
public long maxScore(int[] nums1, int[] nums2, int k) {
    int n = nums1.length;
    int[][] ess = new int[n][2];
    for (int i = 0; i < n; ++i) {
        ess[i] = new int[] {nums2[i], nums1[i]};
    }
    Arrays.sort(ess, (a, b) -> b[0] - a[0]);
    PriorityQueue<Integer> pq = new PriorityQueue<>(k, (a, b) -> a - b);
    long res = 0, sumS = 0;
    for (int[] es : ess) {
        pq.add(es[1]);
        sumS = (sumS + es[1]);
        if (pq.size() > k) {
            sumS -= pq.poll();
        }
        if (pq.size() == k) {
            res = Math.max(res, (sumS * es[0]));
        }
    }
    return res;
}
```
```Javascript []
var maxScore = function(nums1, nums2, k) {
    let result = 0;
    let totalSum = 0;
    let heap = new MinPriorityQueue({priority: (element) => element})

    const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val])
    merged.sort((a,b) => b[0] - a[0])

    for (const [maxOf2, num1Val] of merged){
        if(heap.size() === k){
            totalSum -= heap.dequeue().element
        }

        totalSum += num1Val
        heap.enqueue(num1Val)

        if(heap.size() === k){
            result = Math.max(result, totalSum * maxOf2)
        }

    }

    return result
};
```
```Typescript []
interface pair<T, U> {
    first: T;
    second: U;
};
function maxScore(nums1: number[], nums2: number[], k: number): number {
    type number2 = pair<number, number>;
    function comparator(a: number2, b: number2): number {
        if (a.first === b.first) return a.second - b.second;
        else return b.first - a.first;
    }
    const n: number = nums1.length;
    const p: number2[] = new Array(n);
    const pq = new MinPriorityQueue();
    let res: number = 0, sum: number = 0;
    for (let i = 0; i < n; i++) p[i] = { first: nums2[i], second: nums1[i] };
    p.sort(comparator);
    for (let i = 0; i < n; i++) {
        const { first: a, second: b } = p[i];
        sum += b;
        pq.enqueue(b);
        if (i < k - 1) continue;
        if (pq.size() > k) sum -= pq.dequeue().element;
        res = Math.max(res, sum * a);
    }
    return res;
};

```