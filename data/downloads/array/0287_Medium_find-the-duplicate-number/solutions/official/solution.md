# Official Solution

**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solution/](https://leetcode.com/problems/find-the-duplicate-number/solution/)

---

[TOC]

### Overview

Finding the Duplicate Number is a classic problem, and as such there are many different ways to approach it; a total of 7 approaches are presented here. The first 4 approaches involve rearranging or modifying elements of the array, and hence do not meet the constraints specified in the problem statement. However, they are included here since they are more feasible to come up with as the first approach in an interview setting.  Since each approach is independent of the other approaches, they can be read in any order.

#### Proof

Proving that at least one duplicate must exist in $$nums$$ is an application of the [pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle). Here, each number in $$nums$$ is a "pigeon" and each distinct number that can appear in $$nums$$ is a "pigeonhole." Because there are $$n+1$$ numbers and $$n$$ distinct possible numbers, the pigeonhole principle implies that if you were to put each of the $$n + 1$$ pigeons into $$n$$ pigeonholes, at least one of the pigeonholes would have 2 or more pigeons. 

### Approach 1: Sort

**Note:** This approach modifies individual elements and does not use constant space, and hence does not meet the problem constraints. However, it utilizes a fundamental concept that can help solve similar problems.

**Intuition**

In an unsorted array, duplicate elements may be scattered across the array. However, in a sorted array, duplicate numbers will be next to each other.

**Algorithm**

1) Sort the input array ($$nums$$).

2) Iterate through the array, comparing the current number to the previous number (i.e. compare $$nums[i]$$ to $$nums[i - 1]$$ where $$i > 0$$).

3) Return the first number that is equal to its predecessor.

<iframe src="https://leetcode.com/playground/C5TbyYpi/shared" frameBorder="0" width="100%" height="242" name="C5TbyYpi"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n \log n)$$

    Sorting takes $$O(n \log n)$$ time. This is followed by a linear scan, resulting in a total of $$O(n \log n)$$ + $$O(n)$$ = $$O(n \log n)$$ time.

* Space Complexity: $$O(\log n)$$ or $$O(n)$$

    The space complexity of the sorting algorithm depends on the implementation of each programming language:
    * In Java, Arrays.sort() for primitives is implemented using a variant of the Quick Sort algorithm, which has a space complexity of $$O(\log n)$$
    * In C++, the sort() function provided by STL uses a hybrid of Quick Sort, Heap Sort and Insertion Sort, with a worst case space complexity of $$O(\log n)$$
    * In Python, the sort() function is implemented using the Timsort algorithm, which has a worst-case space complexity of $$O(n)$$

---

### Approach 2: Set 

**Note:** This approach does not use constant space, and hence does not meet the problem constraints. However, it utilizes a fundamental concept that can help solve similar problems.

**Intuition**

As we traverse the array, we need a way to "remember" values that we've seen. If we come across a number that we've seen before, we've found the duplicate.  An efficient way to record the seen values is by adding each number to a set as we iterate over the $$nums$$ array.

**Algorithm**

1) In order to achieve linear time complexity, we need to be able to insert elements into a data structure and look them up in constant time. A HashSet/unordered_set is well suited for this purpose. Initialize an empty hashset, $$seen$$. 

2) Iterate over the array and first check if the current element exists in the hashset ($$seen$$).

   * If it does exist in the hashset, that number is the duplicate and can be returned right away.

3) Otherwise, insert the current element into $$seen$$, move to the next element in the array and repeat step 2.


<iframe src="https://leetcode.com/playground/PcFLbgEp/shared" frameBorder="0" width="100%" height="259" name="PcFLbgEp"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$

    HashSet insertions and lookups have amortized constant time complexities. Hence, this algorithm requires linear time, since it consists of a single for loop that iterates over each element, looking up the element and inserting it into the set at most once.

* Space Complexity: $$O(n)$$

    We use a set that may need to store at most $$n$$ elements, leading to a linear space complexity of $$O(n)$$.

---

### Approach 3: Negative Marking

