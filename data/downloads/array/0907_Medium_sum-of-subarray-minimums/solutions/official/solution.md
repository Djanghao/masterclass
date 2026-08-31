# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solution/](https://leetcode.com/problems/sum-of-subarray-minimums/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we are given an array of integers. We need to return the sum of all subarray minimums. A subarray is a contiguous list of elements from the given array.

You can think of the problem as a three-step process:

1. Consider all subarrays of the given array.
2. For each of the subarrays, calculate the minimum.
3. Add all the minimums calculated above.

The summation of all minimums is what we need to return as an answer.

The first approach introduces the concept of each array element's contribution to the answer. It then uses a monotonic stack to arrive at the solution. The second approach applies dynamic programming and builds on top of the earlier monotonic stack method.

Let's dive in.

---

### Approach 1: Monotonic Stack - Contribution of Each Element

#### Intuition

When thinking about a solution, it often helps to consider the most naive approach first. It helps cement the understanding of the problem, and then we can observe areas where optimization is possible.

Let's do exactly what the question asks us to do.

Consider all possible ranges in the given array. Let's say there are five elements in the given array (0-indexed). We can think about subarrays starting at the 0th element, then subarrays beginning at the 1st element, 2nd element up till the last element. We should be able to do this using two nested loops, one responsible for the start point of the range and the other one for the endpoint of the range.

While considering each subarray of a range, we calculate the minimum of this range as well.

Once we have the minimum of a range, we add this to the running total of all minimums. In the end, this running total will be our answer.

!?!../Documents/907/brute-force-slideshow.json:960,540!?!

<br />

While this solution works, most of the time is spent generating all subarrays. Consider an implementation involving two nested $for$ loops; it'll need $O(n ^ 2)$ time. Can we improve this further?

##### Improving on brute force

You might have noticed that we have been focusing on the range first. Once we have a range, we look for the minimum element in the range. Generating these ranges is the most time-consuming part of the algorithm.

At times, when trying to optimize a solution, it helps to look at the problem from a new perspective. Indeed, it is possible if we flip the way of approaching this problem. In the beginning, let's focus on each element instead of focusing on the range. Then we'd figure out the range in which it is the minimum. By doing this, we are trying to determine each element's contribution toward the summation of all minimums.

In fact, let's go one step further. Assume that we know the range in which each element is the smallest. If we know that an element is the smallest in a given range, we can determine the number of subarrays in this range that contain this element. Because the element is the smallest in the range, it will also be the smallest in all the subarrays. The 'count of subarrays' multiplied by the element will give us the element's contribution to the final summation.

Let's figure out how to get the number of subarrays that contain a specific element in a given range.

We are given an array of integers - $[0, 3, 4, 5, 2, 3, 4, 1, 4]$. We need to find the number of subarrays where $2$ is the smallest integer. We can see that $2$ is the smallest integer in the range $[1, 6]$ denoted by the subarray $[3, 4, 5, 2, 3, 4]$. So, all the subarrays of this range that contain $2$ will also have $2$ as the smallest integer. As a result, the question has been reduced to - "In the given range, find the count of subarrays which contain $2$".

Each subarray is a continuous series of elements that contains $2$ from the given range. So to count them, we can count every subarray that starts before $2$ or at $2$, and ends after $2$ or at $2$. As explained in the diagram below, there is an easy way of counting them.

!?!../Documents/907/subarray-count-slideshow.json:960,540!?!

<br />

As explained above, we can get the total count by multiplying two numbers - the count of elements before (and including) $2$ and the count of elements after (and including) $2$. There are $4$ elements before (and including) $2$ - $[3, 4, 5, 2]$ and $3$ elements are after (and including) $2$ - $[2, 3, 4]$. So the total is $3 * 4 = 12$.

So, if we know the count of subarrays where each element is the smallest, we can deduce the amount each element will contribute to the final summation. For an element, it will be `element * count of subarrays where it is smallest`. We can sum this amount for every element to get the answer.

