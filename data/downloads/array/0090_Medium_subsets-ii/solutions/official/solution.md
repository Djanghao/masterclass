# Official Solution

**Link:** [https://leetcode.com/problems/subsets-ii/solution/](https://leetcode.com/problems/subsets-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

This problem is a successor to another LeetCode problem [78. Subsets](https://leetcode.com/problems/subsets/). We are given an array `nums` of size `n` where `1 <= n <= 10`. We need to find the power set (all possible subsets) excluding duplicate subsets. The maximum number of subsets exists when `nums` contains unique numbers only. In a subset, each number could be present or absent. Thus, for `n` numbers, the power set will consist of no more than $$2^n$$ subsets.

Since we may need to generate $$2^n$$ subsets, no solution can achieve better than exponential time complexity.  However, when the value of `n` is small (between 1 and 10 in this case), exponential time complexity is acceptable.  As such, in each of the following solutions, we'll focus our attention on generating all unique subsets while efficiently omitting all duplicate subsets.

</br>

---

### Approach 1: Bitmasking 

**Intuition**

As discussed earlier, each element could be present in or absent from the subset, so there will be a total of $$2^n$$ distinct subsets for an array of length `n` with no duplicates. The maximum possible value of `n` is 10. Thus, no more than $$2 ^ {10} = 1024$$ subsets will be generated. Since this number is small, we can represent all the subsets using bitmasking. 

>The idea is that we map each subset to a bitmask of length n, where 1 in the $$i ^ {th}$$ position of the bitmask implies nums[i] is in the subset, and 0 implies nums[i] is not in the subset.

Bitmask `000...0` signifies an empty subset, while bitmask `111...1` signifies that all numbers from the given array `nums` are present in the set. Thus, bitmask values from $$0$$ to $$2^n - 1$$ represent all possible subsets. We need to iterate over the binary representation of each number and depending on the position of set bits (bit value = 1) we can determine which numbers are present in the current subset. An unsigned integer can represent at most 32 (64 if we use `long` datatype for `mask`) positions via bitmasking. Since the given array size (ranging from 1 to 10) is less than 32, we can use bitmasking to represent all subsets. This can be better understood in the following illustration: 

![fig](../Figures/90/90_approach1.png)


<br/>

However, in this approach, some of the generated subsets will be duplicates. So we need to use an additional set, `seen`, to detect duplicate subsets. In order to make use of `seen`, we must first sort the given array. Otherwise, `seen` won't be able to distinguish between duplicate subsets. For example, without sorting `nums = [2,1,2]` our algorithm will generate subsets `[], [2], [1], [2], [2, 1], [2,2], [1, 2], [2, 1, 2]`. Here subset `[1, 2]` should be considered as a duplicate of subset `[2, 1]`. To detect such duplicate subsets, prior sorting of the array is needed. This ensures all the included subsets are unique.

**Algorithm**

1. Sort `nums` array. Sorting is required to ensure all the generated subsets will also be sorted. This helps to identify duplicates.

2. Initialize `maxNumberOfSubsets` to the maximum number of subsets that can be generated, i.e., $$2^n$$.

3. Initialize a set, `seen`, of type `string` to store all the generated subsets. Adding all the sorted subsets to the set gives us the opportunity to catch any duplicate subsets.

4. Iterate from `0` to `maxNumberOfSubsets - 1`. The set bits in the binary representation of the `subsetIndex` indicate the position of the elements in the `nums` array that are present in the current subset.

5. Intialize a string `hashcode` which will store a comma separated list of numbers in the `currentSubset` as a string. `hashcode` is necessary to uniquely identify each subset via the use of a set.

6. We run an inner `for` loop from `j = 0` to `n - 1` to check the position of set bits in `subsetIndex`. If at the $$j^{th}$$ position bit is set, add `nums[j]` to the current subset `currentSubset` and append `nums[j]` to `hashcode` string. 

7. Add the current subset `currentSubset` to `seen` and to the `subsets` list if the generated `hashcode` is not in `seen`.

8. Return `subsets`.

**Implementation**



<iframe src="https://leetcode.com/playground/V2C8bonA/shared" frameBorder="0" width="100%" height="500" name="V2C8bonA"></iframe>

**Complexity Analysis**

Here $$n$$ is the size of the `nums` array.

* Time complexity: $$O(n \cdot 2 ^ n)$$

    Sorting the `nums` array requires $$n \log n$$ time. The outer `for` loop runs $$2 ^ n$$ times. The inner loop runs $$n$$ times. We know that average case time complexity for set operations is $$O(1)$$. Although, to generate a hash value for each subset $$O(n)$$ time will be required. However, we are generating the `hashcode` while iterating the inner `for` loop. So the overall time complexity is $$O(n \log n + 2^n \cdot (n$$ (for inner loop) + $$n$$ (for stringbuilder to string conversion in Java) $$))$$ = $$O(2 ^ n \cdot n)$$. 

* Space complexity: $$O(n \cdot 2^n)$$

    We need to store at most $$2 ^ n$$ number of subsets in the set, `seen`. The maximum length of any subset can be `n`. 

    The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log n)$$. In C++ sort() function provided by STL is a hybrid of Quick Sort, Heap Sort and Insertion Sort with the worst case space complexity of $$O(\log n)$$. Thus the use of inbuilt sort() function adds $$O(\log n)$$ to space complexity.

    The space required for the output list is not considered while analyzing space complexity. Thus the overall space complexity in Big O Notation is $$O(n \cdot 2^n)$$.

    

<br/>

---

### Approach 2: Cascading (Iterative)

**Intuition**

Assume the given array has no duplicate elements. In this case, there will be a total of $$2 ^ n$$ distinct subsets. To find all the subsets we start with an empty subset. This will be the first subset. Next, we consider one element at a time and add it to each of the existing subsets. This can be better understood in the following animation:

!?!../Documents/90_SubsetsII_Approach2a.json:960,540!?!

<br/>

However, in this problem, the given array can have duplicate elements which will produce duplicate subsets if we follow the previously mentioned approach. Thus, we need to omit the duplicate subsets. For this, we need to sort the given array first. To avoid adding duplicate subsets we follow this rule:

 > Whenever the element under consideration has duplicates, we add one of the duplicate elements to all the existing subsets to create new subsets. For the rest of the duplicates, we only add them to the subsets created in the previous step. By convention, whenever a value is encountered for the first time, we add it to all the existing subsets. Then onwards we add its duplicates only to the subsets created in the previous step.

In other words, we treat a group of duplicate elements as an array. Suppose we have an array `[3, 3, 3]`. The ways to add the elements from this array to the existing subsets are as follows:

1. Not add any element having value `3` in any subset.

2. Add one `3` in all the subsets.

3. Add two `3` in all the subsets.

4. Add three `3` in all the subsets.

This can be better understood with the following animation:

!?!../Documents/90_SubsetsII_Approach2b.json:960,540!?!

<br/>

**Algorithm**

1. First, sort the array in ascending order.

2. Initialize a variable `subsetSize` to 0. `subsetSize` holds the index of the subset in the `subsets` list from where we should start adding the current element if the current element is a duplicate. In other words, it holds the index of the first subset generated in the previous step.

3. Iterate over the `nums` array considering one element at a time.

4. If we haven't seen the value of the current element before, we need to add this element to all the previously generated subsets. So set `startingIndex` to 0.

5. If the current element is a duplicate element, add it only to subsets that were created in the previous iteration. This means we will skip every subset that was created earlier than the previous iteration.  So instead of setting `startingIndex` to 0, set it equal to `subsetSize`.

6. Set `subsetSize` to the current `subsets` size. This will be the starting index of the subsets generated in this iteration.

7. Add the current element to all the subsets in the `subsets` list created before the current iteration starting from `startingIndex`.

8. Return `subsets` list.

**Implementation**


<iframe src="https://leetcode.com/playground/3UUthCSW/shared" frameBorder="0" width="100%" height="500" name="3UUthCSW"></iframe>


**Complexity Analysis**

Here $$n$$ is the number of elements present in the given array.

* Time complexity: $$O(n \cdot 2 ^ n)$$

    At first, we need to sort the given array which adds $$O(n \log n)$$ to the time complexity. Next, we use two for loops to create all possible subsets. In the worst case, i.e., with an array of `n` distinct integers, we will have a total of $$2 ^ n$$ subsets. Thus the two for loops will add $$O(2 ^ n)$$ to time complexity. Also in the inner loop, we deep copy the previously generated subset before adding the current integer (to create a new subset). This in turn requires the time of order $$n$$ as the maximum number of elements in the `currentSubset` will be at most $$n$$. Thus, the time complexity in the subset generation step using two loops is $$O(n \cdot 2 ^ n)$$. Thereby, the overall time complexity is $$O(n \log n + n \cdot 2 ^ n)$$ = $$O(n \cdot (\log n + 2 ^ n))$$ ~ $$O(n \cdot 2 ^ n)$$.

* Space complexity: $$O(\log n)$$
    
    The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log n)$$. In C++ sort() function provided by STL is a hybrid of Quick Sort, Heap Sort and Insertion Sort with the worst case space complexity of $$O(\log n)$$. Thus the use of inbuilt sort() function adds $$O(\log n)$$ to space complexity.

    The space required for the output list is not considered while analyzing space complexity. Thus the overall space complexity in Big O Notation is $$O(\log n)$$.