**Note:** This approach temporarily modifies individual elements and thus does not satisfy the problem constraints. However, this approach is intuitive and utilizes a technique that is useful to know. Furthermore, the underlying concept lends itself to solving similar problems.  As such, you can further practice this technique on other problems such as [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/).

**Intuition**

There are $$n + 1$$ positive numbers in the array ($$nums$$) (all in the range $$[1, n]$$). Since the array only contains positive integers, we can track each number ($$num$$) that has been seen before by flipping the sign of the number located at index $$|num|$$, where $$||$$ denotes absolute value. 

For example, if the input array is $$[1, 3, 3, 2]$$, then for $$1$$, flip the number at index $$1$$, making the array $$[1,-3,3,2]$$. Next, for $$-3$$ flip the number at index $$3$$, making the array $$[1,-3,3,-2]$$. Finally, when we reach the second $$3$$, we'll notice that $$nums[3]$$ is already negative, indicating that $$3$$ has been seen before and hence is the duplicate number.

**Algorithm**

1) Iterate over the array, evaluating each element (let's call the current element $$cur$$).

2) Since we use negative marking, we must ensure that the current element ($$cur$$) is positive (i.e. if $$cur$$ is negative, then use its absolute value).

3) Check if $$nums[cur]$$ is negative.

    * If it is, then we have already performed this operation for the same number, and hence $$cur$$ is the duplicate number. Store $$cur$$ as the duplicate and exit the loop.

    * Otherwise, flip the sign of $$nums[cur]$$ (i.e. make it negative). Move to the next element and repeat step 3.

4) Once we've identified the duplicate, we could just return the duplicate number.  However, even though we were not able to meet the problem constraints, we can show that we are mindful of the constraints by restoring the array.  This is done by changing all negative numbers to positive.

<iframe src="https://leetcode.com/playground/iGXyR4bp/shared" frameBorder="0" width="100%" height="395" name="iGXyR4bp"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$

    Each element is visited at most twice (once in the first loop to find the duplicate and once in the second loop to restore the numbers).

* Space Complexity: $$O(1)$$

    All manipulation is done in place, so no additional storage (barring one variable) is needed.


---

### Approach 4.1: Array as HashMap (Recursion)

**Note:** Approaches 4.1 and 4.2 modify individual elements, and hence do not meet the problem constraints. However, they utilize an insightful concept that can help with similar problems.

**Intuition**

Use the Array as a HashMap --  map each number to its equivalent index in the array. For instance, map (and store) the number 5 to index 5 (i.e. $$nums[5] = 5$$). Since there are $$(n + 1)$$ positions/indexes in the input array, and the numbers range from $$1$$ to $$n$$, at least one index will have more than one number (due to the pigeonhole principle).

Since all numbers are in the range $$[1,n]$$, no number will be mapped to index 0. So let's start with the number at index 0 since it **must** be out of place. Say that the number at index 0 is $$first$$. Then $$first$$ needs to be stored at $$nums[first]$$. But there's some other number at $$nums[first]$$ that needs to be stored at its respective location (and so on). 

If $$nums[first]$$ is the same as $$first$$, then we have found a duplicate. Otherwise, let's swap the numbers located at index $$0$$ and at index $$first$$, and repeat this process with the new number at index $$0$$.

As we repeatedly apply this mapping, the duplicate number will, on its first instance, be mapped/stored correctly at its equivalent index, and then on its second occurrence, we will attempt to store it there again. When a number already exists at its correct index, and we attempt to store another instance of the same number there again, then we know that's the duplicate.

**Algorithm**

1) Start with the first index (index $$0$$) of the array. Call $$store(nums, 0)$$ to store the number $$0$$ at index $$0$$.

    * Note that because all input numbers are in the range $$[1, n]$$, no number will ever be mapped to index $$0$$. Hence, index $$0$$ can hold any dummy value, including $$0$$.

2) $$store(nums, cur)$$ uses the current number, $$cur$$, as the target index. It first backs up the number that's stored at the equivalent position ($$nxt = nums[cur]$$), and then overwrites that index with $$cur$$.

