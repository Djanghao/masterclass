# Python solution: Top 10%

**Author:** moshesham
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/6002867/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/6002867/)

---

---

**Objective**: Determine the rotation index `k` (where `0 \u2264 k < n` and `n` is the length of `nums`) that yields the highest possible score. If multiple indices result in the same maximum score, return the smallest such `k`.




### **Understanding Rotations and Scoring**

- **Rotation Operation**: Rotating the array by `k` positions transforms the array into:

  $$\	ext{rotated\\_nums} = [\	ext{nums}[k], \	ext{nums}[k+1], \\ldots, \	ext{nums}[n-1], \	ext{nums}[0], \	ext{nums}[1], \\ldots, \	ext{nums}[k-1]]$$


- **Scoring Mechanism**: After rotation, each element `rotated_nums[i]` earns one point if:


$$  \	ext{rotated\\_nums}[i] \\leq i
$$  

  The total score is the sum of such points across the array.

### **Key Insights**

1. **Cyclic Nature of Rotations**: Rotating the array `n` times (where `n` is the length of the array) brings it back to its original configuration. Therefore, we only need to consider `k` in the range `[0, n-1]`.

2. **Efficient Score Calculation**: Directly simulating each rotation and calculating scores would result in a time complexity of \\(O(n^2)\\), which is impractical for large `n` (up to \\(10^5\\)). Instead, we seek an \\(O(n)\\) solution by leveraging the properties of rotations and difference arrays.

3. **Difference Array Concept**: By understanding how each element's contribution to the score changes with different rotations, we can use a difference array to track score increments and decrements efficiently.

---

## **Algorithm Description**

### **Step 1: Initialize a Difference Array**

- Create an array `score_deltas` of size `n` initialized to `0`. This array will help us track the changes in scores as we consider different rotations.

$$  \	ext{score\\_deltas} = [0, 0, 0, \\ldots, 0]$$


### **Step 2: Determine Contribution Ranges for Each Element**

For each element `nums[i]` in the array:

1. **Identify Valid Rotations**:
   - **Condition**: After rotating by `k`, `nums[i]` moves to index `(i - k + n) \\% n`.
   - **Scoring Condition**: `nums[i] <= (i - k + n) % n`

2. **Compute Rotation Range**:
   - **Lower Bound (`start`)**: The smallest `k` where `nums[i] <= new_index`.
   - **Upper Bound (`end`)**: The rotation just before `nums[i]` would no longer satisfy the condition.

3. **Handle Wrap-Around**:
   - Due to the cyclic nature of rotations, the valid range might wrap around the end of the array.

4. **Update `score_deltas`**:
   - Increment `score_deltas[start]` by `1` to indicate the start of a score contribution.
   - Decrement `score_deltas[end]` by `1` to indicate the end of a score contribution.
   - If the range wraps around, also increment `score_deltas[0]` accordingly.

### **Step 3: Accumulate Scores Using `score_deltas`**

- Traverse the `score_deltas` array, accumulating the scores for each rotation `k`.
- Track the rotation `k` that yields the highest score. In case of ties, prefer the smallest `k`.

### **Detailed Steps with Formulas**

1. **For Each Element `nums[i]`**:
   - **Calculate Rotation Bounds**:
     -**Start (`start`)**:

        $$       \	ext{start} = (i - \	ext{nums}[i] + 1) \\% n
        $$      

    - **End (`end`)**:
        $$       \	ext{end} = (i + 1) \\% n
        $$    

   - **Update `score_deltas`**:
     - Increment at `start`: `score_deltas[start] += 1`
     - Decrement at `end`: `score_deltas[end] -= 1`
     - **Handle Wrap-Around**: If `start > end`, it implies the range wraps around the end of the array. To account for this:
       - Increment at `0`: `score_deltas[0] += 1`

2. **Accumulate Scores**:
   - Initialize `current_score = 0` and `max_score = 0`.
   - Iterate through each rotation `k` from `0` to `n-1`:
     - Update `current_score`:


       $$\	ext{current\\_score} += \	ext{score\\_deltas}[k]$$


     - If `current_score` exceeds `max_score`, update `max_score` and record `best_k = k`.

### **Final Step: Return the Optimal Rotation Index**

- After processing all rotations, return the `best_k` that yielded the highest score.

---

### **Code Implementation**

