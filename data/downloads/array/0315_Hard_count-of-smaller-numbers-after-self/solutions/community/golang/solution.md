# Golang solution using Binary Indexed Tree with detailed explanation

**Author:** redtree1112
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/76625/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/76625/)

---

Let's say the given array is like `[22, 9, 7, 9, 11, -3, 9]`.
and imagine we have a table like below:
```
-3, 7, 9, 11, 22    <- values appear in the array in ASC order.
 0  0  0   0   0    <- count how many each number appears so far.
```

Then we iterate through the array from the end to the beginning.

```
                      \u2193 6th index
[22, 9, 7, 9, 11, -3, 9]

No numbers at right side so far, so result[6] = 0
 -3, 7, 9, 11, 22
  0  0  0   0   0

nums[6] is 9, so we can increment a count of 9.

 -3, 7, 9, 11, 22
  0  0  1   0   0
```
```
                   \u2193 5th index
[22, 9, 7, 9, 11, -3, 9]

We search if some numbers smaller than -3 appears so far. The answer is no, so result[5] = 0
 -3, 7, 9, 11, 22
  0  0  1   0   0

nums[5] is -3, so we can increment a count of -3.

 -3, 7, 9, 11, 22
  1  0  1   0   0
```

```
               \u2193 4th index
[22, 9, 7, 9, 11, -3, 9]

We search if some numbers smaller than 11 appears so far. The answer is 1 + 1 = 2, result[4] = 2.
 -3, 7, 9, 11, 22
  1  0  1   0   0

nums[4] is 11, so we can increment a count of 11.

 -3, 7, 9, 11, 22
  1  0  1   1   0
```
```
           \u2193 3th index
[22, 9, 7, 9, 11, -3, 9]

We search if some numbers smaller than 9 appears so far. The answer is 1, result[3] = 1.
 -3, 7, 9, 11, 22
  1  0  1   1   0

nums[3] is 9, so we can increment a count of 9.

 -3, 7, 9, 11, 22
  1  0  2   1   0
```
```
        \u2193 2nd index
[22, 9, 7, 9, 11, -3, 9]

We search if some numbers smaller than 7 appears so far. The answer is 1, result[2] = 1.
 -3, 7, 9, 11, 22
  1  0  2   1   0

nums[2] is 7, so we can increment a count of 7.

 -3, 7, 9, 11, 22
  1  1  2   1   0
```
```
     \u2193 1st index
[22, 9, 7, 9, 11, -3, 9]

We search if some numbers smaller than 9 appears so far. The answer is 1 + 1, result[1] = 2.
 -3, 7, 9, 11, 22
  1  1  2   1   0

nums[1] is 9, so we can increment a count of 9.

 -3, 7, 9, 11, 22
  1  1  3   1   0
```
```
  \u2193 0th index
[22, 9, 7, 9, 11, -3, 9]

We search if some numbers smaller than 22 appears so far. The answer is 1 + 1 + 3 + 1, result[0] = 6.
 -3, 7, 9, 11, 22
  1  1  3   1   0

nums[0] is 22, so we can increment a count of 22.

 -3, 7, 9, 11, 22
  1  1  2   1   1
```

Now we have a result array as `[6, 2, 1, 1, 2, 0, 0]`
What we see is
(1) If we can create a table which has the number appears in the array in ASC order,
(2) We can iterate the array from left to right and repeat
  (a) add all appearance counts of numbers which are smaller than `nums[i] `
  (b) add 1 to the appearance count of `nums[i]`. 

For (1), it may not be so clear but we can utilize hash map for this purpose. Just sort the array and store so that the key is a number itself and value is an index of the number). 
In the example above, the map looks like `{-3 : 0, 7 : 1, 9 : 2, 11 : 3, 22 : 4}`

Then we can initialize the table like below.
```
-3  7  9 11 22
[0, 0, 0, 0, 0]  <- count array
````
`map[num] = k` represents `num` is the `k` th smallest elements in the array (starts from 0) and `count_array[k]` represents how many `num` can be found so far during the iteration. 

Now we can solve (1). So remaining task is step(2).
For example, if we found `11` during the iteration, a count of smaller numbers at this point is sum of `count_array[0:3]` because `11` is at `3` th index in the count_array. And after this calculation, we can add a count of `11` (`count_index[3]`) by 1 for the remaining process.

But... if we do this just in iterative manner, the complexity is after all,  `O(n^2)`. Is there any way to optimize (a) sum up `count_array[0:index]` and (b) add 1 to `count_array[index]` on each iteration? Yes there is. The data structure is called Binary Indexed Tree.

I don't explain about BIT, and when I tried to solve this problem, I also had no idea what is BIT.
I googled a lot, and in the end, for me 
https://www.hackerearth.com/practice/notes/binary-indexed-tree-or-fenwick-tree/
this explanation was the most clear one. TopCoder, geeksforgeeks, and many other articles write about it as well.

Even though you can't understand the logic very well, implementing BIT is still relatively easy.
So if you can't understand Binary Indexed tree, first take `BIT` as a black box that can (a) sum up all number through 0 to i th index and (b) update i th index in `O(logn)`, then read my code. After understanding it, you can proceed to read the article about BIT again and again until you understand.

```
func countSmaller(nums []int) []int {
	nlen := len(nums)

	sorted := make([]int, nlen)
	copy(sorted, nums)
	sort.Ints(sorted)

	mp := make(map[int]int)
	index := 0
	for i := range sorted {
		if _, ok := mp[sorted[i]]; !ok {
			mp[sorted[i]] = index
			index++
		}
	}

	bit := make(BIT, len(mp)+1)

	res := make([]int, nlen)
	for i := nlen - 1; i >= 0; i-- {
		res[i] = sum(bit, mp[nums[i]]-1)
		add(bit, mp[nums[i]], 1)
	}
	return res
}

type BIT []int

func add(b BIT, index int, value int) {
	i := index + 1
	for i < len(b) {
		b[i] += value
		i += i & (-i)
	}
}

func sum(b BIT, index int) int {
	sum := 0
	for i := index + 1; i > 0; i = i - i&(-i) {
		sum += b[i]
	}
	return sum
}
```
O(nlogn) time and O(n) space complexity.