3) Now we need to deal with the number that was backed up (i.e. $$nxt$$). Recursively call $$store$$ with this number as input (i.e. $$store(nums, nxt)$$) so it too can be placed at its equivalent index. 

4) Repeat steps 2 and 3. At some point, $$nums[cur]$$ will already contain the number $$cur$$, in which case we have found the duplicate number.

To illustrate the algorithm, let's consider an example $$[3,3,5,4,1,3]$$:

* $$store(nums, 0)$$ 
  * Here $$cur = 0$$ and $$nums[cur] = 3$$
  * Back up the number 3 (that's at index 0)
  * Store 0 at index 0. The array is now: $$[\underline0,3,5,4,1,3]$$ 
  * Recursively call $$store(nums, 3)$$

* $$store(nums, 3)$$ 
  * Back up the number 4 (at index 3)
  * Store 3 at index 3. The array is now: $$[0,3,5,\underline3,1,3]$$ 
  * Now call $$store(nums, 4)$$

* $$store(nums, 4)$$ 
  * Back up the number 1 (at index 4)
  * Store 4 at index 4. The array is now $$[0,3,5,3,\underline4,3]$$
  * Now call $$store(nums, 1)$$

* $$store(nums, 1)$$ 
  * Back up the number 3 (at index 1)
  * Store 1 at index 1. The array is now $$[0,\underline1,5,3,4,3]$$
  * Now call $$store(nums, 3)$$

* $$store(nums, 3)$$ 
  * Since 3 already exists at index 3 in the array $$[0,1,5,\underline3,4,3]$$, and we have another instance of 3 that we are trying to store there, clearly that's the duplicate number. Return 3 as the duplicate, and stop execution.

<iframe src="https://leetcode.com/playground/4yGx8ygz/shared" frameBorder="0" width="100%" height="293" name="4yGx8ygz"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$

    The function ($$store$$) makes a single recursive call at every instance. Each index is visited at most once, resulting in $$O(n)$$ time complexity.

* Space Complexity: $$O(n)$$

    Since this is a recursive function with up to $$n$$ self-invocations (i.e. depth of the recursive function = $$n$$), the space complexity is $$O(n)$$ as there can be up to $$n$$ function calls in memory at some point. Note that due to the recursive nature of the solution, there is some additional overhead on each invocation (such as the function variables and a return function pointer that are stored on the system executable stack).

---

### Approach 4.2: Array as HashMap (Iterative)

**Intuition**

> This technique is also known as cyclic sort

The core intuition behind this approach is similar to that of Approach 4.1. Here as well, we start with index 0.  Since all numbers are in the range $$[1, n]$$, they will be mapped to indices $$1$$ through $$n$$ inclusive, and hence no number will be mapped to index $$0$$. 

The key idea is to always map **the number at index 0** to its equivalent index. While in the recursive approach, we directly jump to the next index, in this approach, we will bring the number from the next index to index $$0$$ and continue from there (effectively performing a swap).

**Algorithm**

1) At every iteration, compare the number at index 0 (i.e. $$nums[0]$$) to the number at index $$nums[0]$$ (i.e. $$nums[nums[0]]$$).

2) Use index $$0$$ as the source of all swapping because we know the number $$0$$ is not in the array. 

3) Take each number at index $$0$$ (let's call it $$first$$) and swap it with the number at its equivalent index in the array (i.e. the number at $$nums[first]$$).

4) Repeat step 3 until $$first$$ is the same as $$nums[first]$$ (e.g. if the duplicate number is $$3$$, then keep swapping $$nums[0]$$ and nums[nums[0]] until both $$nums[3] == 3$$ and $$nums[0] == 3$$).

To illustrate the algorithm, let's consider an example $$[3,3,5,4,1,3]$$:

