# Official Solution

**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solution/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solution/)

---

[TOC]

## Solution

### Overview

We'll use the following grid as our example, with `k = 5`.

![The input grid.](../Figures/1337/input_grid.png)

Let's say the "strength" of a row is the number of `1`'s (soldiers) in it. Because we need to compare rows based on their "strength", let's start by calculating the "strength" of each row. The simplest way of doing this is to loop over each row, and count how many `1`'s there are. We'll put these counts into a new array of length `m` (remember, `m` is the number of rows).

![Calculating the strengths.](../Figures/1337/row_counts.png)

We need to return the `k` rows with the lowest "strength". So, perhaps we should sort the "strengths" we've found and take the first `k` from the sorted list? Doing the sort will give us the following array. The first `k` "strengths" are highlighted.

![Sorting the strengths.](../Figures/1337/sorted_row_counts.png)

Hold on a minute though, the question requires us to return the *indexes* of the lowest "strengths"! Because of the sorting, we no longer know which "strength" was originally at what index. We'll need to keep track of the indexes that went with the "strengths".

We'll go through several different approaches for solving this problem. Some can be more easily implemented using certain programming languages.

<br />

---

### Approach 1: Linear Search and Sorting

**Intuition**

The simplest approach to this problem depends on which programming language you're using. This first approach is recommended for *Python*. It is doable in Java and C++, but requires implementing a [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html). This is perhaps too much work, as better options exist for those programming languages.

The first approach we'll look at is multi-tier sorting. Instead of only inserting "strengths" into the list, we'll also insert indexes. We can represent each "strength" and index pair as a `tuple`. We should put the "strength" *first* in each tuple because we'll be sorting based on "strength".

For now, we'll calculate the "strength" of each row using the linear search approach described above (we'll optimize it in a later approach).

Here is the list of tuples you'll get for the above example.

![The generated list of tuples.](../Figures/1337/tuples.png)

Now we can sort the list using Python's built-in sort.

![The sorted list of tuples.](../Figures/1337/sorted_tuples.png)

When told to sort tuples, Python firstly sorts on the first element of the tuple, and then breaks any ties by sorting on the second element. Quite conveniently, this is exactly what we wanted here! Where there is a tie, the lower indexes are first. The only thing left to do is pull the indexes out of the first `k` tuples.

**Algorithm**

<iframe src="https://leetcode.com/playground/3PNP47Ef/shared" frameBorder="0" width="100%" height="500" name="3PNP47Ef"></iframe>

Here is a more Pythonic version of the code, using list comprehensions.

<iframe src="https://leetcode.com/playground/GsKgsf9e/shared" frameBorder="0" width="100%" height="242" name="GsKgsf9e"></iframe>

**Complexity Analysis**

- Time Complexity : $$O(m \cdot (n + \log \,m))$$.

    For the first phase, we're calculating the "strength" of each row. Calculating the "strength" of a row (with this algorithm) and putting it into the list is $$O(n)$$ in the worst case, and there are $$m$$ rows. This gives us $$O(n \cdot m)$$.

    For the second phase, we are sorting the list (which is of length $$m$$). Sorting a list using the built-in sort is $$O(m \, \log \, m)$$.

    To get our final time, we'll add the 2 complexities together. Whether $$n \cdot m$$ or $$m \, \log \,m$$ is bigger depends on the relative sizes of $$m$$ and $$n$$. This means that we have to add them, giving  $$m \cdot n + m \, \log\,m = m \cdot (n + \log \, m))$$.

    If $$k$$ was really small, an optimization would be to use selection sort instead of the built in sort to avoid needing to sort the entire list.

- Space Complexity : $$O(m)$$.

    Constructing the list requires $$O(m)$$ space.

<br />

---

### Approach 2: Linear Search and Map

**Intuition**

This approach is recommended for Java and C++. In Python, it offers no advantage over Approach #1.

Another way we can keep track of the indexes is to put them into a `Map`. We'll go with a `HashMap` because more people are familiar with it, but a `TreeMap` could also be used (and has some nice advantages, but doesn't change the overall time complexity). The code in the next section shows both.

Each time we calculate the "strength" of a row, we should insert the index into the `Map` under its "strength". Because multiple indexes could have the same "strengths", the values of the `Map` should be *lists* of indexes, not single values. If we do this to the entire example from above, we get the following:

!?!../Documents/1337_hash_map.json:960,540!?!

Next, we'll need to sort the keys and iterate over them, pulling indexes out until we have `k` of them. Remember that because of the way we generated the `Map`, the indexes within a list are already sorted. The indexes that you'll need to pull out for the above example (`k = 5`) are highlighted.

![The k items that are returned.](../Figures/1337/pulling_out_k.png)

**Algorithm**

Firstly, here is the solution using a `HashMap`.

<iframe src="https://leetcode.com/playground/bEgoRA4s/shared" frameBorder="0" width="100%" height="500" name="bEgoRA4s"></iframe>

