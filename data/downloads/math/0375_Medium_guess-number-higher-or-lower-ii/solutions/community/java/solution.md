# Java O(n^2) DP solution with clear explanation

**Author:** rikimberley
**Votes:** 15
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/84823/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/84823/)

---

This is to share my understanding about the amazing O(n^2) dp solution, which originates (I guess) from http://artofproblemsolving.com/community/c296841h1273742, and was introduced by https://discuss.leetcode.com/topic/51487/an-o-n-2-dp-solution-quite-hard/2 earlier. 

The main idea of the algorithm is to optimize the computations for the trivial O(n^3) dp solution. My understanding for the algorithm is as follows. Notice that my code is a little different from the original code given by the two references.

First, define **f[a][b] = the min worst-cast cost to guess a number a<=m<=b**, thus, f[1][n] is the result, and **f[a][b] = min{max{f[a][k-1], f[k+1][b]}+k} for a<=k<=b**.

Second, define **k0[a][b] = max{k : a<=k<=b && f[a][k-1]<=f[k+1][b]}**. then
**max{f[a][k-1], f[k+1][b]} = f[k+1][b]** if a<=k<=k0[a][b], and **=f[a][k-1]** if k0[a][b]<k<=b. 

Therefore, **f[a][b]=min( f1[a][b], f2[a][b] )**, where **f1[a][b] = min{ f[k+1][b]+k } for a<=k<=k0[a][b]**, and **f2[a][b] =** min{ f[a][k-1]+k, k0[a][b]<k<=b} = **f[a][k0[a][b]]+k0[a][b]+1**.

Now the key is: given a, b, how to find k0[a][b] and f1[a][b], in O(1) time. And I think that is also the most tricky or difficult part.

We shall run the algorithm in double-looping structure, which is **for(b=1, b<=n, b++){ for(a=b-1; a>0; a--) proceed_to_find_f[a][b]; }**. Therefore, f[i][j] for abs(i-j)<b-a are already obtained, and k0[a+1][b] was just found.

Clearly, a<=k0[a][b]<=k0[a+1][b]<=b. Thus, along the inner loop of (a=b-1; a>0; a--), **k0[all a's][b] would be found by definition in O(b) time**. In other words, it is O(1) time to get k0[a][b] for fixed a, b.

Now consider the index sequence: a, a+1,..., k0[a][b] ,..., k0[a+1][b], ..., b.

Suppose currently a deque is used to store the values of **{ f[k+1][b]+k, a+1<=k<=k0[a+1][b] } sorted** in ascending order (from the last step).

To find f1[a][b] = min{ f[k+1][b]+k } for a<=k<=k0[a][b], we have to **throw away the values** in the deque whose corresponding index j satisfies **k0[a][b]<j**<= k0[a+1][b], and **add the value f[a+1][b]+a** into deque, then **extract the minimum**. Since the deque is sorted, we can do the process by:

**while(peekFirst().index > k0[a][b]) pollFirst();**
**while(f[a+1][b]+a < peekLast().value) pollLast();** // The elements polled are useless in the later loops (when a is smaller)
**offerLast(new Item(index=a, value=f[a+1][b]+a));**
**f1[a][b] = peekFirst().value;**

Similar to the insertion sort, the above process still yields a sorted deque. Notice that given a, b, the deque is offered only once. Thus, for fixed b, deque.size()<= b. Hence along the inner loop of (a=b-1;a>0; a--), **deque is offered for b times, and so is polled at most for b times**. In other words, it is O(1) time to get f1[a][b] for fixed a, b.

Since we have a double-looping with variables a,b, **the overall time complexity is O(n^2)**. In fact, k0[ ][ ], f1[ ][ ], f2[ ][ ] needn't be stored. My java code is as follows:
```
public int xxxgetMoneyAmount(int n) {
	int[][] f = new int[n + 1][n + 1];
	Deque<Integer[]> q; // item[]{index, value}

	int a, b, k0, v, f1, f2;

	for (b = 2; b <= n; b++) {
		k0 = b - 1;
		q = new LinkedList<Integer[]>();

		for (a = b - 1; a > 0; a--) {
			// find k0[a][b] by definition in O(1) time.
			while (f[a][k0 - 1] > f[k0 + 1][b])
				k0--;

			// find f1[a][b] in O(1) time.
			while (!q.isEmpty() && q.peekFirst()[0] > k0)
				q.pollFirst();

			v = f[a + 1][b] + a;

			while (!q.isEmpty() && v < q.peekLast()[1])
				q.pollLast();

			q.offerLast(new Integer[] { a, v });

			f1 = q.peekFirst()[1];
			f2 = f[a][k0] + k0 + 1;
			f[a][b] = Math.min(f1, f2);
		}
	}

	return f[1][n];
}
```
Notice that the operations of deques are not quite efficient. However, from the analysis above, we know that deque.size()<= b, therefore, **we can just use arrays of size O(n) to fulfill the operations of the deque**. The code is as follows, which runs about 4 times faster than the one above.
```
public int getMoneyAmount(int n) {
	int[][] f = new int[n + 1][n + 1];

	// replace deque by idx and val arrays:
	// q.pollFirst()={index[beginIdx], value[beginIdx]},
	// q.pollLast()={index[endIdx], value[endIdx]}, ...
	int beginIdx, endIdx;
	int[] index = new int[n + 1];
	int[] value = new int[n + 1];

	int a, b, k0, v, f1, f2;

	for (b = 2; b <= n; b++) {
		k0 = b - 1;

		beginIdx = 0;
		endIdx = -1; // q.isEmpty()==(beginIdx>endIdx)

		for (a = b - 1; a > 0; a--) {
			// find k0[a][b] by definition in O(1) time.
			while (f[a][k0 - 1] > f[k0 + 1][b])
				k0--;

			// find f1[a][b] in O(1) time.
			while (beginIdx <= endIdx && index[beginIdx] > k0)
				beginIdx++; // q.pollFirst();

			v = f[a + 1][b] + a;

			while (beginIdx <= endIdx && v < value[endIdx])
				endIdx--; // q.pollLast();

                        // q.offerLast(new Integer[] { a, v });
			endIdx++;
			index[endIdx] = a;
			value[endIdx] = v; 

			f1 = value[beginIdx];
			f2 = f[a][k0] + k0 + 1;
			f[a][b] = Math.min(f1, f2);
		}
	}

	return f[1][n];
}
```