* $$[\underline3,3,5,\underline4,1,3]$$   // Compare nums[0] to nums[nums[0]] (i.e. nums[0] to nums[3]). $$3$$ != $$4$$. Swap them. Now the first $$3$$ will be swapped into its correct position, and position 0 has $$4$$.
* $$[\underline4,3,5,3,\underline1,3]$$  // Compare nums[0] to nums[4]. 4 != 1. Not equal, so swap again. Now 4 is in its correct position.
* $$[\underline1,\underline3,5,3,4,3]$$ // Compare nums[0] with nums[1]. Not equal, swap.
* $$[\underline3,1,5,\underline3,4,3]$$ // Now nums[0] == nums[3] (both are 3). That's it! 3 is in both positions 0 and position 3, so it's the duplicate.

<iframe src="https://leetcode.com/playground/MrnDvKFF/shared" frameBorder="0" width="100%" height="225" name="MrnDvKFF"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$

    Each number needs to be swapped at most once before it is placed in its desired position.

* Space Complexity: $$O(1)$$

    No additional storage is needed (barring the temporary variables used for swapping).

---

### Approach 5: Binary Search


**Intuition**

Consider an array that has $$n$$ distinct numbers in the range $$[1,n]$$. For example: $$[1,2,3,4,5]$$. If we pick any one of these 5 numbers and count how many numbers are less than or equal to it, the answer will be equal to that number. So in $$[1,2,3,4,5]$$, if you pick the number $$4$$, there's exactly 4 numbers that are less than or equal to $$4$$. If you pick $$3$$, there's exactly 3 numbers that are less than or equal to $$3$$, and so on. However, when you have duplicates in the array, this count will exceed the number at some point. For example: in $$[4,3,4,5,2,4,1]$$, $$3$$ has 3 numbers less than or equal to it. However, the duplicate number will have a count of numbers less than or equal to itself, that is greater than itself (in this example, $$4$$, which is the duplicate, has 6 numbers that are less than or equal to it). Hence, the smallest number that satisfies this property is the duplicate number.

Consider an example: $$[4,6,4,2,1,4,3,5]$$. This has $$n + 1$$ elements where $$n$$ = $$7$$. Take each number from $$1$$ to $$7$$ and count how many numbers are less than or equal to it. In our example, $$count(1,2,3,4,5,6,7)$$ = $$(1,2,3,6,7,8,8)$$. If we performed a linear scan, we would find that the number $$4$$ is the first number to have its counts exceed the actual number (i.e. 6 > 4) - hence $$4$$ is the duplicate. A linear scan based approach would require an overall $$O(n^2)$$ time complexity in the worst case, since we'd need to iterate over each of the $$n$$ numbers (requiring $$O(n)$$ time), and then compare it to every element to generate a count of equal or lower numbers (requiring $$O(n)$$ time as well - nested inside the other $$O(n)$$ loop). Fortunately, $$count$$ is monotonic (it's values are always in non-decreasing order), and hence it is an excellent candidate for binary search.

In the binary search approach, instead of doing a linear scan from $$1$$ to $$n$$, we can apply a binary search with a goal of finding the smallest number that satisfies the aforementioned property. We start with a search space of $$[1,n]$$ that has a midpoint $$mid$$. If $$mid$$ satisfies the property, we narrow our search space to the left half $$[1, mid - 1]$$ and continue searching, otherwise, we narrow our search space to the right half $$[mid + 1, n]$$.

> To observe the monotonicity of count, consider the evaluation: "For the given number, the count of numbers less than or equal to it, exceeds the number itself". Going back to our example, we had derived: $$count(1,2,3,4,5,6,7)$$ = $$(1,2,3,6,7,8,8)$$. If we now take the first number and apply said evaluation, we get $$false$$ (since $$count(1) == 1$$, which is not greater than 1). Applying this evaluation to all counts, we get $$(false, false, false, true, true, true, true)$$. Observe how this remains $$false$$ in the beginning, and switches to $$true$$ for the number 4 (i.e. the duplicate), after which point it remains $$true$$ for all further numbers. Formally, the count for each number must include itself plus the count of all numbers less than itself. Since a number cannot have a negative count, each number, N, must have a count greater than or equal to the count of N-1. Since $$count(N) >= count(N-1)$$, $$count$$ must be monotonically increasing.