Secondly, here is the solution using a `TreeMap`. The difference between a `HashMap` and a `TreeMap` is that the `TreeMap` maintains the keys in sorted order. Note that this doesn't change the overall time complexity of the algorithm though, because insertion into a `TreeMap` is more expensive (because it's having to do more work to maintain that sorted order). In terms of good coding practice, a `TreeMap` is definitely better here. I haven't provided Python code for this solution, because Python doesn't have a built in `TreeMap`.

<iframe src="https://leetcode.com/playground/oSrQQbw9/shared" frameBorder="0" width="100%" height="500" name="oSrQQbw9"></iframe>

**Complexity Analysis**

- Time Complexity : $$O(m \cdot (n + \log \,m))$$.


    For each of the $$m$$ rows, we're calculating the "strength", which costs $$O(n)$$, and then we're inserting it into a `HashMap`, which costs $$O(1)$$. This part gives us a total of $$O(m \cdot n)$$.

    Next, we're sorting the $$m$$ keys, which costs $$O(m \, \log \, m)$$. We're then pulling the values out of the `Map`, which costs $$O(k)$$. Overall, this costs $$O(m \log m)$$ because $$k$$ is always less than $$m$$.

    To get our final time, we'll add the 2 complexities together. Whether $$n \cdot m$$ or $$m \, \log \, m$$ is bigger depends on the relative sizes of $$m$$ and $$n$$. This means that we have to add them, giving $$m \cdot n + m \, \log \,m  = m \cdot (n + \log\,m)$$.

    Using a `TreeMap` would have had the same time complexity because inserting $$m$$ values into a tree map costs $$O(m \, \log \, m)$$, and doesn't require the explicit sorting because values in a TreeMap are already sorted.

- Space Complexity : $$O(m)$$.

    Constructing the `Map` requires $$O(m)$$ space, regardless of whether we use a `TreeMap` or `HashMap`.

<br>

---

### Approach 3: Binary Search and Sorting/ Map

**Intuition**

This approach uses **Binary Search**. If you're not familiar with this algorithm, have a look at the [Explore Module on Binary Search](https://leetcode.com/explore/learn/card/binary-search/) and do the first couple of problems.

The way that we calculated the "strength" of each row wasn't very efficient. What we used above was *linear search*, because it scanned through the row until it encountered a 0 (and if the row had been all 1's, it would have had to check the entire row!). Instead, we could find the index of the *first* `0` in each row, and use this to calculate the "strength".

![Link between index of first civilian and strength of row.](../Figures/1337/index_civillian_link.png)

So, let's think through how we could implement a *binary search* to find the first `0` in a given row.

Recall that *binary search* starts by looking at the middle element. It then decides which half of the array the "target" element (in this case the first 0 in the row) must be in and repeats the same process on that half until there's only one element left in the search space.

For example, here is the middle of a really long row. Which half of the array is the "target" in?

![](../Figures/1337/binary_search_example_1.png)

What about this one? You can't actually see the target element, but it's possible to know which half it's in.

![](../Figures/1337/binary_search_example_2.png)

And what about this one?

![](../Figures/1337/binary_search_example_3.png)

If the current "middle" element is a `0`, we know we've gone too far and the solution must be to the left. And if the current "middle" element is a `1`, then we know we haven't gone far enough, and the solution is to the right.

Here's the pseudocode for the binary search algorithm.

```python3
low = 0
high = n
while low < high:
    mid = low + (high - low) // 2
    if row[mid] == 1:
        low = mid + 1
    else:
        high = mid
return low
```

And here's an animation showing the algorithm in action.

!?!../Documents/1337_binary_search.json:960,540!?!

**Algorithm**

<iframe src="https://leetcode.com/playground/k7toWvt5/shared" frameBorder="0" width="100%" height="500" name="k7toWvt5"></iframe>

**Complexity Analysis**

- Time Complexity : $$O(m \, \log m  n)$$.

    We determined above that Approach #1 and Approach #2 both have the same time complexity. This was $$O(m \cdot n)$$ to calculate the "strengths", and $$O(m \, \log \, m)$$ to get them into sorted order. For this approach though, we calculated the "strengths" using binary search instead of linear search. Calculating each row "strength" cost $$O(\log \,n)$$, and there were $$m$$ rows to calculate. This is, therefore, $$O(m \, \log \, n)$$. The second part will still be $$O(m \, \log \, m)$$.

    Like before, we don't know whether $$m$$ or $$n$$ is bigger. Therefore, we have to add the time complexities, which gives $$O(m \, \log \,n + m \, \log \, m) = O(m \cdot (\log \, n + \log \, m)) = O(m \, \log \, m n)$$.

- Space Complexity : $$O(m)$$.

    Same as above, as we're still relying on the same data structures.

<br />

---

### Approach 4: Binary Search and Priority Queue

**Intuition**

Note: This approach is easier to code in Python than in Java/ C++, because it requires the implementation of a [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html).

