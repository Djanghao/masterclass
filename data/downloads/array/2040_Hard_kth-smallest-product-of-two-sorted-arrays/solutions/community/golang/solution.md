# Binary search with detailed explanation

**Author:** sebnyberg
**Votes:** 30
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1524856/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1524856/)

---

***Note: credit goes to lee215 for the inverse/reverse trick***

### Step 1. k'th smallest product for lists with only positive numbers

Imagine that there are only positive numbers, and we want to find the k'th smallest number.

Consider the two lists `a=[1,2,3]` and `b=[1,5,8]`. Their products form a matrix:

| - | 1 | 2 | 3 |
| --- | --- | --- | --- |
| __1__ | 1 | 2 | 3 |
| __5__ | 5 | 10 | 15 |
| __8__ | 8 | 18 | 24 |

Assuming that we guess a number `x`, then it's possible to quickly determine how many numbers are smaller than `x`. Just iterate row by row, moving a right pointer left until the condition is satisfied and count the number of elements before the pointer:

```go
func count(a, b []int, val int) int {
	var count int
	j := len(b) - 1
	for i := range a {
		for j >= 0 && a[i]*b[j] > val {
			j--
		}
		count += j + 1
	}
	return count
}
```

With this approach, it's easy to find the k'th positive number using binary search:

```go
var lo, hi int = 0, 1e10
for lo < hi {
	mid := (lo + hi) / 2
	res := count(a, b, mid)
	if res >= int(k) {
		hi = mid
	} else {
		lo = mid + 1
	}
}
return lo
```

### Step 2. Mixed numbers

So far so good. The problem is with the negative numbers. When the lists contain negative numbers, then their products form a kind of criss-cross pattern. Positive numbers are the result of combining numbers diagonally across in the matrix, and negative numbers are the result of combining numbers vertically:

```
 \\ | - | + |
 - | + | - |
 + | - | + |
```

In order to search numbers, input lists are split into two halves:

```bash
a = [ -5, -2, -1, 0, 1, 2 ]
    |----[a1]---|---[a2]--]

b = [ -8, -5, -2, 3, 5 ]
    |----[b1]---|-[b2]-|
```

The first thing to note is that the number of positive / negative numbers can be counted by multiplying the lengths of each section:

```go
negCount := len(a1)*len(b2) + len(b1)*len(a2)
```

Knowing how many numbers exist, if a request is made for `k <= negCount`, then that product must be in one of the negative quadrants, and vice versa for `k > negCount`. This tells us which sections to combine when searching for an answer.

However, simply multiplying elements in order from different segments yield different signs and orderings:

| first | second | sign | order |
| --- | --- | --- | --- |
| a1 | b1 | + | desc |
| a1 | b2 | - | no order |
| a2 | b1 | - | no order |
| a2 | b2 | + | asc |

The first trick here is to reverse negative portions, which results in ordered outputs:

| first | second | sign | order |
| --- | --- | --- | --- |
| rev(a1) | rev(b1) | + | asc |
| rev(a1) | b2 | - | desc |
| a2 | rev(b1) | - | desc |
| a2 | b2 | + | asc |

At this point it would be possible to write two different binary search functions, one for searching from the right, and one from the left. But there is one final trick to make the code cleaner. 

By inverting negative values (making them positive), it's possible to search in the same way for negative and positive numbers. However, the k'th result will no longer be the k'th smallest, but rather the k'th largest number:

| first | second | sign | order |
| --- | --- | --- | --- |
| inv(rev(a1)) | inv(rev(b1)) | + | asc |
| inv(rev(a1)) | b2 | + | desc |
| a2 | inv(rev(b1)) | + | desc |
| a2 | b2 | + | asc |

### Final solution:

```go
func kthSmallestProduct(nums1 []int, nums2 []int, k int64) int64 {
	aSplit := sort.SearchInts(nums1, 0)
	bSplit := sort.SearchInts(nums2, 0)
	a1, a2 := rev(inv(nums1[:aSplit])), nums1[aSplit:]
	b1, b2 := rev(inv(nums2[:bSplit])), nums2[bSplit:]

	negCount := len(a1)*len(b2) + len(b1)*len(a2)

	sign := 1
	if int(k) > negCount {
		k -= int64(negCount) // => kth smallest number from non-negative part
	} else {
		k = int64(negCount) - k + 1 // => kth largest number after transform
		b1, b2 = b2, b1             // swap to fix combination
		sign = -1
	}

	var lo, hi int = 0, 1e10
	for lo < hi {
		mid := (lo + hi) / 2
		if rcount(a1, b1, mid) + count(a2, b2, mid) >= int(k) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return int64(sign * lo)
}

func count(a, b []int, val int) int {
	var count int
	j := len(b) - 1
	for i := range a {
		for j >= 0 && a[i]*b[j] > val {
			j--
		}
		count += j + 1
	}
	return count
}

func inv(a []int) []int {
	for i := range a {
		a[i] = -a[i]
	}
	return a
}

func rev(a []int) []int {
	for l, r := 0, len(a)-1; l < r; l, r = l+1, r-1 {
		a[l], a[r] = a[r], a[l]
	}
	return a
}

```