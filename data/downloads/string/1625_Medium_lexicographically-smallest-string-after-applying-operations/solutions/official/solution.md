# Official Solution

**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solution/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solution/)

---

### Approach: Enumeration

#### Intuition

The problem involves two operations:

1. Accumulate: Add the odd-numbered elements of ( s ) by ( a ). If the sum exceeds ( 9 ), wrap around to ( 0 ) and continue adding. 
2. Rotate: Rotate ( s ) to the right by ( b ) bits. 

These operations can be performed an unlimited number of times, and the question asks for the **lexicographically smallest string** that can be obtained.

Noting that the length of ( s ) is even, if ( b ) is even, then regardless of how many rotations are performed, we can only apply the accumulation operation to the odd-numbered elements of ( s ). However, if ( b ) is odd, both the odd- and even-numbered elements of ( s ) can be modified through accumulation, each potentially a different number of times.

From the above observation, we see that the number of cumulative operations and the number of rotations are **independent** of each other. The number of rotations does not affect whether even positions can be accumulated. Therefore, we can first enumerate the number of rotations and then enumerate the number of cumulative operations to find the lexicographically smallest result.

More specifically, we proceed as follows:

1. Enumerate the number of rotations, letting ( t ) denote the string after rotating ( s ). Since rotation eventually cycles, and there are at most ( n ) unique rotations (where ( n ) is the length of ( s )), we use an array `vis` to record whether a position has already been visited. Once a previously visited position is encountered, the enumeration stops.
2. For each ( t ), enumerate the number of times ( j ) the odd digits of ( t ) are incremented, and then the number of times ( k ) the even digits are incremented. Since each element’s value lies in ([0, 9]), performing more than 9 additions would necessarily repeat a previous state. Specifically, if ( b ) is even, ( k )’s upper limit is ( 0 ); otherwise, it is ( 9 ).

#### Implementation

<iframe src="https://leetcode.com/playground/T3HcTkVZ/shared" frameBorder="0" width="100%" height="500" name="T3HcTkVZ"></iframe>

During the enumeration of rotation counts, we consider positions in the order
$0 \times b \bmod n,~1 \times b \bmod n,~2 \times b \bmod n, \ldots, x \times b \bmod n$.
The final position reached can be expressed as:

$$
xb - yn = z
$$

Here, $x$ is the number of rotations, $y$ is the number of times we subtract $n$ during the modulo operation, and $z$ is the final position reached.

According to the Euclidean algorithm, $z$ must be a multiple of $\gcd(b, n)$. Therefore, we only need to enumerate multiples of $\gcd(b, n)$ in the range $[0, n)$.

<iframe src="https://leetcode.com/playground/H2UrCyKw/shared" frameBorder="0" width="100%" height="500" name="H2UrCyKw"></iframe>

In the process of enumerating cumulative counts, our goal is to minimize the string’s lexicographical order. Since the odd and even positions are independent, and the cumulative count within each group is uniform, we only need to consider $t[0]$ and $t[1]$.

We first determine the minimum number of accumulations that minimize $t[1]$ (for the odd positions). If $b$ is odd, we also determine the minimum number of accumulations that minimize $t[0]$ (for the even positions).

<iframe src="https://leetcode.com/playground/Au7Y2465/shared" frameBorder="0" width="100%" height="500" name="Au7Y2465"></iframe>

#### Complexity Analysis

Let $n$ be the length of $s$, and $d$ be the upper limit on the number of cumulative sums, which is $10$ in this problem.

- Time complexity: $O(n^2d^2)$.
  
  After optimizing the rotation enumeration, the constant factor decreases, but the asymptotic complexity remains $O(n^2d^2)$ in the worst case. After optimizing accumulation enumeration, the time complexity reduces to $O(n^2d)$.

- Space complexity: $O(n)$.

---