The previous approaches use $$O(n)$$ space for gathering up row "strength" data. We then throw away $$n - k$$ of these, returning $$k$$ of them. Is there a way we can reduce this space usage to $$O(k)$$, by only keeping the smallest $$k$$ we've seen so far?

Problems like this can often be solved using a **Priority Queue**. Recall that a Priority Queue is a data structure that allows us to insert items, and to efficiently remove the *largest* item in the case of a **Max-Priority Queue**, or the *smallest* in the case of a **Min-Priority Queue**.

For this problem, we could start by inserting `k` "strengths" (along with their indexes) into the Priority Queue. After that, we'd only want to insert a "strength"/index pair if it was one of the `k` smallest we've seen so far. We would then also need to remove the largest to bring the total back down to `k`. For this, it makes sense to use a *Max*-Priority Queue. Here is an animation showing this process.

!?!../Documents/1337_priority_queue.json:960,540!?!

Once we've finished adding all the "strengths", we'll have the `k` smallest "strength"/index pairs in it. If we remove them from the PriorityQueue one-by-one, they'll be sorted from *largest to smallest*. We could either do this and then reverse, or we could iterate backwards over the output array inserting them.

**Algorithm**

Python has a *Min*-Priority Queue called *heapq*. We can convert it into a *Max*-Priority Queue by putting a negative sign in front of all the numbers going into it.

Java's `PriorityQueue` requires a [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html). We can make it behave as a *Max*-Priority Queue using this.

<iframe src="https://leetcode.com/playground/3pDhUgQF/shared" frameBorder="0" width="100%" height="500" name="3pDhUgQF"></iframe>

**Complexity Analysis**

- Time Complexity : $$O(m \, \log \, nk)$$.

    This approach is very similar to Approach #3. The only difference is that we're putting the "strengths" into a Priority Queue, and storing at most $$k$$ of them at a time.

    Calculating the strengths is still $$O(m \, \log \, n)$$.

    Inserting an item into a Priority Queue has a cost of $$O(\log\, x)$$, where $$x$$ is the maximum number of items that will be in the Priority Queue. For this algorithm, the maximum $$x$$ value is $$k$$ (not $$m$$). Therefore, each insertion costs $$log(k)$$. There are $$m$$ of these insertions, giving a total of $$O(m \, \log \,k)$$.

    Like before, we need to add $$m \, \log \, n + m \, \log \,k$$, and again we can't assume which is bigger out of $$\log \, n$$ and $$\log\,k$$. Therefore, the total time complexity is $$m \, \log \, n + m \, \log \, k = m \cdot (\log \, n + \log \, k) = O(m \,  \log nk)$$.

- Space Complexity : $$O(k)$$.

    We are keeping at most $$k$$ pieces of "strength" data at a time. Therefore, the space complexity is $$O(k)$$.

<br />

---

### Approach 5: Vertical Iteration

**Intuition**

There's another, completely different, way of looking at the problem which as we'll see, decreases the space usage at the cost of time. Instead of going row-by-row calculating the "strengths", we can instead go column-by-column. Interestingly, we don't actually calculate the row "strengths" at all! This approach was inspired by the code of [lenchen1112](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/discuss/496644/Clean-Python-3-beats-100-without-sort-or-heap) on the discussion forum.

On each cell we pass that is a `0`, we check if the cell to the left was a `1`. If it was, then we're on the first `0` of that row and should add its index to our output list. Once there are `k` indexes in the output list, we simply return the list. The order in which the rows are found using this approach turns out to be the sorted order we want!

Here is an animation showing the algorithm.

One edge case to be careful of is that it is possible some of the `k` rows will contain entirely `1`'s. (e.g. if the whole grid was `1`'s).

!?!../Documents/1337_vertical_algorithm.json:960,540!?!

**Algorithm**

<iframe src="https://leetcode.com/playground/fawbtASM/shared" frameBorder="0" width="100%" height="500" name="fawbtASM"></iframe>

**Complexity Analysis**

- Time Complexity : $$O(m \cdot n)$$.

    We are visiting each of the first $$m \cdot n - 1$$ cells at most once, and the last column of $$m$$ cells at most twice. In big-oh notation, $$O(m \cdot (n - 1) + 2 \cdot m) = O(m \cdot n)$$. At each of the cells we do a simple $$O(1)$$ check to determine whether or not it should be added to the output list. The output list doesn't need any further processing, and so does not add anything further to the time complexity. This leaves us with $$O(m \cdot n)$$.

- Space Complexity : $$O(1)$$.

    Because the output array is used *only* for gathering up the outputs to return, and these outputs require no further processing, this algorithm is considered to be $$O(1)$$ space. This is in contrast to the previous approaches that were also using the output array as working memory.

    Another way of looking at it is that if you needed to return the output values one-by-one (i.e. a generator function) for this algorithm, the array would disappear entirely. This is not true of the earlier approaches, which still require it to gather and then sort the values.


<br />