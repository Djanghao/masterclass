# [Python] 3Sum Approach with Explanation

**Author:** zayne-siew
**Votes:** 113
**Link:** [https://leetcode.com/problems/3sum-with-multiplicity/solutions/1918718/](https://leetcode.com/problems/3sum-with-multiplicity/solutions/1918718/)

---

### Introduction

Given an array of integers `arr`, determine how many tuples `(i, j, k)` exist such that `0 <= i < j < k < len(arr)` and `arr[i] + arr[j] + arr[k] == target`.

This problem is similar to [15. 3Sum](https://leetcode.com/problems/3sum/), except it differs in one major way: where the similar problem requires all unique tuples, this problem requires the number of all tuples (which need not be unique).

---

### Base Approach

To begin, let's understand how the 3-sum algorithm works. First, ensure that the array is sorted in ascending order (descending order works too, but we'll stick to ascending).

```python
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        arr.sort()
		# the rest of the code here
```

Next, we want a for-loop that will iterate through the array.

```python
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        arr.sort()
		for i in range(len(arr)-2):
			# do something
			pass
		# the rest of the code here
````

Notice that we leave the last two indexes of the array untouched. This is because this for-loop will **serve as a pointer to the lowest value in the resulting tuple**; i.e., this pointer tries to find `i` in `(i, j, k)`. This also means that the resulting right end of the array (i.e., `arr[i+1:]`) will contain our remaining two pointers `j` and `k`.

Notice now that we have simplified the problem from a 3-sum to a 2-sum; i.e., instead of finding `(i, j, k)` in `arr` where `arr[i] + arr[j] + arr[k] == target`, we now only need to find `(j, k)` in `arr[i+1:]` where `arr[j] + arr[k] == target - arr[i]`. The implementation that follows should then be similar to [1. Two Sum](https://leetcode.com/problems/two-sum/).

In case you are not familiar with the 2-sum algorithm: in a sorted ascending array, we have 2 pointers `j` and `k` pointing to the two ends of the array. Then, in binary-search fashion, **if `arr[j] + arr[k] < target`, we increment `j` to increase the value of `arr[j]`; if `arr[j] + arr[k] > target`, we decrement `k` to decrease the value of `arr[k]`; we continue doing this until we have found a suitable `(j, k)` or `j >= k`**.

Putting it all together, we have:

```python
class Solution(object):
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        arr.sort()
		res, l = 0, len(arr)
        for i in range(l-2):
			# Initialise the 2-sum pointers
            j, k = i+1, l-1
            while j < k:
                if arr[j]+arr[k] < target-arr[i]:  # arr[j] is too small
                    j += 1
                elif arr[j]+arr[k] > target-arr[i]:  # arr[k] is too large
                    k -= 1
				else:  # arr[i]+arr[j]+arr[k] == target
					res += 1
					# Shift both pointers by 1
					j += 1
					k -= 1
		return res%1000000007
```

---

### Tweaking the Algorithm

If you tried running the code above, it would give you the wrong answer. Let's use the testcase as an example:

```text
target = 8
arr: 1 1 2 2 3 3 4 4 5 5
     i   j             k  -->  arr[i] + arr[j] + arr[k] == target; j += 1, k -= 1.
	 i     j         k    -->  arr[i] + arr[j] + arr[k] == target; j += 1, k -= 1.
```

The problem comes when there are multiple instances of the same number. In the above example, after finding that `j=2, k=9` satisfies the equation, we simply shift the pointers and continue, **without realising that `j=3, k=9` and `j=2, k=8` are both valid tuples as well**. Hence, we end up missing some possible tuples if we shift the pointers. But how do we know when to shift the pointers and when not to?

The trick in this case is to **reconsider the way that we are counting the number of valid tuples**. In the above code, we simply increment the counter by 1 (`res += 1`), but we can do this more efficiently if we had the number of instances of `arr[j]` and `arr[k]` respectively. Of course, we will need to take into account different cases whereby `arr[i]`, `arr[j]`, and/or `arr[k]` may not be fully unqiue. Since `arr[i] <= arr[j] <= arr[k]`, we have the following cases:

```text
Cases                               Result (note: count() is an arbitrary function)
1) arr[i] != arr[j] != arr[k]  -->  res += count(arr[i]) * count(arr[j]) * count(arr[k])
2) arr[i] == arr[j] != arr[k]  -->  res += math.comb(count(arr[i]), 2) * count(arr[k])
3) arr[i] != arr[j] == arr[k]  -->  res += count(arr[i]) * math.comb(count(arr[j]), 2)
4) arr[i] == arr[j] == arr[k]  -->  res += math.comb(count(arr[i]), 3)

Relevant mathematical equations
math.comb(count(arr[i]), 2) = count(arr[i]) * (count(arr[i]) - 1) // 2
math.comb(count(arr[i]), 3) = count(arr[i]) * (count(arr[i]) - 1) * (count(arr[i]) - 2) // 6
```

To incorporate this into our code, we then have to make sure that we do not check the same number twice. To do so, we can simply **shift our pointers by the number of instances of the number**, instead of incrementing or decrementing by 1 each time.

```python
class Solution:
    def threeSumMulti(self, arr: List[int], target: int) -> int:
        arr.sort()
        cnt = Counter(arr)  # obtain the number of instances of each number
        res, i, l = 0, 0, len(arr)
        while i < l:  # in replacement of the for-loop, so that we can increment i by more than 1
            j, k = i, l-1  # j should be the leftmost index, hence j=i instead of j=i+1
            while j < k:  # i <= j < k; arr[i] <= arr[j] <= arr[k]
                if arr[i]+arr[j]+arr[k] < target:
                    j += cnt[arr[j]]
                elif arr[i]+arr[j]+arr[k] > target:
                    k -= cnt[arr[k]]
                else:  # arr[i]+arr[j]+arr[k] == target
                    if arr[i] != arr[j] != arr[k]:  # Case 1: All the numbers are different
                        res += cnt[arr[i]]*cnt[arr[j]]*cnt[arr[k]]
                    elif arr[i] == arr[j] != arr[k]:  # Case 2: The smaller two numbers are the same
                        res += cnt[arr[i]]*(cnt[arr[i]]-1)*cnt[arr[k]]//2  # math.comb(cnt[arr[i]], 2)*cnt[arr[k]]
                    elif arr[i] != arr[j] == arr[k]:  # Case 3: The larger two numbers are the same
                        res += cnt[arr[i]]*cnt[arr[j]]*(cnt[arr[j]]-1)//2  # math.comb(cnt[arr[j]], 2)*cnt[arr[i]]
                    else:  # Case 4: All the numbers are the same
                        res += cnt[arr[i]]*(cnt[arr[i]]-1)*(cnt[arr[i]]-2)//6  # math.comb(cnt[arr[i]], 3)
					# Shift pointers by the number of instances of the number
                    j += cnt[arr[j]]
                    k -= cnt[arr[k]]
            i += cnt[arr[i]]  # Shift pointer by the number of instances of the number
        return res%1000000007
```

**TC: O(n<sup>2</sup>)**, where `n` is the length of `arr`, due to the nested while loop.
**SC: O(n)**, due to the Counter object.

---

Please upvote if this has helped you! Appreciate any comments as well :)