# Official Solution

**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solution/](https://leetcode.com/problems/single-element-in-a-sorted-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

**Intuition**

We can use a linear search to check every element in the array until we find the single element.

**Algorithm**

Starting with the first element, we iterate over every 2nd element, checking whether or not the next element is the same as the current. If it's not, then we know this must be the single element.

If we get as far as the last element, we know that it must be the single element. We need to treat it as a special case after the loop, because otherwise we'll be going over the end of the array.

<iframe src="https://leetcode.com/playground/DeDjbpRi/shared" frameBorder="0" width="100%" height="242" name="DeDjbpRi"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. For linear search, we are looking at every element in the array once.

* Space complexity : $$O(1)$$. We are only using constant extra space.

While this approach will work, the question tells us we need a $$O(\log n)$$ solution. Therefore, this solution isn't good enough.
<br/>
<br/>

---

### Approach 2: Binary Search

**Intuition**

It makes sense to try and convert the linear search into a binary search. In order to use binary search, we need to be able to look at the middle item and then determine whether the solution is the middle item, or to the left, or to the right. The key observation to make is that the starting array must always have an odd number of elements (be odd-lengthed), because it has one element appearing once, and all the other elements appearing twice.

![An array with the elements 1, 1, 4, 4, 5, 5, 6, 6, 8, 9, 9](../Figures/540/example1.png)

Here is what happens when we remove a *pair* from the center. We are left with a left subarray and a right subarray.

![An array with the elements 1, 1, 4, 4, 5, 5, 6, 6, 8, 9, 9. The 5's are crossed out.](../Figures/540/example2.png)

Like the original array, the subarray containing the single element must be odd-lengthed. The subarray *not* containing it must be even-lengthed. So by taking a pair out of the middle and then calculating which side is now odd-lengthed, we have the information needed for binary search.

**Algorithm**

We start by setting ```lo``` and ```hi``` to be the lowest and highest index (inclusive) of the array, and then iteratively halve the array until we find the single element or until there is only one element left. We know that if there is only one element in the search space, it must be the single element, so should terminate the search.

On each loop iteration, we find ```mid```, and determine the odd/ evenness of the sides and save it in a variable called ```halvesAreEven```. By then looking at which half the middle element's *partner* is in (either last element in the left subarray or first element in the right subarray), we can decide which side is now (or remained) odd-lengthed and set ```lo``` and ```hi``` to cover the part of the array we now know the single element must be in.

The trickiest part is ensuring we update ```lo``` and ```hi``` correctly based on the values of ```mid``` and ```halvesAreEven```. These diagrams should help you understand the cases. When solving problems like this, it's often good to draw a diagram and think really carefully about it to avoid off-by-one errors. Avoid using a guess and check approach.

*Case 1: Mid’s partner is to the right, and the halves were originally even.*

The right side *becomes* odd-lengthed because we removed ```mid```'s partner from it. We need to set ```lo``` to ```mid + 2``` so that the remaining array is the part above ```mid```'s partner.

![fig](../Figures/540/case1.png)

*Case 2: Mid’s partner is to the right, and the halves were originally odd.*

The left side *remains* odd-lengthed. We need to set ```hi``` to ```mid - 1``` so that the remaining array is the part below ```mid```.

![fig](../Figures/540/case2.png)

*Case 3: Mid’s partner is to the left, and the halves were originally even.*

The left side *becomes* odd-lengthed because we removed ```mid```'s partner from it. We need to set ```hi``` to ```mid - 2``` so that the remaining array is the part below ```mid```'s partner.

![fig](../Figures/540/case3.png)

*Case 4: Mid’s partner is to the left, and the halves were originally odd.*

The right side *remains* odd-lengthed. We need to set ```lo``` to ```mid + 1``` so that the remaining array is the part above ```mid```.

![fig](../Figures/540/case4.png)

<iframe src="https://leetcode.com/playground/7MRAYayD/shared" frameBorder="0" width="100%" height="500" name="7MRAYayD"></iframe>

Another interesting observation you might have made is that this algorithm will still work even if the array isn't fully sorted. As long as pairs are always grouped together in the array (for example, ```[10, 10, 4, 4, 7, 11, 11, 12, 12, 2, 2]```), it doesn't matter what order they're in. Binary search worked for this problem because we knew the subarray with the single number is always odd-lengthed, not because the array was fully sorted numerically. We commonly call this an *invariant*, something that is always true (i.e. "The array containing the single element is always odd-lengthed"). Be on the lookout for invariants like this when solving array problems, as binary search is very flexibile!

**Complexity Analysis**

* Time complexity : $$O(\log n)$$. On each iteration of the loop, we're *halving* the number of items we still need to search.

* Space complexity : $$O(1)$$. We are only using constant space to keep track of where we are in the search.
<br/>
<br/>

---

### Approach 3: Binary Search on Evens Indexes Only

It turns out that we only need to binary search on the even indexes. This approach is more elegant than the last, although both are good solutions.

**Intuition**

The single element is at the *first* even index *not* followed by its pair. We used this property in the linear search algorithm, where we iterated over all of the *even indexes* until we encountered the first one not followed by its pair.

Instead of linear searching for this index though, we can binary search for it.

After the single element, the pattern changes to being odd indexes followed by their pair. This means that the single element (an even index) and all elements after it are even indexes *not* followed by their pair. Therefore, given any even index in the array, we can easily determine whether the single element is to the left or to the right.

**Algorithm**

We need to set up the binary search variables and loop so that we are only considering *even* indexes. The last index of an odd-lengthed array is always even, so we can set ```lo``` and ```hi``` to be the start and end of the array.

We need to make sure our ```mid``` index is *even*. We can do this by dividing ```lo``` and ```hi``` in the usual way, but then *decrementing* it by ```1``` if it is odd. This also ensures that if we have an even number of even indexes to search, that we are getting the *lower middle* (*incrementing* by 1 here would not work, it'd lead to an infinite loop as the search space would not be reduced in some cases).

Then we check whether or not the ```mid``` index is the same as the one after it.
- *If it is*, then we know that ```mid``` is not the single element, and that the single element must be at an even index *after* ```mid```. Therefore, we set ```lo``` to be ```mid + 2```. It is ```+2``` rather than the usual ```+1``` because we want it to point at an even index.
- *If it is not*, then we know that the single element is either at ```mid```, or at some index *before* ```mid```. Therefore, we set ```hi``` to be mid.

Once ```lo == hi```, the search space is down to 1 element, and this must be the single element, so we return it.

<iframe src="https://leetcode.com/playground/7NmwcLQr/shared" frameBorder="0" width="100%" height="344" name="7NmwcLQr"></iframe>

**Complexity Analysis**

* Time complexity : $$O(\log \frac{n}{2}) = O(\log n)$$. Same as the binary search above, except we are only binary searching half the elements, rather than all of them.

* Space complexity : $$O(1)$$. Same as the other approaches. We are only using constant space to keep track of where we are in the search.