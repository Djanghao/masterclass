# [Java/Python 3] Min of the longest distance between same numbers.

**Author:** rock
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3867958/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/3867958/)

---

**Intuition:**
Assume the final values of the modified array `nums` are all `x`s, then `x` must be among the original input array.

Suppose `i < j`, `nums[i] == nums[j] == x` and `nums[k] != x`for all `k` such that `i < k < j`. we can derive following conclusion:

**Since each second we can only change the neighbors of `x`s, we can  at most  change 2 numbers among those between 2 `x`s each second. Therefore, at least `(j - i) / 2` seconds needed to change to `x` all numbers between `i` and `j`.**

----

**Algorithm:**

 1. Use `HashMap/dict` to store the indices of same numbers;
2. Traverse the indices of same numbers to find the longest distance between them and divide it by 2;
3. Find the minimum value among the values in step 2. 

```java
    public int minimumSeconds(List<Integer> nums) {
        int n = nums.size(), ans = n;
        Map<Integer, List<Integer>> indices = new HashMap<>();
        for (int i = 0; i < n; ++i) {
            indices.computeIfAbsent(nums.get(i), l -> new ArrayList<>()).add(i);    
        }
        for (var l : indices.values()) {
            l.add(l.get(0) + n);
            int longest = 0;
            for (int i = 1; i < l.size(); ++i) {
                longest = Math.max(longest, (l.get(i) - l.get(i - 1)));
            }
            ans = Math.min(ans, longest / 2);
        }
        return ans;
    }
```

```python
    def minimumSeconds(self, nums: List[int]) -> int:
        n, indices = len(nums), defaultdict(list)
        for i, num in enumerate(nums):
            indices[num].append(i)
        ans = n        
        for l in indices.values():
            l.append(l[0] + n)
            ans = min(ans, max(y - x for x, y in pairwise(l)) // 2)
        return ans
```

For the above python 3 code, we can trade `O(n)` space and time for better readability as follows:
```python
    def minimumSeconds(self, nums: List[int]) -> int:
        nums += nums # make circular array.
        indices = defaultdict(list)
        for i, num in enumerate(nums):
            indices[num].append(i)
        return min(max(b - a for a, b in pairwise(l)) // 2 for l in indices.values())
```
**Analysis:**

Time & space: `O(n)`, where `n = nums.length`.

----

**Q & A:**

*Q1:*  l.append(l[0] + n) --> why is this done?

 (For the following answer, credit to -- **@IndominouS**)
*A1:*  To calculate the circular distance between the 1st and last indices.

As it is circular array the right element of the last element will be first element of the array.

(first,second,last) refers to indices of appearances.

[__first__second _ _ last _ _ _n - 1]

Imagine adding the array two times:

[__first__second _ _ last _ _ _n - 1] + [__first__second _ _ last _ _ _n - 1]

Now to calculate the right partner of last element we need to add the index of first element after rotating.
So after rotating we have traversed over n elements and the first will arrive at (first)th index hence we add ((index of first) + n)
so as to calculate [(index of first after rotation) - last index)]

**Summary**
This is a circular array, and we need to find the right neighbor for the last index, the first index, which need to add the size of the array `n`to compute the correct distance between the two neighbors.

*Q2:* Why is it `O(n)`, as we have the following nested for loops?
```python
        for l in indices.values():
            l.append(l[0] + n)
            ans = min(ans, max(y - x for x, y in pairwise(l)) // 2)
```

*A2:* Suppose we had NOT appended any element for each list `l`. the code would be as follows:
```python
        for l in indices.values():
            ans = min(ans, max(y - x for x, y in pairwise(l)) // 2)
```
Since all list `l`s are from the indices of input, no more and no less,  we actually traverse all `n` indices of the input and the time cost is `O(n)`. 

Let us further suppose we double the sizes of all list `l`s, 
```python
        for l in indices.values():
            l += l
            ans = min(ans, max(y - x for x, y in pairwise(l)) // 2)
```
then we at most visit `2 * n` elements after completion of the nested for loops, and the time cost `O(2 * n) = O(n)`. 

For the original code, each list `l` adds only `1` element, and `len(l) + 1 <= 2 * len(l)`, that is, the increased size of list `l` is still no more than the double size of the original list `l`. 

Therefore, the time cost is `O(n + m) <= O(n + n) = O(n)`, where `m` is the number of  list `l`s, of course `m <= n`.

**End of Q & A**

----

Please
# Upvote

if the post is helpful for you.