**Algorithm**

1) To recap, we need to find the smallest number such that the count of numbers less than or equal to it is greater than the number itself.

2) Apply binary search and start with the entire range of numbers $$[1,n]$$. 
    * Note: Binary search will be applied to the numbers in the range [1,n] (inclusive) regardless of the contents of the array. So even if a number does not exist in the array, we will still evaluate it. For example, if the array is $$[1,2,4,2,2,5]$$, the algorithm will first evaluate the number 3 even though that number does not exist in the array.

3) Find the mid-point ($$cur$$). 

4) For $$cur$$, count how many numbers in the input array are less than or equal to it.

    * If that number strictly exceeds $$cur$$, then store that as the answer and continue to look for a smaller number that satisfies the condition by narrowing the window to the left $$[low, cur - 1]$$. 
    * Otherwise, narrow down the window to the right $$[cur + 1, high]$$.

5) Repeat step 3 until we've exhausted the search range (i.e. until $$low$$ > $$high$$) and return the lowest value that met the aforementioned condition.

<iframe src="https://leetcode.com/playground/n7TRpdtJ/shared" frameBorder="0" width="100%" height="500" name="n7TRpdtJ"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n \log n)$$

    The outer loop uses binary search to identify a candidate - this runs in $$O(\log n)$$ time. For each candidate, we iterate over the entire array which takes $$O(n)$$ time, resulting in a total of $$O(n \log n)$$ time.

* Space Complexity: $$O(1)$$

    No additional storage is needed (barring a few variables), resulting in a constant $$O(1)$$ space complexity.

---

### Approach 6: Sum of Set Bits


**Intuition**

Consider an example $$[3,1,3,2,4]$$. This has $$n + 1$$ elements where $$n$$ = $$4$$. If we did not have the duplicate, and instead had every number from $$1$$ through $$4$$, this base array would have been $$[1,2,3,4]$$. Let's look at each of these numbers in binary and count the number of times 1 is seen at each bit position (let's call that $$base\_count$$). Since the largest number is $$4$$ ($$100_2$$ in binary notation), we need to count this for the 3 least significant bits:

* Initially, $$base\_count$$ = $$[0,0,0]$$
* After 1 (in binary, $$001_2$$), $$base\_count$$ = $$[0,0,1]$$
* After 2 (in binary, $$010_2$$), $$base\_count$$ = $$[0,1,1]$$
* After 3 (in binary, $$011_2$$), $$base\_count$$ = $$[0,2,2]$$
* After 4 (in binary, $$100_2$$), $$base\_count$$ = $$[1,2,2]$$

Now that we have the base count established, let's go through the example array $$[3,1,3,2,4]$$ and calculate the same (sum of 1's set across all bit positions) in this array. Let's call it $$nums\_count$$:

* Initially, $$nums\_count$$ = $$[0,0,0]$$
* After 3 (in binary, $$011_2$$), $$nums\_count$$ = $$[0,1,1]$$
* After 1 (in binary, $$001_2$$), $$nums\_count$$ = $$[0,1,2]$$
* After 3 (in binary, $$011_2$$), $$nums\_count$$ = $$[0,2,3]$$
* After 2 (in binary, $$010_2$$), $$nums\_count$$ = $$[0,3,3]$$
* After 4 (in binary, $$100_2$$), $$nums\_count$$ = $$[1,3,3]$$

Comparing $$nums\_count$$ to $$base\_count$$, we see that the bit count difference is $$[1,3,3]$$ - $$[1,2,2]$$ = $$[0,1,1]$$. This is the equivalent of the number 3, which is the duplicate. By iterating over each bit, and comparing the base to the current, we were able to construct the duplicate number bit by bit. 

So how does this work if the duplicate number appears more than twice? In that case, think of it as simply replacing the missing numbers with the duplicate number, effectively reducing the count of 1's corresponding to the missing numbers and adding 1's associated with the duplicate number - so the algorithm remains intact, since the count of 1's will be even more pronounced in favor of the duplicate number.

