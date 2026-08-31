# 💯Faster✅💯Lesser✅Detailed Explaination🎯Bit Manipulation🧠Step-by-Step Explanation✅Python🐍Java🍵C+

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 120
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5086226/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5086226/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
The problem `Minimum Number of Operations to Make Array XOR Equal to K` asks you to find the minimum number of operations needed to make the XOR of the elements of a given array equal to a target value `k`. Each operation involves choosing an integer from the array and flipping one bit in its binary representation.
### \uD83D\uDCE5Input:

- `nums[]`: An array of integers.
- `k`: The target XOR value.

### \uD83D\uDCE4Output:

The output should be an integer representing the minimum number of operations required to make the XOR of the array equal to `k`.

# \uD83E\uDDE0Thinking Behind the Solution:


1. **Calculate XOR of all elements:** Compute the XOR of all elements in the array and store it as `final_xor`.

2. **Iterate through binary representations:** Iterate through the binary representations of `final_xor` and `k`.

3. **Compare bits and perform operations:** At each position, compare the corresponding bits of `final_xor` and `k`. If they don't match, increment a counter indicating the number of operations required to make them match.

4. **Return the final count:** After iterating through all bits, return the final count, which represents the minimum number of operations required.

# \u2705Approach:
1. **Calculate XOR of `nums[]`:**
   - Initialize `final_xor` to `0`.
   - Iterate through each element `n` in `nums[]`.
   - Update `final_xor` by performing bitwise XOR (`^`) with each element `n`.
   - After this loop, `final_xor` will contain the XOR of all integers in the array.

2. **Iterate to Compare Bits:**
   - Initialize `count` to `0`.
   - Start a while loop which continues until either `k` or `final_xor` becomes zero.
   - Within the loop:
     - Compare the rightmost bits of `k` and `final_xor`.
     - If the rightmost bits are not equal, increment the `count` by `1`. This indicates that an operation is required to make the bits match.
     - Right shift `k` and `final_xor` by `1` to remove the rightmost bit.

3. **Return the Count:**
   - Once the while loop finishes, return the `count`, which represents the minimum number of operations required to make the XOR of the array equal to `k`.
# Let's walkthrough\uD83D\uDEB6\uD83C\uDFFB\u200D\u2642\uFE0F the implementation process with an example for better understanding\uD83C\uDFAF:

Let's walk through the code step by step with the given input `nums = [2,1,3,4]` and `k = 1`.

1. **Initialization**:
   - Initialize `final_xor` to 0.
   - Initialize `count` to 0.

```python
nums = [2, 1, 3, 4]
k = 1
final_xor = 0
count = 0
```

2. **Calculate `final_xor`**:
   - Perform XOR operation on all integers in the array to get `final_xor`.

```python
final_xor = 0 ^ 2 ^ 1 ^ 3 ^ 4
final_xor = 0 ^ 2 = 2
final_xor = 2 ^ 1 = 3
final_xor = 3 ^ 3 = 0
final_xor = 0 ^ 4 = 4
```

3. **Iteration**:
   - Enter the while loop.
   - Loop until either `k` or `final_xor` becomes zero.

```python
while k or final_xor:
```

4. **Iteration 1**:
   - At this step, `k` is 1 and `final_xor` is 4.
   - Check if the rightmost bits of `k` and `final_xor` are different.
   - Increment `count` if they are different.

```python
if (k % 2) != (final_xor % 2):
    (1 % 2) != (4 % 2)
    1 != 0
    count += 1
    count = 1
```

   - Right shift `k` and `final_xor` to remove their rightmost bits.

```python
k //= 2   # k becomes 0
final_xor //= 2   # final_xor becomes 2
```

5. **Iteration 2**:
   - At this step, `k` is 0 and `final_xor` is 2.
   - Check if the rightmost bits of `k` and `final_xor` are different.
   - Increment `count` if they are different.

```python
if (k % 2) != (final_xor % 2):
    (0 % 2) != (2 % 2)
    0 != 0  # Rightmost bits match, so no increment.
```

   - Right shift `k` and `final_xor` to remove their rightmost bits.

```python
k //= 2   # k remains 0
final_xor //= 2   # final_xor becomes 1
```

6. **Iteration 3**:
   - At this step, `k` is 0 and `final_xor` is 1.
   - Check if the rightmost bits of `k` and `final_xor` are different.
   - Increment `count` if they are different.

```python
if (k % 2) != (final_xor % 2):
    (0 % 2) != (1 % 2)
    0 != 1
    count += 1
    count = 2
```

   - Right shift `k` and `final_xor` to remove their rightmost bits.

```python
k //= 2   # k remains 0
final_xor //= 2   # final_xor becomes 0
```

7. **Iteration 4**:
   - At this step, `k` is 0 and `final_xor` is 0.
   - Both `k` and `final_xor` are now 0, so exit the while loop.

8. **Return result**:
   - Return the final value of `count`.

```python
return count   # count is 2
```

So, the output for the given input `nums = [2,1,3,4]`, `k = 1` is 2.

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        final_xor = 0
        # XOR of all integers in the array.
        for n in nums:
            final_xor = final_xor ^ n

        count = 0
        # Keep iterating until both k and final_xor becomes zero.
        while k or final_xor:
            # k % 2 returns the rightmost bit in k,
            # final_xor % 2 returns the rightmost bit in final_xor.
            # Increment counter, if the bits don't match.
            if (k % 2) != (final_xor % 2):
                count += 1

            # Remove the last bit from both integers.
            k //= 2
            final_xor //= 2

        return count
```
```Java []
class Solution {
    public int minOperations(int[] nums, int k) {
        int finalXor = 0;
        // XOR of all integers in the array.
        for (int n : nums) {
            finalXor = finalXor ^ n;
        }
        
        int count = 0;
        // Keep iterating until both k and finalXor becomes zero.
        while (k > 0 || finalXor > 0) {
            // k % 2 returns the rightmost bit in k,
            // finalXor % 2 returns the rightmost bit in finalXor.
            // Increment counter, if the bits don't match.
            if ((k % 2) != (finalXor % 2)) {
                count++;
            }
            
            // Remove the last bit from both integers.
            k /= 2;
            finalXor /= 2;
        }
        
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int finalXor = 0;
        // XOR of all integers in the array.
        for (int n : nums) {
            finalXor = finalXor ^ n;
        }
        
        int count = 0;
        // Keep iterating until both k and finalXor becomes zero.
        while (k || finalXor) {
            // k % 2 returns the rightmost bit in k,
            // finalXor % 2 returns the rightmost bit in finalXor.
            // Increment counter, if the bits don't match.
            if ((k % 2) != (finalXor % 2)) {
                count++;
            }
            
            // Remove the last bit from both integers.
            k /= 2;
            finalXor /= 2;
        }
        
        return count;
    }
};
```