<br/>

---

### Approach 3: Backtracking

**Intuition**

If you're not familiar with backtracking, check out our [Explore Card](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/).

As demonstrated in the previous approaches, the key to this problem is figuring out how to avoid duplicate subsets. In the previous approach, we discussed an iterative way to do so. Although the iterative approach is optimal in terms of time and space complexity, recursive approaches tend to be more intuitive, so let's see how we can solve this problem recursively.

When designing our recursive function, there are two main points that we need to consider at each function call:

- Whether the element under consideration has duplicates or not.
- If the element has duplicates, which element among the duplicates should be considered while creating a subset.

Before discussing the approach in detail, let's first have a quick look at the recursion tree for better understanding:

![fig](../Figures/90/90_approach3_1.png)


*The recursion tree illustrating how distinct subsets are created at each function call.Here the numbers in blue indicate the starting position of the nums array where we should start scanning at that function call.*


<br/>

The above illustration gives us a rough idea about how we get the solution in a backtracking manner. Note that the order of the subsets in the result is the preorder traversal of the recursion tree. All that is left to do is to code the solution.

Start with an empty list and the starting index set to 0. At each function call, add a new subset to the output list of subsets. Scan through all the elements in the `nums` array from the starting index (written in blue in the above diagram) to the end. Consider one element at a time and decide whether to keep it or not. If we haven't seen the current element before, then add it to the current list and make a recursive function call with the starting index incremented by one. Otherwise, the subset is a duplicate and so we ignore it. Thus, if in a particular function call we scan through `k` distinct elements, there will be `k` different branches.


