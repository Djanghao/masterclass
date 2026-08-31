# Heap | Java | Find "Smallest"

**Author:** Student2091
**Votes:** 32
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2456812/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2456812/)

---

A pretty difficult problem I think. Here is how I solved it during the contest: 

First, I consider only the case where the array contains positive integers only. It is obviously that we can find the `k`th smallest subsequence and subtract it from sum of all (positive) elements. Second, I consider the case when negative elements mixed in. We have 2 options to decrease the max sum. Either include a biggest negative number or exclud the smallest positive number. In either cases, the sum will be reduced by its absolute value. 

So, I add up all positive values. Sort it, and make all negative elements positive. But I think here is the difficult part.
How do we find the `k`th smallest subsequence? I consider heap, and we just need a way such that we iterate through all the subsequence somehow. 
so, consider the smallest element `{0}`, we can split it like so

`{0} -> {0, 1} and {1}`
`{1} -> {1, 2} and {2}`
`{0, 1} -> {0, 1, 2} and {0, 2}`
`{a, a+1, a+2, ..., a+k} -> {a, a+1, a+2, ..., a+k, a+k+1} and {a, a+1, a+2, ..., a+k+1}`
In short, heap item ending in `a_k` spliting into 2 subsequences, both ending in `a_(k+1)` but one with `a_k` and the other without. 
It's a tree where 2 children are at least as large as its parent.

`Time O(nlogn + KlogK)`
`Space O(K)`
```Java
class Solution {
    public long kSum(int[] nums, int k) {
        long minus = 0, all = 0;
        for (int i = 0; i < nums.length; i++){
            all += Math.max(nums[i], 0); // take all positive values 
            nums[i] = Math.abs(nums[i]); // make all non-negative
        }
        Arrays.sort(nums); // sort it
        var minheap = new PriorityQueue<long[]>(Comparator.comparingLong(o -> o[0]));
        minheap.offer(new long[]{nums[0], 0});
        while(--k>0){ // construct the smallest subsequence value in a smart way
            long[] top = minheap.poll();
            int i = (int)top[1]++;
            long val = top[0];
            minus = val;
            if (i < nums.length-1){ // each item (node) branches out into 2 (children)
                top[0] += nums[i+1];
                minheap.offer(new long[]{val - nums[i] + nums[i+1], i+1});
                minheap.offer(top);
            }
        }
        return all - minus;
    }
}
```