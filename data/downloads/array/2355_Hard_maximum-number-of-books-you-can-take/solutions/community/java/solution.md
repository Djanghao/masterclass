# [Java] Editorial level explanation: O(n) Dynamic Programming + Monotonic Stack, Brute Force

**Author:** sydym6
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/3345604/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/3345604/)

---

# Approach 1: Brute Force
## Intuition
It's easy to realize that we can solve the problem as folows. If we consider `[0, i]` subarray and have to take books from i<sup>th</sup> shelf, it's optimal to take all of the books from the i<sup>th</sup> shelf and then keep taking `min(books[j], (number of books taken from j + 1 shelf) - 1)` from j<sup>th</sup> shelf for `j = (i - 1)..0` until the value of books we take becomes less than 1. Let's denote this value as `maxEndingAt(i)`. Then the answer will be $$\\max_{i=0}^{n-1}maxEndingAt(i)$$.

## Code
```java
import static java.lang.Math.*;

class Solution {
    public long maximumBooks(int[] books) {
            int len = books.length;
			long res = 0;
			for (int i = 0; i < len; i++) {
				int prevTaken = books[i];
				long maxEndingAti = prevTaken;
				for (int j = i - 1; j >= 0; j--) {
					int curr = min(books[j], prevTaken - 1);
					if (curr < 1) break;
					maxEndingAti += curr;
					prevTaken = curr;
				}
				res = max(res, maxEndingAti);
			}
			return res;
    }
}
```

## Complexity Analysis
- Time complexity: $$O(n^2)$$. In the worst case (e.g. `[1,2,...,n-1,n]`), for each `i` we have to perform `i` steps of the inner loop. It means that in total we have to do $$\\sum_{i=1}^{n}i = \\frac{n(n + 1)}{2}$$

- Space complexity: $$O(1)$$

This solution works but the time compexity is too high and it results in `Time Limit Exceeded` here because 10<sup>10</sup> is too many operations to be performed.

# Approach 2: Dynamic Programming
## Intuition
Let's try to reuse previously calculated `maxEndingAt(j)` to calculate `maxEndingAt(i)` where `j < i`. Notice, that if `books[j] <= prevTaken - 1` we can just take `maxEndingAt(j)` instead of recalculating it all over again.

For example, when we calculate `maxEndingAt(4)` for `[8,5,2,7,9]` it's equal to `9 + maxEndingAt(4)` because `7 <= 9`. I encourage you to experiment with other examples to see why this is the case.

## Code
```java
import static java.lang.Math.*;

class Solution {
    public long maximumBooks(int[] books) {
			int len = books.length;
			long[] maxEndingAt = new long[len];
			long res = maxEndingAt[0] = books[0];
			for (int i = 1; i < len; i++) {
				int prevTaken = books[i];
				long maxEndingAti = prevTaken;
				for (int j = i - 1; j >= 0; j--) {
					if (books[j] <= prevTaken - 1) {
						maxEndingAti += maxEndingAt[j];
						break;
					}
					int curr = prevTaken - 1;
					if (curr < 1) break;
					maxEndingAti += curr;
					prevTaken = curr;
				}
				maxEndingAt[i] = maxEndingAti;
				res = max(res, maxEndingAti);
			}
			return res;
    }
}
```

## Complexity Analysis
- Time complexity: $$O(n^2)$$. It is still $$O(n^2)$$ because in the worst case if `books[j] > prevTaken - 1` for all `j` this is no better than the brute force approach. For example, if the array is [$$\\underbrace{10^5,10^5,\\cdots,10^5,10^5\\,}_\	ext{$10^5$ times}$$]

- Space complexity: $$O(n)$$ for `maxEndingAt` array.

# Approach 3: Dynamic Programming + Monotonic Stack
## Intuition
To improve the time complexity of our solution we need to find a way to quickly calculate `maxEndingAt(i)` based on `maxEndingAt(j)` where `j < i`. Preferably, with $$O(1)$$ time complexity.

