# Official Solution

**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solution/](https://leetcode.com/problems/maximum-distance-in-arrays/solution/)

---

[TOC] 
 
## Solution

---
### Approach #1 Brute Force [Time Limit Exceeded]

The simplest solution is to pick up every element of every array from $$arrays$$ and find its distance from every element in all the other arrays except itself and find the largest distance from out of those.

<iframe src="https://leetcode.com/playground/LfUi9ad7/shared" frameBorder="0" width="100%" height="327" name="LfUi9ad7"></iframe>

**Complexity Analysis**

* Time complexity: $$O((n*x)^2)$$. We traverse over all the arrays in $$arrays$$ for every element of every array considered. Here, $$n$$ refers to the number of arrays in $$arrays$$ and $$x$$ refers to the average number of elements in each array in $$arrays$$.

* Space complexity: $$O(1)$$. Constant extra space is used.

---
### Approach #2 Better Brute Force [Time Limit Exceeded]

**Algorithm**

In the last approach, we didn't make use of the fact that every array in $$arrays$$ is sorted. Thus, instead of considering the distances among all the elements of all the arrays(except intra-array elements), we can consider only the distances between the first(minimum element) element of an array and the last(maximum element) element of the other arrays and find out the maximum distance from among all such distances. 

<iframe src="https://leetcode.com/playground/2w5UzMVN/shared" frameBorder="0" width="100%" height="327" name="2w5UzMVN"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n^2)$$. We consider only max and min values directly for every array currenty considered. Here, $$n$$ refers to the number of arrays in $$arrays$$.

* Space complexity: $$O(1)$$. Constant extra space is used.

---
### Approach #3 Single Scan [Accepted]

**Algorithm**

As discussed already, in order to find out the maximum distance between any two arrays, we need not compare every element of the arrays, since the arrays are already sorted. Thus, we can consider only the extreme points in the arrays to do the distance calculations.

Further, the two points being considered for the distance calculation should not both belong to the same array. Thus, for arrays $$a$$ and $$b$$ currently chosen, we can just find the maximum out of $$a[n-1]-b[0]$$ and $$b[m-1]-a[0]$$ to find the larger distance. Here, $$n$$ and $$m$$ refer to the lengths of arrays $$a$$ and $$b$$ respectively. 

But, we need not compare all the array pairs possible to find the maximum distance. Instead, we can keep on traversing over the arrays in $$arrays$$ and keep a track of the maximum distance found so far. 

To do so, we keep a track of the element with minimum value($$min\_val$$) and the one with maximum value($$max\_val$$) found so far. Thus, now these extreme values can be treated as if they represent the extreme points of a cumulative array of all the arrays that have been considered till now. 

For every new array, $$a$$ considered, we find the distance $$a[n-1]-min\_val$$ and $$max\_val - a[0]$$ to compete with the maximum distance found so far. Here, $$n$$ refers to the number of elements in the current array, $$a$$. Further, we need to note that the maximum distance found till now needs not always be contributed by the end points of the distance being $$max\_val$$ and $$min\_val$$. 

But, such points could help in maximizing the distance in the future. Thus, we need to keep track of these maximum and minimum values along with the maximum distance found so far for future calculations. But, in general, the final maximum distance found will always be determined by one of these extreme values, $$max\_val$$ and $$min\_val$$, or in some cases, by both of them.

The following animation illustrates the process.

!?!../Documents/624_Maximum_Distance.json:1000,563!?!

From the above illustration, we can clearly see that although the $$max\_val$$ or $$min\_val$$ could not contribute to the local maximum distance values, they could later on contribute to the maximum distance.

<iframe src="https://leetcode.com/playground/4tYFRNJA/shared" frameBorder="0" width="100%" height="327" name="4tYFRNJA"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n)$$. We traverse over $$arrays$$ of length $$n$$ once only.

* Space complexity: $$O(1)$$. Constant extra space is used.