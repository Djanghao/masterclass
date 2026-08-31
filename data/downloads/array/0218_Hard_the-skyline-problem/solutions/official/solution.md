# Official Solution

**Link:** [https://leetcode.com/problems/the-skyline-problem/solution/](https://leetcode.com/problems/the-skyline-problem/solution/)

---

[TOC]

## Solution

--- 

### Overview


In this problem, we are given a list of buildings and would like to construct the **skyline**, a set of key points that describes the contour of the buildings, as shown in the picture below.

![img](../Figures/218_re/218_description.png)

This problem is very interesting and challenging with some tricky corner cases. Here we introduce several approaches starting with two brute-force algorithms that might not pass under the limited time but can pave the way for more efficient approaches.

<br/>

---

### Approach 1: Brute Force I

Collect all the positions of the left and right edges from `buildings`, that's all the possible `x` where skyline key points are generated. For convenience, let's number these unique positions sequentially, representing these positions by indexes according to their location on the x-axis.

![img](../Figures/218_re/218_bf1_more.png)

If a building with height `h` covers the indexes from `x_i` to `x_j`, then all the indexes from `x_i` to `x_j` (exclusive) have the height of `h` at least. Notice that the right edge of a building doesn't count!

Therefore, we can iterate over all the buildings, and for each building we find the positions of its left edge and right edge and their corresponding indexes `left_index` and `right_index`. Then we update the maximum height for all the indexes within the range `[left_index, right_index)`. Finally, traverse the updated `heights` and output all the positions where height changes as skyline key points!

!?!../Documents/218_re/bf_1.json:601,301!?!

**Algorithm**

1) Collect all unique positions for the left and right edges of the buildings in `buildings` and save them in list `edgeSet`.
2) Initalize:
    - an empty list `heights` of the same length as `edgeSet`.
    - hashtable `edge_index_map` stores corresponding index and value of elements from `heights`.
    - empty list `answer` for skyline key points.
3) Iterate over `buildings`, for each building `buildings[i]`:
    - Get the index of its left edge and right edge `left_index`, `right_index`, and its height `height`.
    - For index in `[left_index, right_index)`, update `heights[index]` if necessary.
4) Traverse the updated `heights` and add all the positions where the height changes to `answer` as skyline key points.
5) Return `answer` as the skyline.

**Implementation**

<iframe src="https://leetcode.com/playground/d7z87NFf/shared" frameBorder="0" width="100%" height="500" name="d7z87NFf"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of the input array `buildings`.

* Time complexity: $$O(n^2)$$
    - Obtaining our sorted list of positions will require an average of $$O(n \log n)$$ time.
    - Then for each of the $$n$$ buildings, we need to update the maximum heights at all the indexes covered by its left edge and right edge. In the worst-case scenario, we have to update $$n$$ values in each iteration step, so this process will take $$O(n^2)$$ time.
    
* Space complexity: $$O(n)$$
    - The number of left and right edges is $$2n$$, thus we need a set and an array of size $$O(n)$$.
    - Then we need a hash table of indexes and an array of heights, both of size $$O(n)$$.
    - We also use an answer array to store all the skyline points, of which there are at most $$n$$.

<br/>



---

### Approach 2: Brute Force II, Sweep Line

Another instinctive idea is to use a vertical line of infinite length to sweep over the ground from the left to right. The line stops by every edge and we shall record the maximum height among all the buildings that intersect with the line. As shown in the picture below, the right edge of a building doesn't count!

![img](../Figures/218_re/218_sw_exp.png)

Let's refer to the slides below for an explanation:

!?!../Documents/218_re/bf_2.json:601,301!?!

For more information about Sweep Line Algorithm, please refer to [wikipedia](https://en.wikipedia.org/wiki/Sweep_line_algorithm).


**Algorithm**
1) Initialize an empty list `answer` for skyline key points.
2) Use a set (`edgeSet`) to store all distinct edges in `buildings`.
3) Iterate over the sorted `positions`, and for each position:
    - Check for buildings that intersect with the imaginary vertical line at `position`. (A building is considered to be intersecting with the line if `position` is within the range `[left, right)`.)
4) The `max_height` is the maximum height of the intersecting buildings at `position`, or `0` if no building intersects with the line.
5) If `max_height` differs from that of the previous skyline point, add a new skyline point to `answer`.
6) Return `answer` as the skyline.

**Implementation**

<iframe src="https://leetcode.com/playground/X4NDxJuM/shared" frameBorder="0" width="100%" height="500" name="X4NDxJuM"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of the input array `buildings`.

* Time complexity: $$O(n^2)$$
    - Obtaining our sorted list of positions will require an average of $$O(n \log n)$$ time.
    - Then for each of the $$2 n$$ positions we need to check if any of the $$n$$ buildings intersect with the line at that position. This process will take $$O(n^2)$$ time.

