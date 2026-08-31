# heap + sort

**Author:** user5663Lu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/4241203/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/4241203/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: nlogn + klogk (n = size of interval, k = size of queries)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: k
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minInterval(intervals: [number, number][], queries: number[]): number[] {
    
    const getLength = ([a, b]) => b - a + 1;
    const resMap: Map<number, number[]> = new Map(); // val: ogIndex;
    queries.forEach((val, index) => {
        if(!resMap.has(val)) {
            resMap.set(val, [index]);
        } else {
            resMap.get(val).push(index);
        }
    });

    const res = Array(queries.length);

    const minHeap = new MinPriorityQueue({priority: interval => interval[0]});

    
    // n log n
    queries.sort((a, b) => a - b);

    // sorting reversed order so can remove element more efficiently 
    intervals.sort((a, b) =>  a[0] - b[0] || a[1] - b[1]);

    let i = 0;
    for(const num of queries){
        if(!resMap.has(num)) {
            continue;
        }
        while(i < intervals.length && intervals[i][0] <= num) {
            const length = getLength(intervals[i])
            minHeap.enqueue([length, intervals[i][1]]);
            i++;
        }

        while(!minHeap.isEmpty() && minHeap.front().element[1] < num) {
            minHeap.dequeue();
        }

        const resVal = minHeap.isEmpty() ? -1 : minHeap.front().element[0];

        resMap.get(num).forEach(idx => {res[idx] = resVal})
        resMap.delete(num);
    }

    return res;


};
```