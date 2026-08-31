# Official Solution

**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solution/](https://leetcode.com/problems/buildings-with-an-ocean-view/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we need to find all of the buildings that have an ocean view and return their indices. A building is said to have an ocean view if and only if all the buildings to its right are strictly shorter.

![image](../Figures/1762/Slide1.JPG)

<br />

When first coming up with the solution to any problem, it often helps to start with the most naive approach.  For this problem, the most naive approach is as follows: for each building, we will iterate over all of the buildings to its right and check if there is any building with equal or greater height than the current building.


```c++
// Let N equal the length of the array heights.
for current = 0 to N     
    canSee = true
    
    for next = current + 1 to N 
        if current height <= next height
            canSee = false
    
    if canSee
        add current index to answer array
```

However, this approach requires $$O(N^2)$$ time because, for all $$N$$ buildings, we check every building to its right to see if any are of equal height or taller, which requires $$O(N)$$ time per building.  Intuitively, we will need to visit every building at least once to determine if it has an ocean view, but let's see if we can find a way to do so without repeatedly visiting all of the buildings to the right.  
<br />

---

### Approach 1: Linear Iteration

**Intuition**

Our goal is to create an array (`answer`) that contains indices for the buildings that have an ocean view and ideally to do so without looking at every building to the right every time we need to find out if a building has an ocean view.  So what can we change to improve on the naive solution?

When looking for a way to optimize the naive solution, sometimes it helps to consider the problem from a new perspective. How about instead of looking right and asking, "does any building block this building's view" we look left and ask "which buildings' view is blocked by this building?"  

For each building, initially, let's assume that it has an ocean view. Currently, we're not worrying about any of the buildings to the right.  

Instead, we will look left and see if any of the buildings that had an ocean view are blocked by the current building. Any buildings whose view is blocked must be removed from the answer array before we can add the current building into the answer array.

Now, if the current building is strictly shorter than the last building in the answer array, then it will not block the ocean view of any of the buildings that are already present in the answer array.  This is because the last building present in the array was not blocking the ocean view of any other buildings, and the current building must be even shorter.
Thus, the current building will be shorter than all of the other buildings in the answer array.    

By repeating this process of removing any building with a blocked view from the array and then appending the current building to the array, every building will be added to the answer array once, and every blocked building will be removed from the answer array once. Thus we have our answer. 

</br>

!?!../Documents/1762/slideshow1.json:960,540!?!

</br>

**Algorithm**

1. Create an `answer` array to store all of the buildings that have an ocean view.
2. Iterate over the given array of buildings from left to right.
3. For each current building:
    - Pop all the building indices from the end of the `answer` array if their height is less than or equal to the height of the current building.
    - Push the current building index into the `answer` array.
4. In the end, the `answer` array will only contain buildings that have an ocean view. Return the `answer` array.

**Implementation**

<iframe src="https://leetcode.com/playground/8UD8Hq6p/shared" frameBorder="0" width="100%" height="463" name="8UD8Hq6p"></iframe>

**Complexity Analysis**

Here $$N$$ is the size of the given array.

* Time complexity: $$O(N)$$.    
    - We iterate over the given array once.     
    - Each building's index can be pushed to `answer` and popped from `answer` at most once, and both of the operations take $$O(1)$$ time.
    - In Java, copying the elements from an array list to an integer array will take an additional $$O(N)$$ time.

* Space complexity: $$O(N)$$.    
    - There is no auxiliary space used other than the output. The output does not count towards the space complexity. However, in the worst-case scenario, `answer` may contain as many as $$N - 1$$ indices, and then the very last building is the tallest, so the output will reduce to one index. In this scenario, the algorithm must store $$N - 1$$ elements at some point, but only $$1$$ element is included in the output.
    - In Java, in order to maintain a dynamic size array, we created an extra Array List that supports fast $$O(1)$$ push/pop operation. Array List can contain at most $$N$$ elements. Hence in Java, an additional $$O(N)$$ space is used.

<br/>

---

### Approach 2: Monotonic Stack 

**Intuition**

In the previous approach, we performed better than the naive solution by changing our perspective.  Instead of looking ahead to see if any building to the right is blocking the current building's view, we looked back and removed every building whose view is blocked by the current building.  By removing all shorter buildings from the array before adding the current building to the array, we inadvertently maintained a monotonic stack where the building heights are in decreasing order.  So the key to the first approach's success was using a **monotonic stack** and traversing the array from left to right but looking **left** (to see which buildings are blocked) instead of looking **right** (to see if any building is blocking the current building's view).  

Let's take these two ideas from the first approach and use them as the foundation for a new approach.  First, let's take the idea of looking in the opposite direction of the array traversal, except this time we will traverse from right to left.  So, unlike the first approach, where we traversed the array from left to right checking if the current building blocks other buildings' ocean view to its left, here, we will traverse from right to left and check if the current building's ocean view is blocked by any building to its right.

So we can convert this problem into finding the next element to the right that is greater than or equal to the current element. If there is no element to the right that is greater than or equal to the current element, it means the view is not blocked. For clarity, let's consider an example where we traverse from right to left and look right to check if the current building's ocean view is blocked by any building to its right.

> Assume we have $$6$$ buildings with heights, $$[5, 2, 1, 3, 4, 2]$$.    
> Now, we can see the buildings at indices $$5$$ and $$4$$ do not have any next greater or equal height building to their right. Hence their views are not blocked.      
> The building at index $$3$$ has the next greater or equal height building at index $$4$$. Hence its view is blocked by the building at index $$4$$.    
> Similarly, the buildings at indices $$2$$ and $$1$$ have their next greater or equal height building at index $$3$$ to their right. Hence their views are blocked.      
> The building at index $$0$$ does not have any next greater or equal building. Hence its view is not blocked.    


But how can we efficiently check if any building to the right is taller than the current building? In the previous approach, for each building, we would pop all buildings whose view would be blocked by the current building from the answer array (which was effectively a stack). Here, we can adopt a very similar approach and use a stack to store the buildings to the right in decreasing order. Just like before, for each building, we can pop all buildings from the stack that are strictly shorter than the current building and then add the current building to the stack.  

This process of popping all shorter buildings from the stack before adding the current building to the stack means that the stack will always contain buildings in decreasing order, hence it is called **monotonically decreasing stack**.    

> A stack when it consists of elements only in decreasing order is known as a monotonically decreasing stack.    
The basic idea is to only push the new element onto the stack if it is strictly smaller than the top element, otherwise pop all elements that are less than or equal to the new element from the top of the stack, and then push the new element onto the stack. This way, the stack's elements will be in strictly decreasing order.     

<br />


![image](../Figures/1762/Slide2.JPG)

<br />

To learn more, here is an article about [Monotonic Stacks](https://leetcode.com/problems/sum-of-subarray-minimums/discuss/178876/stack-solution-with-very-detailed-explanation-step-by-step) written by a fellow LeetCode user.

As shown above, just before the current element is added to a monotonically decreasing stack, all elements in the stack will be greater than or equal to the current element. Here, since we are traversing the buildings from right to left, this means that the stack will only contain buildings of equal or greater height that are to the right of the current building.  Thus, the current building will only have an ocean view when the stack is empty.  Otherwise, there must exist a building of equal or greater height to the right of the current building. Therefore, by maintaining a monotonically decreasing stack as we traverse the buildings from right to left, we can tell if a building has an ocean view by whether or not the stack is empty just before the building is added to the stack.
</br>

Thus, we can start by traversing the given array of building heights from right to left.     
For each building, some values may already be in the stack.  These values are the indices of buildings to the right of the current building. Then we can pop the shorter buildings from the top of the stack to find the first building to the right that has a greater or equal height than the current building.
If there is no next building with greater or equal height, then the stack will be empty.  This means that no buildings are blocking the current buildings' view of the ocean.     
Then push the current building into the stack and repeat the process for finding the next building of greater or equal height for the next building in our array traversal.

<br />

!?!../Documents/1762/slideshow2.json:960,540!?!

</br>

**Algorithm**

1. Iterate over the array of building heights from right to left.
2. For each current building,
    - While the stack is not empty, and the height of the building on top of the stack is less than the height of the current building, repeatedly pop from the stack.  This will result in one of two cases:
        - Stack becomes empty, which means there is no greater or equal height building present to the right of the current building. Thus the view is not blocked, and we can append the current building index to the `answer` array.
        - Stack is not empty, which means there is at least one greater or equal height building. Thus the view is blocked.
    - Push the current building index into the stack.
3. Since we traversed the input array from right to left, the building indices were added to `answer` in reverse order. Thus, before returning `answer`, we must reverse the `answer` array so that it is in ascending order.
4. Return the array `answer`.

**Implementation**

<iframe src="https://leetcode.com/playground/EmWBKRsh/shared" frameBorder="0" width="100%" height="500" name="EmWBKRsh"></iframe>

**Complexity Analysis**

Here $$N$$ is the size of the given array.

* Time complexity: $$O(N)$$.    
    - We iterate over the given array once.
    - Each building's index can be pushed into and popped from the stack at most once, and both the operations take $$O(1)$$ time.
    - The array is reversed at the end which takes $$O(N)$$ time.
    - In Java, the copying of elements from the array list to an integer array in reverse order also takes $$O(N)$$ time.

* Space complexity: $$O(N)$$.    
    - An extra stack is created, which can take at most $$O(N)$$ space.
    - In Java, in order to maintain a dynamic size array (since we don't know the size of the output array at the beginning), we created an extra Array List that supports fast $$O(1)$$ push operation. The Array List may contain at most $$N$$ elements.

<br/>

---

### Approach 3: Monotonic Stack Space Optimization

**Intuition**

In the previous approach, we converted this problem into finding the next greater or equal element for each element in the array. If an element does not have a next greater or equal element, it means its view is not blocked.

Do we really need to store all the greater or equal height buildings to the right of the current building in the stack?
As we iterated over the array from right to left, we pushed each building into the stack. Each building would remain in the stack until we reached a taller building. At which point, the shorter building would be popped from the stack. This means that the tallest building seen so far would always be in the stack unless the current building is the tallest building seen so far, in which case, the stack will be empty. Simply put, while traversing from right to left, the current building will only have an ocean view if it is the tallest building seen so far.

Therefore, we can simplify the previous approach by traversing from right to left and just keep one variable to denote the tallest building seen so far. 
Then, if the current building's view is not blocked by the tallest building seen so far, the current building must have an ocean view. 
Thus, we just need to track the maximum height building encountered so far while traversing from right to left.

!?!../Documents/1762/slideshow3.json:960,540!?!

**Algorithm**

1. Initialize `maxHeight` to `-1`. It will store the maximum height of the buildings to the right of the current building.
2. Iterate over the buildings array from right to left.
    - If the current building is taller than `maxHeight`, then append its index to the `answer` array and update `maxHeight` with the current building's height.
3. At the end, the `answer` array has the indices of the buildings that can see the ocean in descending order.
4. Reverse the `answer` array (to make it in ascending order) and return it.

**Implementation**

<iframe src="https://leetcode.com/playground/ajLLNNbA/shared" frameBorder="0" width="100%" height="497" name="ajLLNNbA"></iframe>


**Complexity Analysis**

Here $$N$$ is the size of the given array.

* Time complexity: $$O(N)$$.    
    - We iterate over the given array once, and for each building height, we perform a constant number of operations.
    - The answer array is reversed at the end, which also takes $$O(N)$$ time.
    - In Java, copying the elements from the array list to an integer array in reverse order also takes $$O(N)$$.

* Space complexity: $$O(1)$$.    
    - No auxiliary space was used other than for the output array.
    - Although, in Java, in order to maintain a dynamic size array (since we don't know the size of the output array at the beginning), we created an extra Array List that supports fast $$O(1)$$ push operation. Array List can contain at most $$N$$ elements, hence for the Java solution, the space complexity is $$O(N)$$.

<br/>

---