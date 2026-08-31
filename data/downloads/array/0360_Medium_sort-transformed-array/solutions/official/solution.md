# Official Solution

**Link:** [https://leetcode.com/problems/sort-transformed-array/solution/](https://leetcode.com/problems/sort-transformed-array/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given an integer array `nums`, and a quadratic function $f(x) = ax^2 + bx + c$. Our task is to modify all the elements in the `nums` array using the function $f(x)$ and return them in sorted order.

---

### Approach 1: Naive Sorting

#### Intuition

The naive way to solve this problem is modifying all the values of the `nums` array, and then sorting them using any conventional sorting method.  
You can try implementing any sorting technique, like Merge Sort, Quick Sort, Heap Sort, etc. for practice, but here we will use the sorting methods provided by the standard library.


#### Algorithm

1. Initialize an `answer` array with the transformed values of the `nums` array.

2. Sort it using the in-built sort method.

3. Return the `answer` array.

#### Implementation


<iframe src="https://leetcode.com/playground/3C865KMg/shared" frameBorder="0" width="100%" height="293" name="3C865KMg"></iframe>


#### Complexity Analysis

Here, $n$ is the number of elements in the `nums` array.

* Time complexity: $O(n \cdot \log n)$          
  - We iterate on `nums` in $O(n)$ time and then sort the `answer` array which will take $O(n \log n)$ time.
  - Thus, overall we take $O(n + n \log n) = O(n \log n)$ time.

* Space complexity: $O(\log n)$ or $O(n)$    
  - The output array `answer` is not considered in space usage.      
  - But, some extra space is used when we sort it in-place. The space complexity of the sorting algorithm depends on the programming language.      
    - In Python, the sort() method sorts a list using the Timsort algorithm which has $O(n)$ additional space where $n$ is the number of the elements. 
    - In C++ and Swift, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.                    
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n)$.          
    - In JavaScript, the space complexity of sort() is $O(\log n)$.          

---

### Approach 2: Two Pointers

#### Intuition

We are given a function $y = f(x) = ax^2 + bx + c$ and we will get transformed array elements after replacing $x$ with elements of `nums` array, so speaking in mathematical terms we will be getting the $y$ value after putting $x$ value of the given function in the coordinate plane.

Now the best way to visualize this problem is by plotting some graphs.  
If you are familiar with quadratic functions then you will be aware of the shapes they make.       

If $a = 0$, then $f(x) = bx + c$ will represent a straight line.    
But when $a > 0$, then $f(x)$ will form an upward parabola, and, when $a < 0$, it forms a downward parabola.

**Firstly, let's discuss the case when $a > 0$**

We know that our function $f(x)$ will make an upward parabola, and the elements in the `nums` array are sorted, that is, $x$ values are in sorted order (left to right) in the coordinate plane.
Let's assume this is our quadratic function when plotted with the corresponding `nums` elements.

![a>0](../Figures/360/Slide1.PNG)

So we can see that the transformed values we will get from the left and right edge elements of the `nums` array will be greater than the transformed values we will get from the middle elements.
Thus, we can store the transformed values $f(x_i), $  $0 \leq x_i < n$ in (sorted) **decreasing order** after comparing the left and right edge elements using 2 pointers.

You can get a brief idea from the following slideshow:       

!?!../Documents/360/slideshow1.json:1024,768!?!

<br />

This method would have worked similarly if all the transformed values on the curve were present in increasing or in decreasing order without having a minima in between.

**Similarly, for the case when $a < 0$**

Our function $f(x)$ will make a downward parabola, and when plotted with corresponding `nums` elements the transformed values we will get from the left and right edge elements of `nums` array will be smaller than the transformed values we will get from middle elements.    
Thus, similarly, we can store the transformed results in **increasing order** after comparing the left and right elements using 2 pointers.

![a<0](../Figures/360/Slide18.PNG)



**And finally, for cases when $a = 0$** or, **both $a = 0$ and $b = 0$**    
This two-pointer method will still work as the plot will result in straight lines whose $y$ values can also be compared from ends using two pointers. However as we have a straight line, we will only move using one pointer, not both.

Thus we will keep two pointers at the edge boundaries and start comparing their respective transformed values, store them in our `answer` array in sorted order, move our two pointers inwards and stop when all elements are covered.


#### Algorithm

1. Create a function `transform(x, a, b, c)`, which returns the transformed value of element `x`.

2. Initialize an empty array `answer` to store transformed elements in sorted order.

3. Initialize two pointers `left = 0` and `right = nums length - 1`, to point to the end boundaries of the `nums` array.

4. If `a` is less than `0`, it means we will have a downward parabola:
    - Get the left and right pointer's transformed values `leftTransformedVal`, and `rightTransformedVal` using the `transform()` function.
    - If `leftTransformedVal` is smaller than `rightTransformedVal`, we push it in the `answer` array and increment `left` by `1`.
    - Otherwise, we push `rightTransformedVal` in the `answer` array and decrease `right` by `1`.