Now the only remaining part of the puzzle is how to get the range in which each element is the smallest. For this, we find the nearest element on the left, which is less than itself. Then, find the closest element on the right, which is less than itself. If $i$ and $j$ are the indices of these elements on the left and right, then $[i + 1, j - 1]$ indices create our range.

We can use a monotonic increasing stack to determine the value of $i$ and $j$. Monotonic stacks are used to calculate the previous smaller element and the next smaller element in linear time complexity. Please note that at this point, this problem is very similar to the classic problem [84. Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/) except the summation part.

##### Finding the previous smaller and the next smaller elements with a monotonic stack

Let's first learn what is monotonically increasing array or a stack. An array $arr$ is called monotonically increasing if for two indices $i$ and $j$ where $i > j$, $arr[i] >= arr[j]$ always holds true. If the array is strictly increasing, the relation can change to $>$ in the place of $>=$. In other words, every element is greater than (or equal to, if the array is not strictly increasing) the last element. For a monotonically decreasing array/stack, the opposite will hold. But here, because we are interested in the next and previous smaller items, we only care about a monotonically increasing stack.

Note: if we want to know the next and previous larger elements, we can use a monotonically decreasing stack. Because we are interested in the next and the previous smaller elements, we don't need a monotonically decreasing stack.

> How to build a monotonically increasing stack?

To build a monotonically increasing stack, as we iterate through an array's elements, we push them onto the stack. But before pushing an element, we ensure that always increasing property is maintained.

This means if the item at the top of the stack is bigger than or equal to the current item under iteration, we first pop it off before pushing the current element on top.

But how can building a monotonically increasing stack be helpful here? We'll see that in a moment. The answer lies in the process of building it.

As a new item gets added to the stack, older items are removed from the top if they are bigger. In other words, the items that are getting popped must be greater than or equal to the incoming element. We can also say that the incoming element must be the next smaller element of the item going off the stack. So, every time an item is popped, we get to know about its next smaller item.

If the stack is not empty, the new stack top would contain the previous smaller item. That's because whenever a new item is added to the stack, we ensure that all the bigger items are removed first. So the stack guarantees that the previous element has to be the previous smaller element.

If the stack becomes empty at the time of removal of an item, it indicates that the outgoing item is the smallest item seen so far. Also note that once the process is complete, the stack contains a series of items sorted in increasing order. These are also the items that have no smaller items after themselves. And their previous smaller items are stored right below them in the stack.

Let's also see the whole process with the help of an example.

!?!../Documents/907/monostack-slideshow.json:960,540!?!

<br />

**Edge Case - Duplicate Elements**

One thing that we need to be careful about - we should make sure that we don't count the contribution by an element twice. This is possible in the cases such as `[2, 2, 2]`. While finding the boundary elements for a range, we look for elements that are *strictly less than* the current element on the left. To decide the right boundary, we look for the elements which are *less than or equal to* the current element.

Example - `[3, 1, 5, 2, 6, 2, 8, 2, 1]`

In the example given above, $2$ appears three times at indexes $3$, $5$, and $7$. When calculating the range for the second $2$ (at index $5$), we calculate the next smaller element to be the $2$ at index $7$. The previous smaller comes from strict comparison, though, so the previous smaller element is $1$ at index $1$.

For the third $2$, at index $7$. Previous smaller item index - $1$, next smaller item index $8$.

We make sure that we consider strictly smaller elements on the left (previous smaller). At the same time, we consider smaller and equal elements on the right. This helps in ensuring that none of the ranges are counted twice when making calculations.

#### Algorithm

**Note**: we use a stack to store the indices of array elements. We don't keep the elements themselves in the stack. So in the algorithm below, when we say that we pop an item from the stack, we are actually removing the item's index from the stack.

1. Declare a monotonically increasing stack $stack$, and a variable to hold the summation of minimums $sumOfMinimums$.

