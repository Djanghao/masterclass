# [Greedy + Formal Proof + Tutorial] Minimum Increment to Make Array Unique

**Author:** never_get_piped
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309958/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5309958/)

---

**Topic** :  Greedy
Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems. (GFG Reference)

**A thorough proof is essential to demonstrate the correctness of a perfect Greedy solution.**

Feel free to refer back to yesterday's challenge on how I constructed a proof for it :
* [Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/discuss/5304525/greedy-formal-proof-minimum-number-of-moves-to-seat-everyone)



___

## Greedy Solution
Solving a greedy problem generally involves coming up with a quick idea, but we need to prove its correctness before starting implementation. **Please refer to the section below for the solution walkthrough. This part exclusively focuses on guiding through the solution approach**.

Let's rephrase the problem for easier understanding:
```
We have a row of infinite seats, and n students positioned at locations nums[i].
Each student can only move towards the right. 
The task is to find the minimum total distance traveled by all students such that each student occupies a seat.
In addition, no seat accommodates more than one student.
```

The **greedy intuition** here is that each student, starting from the smallest position, should immediately take the first available seat on their right side.

We begin by sorting the array and introduce a variable `nxt` to signify the next available spot. The first student may take the seat without moves immediately. We initialize `nxt` as `nums[0] + 1`. Subsequently, we iterate through our `nums` array starting from index `1`.

For `1 <= i < n`, if `nums[i]` is less than `nxt`, student `i` must move to that spot with `nxt - nums[i]` steps, and then nxt increases by `1`. If `nums[i]` is greater than `nxt`, student `i` does not need to move, and we set `nxt = nums[i] + 1`.



## Proof 
We need to proof the above idea is correct. Remember, we've rephrased our question as:
```
We have a row of infinite seats, and n students positioned at locations nums[i].
Each student can only move towards the right. 
The task is to find the minimum total distance traveled by all students such that each student occupies a seat.
In addition, no seat accommodates more than one student.
```

With this rephrasing, we can convert this back to yesterday's seat assignment problem. But how?
```
We currently have n students, each assigned a position.
We need to choose n seats, ensuring that each seat has a unique position.
We want to minimize the total travel distance.

Let's assume sorted array P represents the final seat positions we choose. 
For any array P, the optimal assignment is to assign the student with the smallest position to the seat positions in ascending order.
This proof is done on yesterday's challange.

Since each student only move to right, we must ensure:
P[i] >= sort(nums[i]).
```

With the requirement for array `P` as mentioned above, we construct array `P` as follows, similar to what we did in the solution section.

Yesterday's challange + Proof: [Minimum Number of Moves to Seat Everyone](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/discuss/5304525/greedy-formal-proof-minimum-number-of-moves-to-seat-everyone)

## Code
<iframe src="https://leetcode.com/playground/Bgdrsz4B/shared" frameBorder="0" width="600" height="300"></iframe>

**Complexity**:
* Time Complexity : `O(n log n)`
* Space Complexity : `O(log n)` for using built sort.

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**