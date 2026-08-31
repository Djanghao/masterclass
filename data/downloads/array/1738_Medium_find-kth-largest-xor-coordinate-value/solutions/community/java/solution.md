# Java | 2 methods | Explained

**Author:** prashant404
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/1258051/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/1258051/)

---

**Idea:** This problem is a combination of 2 problems:
* [LC 304: Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/discuss/1256376/Java-or-Fenwick-Tree), followed by
* [LC 215: Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/1258054/Java-or-Quick-Select-or-Time-beats-100).

After finding the prefix array from first step (LC 304), the problem reduces to finding the kth largest in that array (LC 215). Finding kth largest can be done in a lot of ways, the fastest being quick select. Quick Select's speed is also effected by the choice of pivot. More often than not, the [median of three technique](https://stackoverflow.com/questions/7559608/median-of-three-values-strategy) comes out to be the fastest with the least computational overhead (read random pivot).

**Method 1:** Prefix XOR and Min Heap
>**T/S:** O(mn lg k)/O(mn)
```
public int kthLargestValueHeap(int[][] matrix, int k) {
	var minHeap = new PriorityQueue<Integer>(k);
	var prefixXor = new int[matrix.length + 1][matrix[0].length + 1];
	
	for (var i = 1; i < prefixXor.length; i++)
		for (var j = 1; j < prefixXor[0].length; j++) {
			prefixXor[i][j] = matrix[i - 1][j - 1]
							^ prefixXor[i - 1][j]
							^ prefixXor[i][j - 1]
							^ prefixXor[i - 1][j - 1];
			minHeap.add(prefixXor[i][j]);
			if (minHeap.size() > k)
				minHeap.poll();
		}
		
	return minHeap.peek();
}
```

**Method 2:** Prefix XOR and Quick Select
>**T/S:** O(mn)/O(mn)

```
public int kthLargestValue(int[][] matrix, int k) {
	var m = matrix.length;
	var n = matrix[0].length;
	var prefixXor = new int[m + 1][n + 1];
	var flattened = new int[m * n];

	for (int t = 0, i = 1; i < m + 1; i++)
		for (var j = 1; j < n + 1; j++) {
			prefixXor[i][j] = matrix[i - 1][j - 1]
							^ prefixXor[i - 1][j] // left neighbor
							^ prefixXor[i][j - 1] // top neighbor
							^ prefixXor[i - 1][j - 1]; // intersection of left and top neighbors
			flattened[t++] = prefixXor[i][j];
		}

	var target = flattened.length - k;
	quickSelect(flattened, 0, flattened.length - 1, target);
	return flattened[target];
}

private void quickSelect(int[] nums, int start, int end, int target) {
	if (start >= end)
		return;
	var i = start;
	var j = end;
	var pivot = getPivot(nums[start], nums[(start + end) / 2], nums[end]);
	// partition starts
	while (i <= j) {
		while (nums[i] < pivot)
			i++;
		while (nums[j] > pivot)
			j--;
		if (i <= j)
			swap(nums, i++, j--);
	}
	// partition ends
	if (target < i)
		quickSelect(nums, start, i - 1, target);
	else
		quickSelect(nums, i, end, target);
}

private void swap(int[] nums, int i, int j) {
	var temp = nums[i];
	nums[i] = nums[j];
	nums[j] = temp;
}

private int getPivot(int a, int b, int c) {
	var triplet = new int[]{a, b, c};
	Arrays.sort(triplet);
	return triplet[1];
}
```
***Please upvote if this helps***