2. Create a monotonically increasing stack. Iterate index $i$ from $0$ to $n$ (inclusive) where $n$ is the length of the given array $arr$. While in practice, in a $0$-indexed array, index values extend until $n - 1$ only, we use value $n$ to indicate that we have reached the end of the array, and everything left in the stack can then be removed.

   Do the following for each index $i$ in the array $arr$ -
      1. If the stack isn't empty, pop all the items from the top until $i$ has reached $n$ or the item at the top of the stack, $stackTop <= arr[i]$.

         According to our constraint, the stack can contain only the increasing items. So, before we push the current index $i$ into the stack, we need to ensure that $stackTop$ is smaller than the current item, $arr[i]$. So, the items bigger than or equal to the current item, are removed from the stack top.

         Please note that we must be careful about duplicate elements in the array. So, while considering the next smaller items, we also allow equal elements. When it comes to previous smaller items, though, we keep them strictly smaller (not equal).

         For each item $mid$, popped from the stack, we get the range in which it is minimum. The range is defined by all the items between the previous smaller item and the next smaller item.

         The next smaller item's index is $i$. The previous smaller item's index comes from the current top of stack. If the stack is empty, we consider it $-1$.

         Calculate the contribution of the element as -

         $$ contribution = arr[mid] * (i - mid) * (mid - previousSmallerIndex) $$

         When $i$ reaches $n$, we would have pushed all the array elements into the stack. Some of them would have been removed as well. The remaining items are the ones that have no smaller items after them. So we can consider the array's length as the $nextSmallerIndex$ for them. At the same time, the $previousSmaller$ index would be the item below them in the stack.

         We can use the same logic as explained in the previous approach to calculate their contribution.

         This $contribution$ gets added to the running total of minimums. $sumOfMinimums += contribution$
      2. Because all the bigger items have already been removed from the stack, we can now push the index $i$ into the stack.
