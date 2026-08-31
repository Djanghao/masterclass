# Official Solution

**Link:** [https://leetcode.com/problems/longest-happy-string/solution/](https://leetcode.com/problems/longest-happy-string/solution/)

---

[TOC]

## Solution

---

### Approach 1: Priority Queue

#### Intuition

We are given three integers `a`, `b`, and `c`, representing the number of characters `a`, `b`, and `c` we can use. The goal is to create the longest string possible with these characters while making sure that no three consecutive characters are the same.

To make the string as long as possible, we should try to use the character that appears most often without breaking the rule about three consecutive characters. If using the most frequent character would cause three in a row, we use the next most frequent character instead. Refer to the appendix section, to understand the mathematical proof of this approach.

We can use a max-heap to solve this problem efficiently. The heap lets us pick the character with the highest remaining count, and switch to the next character if needed to avoid triples.

First, we put the counts of `a`, `b`, and `c` into a max-heap. If adding the most frequent character would create three in a row, we pick the second most frequent one. After adding a character, we reduce its count. If it still has characters left, we put it back into the heap.

By always selecting the character with the highest count, except when it would break the rule, we ensure the string is as long as possible.

#### Algorithm

1. Create a max-heap `pq` to store the counts of `a`, `b`, and `c` in descending order of their counts and a string `ans` to store the string answer.
2. Push `(a, 'a')`, `(b, 'b')`, and `(c, 'c')` into the heap if their counts are greater than 0.
3. Iterate Until `pq` is Empty:
    - Pop the most frequent character from the heap.
    - If adding this character would result in three consecutive identical characters in the answer string, do the following:
        - Check the next most frequent character by popping it from the heap.
        - Add this second character to the answer. If its `count` is still positive after use, push it back into the heap.
        - Push the previously popped character (the most frequent) back into the heap without adding it to the answer yet.
    - Otherwise, if the character can be added without violating the three-consecutive rule, append it to `ans` and decrement its `count`.
    - If a character’s count is still greater than 0 after being appended, push it back into the heap.
4. Once the heap is empty and no more characters can be added, return the constructed string `ans` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/YJHseUCT/shared" frameBorder="0" width="100%" height="500" name="YJHseUCT"></iframe>

#### Complexity Analysis

- Time complexity: $O(a + b + c)$

    Each operation on the priority queue (insertion or removal) takes $O(log k)$ time, where `k` is the number of distinct characters. In this case, `k` is equal to 3, so each heap operation takes $O(log 3)$, which simplifies to $O(1)$ time.
    
    In each iteration, one character is either added to the result string or skipped, and there are `a+b+c` characters in total. Therefore, the total number of iterations is proportional to `a+b+c`.
    
    Thus, the overall time complexity is $O(a + b + c)$.

- Space complexity: $O(1)$

    The space complexity is $O(1)$, as the heap contains at most three elements and the result string uses $O(a+b+c)$ space (not counted in the solution space).

---

### Approach 2: Using Counters

#### Intuition

Since we need to track the counts of only three characters, we can use three integer counters instead of a priority queue.

Similar to the previous approach, we add the most frequent character to the string, and also track how many times we add each letter in a row using separate counters (`curra`, `currb`, and `currc`).

If one of these counters reaches 2, we stop adding that letter. Instead, we add the second most-frequent letter with a counter of 0. By repeating this process, we can create the longest possible string.

#### Algorithm

1. Set `curra`, `currb`, and `currc` to 0. These integers will track the current count of consecutive 'a's, 'b's, and 'c's added to the result string.
2. Calculate `totalIterations` as the sum of `a`, `b`, and `c`.
3. Initialize an empty string `ans` to store the final result.
4. Iterate Through Total Iterations:
    - For each iteration from 0 to `totalIterations - 1`, determine which character to add to the result string:
        - Condition for 'a':
            - If 'a' has the highest count compared to 'b' and 'c' and its consecutive count `curra` is less than 2, or if 'a' has remaining characters and either `currb` or `currc` equals 2, then add 'a' to the string.
            - Decrement the count of 'a' and increment `curra`. Reset `currb` and `currc` to 0.
        - Condition for 'b':
            - If 'b' has the highest count compared to 'a' and 'c' and its consecutive count `currb` is less than 2, or if 'b' has remaining characters and either `curra` or `currc ` equals 2, then add 'b' to the string.
            - Decrement the count of 'b' and increment `currb`. Reset `curra` and `currc` to 0.
        - Condition for 'c':
            - If 'c' has the highest count compared to 'a' and 'b' and its consecutive count `currc` is less than 2, or if 'c' has remaining characters and either `curra` or `currb` equals 2, then add 'c' to the string.
            - Decrement the count of 'c' and increment `currc`. Reset `curra` and `currb` to 0.
5. Return the `ans` string.

#### Implementation

<iframe src="https://leetcode.com/playground/WY764vDH/shared" frameBorder="0" width="100%" height="500" name="WY764vDH"></iframe>

#### Complexity Analysis

- Time complexity: $O(a + b + c)$

    We iterate through the string for a total of `a+b+c` iterations, which is the maximum possible length of the string. Each iteration involves a constant amount of work (checking conditions and appending a character to the result).

- Space complexity: $O(1)$

    The space used for the counters `curra`, `currb`, and `currc` is constant and does not depend on the input size, so it does not affect the overall space complexity.

---

### Appendix: Mathematical Proof for the greedy approach

To mathematically prove that the algorithm produces an optimal solution, let’s assume two cases based on the values of `a`, `b`, `c` (for simplicity, assume `a`≤`b`≤`c`). First, we'll calculate the maximum possible value of `c` that can be fully utilised to create a happy string.

Since `c` is the most frequent character, we can form groups where two `c` characters are followed by one `a` or one `b`, such as: `cc-a`, `cc-b`. This way, each group that contains two `c` characters requires at least one `a` or `b` character. We can use up to `a + b` groups of two `c`s, which consumes 2 * (`a`+`b`) `c` characters in total. We can add 2 `c`s after this sequence, which makes it 2 * (`a` + `b` + 1). 

Therefore, if there are more than 2 * (`a` + `b` + 1) `c`s, we can not construct a happy string without removing some `c` characters.

Case 1: `c` ≤ 2 * (`a` + `b` + 1)

In our algorithm, we had added the most frequently occuring characters in the string, while alternating other characters to avoid three consecutive characters. The algorithm will operate in three steps:

1. Step 1: Decrement `c` and alternate with `a` or `b`:
   - Since `c` is the most frequent, the algorithm attempts to balance the character counts by constructing pairs of `c` with either `a` or `b`, ensuring no three consecutive characters are the same.
   - In each step:
     - `c` is decremented by 2 (two `c` characters are added), and either `a` or `b` is decremented by 1.
     - Since `c` ≤ 2 (`a` + `b` + 1), and each time we pick `a` or `b`, we also select 2 occurences of `c`. This guarantees that eventually `c` will be reduced to match `b` or `a`.
     - Since `b` > `a`, `c` would reach the value of `b` before `a`.

2. Step 2: Alternate `b` and `c` until `a` = `b`:
   - After Phase 1, we reach `b` = `c`.
   - Now, we alternate between adding `b` and `c` characters, ensuring we do not exceed two consecutive characters.
   - In each step, both `b` and `c` are decremented by 1 and added to the string until `a` = `b`.

3. Step 3: All counts are equal, alternate until depletion:
   - At this point, `a` = `b` = `c`.
   - The algorithm can simply alternate among `a`, `b`, and `c` characters, decrementing each by 1 in each cycle.
   - This continues until all counts reach 0, exhausting all characters.

Conclusion: Since the algorithm reaches zero for all counts simultaneously, it has used all `a + b + c` characters, achieving an optimal solution.

Case 2: `c` > 2 * (`a` + `b` + 1)

1. Limit on Usage of 'c' Characters: It is impossible to use more than 2 * (`a` + `b` + 1) `c` characters without violating the consecutive constraint (as adding more would lead to three consecutive `c`s).
  
2. Optimal Length: Assuming we remove all extra `c`s from the string, the algorithm will construct a string of length `a` + `b` + 2 * (`a` + `b` + 1), as this is the maximum number of characters that can be used while obeying the no-three-consecutive rule.

Therefore, the algorithm is proven to give an optimal solution in both cases, either using all characters or maximizing the string length given the constraints.

---