* Space complexity: $$O(n)$$
    - The number of left and right edges is $$2 n$$, thus we need a set and an array of size $$O(n)$$.
    - We also use an answer array to store all the skyline points, of which there are at most $$n$$.

<br/>





---

### Approach 3: Sweep Line + Priority Queue

**Intuition**   

In the previous sweep line approach, we had to iterate through all the buildings at each position and ended up with $$O(n^2)$$ time complexity. We are looking for a more efficient way of determining such intersecting buildings. (For convenience, let's call them "live" buildings from now on.)

Notice that the current height is only decided by the tallest "live" building, hence we no longer need to traverse over all the buildings if we can get the tallest "live" building directly! This can be implemented by using a **priority queue**. Similar to the previous approach, we can use a vertical line to sweep along the `x` axis. In this approach, however, we add each intersecting building to the priority queue `live`. Therefore, whenever we need to get the height of the tallest "live" building, we can just check the top result from `live` (or 0 if `live` is empty), rather than iterating over all the buildings! 

**What if we run into the right edge of a building?**

Theoretically, we should remove the building from `live` once we run into its right edge (recall the right-edge-doesn't-count conclusion), meaning we have passed this building so it won't contribute to the skyline height anymore. As long as the tallest building is surely live, it's okay if some lower buildings that have been passed are still in `live`. We only need to make sure we remove a "past" building once it becomes the tallest one in `live`.


![img](../Figures/218_re/218_sl_exp2.png)

First, we need to sort all the edges in non-decreasing order for the sweep line algorithm. In order to track which building a certain edge belongs to, we should also mark each edge with the index of the building in `buildings`. 

Since there might be multiple edges at the same position on the x-axis, we should finish handling all edges at the same position before moving on to the next position.

Take the slide below as an example!

!?!../Documents/218_re/sl.json:601,301!?!

**Algorithm**

2) Iterate over `buildings` and store each building's edges separately with the building's index as a reference in `edges`. 
3) Sort the entries in `edges` by their first element.
4) Iterate over the sorted `edges` and for each edge/index:
    - If `buildings[b][0] == curr_x`, meaning its a left edge and the `building[b]` is live, we add `(height, right)` to `live`.     
    - While the tallest live building has been passed, remove it from `live`.
5) Once we finish handling all the edges at the `curr_x`, we shall move on to the next position.
6) After the iteration, return `answer` as the skyline.

**Implementation**

<iframe src="https://leetcode.com/playground/bDNxhFAd/shared" frameBorder="0" width="100%" height="500" name="bDNxhFAd"></iframe>


**Complexity Analysis**

Let $$n$$ be the length of the input array `buildings`.

* Time complexity: $$O(n\log n)$$
    - There are $$2 n$$ edges so we have at most $$O(n)$$ unique positions during the iteration.
    - At each step, we need to pop out the passed buildings from priority queue `live` and put in the newly added building (if exist). In worse-case scenario, we have $$O(n)$$ live buildings in `live`, both the `pop` and `push` operations take $$O(\log n)$$ time.
    - To sum up, the overall time complexity is $$O(n \log n)$$.

* Space complexity: $$O(n)$$
    - We initalize `edges` of size $$O(2n)$$ to store all the edges and its indexes, empty list `answer` to store all the skyline key points. 
    - We maintain a priority queue `live` which has at most $$O(n)$$ elements.
    - There can be at most $$O(n)$$ skyline key points, thus `answer` takes at most $$O(n)$$ space.
    - Therefore, the overall space complexity is $$O(n)$$. 

<br/>

---





### Approach 4: Sweep Line + Two Priority Queue

We still use a priority queue `live` to keep all the buildings we picked up. Recall that in the previous approaches, we have to assign an auxiliary mark (the mark could either be the position of its right edge, or its original index in `buildings`) to each building, thus we can get the position of its right edge, so as to judge if the top building from `live` should be dropped. Here, we can make this step more intuitive, by discarding this unique index and only storing the heights of buildings: Whenever we meet the left edge of a building, we just add its height to `live`. 

But how do we know if some buildings apart from the top buildings should be removed? Since we are not expected to remove an intermediate element from a regular priority queue.