```python

class Solution(object):
    def bestRotation(self, nums):
        n = len(nums)
        score_deltas = [0] * n
        
        # Calculate score_deltas for each index in nums
        for i, num in enumerate(nums):
            # When nums[i] is "in place" and contributes to score
            left = (i + 1) % n  # Start of range (inclusive)
            right = (i - num + n + 1) % n  # End of range (exclusive)
            
            # Increment and decrement points in score_deltas to indicate range
            score_deltas[left] += 1
            score_deltas[right] -= 1
            if left > right:  # Wrap-around case
                score_deltas[0] += 1  # Increase score at the beginning of the array
                
        # Calculate the best rotation based on accumulated score_deltas
        max_score, best_k = 0, 0
        current_score = 0

        for k in range(n):
            current_score += score_deltas[k]
            if current_score > max_score:
                max_score = current_score
                best_k = k

        return best_k
```

### **Explanation of the Code**

1. **Initialization**:
   - `n`: Length of the array `nums`.
   - `score_deltas`: Difference array to track score changes across rotations.

2. **Processing Each Element**:
   - For each index `i` and value `nums[i]`:
     - **Start Rotation (`start`)**:
       - Calculated as `(i - nums[i] + 1) % n`.
       - Represents the smallest `k` where `nums[i] <= new_index`.
     - **End Rotation (`end`)**:
       - Calculated as `(i + 1) % n`.
       - Represents the rotation just before `nums[i]` would no longer satisfy the condition.
     - **Update `score_deltas`**:
       - Increment at `start`: `score_deltas[start] += 1`
       - Decrement at `end`: `score_deltas[end] -= 1`
       - **Handle Wrap-Around**:
         - If `start > end`, it means the valid range wraps around the end of the array. Hence, we increment `score_deltas[0]` to account for the continuation of the score contribution.

3. **Accumulating Scores**:
   - Iterate through each possible rotation `k`:
     - Update `current_score` by adding `score_deltas[k]`.
     - If `current_score` surpasses `max_score`, update `max_score` and set `best_k` to the current rotation `k`.

4. **Return the Optimal Rotation**:
   - After evaluating all rotations, return `best_k`, which corresponds to the rotation with the highest score.

---

## **Example Walkthrough**

Let's apply the algorithm to the input `nums = [2,3,1,4,0]` to understand how it works step-by-step.

### **Step-by-Step Execution**

1. **Initialization**:
   - `n = 5`
   - `score_deltas = [0, 0, 0, 0, 0]`

2. **Processing Each Element**:

   - **Element 0** (`nums[0] = 2`):
     - `start = (0 - 2 + 1) % 5 = (-1) % 5 = 4`
     - `end = (0 + 1) % 5 = 1`
     - Update `score_deltas`:
       - `score_deltas[4] += 1` \u2192 `[0, 0, 0, 0, 1]`
       - `score_deltas[1] -= 1` \u2192 `[0, -1, 0, 0, 1]`
       - Since `start > end` (`4 > 1`), increment `score_deltas[0] += 1` \u2192 `[1, -1, 0, 0, 1]`

   - **Element 1** (`nums[1] = 3`):
     - `start = (1 - 3 + 1) % 5 = (-1) % 5 = 4`
     - `end = (1 + 1) % 5 = 2`
     - Update `score_deltas`:
       - `score_deltas[4] += 1` \u2192 `[1, -1, 0, 0, 2]`
       - `score_deltas[2] -= 1` \u2192 `[1, -1, -1, 0, 2]`
       - Since `start > end` (`4 > 2`), increment `score_deltas[0] += 1` \u2192 `[2, -1, -1, 0, 2]`

   - **Element 2** (`nums[2] = 1`):
     - `start = (2 - 1 + 1) % 5 = 2`
     - `end = (2 + 1) % 5 = 3`
     - Update `score_deltas`:
       - `score_deltas[2] += 1` \u2192 `[2, -1, 0, 0, 2]`
       - `score_deltas[3] -= 1` \u2192 `[2, -1, 0, -1, 2]`
       - No wrap-around since `start <= end`.

   - **Element 3** (`nums[3] = 4`):
     - `start = (3 - 4 + 1) % 5 = 0`
     - `end = (3 + 1) % 5 = 4`
     - Update `score_deltas`:
       - `score_deltas[0] += 1` \u2192 `[3, -1, 0, -1, 2]`
       - `score_deltas[4] -= 1` \u2192 `[3, -1, 0, -1, 1]`
       - No wrap-around since `start <= end`.

   - **Element 4** (`nums[4] = 0`):
     - `start = (4 - 0 + 1) % 5 = 5 % 5 = 0`
     - `end = (4 + 1) % 5 = 0`
     - Update `score_deltas`:
       - `score_deltas[0] += 1` \u2192 `[4, -1, 0, -1, 1]`
       - `score_deltas[0] -= 1` \u2192 `[3, -1, 0, -1, 1]`
       - Since `start > end` (`0 > 0` is false), no additional increment.

