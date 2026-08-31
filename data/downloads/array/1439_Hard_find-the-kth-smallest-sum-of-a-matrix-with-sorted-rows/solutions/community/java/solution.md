# Java - PriorityQueue | Runtime: faster than 86.53% | Memory: less than 92.91%

**Author:** Jaineel-Mamtora
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/2032495/](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/2032495/)

---

![submission details](./images/0.png)


## Approach
The approach is to iteratively fix first row and choose subsequent rows as the 2nd row and find the `k` pairs with smallest sums.

We can find `k` pairs with smallest sums by following below approach:

* Create a `minHeap` of type `int[]` array (say `candidate`) where `candidate[0]` is number from first array (say `nums1`), `candidate[1]` is number from second array (say `nums2`) & `candidate[2]` is index of `candidate[1]` in the second array where the `minHeap` is sorted based on the sum of  `candidate[1]` & `candidate[2]`.
* Also, we create an `ArrayList` (say `list`) where we will insert the sum.
* We insert all the pairs of numbers from `nums1` with first element of `nums2`
* Then, while we have not processed `k` elements and `minHeap` is not empty, we remove the `candidate` from the `minHeap` & insert the sum of `candidate[1]` & `candidate[2]` in the `list` & insert the Pair of `candidate[0]` with next index in `nums2` if the next index is not out of bounds.
* in the end we return the `list` which can be treated as `nums1` in next iteration.

We are iterating over all the rows and modifying the row as the array returned in previous iteration.

Here's the Java code:
```
class Solution {
	public int kthSmallest(int[][] mat, int k) {
		int[] row = mat[0];

		for (int i = 1; i < mat.length; i++)
			row = kSmallestPairSums(row, mat[i], k);
		return row[k - 1];
	}

	private int[] kSmallestPairSums(int[] nums1, int[] nums2, int k) {
		List<Integer> list = new ArrayList<>();
		Queue<int[]> minHeap = new PriorityQueue<>((a, b) -> (a[0] + a[1]) - (b[0] + b[1]));

		for (int i = 0; i < k && i < nums1.length; i++)
			minHeap.offer(new int[] {nums1[i], nums2[0], 0});

		for (int i = 0; i < k && !minHeap.isEmpty(); i++) {
			int[] candidate = minHeap.poll();
			list.add(candidate[0] + candidate[1]);
            int nums2Idx = candidate[2];
			if (nums2Idx < nums2.length - 1)
				minHeap.offer(new int[] {candidate[0], nums2[nums2Idx + 1], nums2Idx + 1});
		}
        
		return list.stream().mapToInt(i -> i).toArray();
	}
}
```

Time Complexity: `O(no. of rows * no. of cols * k log(max(row-length, k))`
Space Complexity: `O(max(row-length, k))`

Feel free to provide optimizations if any. **Upvote** if you found this helpful.