To illustrate this, consider the same array but with the duplicate occurring more than twice: $$[3,1,3,3,3]$$ (we've replaced both $$2$$ and $$4$$ with $$3$$). $$base\_count$$ will remain $$[1,2,2]$$ because $$n$$ still equals $$4$$. However, $$nums\_count$$ becomes $$[0,4,5]$$. Comparing $$nums\_count$$ to $$base\_count$$, we see that the bit count difference is $$[0,4,5]$$ - $$[1,2,2]$$ = $$[-1,2,3]$$. If we consider just the positive counts (seen at positions 0 and 1), this, again is the equivalent of the number $$3$$, which is the duplicate number.

A good question to ask here is "Why does only including the bits with a positive count result in the duplicate number?" To understand this, let's take a step back and reconsider the example array $$[3,1,3,2,4]$$. However, for this example ignore the binary representation of each number. Pretend $$base\_count$$ is an array where $$base\_count[num]$$ contains the frequency of number $$num$$. So for the range $$[1, 4]$$, $$base\_count$$ is $$[1, 1, 1, 1]$$ and $$nums\_count$$ is the count of each number ($$[1, 1, 2, 1]$$). Then the difference is $$[1, 1, 2, 1] - [1, 1, 1, 1] = [0, 0, 1, 0]$$. The third index is the only index to have a positive count and thus 3 is the duplicate number.

To meet the constant space requirement, we will consider one bit at a time and count how many times that bit is set in the numbers [1, 2, ..., n], this will be ($$base\_count$$) for the bit. Then we will count how many times the bit is set in nums, this will be ($$nums\_count$$) for the bit. If $$nums\_count - base\_count > 0$$ then this bit must be set in the duplicate number.

> A key observation is that if the array had $$n$$ elements instead of $$n + 1$$ (where each element is in the range $$[1,n]$$), this solution would not work. For example, if the input array was $$[1,3,3]$$, then $$base\_count$$ = $$[2,2]$$ and $$nums\_count$$ = $$[2,3]$$, resulting in a difference of $$[0,1]$$ and hence $$1$$ as the reconstructed number, which is incorrect. The $$n + 1$$ number ensures that number from $$1$$ to $$n$$ appear exactly once and plus one extra number.

**Algorithm**

Since this involves bit manipulation, let's do a brief recap:
* $$(1 << m)$$ accesses the $$m^{th}$$ bit. For example, $$1 = 0001_2$$ and $$(1 << 3) = 8 = 1000_2$$ notice 1 was bit shifted to the left 3 places in the binary representation.
* To check if the $$m^{th}$$ bit is set to $$1$$ in a number $$num$$, we can use $$if(((1 << m) & num) > 0)$$. For example, (1 << 2) & 12 = 4 & 12 = $$0100_2$$ & $$1100_2$$ = $$0100_2$$ = 4 which is nonzero, this tells us that the $$3^{rd}$$ bit from the right in the number 12 is set to 1.  Notice only bits that were set in both 4 and 12 remain after performing the bitwise AND operation.  

Now for the algorithm:

1) Initialize the answer ($$duplicate$$) to $$0$$

2) Iterate over each bit from $$0$$ to $$bits$$ where $$bits$$ is the [bit-length](https://en.wikipedia.org/wiki/Bit-length) of $$n$$.

    * For each bit, iterate over every number from $$1$$ through $$n$$ and count how many times the bit is set to $$1$$. This will be the base count ($$base\_count$$).

    * For each bit, iterate over every number in input array and count how many times the bit is set to $$1$$. This will be the current count ($$nums\_count$$).

    * If $$nums\_count$$ > $$base\_count$$, then set the current bit to $$1$$ in $$duplicate$$

3) After checking each bit to see if it should be set in duplicate, and setting the bits with $$nums\_count > base\_count$$ to $$1$$, return the duplicate number.

