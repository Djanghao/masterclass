# Official Solution

**Link:** [https://leetcode.com/problems/two-city-scheduling/solution/](https://leetcode.com/problems/two-city-scheduling/solution/)

---

[TOC]

## Solution

---

### Approach 1: Greedy.

**Greedy algorithms**

Greedy problems usually look like "Find the minimum number of _something_ to do _something_" or "Find the maximum number of _something_ to fit in _some conditions_", and typically propose an unsorted input.

> The idea of the greedy algorithm is to pick the _locally_
optimal move at each step, that will lead to the _globally_ optimal solution.

The standard solution has $$\mathcal{O}(N \log N)$$ time complexity and consists of two parts:

- Figure out how to sort the input data ($$\mathcal{O}(N \log N)$$ time).
That could be done directly by sorting or indirectly by heap usage. 
Typically sort is better than heap usage because of gain in space.

- Parse the sorted input to have a solution ($$\mathcal{O}(N)$$ time). 

Please notice that in the case of well-sorted input, one doesn't need the first 
part and the greedy solution could have $$\mathcal{O}(N)$$ time complexity,
[here is an example](https://leetcode.com/articles/gas-station/).

> How to prove that your greedy algorithm provides a globally optimal solution?

Usually, you could use the [proof by contradiction](https://en.wikipedia.org/wiki/Proof_by_contradiction). 

**Intuition**

Let's figure out how to sort the input here.
The input should be sorted by a parameter that indicates a money
lost for the company. 

The company would pay anyway: `price_A` to send a person to the city
A, or `price_B` to send a person to the city B.
By sending the person to city A, the company would lose `price_A - price_B`,
which could be negative or positive. 

![bla](../Figures/1029/users.png)

To optimize the total costs, let's sort the persons by `price_A - price_B`
and then send the first `n` persons to the city A, 
and the others to city B, because this way the 
company costs are minimal.    


**Algorithm**

Now the algorithm is straightforward :

- Sort the persons in ascending order by `price_A - price_B` 
parameter, which indicates the company's additional costs.

- To minimize the costs, send `n` persons with the smallest `price_A - price_B`
to the city A, and the others to the city B.

**Implementation**

<iframe src="https://leetcode.com/playground/3xqV2wdw/shared" frameBorder="0" width="100%" height="395" name="3xqV2wdw"></iframe>

**Complexity Analysis**

Let $$N$$ be half of the length of the input array `costs`.

* Time complexity : $$O(N \log N)$$ because of sorting of
input data.
 
* Space complexity : $$O(\log N)$$

  Some extra space is used when we sort `costs` in place. The space complexity of the sorting algorithm depends on which sorting algorithm is used; the default algorithm varies from one language to another.
    - In Python, the `sort` method sorts a list using the Timsort algorithm, which is a combination of Merge Sort and Insertion Sort and uses $$O(n)$$ additional space.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with worst-case space complexity of $$O(\log n)$$.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O(\log n)$$.