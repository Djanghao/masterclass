# Java Min Heap

**Author:** lacfo
**Votes:** 5
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/4239640/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/4239640/)

---

# Intuition
If all prefix sum are non-negative, then we don't need to do any operation. So we can go from left to right of the array and only do operation when the prefix sum is less than 0.

My first thought is that when prefix sum is less than 0, we can move the curent negative number to the end. But later I came up with a test case
`1, 2, 3, 4, -8, -1, -1, -1, -1, -1, 3`. The correct answer is making only 1 operation by putting -8 at the end. But if I used the algorithm of my first thought, it is 3 operations.

So we should put the smallest number ever seen to the end, not the current negative number to the end. This will lead to the smallest number of operations. So we need to use min heap to track the smallest number.

# Complexity
- Time complexity:
`O(NlogN)`

- Space complexity:
`O(N)`

# Code
```
class Solution {
    public int makePrefSumNonNegative(int[] nums) {
        // we should put negative number at the end of array
        // so you can first go from left to right, but you need to put the negative on the end if 
        // the prefix sum is negative
        // so we can use a linkedlist

        // but there is an example, like 1, 2, 3, 4, -8, -1, -1, -1, -1, -1, 3
        // in this case, if we go from left to right, if presum < 0, we put to end
        // this will lead to 3
        // but we only need one operation, which is put -8 at the end

        // this is true. But actually we can move the smallest number ever seen not the current number
        // when prefix sum is less than 0
        // this will lead to the smallest number of operation
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        long prefixSum = 0;
        int res = 0;
        for (int num : nums) {
            prefixSum += num;
            pq.add(num);
            if (prefixSum < 0) {
                res++;
                prefixSum -= pq.poll();
            }
        }
        return res;
    }
}
```