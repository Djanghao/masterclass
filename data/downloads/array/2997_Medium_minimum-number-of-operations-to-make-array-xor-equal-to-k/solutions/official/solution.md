# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solution/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solution/)

---

## Solution

---

### Approach: Bit Manipulation

#### Intuition

We are given an array `nums` of $N$ integers and an integer `K`. We can apply any number of operations on the array, where each operation involves choosing an integer from the array and flipping one bit in its binary representation. We need to return the minimum number of operations required to make the bitwise `XOR` of the array equal to `K`. Note that we don't actually have to flip the bits, as we only need to return the number of operations.

Let's first examine some fundamental facts about the `XOR` operation. The result of all possible combinations of two bits is shown below:

![fig](../Figures/2997/2997A.png)

The `XOR` operation returns `1` when the bits are different and `0` when they are the same.

The `XOR` result of all combinations of three bits is shown below:

![fig](../Figures/2997/2997B.png)

To calculate the `XOR` of three bits, we can `XOR` the first two bits, then `XOR` the result of that operation with the third bit. However, if we observe closely, we notice the result of `XOR` is `1` when the number of `1` bits is odd and `0` otherwise.

This implies that if the `XOR` of $N$ bits is `0`, then an even number of the $N$ bits are set to `1`. We can flip one bit to make the number of `1` bits odd, and then the result of the `XOR` will become `1`. Similarly, if the `XOR` of $N$ bits is `1`, then an odd number of the $N$ bits are set to `1`. We can again flip one bit to make the number of `1` bits even, which will change the result of the `XOR` to `0`. Hence, we always need to flip a single bit to change the `XOR` result of $N$ bits.

We will use the above observation to solve this problem. Let's say the `XOR` of all the $N$ integers in the array `nums` is `finalXor`. We want this `finalXor` to be `K`. We will compare the binary representation of `finalXor` and `K`. The number of bit mismatches is the minimum number of operations required because each bit difference between `finalXor` and `K` will require one operation to flip that bit in any of the $N$ integers in the array.

One way to implement this is to find the `finalXor` and then compare the binary representation of `K` and `finalXor` to find the mismatched bits. This implementation is shown below:

<iframe src="https://leetcode.com/playground/bmZN84PQ/shared" frameBorder="0" width="100%" height="500" name="bmZN84PQ"></iframe>


However, we can simplify the implementation using the `XOR` operation. We need to find the number of bits that don't match between `finalXor` and `K`. If we find the `XOR` of `finalXor` and `K`, then the binary representation of the result would contain `1` for each bit position where the bits in `finalXor` and `K` don't match. We can take the `XOR` of `finalXor` and `K,` and each bit position that is set to `1` in the result is a position where the bits in the operands didn't match. Then, we can count the number of set bits (value `1`) in the result, which is the minimum number of operations. We will use the standard library function to count the number of set bits.

#### Algorithm

1. Initialize the variable `finalXor` to `0`.
2. Iterate over the elements in the array `nums` and find the `XOR` of each element with the variable `finalXor`.
3. Return the number of set bits in the variable `finalXor`.

#### Implementation

<iframe src="https://leetcode.com/playground/Tpr8JSM8/shared" frameBorder="0" width="100%" height="242" name="Tpr8JSM8"></iframe>

#### Complexity Analysis

Here, $N$ is the number of integers in the array `nums`.

* Time complexity: $O(N)$

  The `XOR` operation takes $O(1)$, and we iterate over the $N$ elements in the array `nums`. The STL function to count the number of set bits takes $O(\log V)$ where $V$ is the value of `finalXor`.  Since the values in the array are less than or equal to $10^6 < 2^{20}$, the value of $O(\log V)$ will be `~20`. Hence, the total time complexity is equal to $O(N)$.

* Space complexity: $O(1)$

  The only space required is the variable `finalXor` so the space complexity is constant.
  
---