**Algorithm**

1. First, sort the array in ascending order.

2. Use a recursive helper function `subsetsWithDupHelper` to generate all possible subsets. The `subsetsWithDupHelper` has the following parameters:

    - Output list of subsets (`subsets`).
    - Current subset (`currentSubset`).
    - `nums` array.
    - the index in the `nums` array from where we should start scanning elements at that function call (`index`).

3. At each recursive function call:

    - Add the `currentSubset` to the `subsets` list.
    - Iterate over the `nums` array from `index` to the array end.

        - If the element is considered for the first time in that function call, add it to the `currentSubset` list. Make a function call to `subsetsWithDupHelper` with `index = current element position + 1`.
        - Otherwise, the element is a duplicate. So we skip it as it will generate duplicate subsets (refer to the figure above).
        - While backtracking, remove the last added element from the `currentSubset` and continue the iteration.

4. Return `subsets` list.

**Implementation**


<iframe src="https://leetcode.com/playground/jyuXcbcX/shared" frameBorder="0" width="100%" height="500" name="jyuXcbcX"></iframe>


**Complexity Analysis**

Here $$n$$ is the number of elements present in the given array.

* Time complexity: $$O(n \cdot 2 ^ n)$$

    As we can see in the diagram above, this approach does not generate any duplicate subsets. Thus, in the worst case (array consists of $$n$$ distinct elements), the total number of recursive function calls will be $$2 ^ n$$. Also, at each function call, a deep copy of the subset `currentSubset` generated so far is created and added to the `subsets` list. This will incur an additional $$O(n)$$ time (as the maximum number of elements in the `currentSubset` will be $$n$$). So overall, the time complexity of this approach will be $$O(n \cdot 2 ^ n)$$.

* Space complexity: $$O(n)$$
    
    The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log n)$$. In C++ sort() function provided by STL is a hybrid of Quick Sort, Heap Sort and Insertion Sort with the worst case space complexity of $$O(\log n)$$. Thus the use of inbuilt sort() function adds $$O(\log n)$$ to space complexity.

    The recursion call stack occupies at most $$O(n)$$ space. The output list of subsets is not considered while analyzing space complexity. So, the space complexity of this approach is $$O(n)$$.
<br/>

---