3. Return the running total $sumOfMinimums$ as the final answer (because this number could be huge, return the mod with the given number

!?!../Documents/907/stack-subarray-sum-slideshow.json:960,540!?!

<br />


#### Implementation

<iframe src="https://leetcode.com/playground/bmWRhZgZ/shared" frameBorder="0" width="100%" height="500" name="bmWRhZgZ"></iframe>


#### Complexity Analysis

With $n$ elements in the given array $arr$ -

* Time complexity: $O(n)$. While building a monotonic stack, each element is pushed in once and popped out once. Every time an item is popped, we calculate the contribution of that item. All of these are constant time operations which are done $n$ times. So the time complexity is $O(n)$.

* Space complexity: $O(n)$. In the worst-case scenario, where the elements are in increasing order. The stack would contain all the elements. So the space requirement grows linearly with the size of the input. It is $O(n)$.

---

### Approach 2: Monotonic Stack + Dynamic Programming

#### Intuition

In the previous approach, we learned the concept of finding the contribution each element makes toward the final summation. For this, we iterated through all the elements and stored the range in which each element is the smallest. For the current approach, we try to find a way so that elements appearing later in order can use the calculation done for previous elements.

In other words, can we find overlapping subproblems? Then we can build on smaller problems and find a solution for bigger problems. In the current context, can we use smaller subarrays to find a solution for larger subarrays?

Let's define an array $dp$ of the same length as the given array $arr$. $dp[i]$ signifies the sum of the minimums of all subarrays, which end at an index $i$. Let's try to find a relation between $dp[i]$ and $dp[j]$ where $i > j$. We can see that the number of subarrays ending at $i$ will be more than the number of subarrays ending at $j$. So we want to build on the result of $dp[j]$ to find the result of $dp[i]$.

Let's take an example and see how this might work.

$arr = [8, 6, 3, 5, 4, 9, 2]$

Let's consider all subarrays which end at the element $3$. There are three such subarrays.

$[8, 6, 3], [6, 3], [3]$

$3$ is the smallest element here. So the sum contributed by all subarrays ending at $3$ is $3 + 3 + 3 = 9$. Let's call it $dp[2] = 9$, as $2$ is the index of element $3$.

Now, let's look at the next element, $5$. Four subarrays end at $5$. We can get them by concatenating $5$ at the end of the subarrays ending at the previous element. One subarray will consist of $5$ as the only element.

$[8, 6, 3], [6, 3]$ and $[3]$ are clubbed with $5$ to get $[8, 6, 3, 5], [6, 3, 5], [3, 5]$ and one subarray with $5$ as the only element - $[5]$

The current element $5$ is greater than the previous element $3$. So we can see that in all the subarrays made by concatenating $5$ with previously seen subarrays, $5$ is not going to be the minimum element. There is only one subarray where it is the minimum element, $[5]$. So $5$ will contribute its value to the summation $dp[3]$ with just one subarray where it is the only element.

Subarray minimums' sum for subarray ending at index $3$:

$dp[3] = dp[2] + 5 = 9 + 5 = 14$

In other words, the following should be true for two elements at index $i$ and $i + 1$

if $arr[i + 1]$ > $arr[i]$,

then $dp[i + 1] = dp[i] + arr[i + 1]$, 

What if, in the place of $5$, the number was anything less than $3$? We can see a similar case with the help of the next element at the index $4$.

There are five subarrays that end at $4$. 

$[8, 6, 3, 5, 4], [6, 3, 5, 4], [3, 5, 4], [5, 4], [4]$

Notice that the current element $4$ is smaller than its previous element, $5$. So, we walk left from $4$ to find the first element smaller than $4$. We find $3$ at index $2$. We can see that in the subarrays which start after $3$, $4$ is the minimum element. There are two such subarrays - $[5, 4], [4]$. The rest of them maintain $3$ as the minimum element.

$dp[4] = dp[2] + 2 * arr[4]$

$dp[4] = 9 + 2 * 4 = 17$

(the $2$ above comes from the two subarrays $[5, 4]$ and $[4]$, in other words, the difference between indices $4$ and $2$)

We should be able to see a pattern emerging here. Take any element $i$ in the array $arr$. As we walk toward the left from $i$, we look for the index $j$ of the first element smaller than or equal to $arr[i]$. We find $i - j$ subarrays with $arr[i]$ as the minimum element. For the rest, $dp[j]$ contains the answer, so we sum both the values to get $dp[i]$.

$dp[i] = dp[j] + (i - j) * arr[i]$

For the elements which have no smaller element appearing before them in the array, we can assume $j$ to be $-1$ and $dp[j] = 0$

This approach, just like the previous one, depends on finding previous smaller elements in linear time. We use a monotonic stack again to find previous smaller elements for each index. We can populate the $dp$ array in parallel. So, we should be able to find the answer in one Pass.

In the end, the summation of all the elements in the $dp$ array gives us the final answer.

#### Algorithm

1. Create a $dp$ array of the same size as the input array $arr$. All the elements are 0 by default.

2. Initialize an empty stack $stack$, which will contain a monotonically increasing stack.

3. For each of the elements at index $i$ in the array

   1. Pop all the elements from the stack until the stack is empty or the top of the stack is smaller than the current element.

   2. There are two cases

      * Stack is empty. This means the current element has no previous element smaller than itself.

        $dp[i] = (i + 1) * arr[i]$

      * Stack is not empty. The top of the stack represents the index of the previous smaller element. Let's call it $j$.

        $dp[i] = dp[j] + (i - j) * arr[i]$

4. At the end, we sum all the elements of the $dp$ array to get the answer.

The process is explained in the slideshow below.

!?!../Documents/907/dp-subarray-sum.json:960,540!?!

<br />

#### Implementation


<iframe src="https://leetcode.com/playground/Hkf6Swgy/shared" frameBorder="0" width="100%" height="500" name="Hkf6Swgy"></iframe>

#### Complexity Analysis

With $n$ elements in the given array $arr$ -

* Time complexity: $O(n)$. Creating a monotonic stack takes $O(n)$ time. As we build the monotonic stack, we fill the $dp$ array at the same time. Filling the $dp$ array for each element takes constant time, so for the all the items, it'd be $O(n)$. In the end, we take the sum of all elements of the $dp$ array, which also takes $O(n)$. So the upper bound always remains under $O(n)$.

* Space complexity: $O(n)$. We use two external data structures - $dp$ array occupies $O(n)$ space, $stack$ can take $O(n)$ space in the worst case scenario. So, the program requires $O(2n)$ space. Upon removing the constant factor $2$, we get $O(n)$ as the final space complexity.