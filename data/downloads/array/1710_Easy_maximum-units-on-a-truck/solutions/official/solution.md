# Official Solution

**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solution/](https://leetcode.com/problems/maximum-units-on-a-truck/solution/)

---

[TOC]

## Solution
---

#### Overview ####

We have to fill the truck with any box type and try to fill in the maximum number of units. The 2D array `boxTypes` has the following information on each type of box,
- Number of boxes of that type.
- Number of units inside each box of that type.

We must choose the boxes which give us maximum units.

The problem can be implemented using _Greedy Approach_. We could iteratively fill the truck by picking up the boxes having maximum units from the remaining boxes at every point. Let's look at the approach to implement the problem.

---

#### Approach 1: Brute Force

**Intuition**

We must fill the truck with maximum units. Given the 2D array `boxTypes`, we could simply traverse over each box type, find the one with maximum units and fill the truck with all the boxes of that type. Once we fill the truck with a box type, we could mark it as used, and again find the box type with maximum units from the remaining ones. This would continue until the truck is not full.

Let the box type with maximum unit be `maxUnitsBoxType`. The number of boxes that can be put in the truck using boxes of type `maxUnitsBoxType` is given by `maxUnitsBoxType[0]`.

 However, we can only fill the truck until it is not full. That is, we could only put the boxes in the truck until the remaining truck size is greater than $$0$$. Thus, if the remaining space is truck at a certain point is given by, `remainingTruckSize`, the number of boxes that can be put in the truck can be given by,

```
 boxCount =  min(maxUnitsBoxType[0], remainingTruckSize)
```

![img](../Documents/5641/BasicIdea.svg)


 Let's understand how can we implement the above idea.

**Algorithm**

- Initially, the truck is empty, hence the remaining truck capacity that must be filled would be equal to the truck size. Initialise variable `remainingTruckSize` to `truckSize`.

- The truck will be filled with boxes one by one until it is not full. In every iteration, we must find a box with maximum units from the remaining box types. Let's use the method `findMaxUnitBox` that would return the index of a box type with maximum units given by `maxUnitBoxIndex` in the 2D array $$\text{boxTypes}$$.

- Once, we have the `maxUnitBoxIndex`, we could find the number of boxes that we could put in the truck as a minimum of `remainingTruckSize` and the number of boxes available of a given type. Calculate the total number of units and reduce the truck's remaining capacity based on the number of boxes put in the truck.

- Also, we must mark the current box as used. One way of doing this would be to simply mark the number of units as `-1`. When
`findMaxUnitBox ` would indicate that all the boxes are already used and we must terminate.

- The process of filling the truck with box types would continue until the truck is not full i.e `remainingTruckSize` is greater than $$0$$.

**Implementation**

<iframe src="https://leetcode.com/playground/PbRFFENQ/shared" frameBorder="0" width="100%" height="500" name="PbRFFENQ"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(n^{2})$$, where $$n$$ is the number of elements in array `boxTypes`. In the method `findMaxUnitBox `, we are iterating over all the elements in array `boxTypes` to find the maximum units. In the worst case, when all the boxes are added to the truck we would iterate `n` times over the array of size `n`. This would give total time complexity as $$\mathcal{O}(n^{2})$$.

- Space Complexity: $$\mathcal{O}(1)$$, as we are using constant extra space to maintain the variables `remainingTruckSize` and `unitCount`.

---

#### Approach 2: Using Array Sort

We could simplify the process of finding the maximum units in every iteration. We could arrange the box types in a particular order such that we could get the desired box type in constant time without having to iterate over the entire array. The simple way to implement this is to sort the array `boxTypes` in decreasing order of a number of units.

Once all the elements in array `boxTypes` are sorted in that order, we know that box type at $$0^{th}$$ position is the one with maximum units and the one at $$1^{st}$$ position having the second highest number of units and so on.

**Algorithm**

- Initially, the truck is empty, hence the remaining truck capacity that must be filled would be equal to the truck size. Initialise variable `remainingTruckSize` to `truckSize`.

- Sort the array `boxTypes` in decreasing order of a number of units.

- Start picking up each box type from `boxTypes` array starting from $$0^{th}$$ position. The number of boxes that can be put in the truck would be the minimum of `remainingTruckSize` and the number of boxes available of the given type. Calculate the total number of units and reduce the truck's remaining capacity based on the number of boxes put in the truck.

- The process of filling the truck with box types would continue until the truck is not full i.e remainingTruckSize is greater than $$0$$.

The following figure illustrates the approach in detail for `truckSize = 8` and `boxTypes = [[3, 10], [6, 5], [4, 7], [2, 9]]`

![img](../Documents/5641/Approach2Example.svg)


**Implementation**

<iframe src="https://leetcode.com/playground/SiMgLpBz/shared" frameBorder="0" width="100%" height="395" name="SiMgLpBz"></iframe>

**Complexity Analysis**

- Time Complexity : $$\mathcal{O}(n \log n)$$, where n is the number of elements in array `boxTypes`.

  Sorting the array `boxTypes` of size `n` takes $$(n \log n)$$ time. Post that, we iterate over each element in array `boxTypes` and in worst case, we might end up iterating over all the elements in the array. This gives us time complexity as $$\mathcal{O}(n \log n) + \mathcal{O}(n) = \mathcal{O}(n \log n)$$.

- Space complexity: $O(n)$ or $O(\log n)$.

   The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.

   Therefore, the space complexity is given by $O(n)$ or $O(\log n)$.

---

#### Approach 3: Using Priority Queue

**Intuition**

There is yet another way to get the maximum units in constant time by using the Heap data structure. We could build Max Heap where the value at the root node of the heap is always the maximum value among all its children. So we could build a max heap based on the number of units.

In every iteration, we could pick up the box type which is at the root node, and remove it. After removing the root node, the next node with maximum units would become the root bode.

> This approach is not an optimization over _Approach 2_ but just another way to solve the problem.

**Algorithm**

- The heap data structure can be implemented using the priority queue. We must specify that the sort order must be based on the number of units in descending order.

- Initially, the truck is empty, hence the remaining truck capacity that must be filled would be equal to the truck size. Initialise variable `remainingTruckSize` to `truckSize`.

- The element at the top of the queue is the one having maximum units. Pick that element and remove it from the queue.

- The number of boxes that can be put in the truck would be the minimum of `remainingTruckSize` and the number of boxes available of a given type. Calculate the total number of units and reduce the truck's remaining capacity based on the number of boxes put in the truck.

- The process of filling the truck with box types would continue until the truck is not full i.e remainingTruckSize is greater than $$0$$.

**Implementation**

<iframe src="https://leetcode.com/playground/JuzhzFTk/shared" frameBorder="0" width="100%" height="480" name="JuzhzFTk"></iframe>

**Complexity Analysis**

Let  $$n$$ be the number of elements in array `boxTypes`.

- Time Complexity : $$\mathcal{O}(n \log n) + \mathcal{O}(n) = \mathcal{O}(n \log n)$$

  Sorting the array `boxTypes` takes $$\mathcal{O}(n \log n)$$.

  After that, we iterate through the deque, removing elements from the front in constant time.
  
  Each removal is $$\mathcal{O}(1)$$, and we may process up to $$n$$ items, giving $$\mathcal{O}(n)$$.

- Space Complexity: $$\mathcal{O}(n)$$

  We store the sorted items in a deque with up to $$n$$ elements, so the space usage is:
  $$\mathcal{O}(n)$$

---