# TypeScript: Greedy one swap one with Priority Queue, with traceable example

**Author:** realdennis
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/1526235/](https://leetcode.com/problems/course-schedule-iii/solutions/1526235/)

---

Credit on this post [JS, Python, Java, C++ | Simple Priority Queue / Heap Solution w/ Explanation](https://leetcode.com/problems/course-schedule-iii/discuss/1187504/JS-Python-Java-C%2B%2B-or-Simple-Priority-Queue-Heap-Solution-w-Explanation) 

I tried to make a use case for this greedy approach.

```
/**
eg. [2,2],[5,7],[4,8],[4,10]

run1 
    cur = 2, pq = 2
run2
    2+5 >=7
    cur = 7, pq = 5,2
run3
    cur = 7+4 >= 8, check pq if there's greedy choice by swap the prev maxDur (5>4) ---> key point is this.
    cur = 6, pq = 4,2
run4
    6+4 >=10
    cur = 10, pq = 4,4,2
**/
function scheduleCourse(C: number[][]): number {
    C.sort((prev,next) => prev[1] - next[1]); // lastDate increasing, so we can greedy swap in local
    const maxQueue = new MaxPriorityQueue({priority: val => val});
    
    let cur = 0;
    for(const [dur, last] of C) {
        if(cur + dur <= last) {
            cur += dur;
            maxQueue.enqueue(dur);
        }else {
            if(maxQueue.size()!==0 && maxQueue.front().element > dur) {
                const maxDur = maxQueue.dequeue().element; 
                // why we can dequeue? 
                // if we can swap out the maxDur(which > curDur) to other small duration would be a greedy to choose 
                // course counts would be the same
                cur+=dur - maxDur;
                maxQueue.enqueue(dur);                
            }
        }
    }
    return maxQueue.size();
};
```