> We use another priority queue (let's call it `past`) to keep all the buildings that **should be** removed from `live` but **haven't been** yet.

We can see that `live` works as a debt card: it can temporarily record our "debt". Once we are able to pay the "debt", that is. when the top building in `live` equals the top building in `past`, we will remove it from `past`. Since the "debt" has been cleared, we will remove the top building from `past` as well.

We repeatedly remove top building from both `live` and `past`, until:
- `past` is empty, meaning every building in `live` is literally "live".
- The top building in `live` is taller than the top building in `past`, in this case, we may still have some buildings to remove, but their height is too small to affect the height of the top building.

Take the following slides as an example:

!?!../Documents/218_re/2pq.json:601,301!?!


**Algorithm**
1) Initalize: 
    - an empty list `edges` for storing all the x-values of the left and right edges.
    - an empty list `answer` for storing all the skyline key points.
    - an empty priority queue `live` for storing the live buildings.
    - an empty priority queue `past` for storing the buildings that should be removed already.
2) Iterate over `buildings`, for `building[i] = [left, right, height]`, add `[left, height]`, `[right, -height]` to `edges`, thus we can easily distinguish if an edge is a left edge (`height > 0`) or a right edge (`height < 0`).
3) Sort `edges` by the first elements of its elements. 
4) Iterate over `edges`, for every `edges[idx]` let `curr_x = edge[idx][0]`, while `curr_x = edge[idx][0]`:
    - If `height > 0`, add `height` to `live`.     
    - Otherwise, add `height` to `past`.
    - increment `idx` by 1.
6) While `past` is not empty and top buildings from `live` and `past` have the same height, remove top building from both `live` and `past`. 
7) Get `max_height` from `live` (`max_height = 0` if `live` is empty).
8) If `answer` is empty or `max_height` changes, add `[curr_x, max_height]` to `answer` as a new skyline key point.
9) After the iteration, return `answer` as the skyline.


**Implementation**

<iframe src="https://leetcode.com/playground/J9szFT8F/shared" frameBorder="0" width="100%" height="500" name="J9szFT8F"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of the input array `buildings`.

* Time complexity: $$O(n\cdot\log n)$$

    - We sort a list with length of $$2\cdot n$$, which takes $$O(n)$$ time.
    - Then we iterate over all the sorted edges, during the iteration, we have to manipulate on two priority queues, the amortized cost of this operation is $$O(\log n)$$.
    - To sum up, the overall time complexity is $$O(n\cdot\log n)$$
    

* Space complexity: $$O(n)$$
    - We used an empty array `edges` to store the information of all the left and right edges. There are $$2\cdot n$$ edges and will cost $$O(n)$$ space.
    - Besides, we need to maintain two priority queues, in the worst-case scenario, each of them takes $$O(n)$$ space. 
    - To sum up, the overall space complexity is $$O(n)$$.

<br/>

---












### Approach 5: Union Find

**Algorithm**

Recall the first brute-force solution with $$O(n^2)$$ time complexity; whenever we added a new building, we had to traverse over all the indexes covered by the building and update the appropriate values in `heights`. Now suppose that a building has a very small height, and many of its `heights` values have previously been updated by some taller buildings, thus won't update this time. 

![img](../Figures/218_re/218_uf_brute.png)

Can we find a method to avoid such "unnecessary" non-updates? The answer is: "Yes!"

Imagine if we give some indexes a billboard saying:
> **All the heights starting from me and ending by XXX (an index on its right) have already been updated! These heights are larger than yours, thus you don't need to bother attempting to update these heights; just jump directly to XXX and move on!**

It seems feasible! Let's give it a shot by assigning a value to each edge, which equals the rightmost edge of the consecutive range having a height no less than the current edge.

**What is the use of such value?**
> It will help identify the range of edges that we can just skip past.

![img](../Figures/218_re/218_uf_mark.png)

As shown in the picture below, unlike iterating over every index and updating nothing, we will first look up the current index in `root` to see if we can skip past any intermediate indexes that have already been updated by some taller buildings. This is the core difference between this approach and the brute-force one!

![img](../Figures/218_re/218_uf_skip.png)

**How can we maximize skips by assuring that the updates are made by taller buildings first?**
> We can iterate over the buildings by descending height. Therefore, for each building, all the previous updates in `heights` are made by buildings of larger or equal height! We can safely skip those indexes that have been updated already.

**Which data structure should we use?**
> We can use a disjoint-set data structure to store this relation between indexes. The `root` of an index `x_i` can be regarded as the rightmost index `x_j` where all indexes in the range `[x_i, x_j)` have larger or equal heights as that of `x_i`.

Let's refer to the slides below as an example:

!?!../Documents/218_re/uf.json:601,301!?!


**Implementation**

1) Use a set to collect all the unique positions of left and right edges of the buildings in `buildings` and make sure they're in sorted order.
3) Iterate over all the buildings by descending height, and for each building:
    - Use the hash table to convert the left and right edges into `leftIndex` and `rightIndex`.
    - While `leftIndex < rightIndex`:
        - Use the `UnionFind.Find()` to advance `leftIndex` to `Find(leftIndex)`, skipping past unnecessary indexes.
        - Update `heights` with the current `height` at the new `leftIndex`.
        - Use the `UnionFind.Union()` to set the root of `leftIndex` to the root of `rightIndex` and increment `leftIndex` by 1.
