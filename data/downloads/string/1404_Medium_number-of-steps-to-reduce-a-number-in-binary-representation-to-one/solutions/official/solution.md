# Official Solution

**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solution/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solution/)

---

## Solution

---

### Approach 1: Simulation

#### Intuition

We are given a string `s` which is the binary representation of an integer. At each step, we can apply one of the operations based on what the current integer is:

1. If the integer is even, divide the integer by `2`.
   > Example: If `s` is `1100`, which is `12`, we can apply this operation to make it `0110`, which represents 6.
2. If the integer is odd, add `1` to the integer.
   > Example: If `s` is `1101`, which is `13`, we can apply this operation to make it `1110`, which represents 14.

We can apply any number of operations. We need to return the minimum number of operations to make the integer equal to `1`. It is guaranteed that the leftmost bit in `s` (`s[0]`) will always be `1`.

In this approach, we will just simulate the steps given by the problem description to find the minimum number of steps. We cannot choose the operation we apply, i.e., if the number is even, we have to divide it by `2` and add `1` otherwise. Hence, we can just perform these operations on the given string and return the number of operations required to make it equal to `1`.

To divide the number the string represents by `2`, we will remove the rightmost bit character from the string. We can easily implement this using the right-shift operation, which shifts each bit by one place to the right, which is equivalent to dividing by two. To add one to the string, we will start from the right end and keep adding `1` while the carry doesn't become zero. We can implement this by iterating from the right end and changing each `1` to `0` until we find the first `0`. If we don't find any `0`s we will have to append a `1` at the start of the string.

#### Algorithm

1. Initialize the variable `operations` to `0`.
2. Keep applying the operations while the size of the string `s` is greater than `1`:

    - If the last bit of string `s` is `0`, it implies it is even; hence, apply the divide by `2` operation by removing the last bit.
    - Otherwise, it implies that the number represented by the string is odd and hence add `1` to it as follows:

        - Start from the right end of the string `s`.
        - Keep iterating while the character is `1` and mark them all as `0`.
        - If we passed the most significant digit in `s`, append `1` to the left; otherwise, mark the `0` as `1`.

    - Increment the variable `operations`.
3. Return `operations`.

#### Implementation

<iframe src="https://leetcode.com/playground/CF7KLSbi/shared" frameBorder="0" width="100%" height="500" name="CF7KLSbi"></iframe>

#### Complexity Analysis

Here, $N$ is the size of the string `s`.

* Time complexity: $O(N)$.

  The time complexity of the `divideByTwo` method is $O(1)$. The time complexity of the method `addOne` can be up to $O(N)$, such as the case where `s = 1111`, representing `15`. In this case, after the `addOne` method is called, `s = 10000`, representing `16`. Since `16` is a power of two, each remaining step would just involve the `divideByTwo` method. Over the course of the entire algorithm, the `addOne` method will flip each bit of `s` from `1` to `0` at most once, so it is amortized $O(N)$. For each even integer, we remove a digit from the string. For each odd integer, we add one to it, which will make it even, and then we again remove one digit from it. Thus, it takes one step to remove one digit when the number is even, and it takes two steps to remove one digit when the number is odd, hence, the number of steps required would be $O(N)$. Therefore, the time complexity would be equal to $O(2N)$, which we can simplify to $O(N)$.

* Space complexity: $O(1)$ (C++) or  $O(N)$ (Python3 and Java)

  In Python3 and Java, strings are immutable, which means they cannot be changed once they are created. For these languages, we create a mutable representation of `s`, which requires $O(N)$ space. In the C++ implementation, we apply the operations on the given input string, and hence, no extra space is required. Generally, it is not recommended to alter the input, but given the nature of the problem here, altering the input is reasonable.
---

### Approach 2: Greedy

#### Intuition

If we closely observe the previous approach, we're essentially removing one bit from the right end each time. When the number is even we are directly removing the bit at the rightmost position. In case of an odd number, adding one will make it even, and then we will remove the rightmost bit. Hence, it takes one step to remove the rightmost bit when the number is even, and it takes two steps when the number is odd.

Also, the task of making a number equal to `1` is equivalent to removing the `N - 1` last bits from the string as the most significant bit is always one. Therefore, we will iterate the string from the right end to the leftmost `1` (as the bit at index `0` is `1` and we don't want to remove it). For each bit, we will check if it's `1` or `0`, i.e., odd or even, respectively. If it's odd, we will add `2` to the answer `operations`, and if it's even, add `1` to `operations.`

One important point is that when the current bit is `1`, and we add `1` to it to make it `0` and then we divide by `2` to remove this bit, we will have an extra bit `1`. This extra bit, represented by the variable `carry`, needs to be passed one bit position to the left in the string. Hence, while checking if the next bit is even or odd we should add `carry` as well to accommodate the extra bit from previous operations. Initially, `carry` will be `0`, and we will assign the value `1` when the current bit is odd to represent the overflow of one bit.

When we reach the leftmost bit, if `carry` is `1`, it means that we will have to add it to the bit at index `0` and then apply one operation to remove the last `0`. Hence, we will return `operations + carry` as the answer to the problem.

!?!../Documents/1404_Number_of_Steps_to_Reduce_a_Number_in_Binary_Representation_to_One.json:758,368!?!

#### Algorithm

1. Initialize the variable `operations` and `carry` to `0`.
2. Iterate over the characters from position `N - 1` to `1` in the string `s` and for each index `i`, do the following:

    - If the bit `((s[i] - '0') + carry)` is odd, increment the `operations` by `2` and change `carry` to `1`.
    - Else, add `1` to `operations`

3. Return `operations + carry`.

#### Implementation

<iframe src="https://leetcode.com/playground/J5rVX3GZ/shared" frameBorder="0" width="100%" height="412" name="J5rVX3GZ"></iframe>

#### Complexity Analysis

Here, $N$ is the size of the string `s`.

* Time complexity: $O(N)$.

  We are iterating over each character of the string only once and hence the time complexity is equal to $O(N)$.

* Space complexity: $O(1)$

  No extra space is required other than the few variables `operations` and `carry`. Hence the time complexity is constant.
---