Let's suppose we know the largest `j` such that `books[j] <= books[i] - i + j`. This is the index at which in our previously solution we were stopping inner loop iteration and taking already calculated `maxEndingAt[j]` value. This is the index at which we don't need to or even can't simply decrease the value of `books[i]` by one and add it to `maxEndingAti`.

If we know such a `j`, then `maxEndingAt(i) = maxEndingAt(j) + triangularNumber(books[i]) - triangularNumber(books[i] - i + j)` where `triangularNumber(n) = 1 + 2 + ... + n - 1 + n`. This is the case because `triangularNumber(books[i]) - triangularNumber(books[i] - i + j) = (books[i] - i + j + 1) + (books[i] - i + j + 2)  ... + books[i - 1] + books[i]` which is the sum of the number of books taken from shelfs between `j + 1` inclusive and `i` inclusive where we are just decreasing the number of books taken from shelf by one while going down from `i` to `j + 1` and `maxEndingAt(j)` is already calculated value for j<sup>th</sup> shelf.

How do we find this `j`? Suppose we have a collection of candidate j's that can be as simple as `[0,1,...,i-2,i-1]` which we are traversing from the end to the beginning. Let's say we are testing a value `k` from this collection and find out that `books[k] > books[i] - i + k` which means that this `k` is not the index we are looking for. The question though is whether this `k` might be useful for `i + 1` or we can discard it right now.

We need to consider two cases:
1. If `books[i + 1] > books[i]`, then we don't need `k` because we will use `i` as `j` for `i + 1`. `maxEndingAt(i + 1) = maxEndingAt(i) + books[i + 1]`.
2. If `books[i + 1] <= books[i]`, then we don't need `k` because `books[k] > books[i + 1] - i + k` will hold for `i + 1` as well

We can apply the same logic to pairs of indices (i + 1, i + 2), (i + 2, i + 3), and so on, thus proving the fact that we can discard `k` if it is not needed for current `i` by induction.

## Algorithm
The reasoning above leads us to the following algorithm:
1. Consider all shelfs as possible last shelf
2. Store candidate `j` indices in a stack
3. On each cycle discard all unsuitable candidates because we won't need them later
4. Calculate `maxEndingAt(i) = maxEndingAt(j) + triangularNumber(books[i]) - triangularNumber(books[i] - i + j)` and store it in the array, so that we can use it later
5. Use `long` to store results because $$10^5*10^5=10^{10}$$ and $$10^{10}>Integer.MAX\\_VALUE$$. $$Integer.MAX\\_VALUE \\approx 2*10^9$$

## Code
```java
import static java.lang.Math.max;

class Solution {
    public long maximumBooks(int[] books) {
			int len = books.length;
			long[] maxEndingAt = new long[len];
			long res = maxEndingAt[0] = books[0];
			var candidateIndexes = new ArrayDeque<Integer>();
			candidateIndexes.push(0);
			for (int i = 1; i < len; i++) {
				while (!candidateIndexes.isEmpty()) {
					int j = candidateIndexes.peek();
					if (books[j] <= books[i] - i + j) {
						break;
					}
					candidateIndexes.pop();
				}
				int j = candidateIndexes.isEmpty() ? -1 : candidateIndexes.peek();
				long maxEndingAti = (j >= 0 ? maxEndingAt[j] : 0) + 
					triangularNumber(books[i]) - triangularNumber(books[i] - i + j);
				res = max(res, maxEndingAti);
				maxEndingAt[i] = maxEndingAti;
				candidateIndexes.push(i);
			}
			return res;
    }

		private long triangularNumber(int n) {
			if (n <= 0) return 0;
			return n * (n + 1L) / 2;
		}
}
```

## Complexity Analysis
- Time complexity: $$O(n)$$. There are `n` outer loop iterations and we can add and then remove at most `n` elements to the `candidateIndexes` stack across all interations, so in total there will be no more than $$2 * n$$ inner loop iterations (one on every outer loop iteration and at most `n` to remove all of the elements from the `candidateIndexes` stack), thus resulting in $$O(n)$$ time complexity.

- Space complexity: $$O(n)$$ for `maxEndingAt` array and `candidateIndexes` stack.