<iframe src="https://leetcode.com/playground/jxeQboCV/shared" frameBorder="0" width="100%" height="500" name="jxeQboCV"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of $$nums$$ and $$m$$ be the bit-length of $$n$$.

* Time Complexity: $$O(n \log n)$$

    The outer loop runs a maximum of $$m$$ times (once for each bit in $$n$$). The inner loop goes over all $$n$$ elements in $$nums$$, resulting in a total time complexity of $$O(m \cdot n)$$.
	
    It is a common misconception to treat $$m$$ as a constant because it is small and thus consider this to be a linear time complexity algorithm.  Setting the problem constraints aside, the value of $$m$$ depends on $$n$$.  More specifically, $$m$$ is the bit-length of $$n$$ which is approximately equal to $$log_2(n)$$.  Thus this algorithm has linearithmic time complexity.

* Space Complexity: $$O(1)$$

    No additional storage is needed (barring a few variables), resulting in a constant $$O(1)$$ space complexity.


---

### Approach 7: Floyd's Tortoise and Hare (Cycle Detection)

**Intuition**

The idea is to reduce the problem to
[Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/solution/):

> Given a linked list, return the node where the cycle begins.

First of all, where does the cycle come from?
Let's use the function `f(x) = nums[x]` to construct the sequence:
`x, nums[x], nums[nums[x]], nums[nums[nums[x]]], ...`.

Each new element in the sequence is an element in nums at the index 
of the _previous_ element. 

If one starts from `x = nums[0]`, such a sequence will produce a linked list 
with a cycle. 

> The cycle appears because `nums` contains duplicates. The duplicate node 
is a cycle entrance.

Here is how it works:

![pic](../Figures/287/simple_cycle.png)  

The example above is simple because the loop is small. Here is a
more interesting example 
(special thanks to @[sushant_chaudhari](https://leetcode.com/sushant_chaudhari)) 

![pic](../Figures/287/complex_cycle.png)

Now the problem is to find the entrance of the cycle.

**Algorithm**

[Floyd's algorithm](https://en.wikipedia.org/wiki/Cycle_detection#Tortoise_and_hare) 
consists of two phases and uses two pointers, usually called `tortoise` and `hare`. 

**In phase 1**, `hare = nums[nums[hare]]` is twice as fast as 
`tortoise = nums[tortoise]`. Since the hare goes fast, 
it would be the first to enter the cycle and run around the cycle. 
At some point, the tortoise enters the cycle as well, and since 
it's moving slower the hare catches up to the tortoise at some _intersection_ point.
Now phase 1 is over, and the tortoise has lost.

> Note that the intersection point is not the cycle entrance in the general case.  

![pic](../Figures/287/first_intersection.png)

To compute the intersection point, let's note that the hare has 
traversed twice as many nodes as the tortoise, 
_i.e._ $$2d(\text{tortoise}) = d(\text{hare})$$, implying:

$$2(F + a) = F + nC + a$$, where $$n$$ is some integer. 

> Hence the coordinate of the intersection point is $$F + a = nC$$.

**In phase 2**, we give the tortoise a second chance by slowing down the hare,
so that it now moves at the speed of tortoise: `tortoise = nums[tortoise]`, 
`hare = nums[hare]`. The tortoise is back at the starting 
position, and the hare starts from the intersection point. 

![pic](../Figures/287/phase2.png)

Let's show that this time they meet at the cycle entrance after $$F$$ steps.

- The tortoise started at zero, so its position after $$F$$ steps is $$F$$.

- The hare started at the intersection point $$F + a = nC$$, 
so its position after F steps is 
$$nC + F$$, that is the same point as $$F$$.
 
- So the tortoise and the (slowed down) hare will meet at the entrance of the cycle.

!?!../Documents/287_LIS.json:1000,362!?!

<iframe src="https://leetcode.com/playground/5pGckeAu/shared" frameBorder="0" width="100%" height="446" name="5pGckeAu"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n)$$

    

* Space Complexity: $$O(1)$$


For a detailed analysis, please refer to [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/solution/#approach-2-floyds-tortoise-and-hare-accepted).
    

---