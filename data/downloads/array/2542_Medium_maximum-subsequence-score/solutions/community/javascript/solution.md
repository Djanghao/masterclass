# Heap | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3557264/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3557264/)

---

Hello **Tenno Leetcoders**, 

For this problem, we are given two  `0-indexed integer` arrays `nums1` and `nums2` of equal length n and a positive integer `k`. You must choose a subsequence of indices from `nums1` of length `k`.

Our score can be defined as:

1) The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.

2) It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).

We want to return the `maximum` possible score

## Explanation

Our goal is to choose a subseqeuence of indices from `nums1` of length `k` and calculate the maximum possible score based on the provided formula for defined as score.

We can use  `min heap` approach to maintain sorted list of elements from `nums1`. By using `min heap`, we will be able to keep track of the `k` largest element from `nums1` in a sorted manner. This will ensure that we always have the largest element available to construct our subseqeuences.

We can consider the minimum values from `nums2` first. We can merge `nums1` and `nums2` into a single list and sort it in decreasing order based on the values of `nums2`. This will ensure that the minimum value from `nums2` are considered first. Since our score will be determined by multiplying the sum of selected elements from `nums1` with the minimum value from `nums2`. Since we are considering the minimum value first, we have increased the chnace of obtaining a `maximum` score

Keeping a running sum called `total_sum` so that we can keep track of the sum of elements in the current subsequence. 
 

We will iterate through the merged element based on the maximum value of `nums2` and corresponding value from `nums1` respectiviely 

Check if the heap is filled with `k` elements, the `smallest element` will be `removed` from the heap and subtracted from `total_sum` as this will update the sum by excluding the smallest element and adding a new element onto the subsequence and ensure the heap only constains `k` smallest element at any given time

Continuously update `total_sum` by adding current values of `nums1` to calculate the current subsequence and push `nums1` values into min heap 

Again, check if the heap is filled with `k` elements, this time instead of popping from heap and subtracting from total sum, we calculate our result as `total_sum * maxOf2` as we will multiply the sum of the current subsequecne by the maximum value of `nums2` corresponding with that subsequence and update our result based on which one is greater `total_sum * maxOf2` or `result`

We then return result


# Code
**Python**
```
import heapq

class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        result = 0
        total_sum = 0 
        heap = [] 
       
        merged = [(nums2[i], nums1[i]) for i in range(len(nums1))]
        merged.sort(reverse=True)

        for maxOf2, num1Val in merged: 
            if len(heap) == k: 
                total_sum -= heapq.heappop(heap)  

            total_sum += num1Val
            heapq.heappush(heap, num1Val)  
           
            if len(heap) == k:
                result = max(result, total_sum * maxOf2) 
        return result
```
**JavaScript**
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
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


### Time Complexity: O(n log(k))
### Space Complexity: O(k)


 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***

![image](./images/0.gif)
