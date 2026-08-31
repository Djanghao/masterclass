# Official Solution

**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solution/](https://leetcode.com/problems/range-product-queries-of-powers/solution/)

---

### Approach 1: Binary Decomposition + Direct Calculation

#### Intuition

According to the problem description, we need to decompose $n$ into the smallest number of powers of $2$, which suggests writing $n$ in binary form. If the $k$-th binary digit from low to high (where $k \geq 0$) is $1$, then $2^k$ is included in the decomposition.

> For example, when $n = 11$, its binary representation is $(1011)_2$, and the $0$th, $1$st, and $3$rd binary digits from low to high are $1$. So, it is decomposed as $[2^0, 2^1, 2^3] = [1, 2, 8]$.

After obtaining the decomposition of $n$, and since the problem guarantees that $n \geq 10^9 < 2^{30} - 1$, the decomposition array will contain at most $29$ elements. For each query $[\textit{left}, \textit{right}]$, we can directly traverse the corresponding elements in the decomposition array and compute the answer, with the time complexity of a single query being $O(\log n)$.

Furthermore, since the total number of different queries is at most $\dfrac{29 \times 28}{2} + 29 = 435$, we can also precompute the answer to each query in advance. This results in a preprocessing time complexity of $O(\log^2 n)$, reducing the time complexity of each query to $O(1)$ thereafter.

#### Implementation

<iframe src="https://leetcode.com/playground/jmE6Txtp/shared" frameBorder="0" width="100%" height="500" name="jmE6Txtp"></iframe>

#### Complexity Analysis

Let $q$ be the length of the array $\textit{queries}$.

- Time complexity: $O(q \times \log n)$
  
  For each query, we need to traverse the binary bits of $n$.

- Space complexity: $O(\log n)$
  
  This is the space required for the binary decomposition of $n$.
  
---

### Approach 2: Binary Decomposition + Prefix Product Preprocessing

#### Intuition

As in the previous approach, the key idea is to decompose the integer $n$ into a list of powers of $2$ based on its binary representation. If the $k$-th binary digit (starting from the least significant bit) is $1$, then the power $2^k$ contributes to the decomposition of $n$.
> For example, for $n = 11$, we have the binary representation $(1011)_2$. The $0$th, $1$st, and $3$rd bits are $1$, so $n$ can be represented as $[2^0, 2^1, 2^3] = [1, 2, 8]$.

Now, instead of calculating the product of elements in each query range on-the-fly like in Approach 1, we can optimize this using precomputation. Since the number of binary digits set to $1$ in $n$ is at most $29$, we can precompute the product of all subarrays of the decomposition array in advance.

We create a 2D array `results`, where `results[i][j]` stores the product of all powers of 2 from index $i$ to $j$ in the `bins` array. This way, once the precomputation is done, we can answer each query in constant time by directly reading from this table.

This gives us a trade-off:
- Preprocessing takes $O(\log^2 n)$ time, since for at most 29 elements we compute all $O(\log^2 n)$ subarray products.
- Each query takes $O(1)$ time afterward, since we just do a single lookup.

This is very efficient when the number of queries is large or the same queries are asked repeatedly.

#### Implementation

<iframe src="https://leetcode.com/playground/kdmWUa5S/shared" frameBorder="0" width="100%" height="500" name="kdmWUa5S"></iframe>

#### Complexity Analysis

Let $q$ be the length of the array $\textit{queries}$.

- Time complexity: $O(\log^2 n + q)$
  
  After preprocessing, we don't need to traverse every time when querying.

- Space complexity: $O(\log^2 n)$
  
  This is the space required to store the preprocessed results.
  
---