3. **Final `score_deltas` Array**:
   \\[
   \	ext{score\\_deltas} = [3, -1, 0, -1, 1]
   \\]

4. **Accumulating Scores**:
   - **Rotation k = 0**:
     - `current_score = 0 + 3 = 3`
     - `max_score = 3`, `best_k = 0`
   
   - **Rotation k = 1**:
     - `current_score = 3 + (-1) = 2`
     - No update to `max_score`
   
   - **Rotation k = 2**:
     - `current_score = 2 + 0 = 2`
     - No update to `max_score`
   
   - **Rotation k = 3**:
     - `current_score = 2 + (-1) = 1`
     - No update to `max_score`
   
   - **Rotation k = 4**:
     - `current_score = 1 + 1 = 2`
     - No update to `max_score`

5. **Final Result**:
   - The highest score is `3` at rotation `k = 0`.

---

## **Why This Implementation?**

### **Efficiency**

- **Time Complexity**: \\(O(n)\\)
  - Each element is processed once to update the `score_deltas`.
  - Accumulating the scores is a single pass through the `score_deltas` array.
  
- **Space Complexity**: \\(O(n)\\)
  - Utilizes a `score_deltas` array of size `n` to track score changes.

### **Scalability**

- The algorithm handles large inputs efficiently (up to \\(10^5\\) elements) due to its linear time complexity.

### **Correctness**

- By accurately tracking the ranges of rotations where each element contributes to the score, the algorithm ensures that all possible rotation indices are considered without redundant computations.

### **Simplicity**

- The use of a difference array simplifies the tracking of score changes across rotations, avoiding the need for nested loops or extensive simulations.

---

## **Trade-Offs Considered**

1. **Brute-Force Simulation vs. Optimized Approach**:
   - **Brute-Force**: Rotating the array for each `k` and calculating the score directly. Time Complexity: \\(O(n^2)\\)
     - **Pros**: Simple to understand and implement.
     - **Cons**: Inefficient for large `n`, leading to high computational time and potential timeouts.
   
   - **Optimized Approach (Difference Array)**: Tracks score changes across rotations in \\(O(n)\\) time.
     - **Pros**: Highly efficient, suitable for large inputs.
     - **Cons**: More complex to understand initially due to the use of difference arrays and rotation range calculations.

2. **Alternative Data Structures**:
   - **Difference Array**: Provides an efficient way to track score changes.
     - **Pros**: Enables \\(O(n)\\) time complexity.
     - **Cons**: Requires careful handling of range updates, especially with wrap-around scenarios.
   
   - **Prefix Sum Array or Sliding Window**:
     - **Pros**: Similar efficiency in certain contexts.
     - **Cons**: May not directly apply to rotation-specific range tracking as effectively as the difference array approach.

3. **Handling Wrap-Around Cases**:
   - **Pros**: Ensures that all valid rotations are accurately considered, including those that span the end and start of the array.
   - **Cons**: Adds complexity to the range calculations and requires additional condition checks.

---


By leveraging the difference array concept, we efficiently track the score contributions of each element across all possible rotations. This approach ensures an optimal time complexity of \\(O(n)\\), making it suitable for large arrays. The algorithm meticulously handles rotation ranges, including wrap-around cases, to guarantee accurate score calculations. Despite its initial complexity, the difference array method provides a scalable and effective solution, outperforming brute-force simulations, especially under stringent time constraints.

Understanding and implementing such optimized algorithms are crucial for handling large datasets and ensuring that solutions remain efficient and practical in real-world applications.


## **Additional Considerations**

1. **Edge Cases**:
   - **Minimum Length**: Arrays of length `2` should be handled correctly.
   - **All Elements Zero**: All rotations yield maximum scores.
   - **Descending Order**: Rotations may affect scores differently based on element values.
   - **Uniform Elements**: Arrays where all elements are the same.

2. **Validation**:
   - Ensure that all elements in `nums` are within the valid range (`0 <= nums[i] < n`).
   - Handle cases where no rotation yields a higher score than the original.

3. **Optimizations**:
   - **Early Termination**: If a rotation achieves the maximum possible score, terminate early.
   - **Space Optimization**: If memory usage is a concern, consider in-place modifications or more space-efficient tracking mechanisms.

4. **Parallel Processing**:
   - For extremely large arrays, consider parallelizing the range updates and score accumulation, though this is typically unnecessary given the problem constraints.

By meticulously following the outlined approach and considering various scenarios, this solution ensures both correctness and efficiency, making it a robust choice for determining the optimal rotation index `k`.
