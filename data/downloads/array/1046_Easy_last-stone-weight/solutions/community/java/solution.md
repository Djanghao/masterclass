# ✅ Java | Easy Solution Explained 📝 | Similar Questions | Beginner friendly

**Author:** nikeMafia
**Votes:** 35
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/3449430/](https://leetcode.com/problems/last-stone-weight/solutions/3449430/)

---

# Intuition
Since we need to choose heaviest two stones everytime, this is a clear hint to go for heap data structure. In java we implement heap via priority queue.

Similar questions for heap i faced in interviews.
LC 347[ Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
LC 215[ Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
LC 23 [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)


---
# Approach
1) Make a heap via priority queue, we need to make a max heap as we need heaviest stone collision first.
2) Add stones[] to heap
3) Now run a while loop till there are two elements remaining in the hea[] i.e ```while(heap.size()>1)``` Two elements because each collision needs two stones atleast. 
- pick top 2 stones and calculate their difference
- if difference!=0 we need back to heap other both stones are destroyed.
4) Once outside the loop, check for size!=0 i.e once stone remains return that or return zero.

---
# Complexity
- Time complexity:
O(nlogn) : Building of heap intially nlogn, Then since we poll and push again to the heap, it needs to rebuild which takes logn(heapify) everytime.

- Space complexity:
O(n) at max we will have n elements in heap.

---

Hope it is easy to understand.
Let me know if there is something unclear and i can fix it.

Otherwise, please upvote if you like the solution, it would be encouraging


---
# Code
```
class Solution {
    public int lastStoneWeight(int[] stones) {
        //setting decreasing order of the heap or max heap
        PriorityQueue<Integer> heap = new PriorityQueue<>((a,b) -> b-a);
        for(int each: stones)
            heap.add(each);

        while(heap.size()>1){
            int top1 = heap.poll();
            int top2 = heap.poll();
            int diff = Math.abs(top1-top2);

            if(diff!=0){
                heap.add(diff);
            }
        }

        if(heap.size()!=0){
            return heap.poll();
        }else{
            return 0;
        }
    }
}
```