5. Otherwise `a` is greater than or equal to `0`, which means we will have an upward parabola or a straight line:
    - Get the left and right pointer's transformed values `leftTransformedVal`, and `rightTransformedVal` using the `transform()` function.
    - If `leftTransformedVal` is greater than `rightTransformedVal`, we push it in the `answer` array and increment `left` by `1`.
    - Otherwise, we push `rightTransformedVal` in the `answer` array and decrease `right` by `1`.
    - At the end, we reverse the `answer` array.

6. Return the `answer` array.


#### Implementation


<iframe src="https://leetcode.com/playground/ThmaVWgk/shared" frameBorder="0" width="100%" height="500" name="ThmaVWgk"></iframe>


#### Complexity Analysis

Here, $n$ is the number of elements in the `nums` array.

* Time complexity: $O(n)$          
  - We iterate over each element of the `nums` array once using `left` and `right` pointers which will take $O(n)$ time. 
  - In some cases we might reverse our `answer` array which also takes $O(n)$ time.
  - Thus, overall we take $O(n)$ time.

* Space complexity: $O(1)$ 
  - Not counting the output array, we are not using any auxiliary space other than our two pointers.

---

### Approach 3: Non-Comparison Based Sorting

#### Intuition

We can also optimize the first approach by using a non-comparison based sorting technique.   
A comparison-based sorting method (like heapsort, mergesort, etc.) takes $O(n \log n)$ time. However, using non-comparison based sorting techniques, we can sort arrays in linear time relative to the number of elements in the input array.

Here we can't use counting sort, as the range of the value of elements in the transformed array `answer` can be huge $i.e. \space(-100^3$ to $100^3)$. But we can use radix sort which is basically a counting sort on the basis of place values of integers $(0$ to $9)$.


> Here we will focus only on the implementation of the radix sort, if you are new to it then you can check it out in our [Radix Sort Explore Card](https://leetcode.com/explore/learn/card/sorting/695/non-comparison-based-sorts/4438/).

You can get a brief idea about the working of the radix sort through the following animation:


!?!../Documents/360/slideshow2.json:1024,768!?!

<br />

Also one thing to remember, radix sort is applicable only on integer arrays, as $a, b, c, x \in Z$ (set of integers), thus, $f(x) = ax^2 + bx + c \in Z$. So we can use radix sort on our transformed array `answer`.

In this approach, we will sort by assuming all elements are positive in our transformed array and then separate out the negatives and reverse them to get the correct sorted order of the negative elements.

**This approach is not expected by the interviewer and is a bit complex to code during an interview setting,   
but we are listing it here to show you how you can use a radix sort on integer arrays.**

#### Algorithm

1. Initialize an `answer` array with the transformed values of the `nums` array.

2. Find the maximum number of digits `maxDigits` we have in our `answer` array.

3. Sort the `answer` array using radix sort, that is, for each place value `placeValue` from `ones` till `maxDigits`, sort the `answer` array using function `sort(answer, placeValue)`.

4. Implement a function `sort` which takes the `answer` array and current place position `placeValue` as arguments:
    - Create a bucket `mapDigits` of size `10` to store all integers of the `answer` array according to their current place value digit at the corresponding indices in the bucket.
    - Copy all the stored integers from `mapDigits` in increasing order of place value digits (`0` to `9`) to the `answer` array.

5. At the end we separate out the negative numbers and reverse their order and append them in front of the positive numbers and store it in `answer` array.

6. Return the `answer` array.


#### Implementation


<iframe src="https://leetcode.com/playground/FiRdbsjW/shared" frameBorder="0" width="100%" height="500" name="FiRdbsjW"></iframe>


#### Complexity Analysis

Here, $n$ is the number of elements in the `nums` array, $d$ is the maximum number of digits and $b$ is the size of the bucket used.

> **Note:** In the worst-case for this problem given the constraints, `d` will be `7`, as the maximum element possible in the `answer` array is $10^6$, and the bucket size `b` will be `10`, one bucket each for `10` digits.

* Time complexity: $O(d \cdot (n + b))$          
  - We iterate on the `nums` array to generate an `answer` array of the same size which takes $O(n)$ time and then iterate over `answer` to find the maximum element and then find the max count of digits, which will take $O(n + d)$ time.
  - Then, we sort the `answer` array for each integer place which will take $O(n + b)$ time, thus for all $d$ places it will take us $O(d \cdot (n + b))$ time.
  - At last, we separate out negative and positive elements and append them to `answer`, which takes an additional $O(n)$ time.
  - Thus, overall we take $O(n + (d + n) + (d \cdot (n + b)) + n) = O(d \cdot (n + b))$ time.

* Space complexity: $O(n + b)$    
  - The output array `answer` is not considered in space usage.    
  - We use additional arrays $negatives$, and $positives$ which will take $O(n)$ space and $mapDigits$ which take $O(n + b)$ space.
  - Thus, overall we use $O(n + b)$ space.