5) Iterate over the updated `heights` and add every position where the height changes to `answer` as the skyline key points.

<iframe src="https://leetcode.com/playground/dKXiqPRw/shared" frameBorder="0" width="100%" height="500" name="dKXiqPRw"></iframe>

**Complexity Analysis**

Let $$n$$ be the length of the input array `buildings`.

* Time complexity: $$O(n\log n)$$
    - Sorting the $$n$$ buildings has an average time complexity of $$O(n \log n)$$, though sorting algorithms vary by language.
    - There are at most $$2 n$$ unique positions for $$2n$$ edges, and sorting them similarly has an average time complexity of $$O(n \log n)$$.
    - The `UnionFind.union()` function has a time complexity of $$O(1)$$ and will run at most $$2n$$ times for an overall time complexity of $$O(n)$$.
    - The `UnionFind.find()` function has a time complexity of $$O(n)$$ for the worst-case scenario, but using a collapsing find technique brings this down to $$O(1)$$ with repeated use. This amortizes to an overall time complexity of $$O(n)$$, as each successful `find()` will update a value in `root`, and there are up to $$2n$$ elements in `root`. As shown in the picture below.
    
    ![img](../Figures/218_re/218_uf_time.png)


* Space complexity: $$O(n)$$
    - There are at most $$2n$$ edges, thus the set `edgeSet`, the lists `edges`, `heights`, and `answers`, the union-find's `root` list, and the recursion stack for the union-find's `find()` are each limited to $$O(n)$$ space.

<br/>

---







### Approach 6: Divide-and-Conquer

**Intuition**   

The divide-and-conqueror algorithm is a common algorithmic paradigm based on recursion with three core parts:

- Divide: Divide the original problem into a number of smaller sub-problems.
- Conquer: Solve the sub-problems recursively.
- Combine: Merge these sub-problem solutions into a solution for the original problem.

For more information on divide-and-conqueror, please refer to the [LeetCode explore card](https://leetcode.com/explore/learn/card/recursion-ii/470/divide-and-conquer/).


Recall how we sort a list of numbers using merge-sort (divide-and-conqueror):
- Divide the unsorted list into two roughly even sublists.
- Sort each of the sublists recursively.
- Merge the sorted sublists back together.

Similarly, we can solve this problem using the divide-and-conquer algorithm. 
- Divide the list of buildings into two roughly even sublists.
- Get the skyline from each of the sublists recursively.
- Merge the two skylines together.


![img](../Figures/218_re/218_dc_main.png)

The first step is straightforward as we can simply split the list of buildings into two halves. For the base case in the second step, we can get the skyline from a single building directly. In the third part, two skylines should be merged into one skyline, we would use a much simplier version of sweep line algorithm.

Let's take the following slides as an example.

!?!../Documents/218_re/dc.json:601,401!?!

> We always compare the heights from both skylines, even if `R` comes before `L`, we should also consider the height of `L` as well. 

Take the picture below as an example: 

![img](../Figures/218_re/218_dc_background.png)

In the graphic's first case, `R` has many skyline points, yet we don't add any of them to our answer, That's because they're "hidden" behind the taller building in `L`. Hence the merged skyline's height doesn't change unless the current point's height is taller than the current height of the opposite side. In the graphic's second case, for example, we can add a skyline point where the height of `R` exceeds `L`.


**Algorithm**
1) Recursively divide the current array `buildings` into two halves.
2) When the recursion reaches the base case of a single building, return the simple skyline.
3) Merge the resulting skylines using a line sweep algorithm moving from left to right.
4) Return the fully merged skyline.
 

**Implementation**

<iframe src="https://leetcode.com/playground/WYcW6v4L/shared" frameBorder="0" width="100%" height="500" name="WYcW6v4L"></iframe>


**Complexity Analysis**

Let $$n$$ be the length of the input array `buildings`.

* Time complexity: $$O(n\log n)$$

    - During the divide-and-conquer process, we recursively cut the array into two halves, thus $$\log n$$ steps are needed to split the original input array into single buildings and then merge them back together. In other words, the recursion stack has a depth of $$\log n$$ levels.
    - In each level of the recursion, it takes a total of $$O(n)$$ time to merge all the sub-skylines into larger skylines.
    

* Space complexity: $$O(n)$$

    - We need $$O(n)$$ space to create the answer array to record the merged skylines as there are at most $$2n$$ skyline key points.
    - The recursion stack also requires an additional $$O(\log n)$$ space.

<br/>