# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solution/](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/solution/)

---

[TOC]

## Solution

---

### Overview

If you picture a classroom with rows of seats that represent positions, with students sitting in them, it will be hard to solve this problem.

We can think of the problem like this:

There are `n` **available** seats and `n` students **standing** in a room.

If we think of the positions as areas in the room, then we can visualize the room as the following:

> **Input:** seats = [3,3,1,5], students = [2,2,7,4]

![Room](../Figures/2037/room.png)

Note that the image shows some students who are already seated, but we aren't given information about these students in the input. This helps emphasize that the students we need to move are not currently seated. We can ignore any already filled seats.

We need to move the standing students to empty seats in the minimum number of moves.

---

### Approach 1: Sorting (Greedy)

#### Intuition

Here's a visualization of the first example from the problem description:

!?!../Documents/2037/2037_slideshow1.json:960,250!?!

It looks like we move each student to the nearest available seat. It takes 4 moves, which is the sum of the number of positions each student had to move to be seated.

What if there are multiple nearest seats? What if the student at position 4 chose the seat at position 5? 

![Not Optimal](../Figures/2037/notoptimal.png)

Then, the student at position 7 has to walk to the seat at position 3, which takes 4 moves, for a total of 6 moves, 2 more moves than in the above example.

Let's refine our strategy. Upon further inspection, we can observe that in the first example, the student with the lowest position sat in the seat with the lowest position, and the student with the highest position sat in the seat with the highest position.

We can develop a strategy based on this observation: Place the student with the lowest position in the seat with the lowest position, and repeat with the next student and the next lowest available seat until all of the students are seated. We need to process the students and seats in increasing order, so we will sort both arrays to facilitate this process. 

We can see strategy works for the third example from the problem description:

!?!../Documents/2037/2037_slideshow3.json:960,250!?!

Moving from left to right, we place the first student in the first seat. The second student remains in their current seat. Then, we move the third student to the next available seat, and the fourth student retains their current seat.

This is a greedy strategy because, for each student, we choose the locally optimal seat.

After sorting, the student at index `i` will occupy the seat at index `i`. We calculate the number of moves by subtracting the student's position from the seat's position. If the student needs to move left to reach their seat, the difference will be negative, but it still contributes to the total number of moves, so we take the absolute value of the difference.

#### Algorithm

1. Sort the given arrays `seats` and `students`.
2. Initialize a variable `moves` to `0` for storing the result.
3. For each index in the `seats` array:
    - Add the absolute difference between the position of the seat at that index and the position of the student at that index to `moves`.
4. Return `moves`.

#### Implementation

<iframe src="https://leetcode.com/playground/XvnQd25F/shared" frameBorder="0" width="100%" height="293" name="XvnQd25F"></iframe>

#### Complexity Analysis

Let $n$ be the size of `seats` and `students`.

* Time Complexity: $O(n \log n)$

    Sorting an array of length $n$ takes $O(n \log n)$, and we need to sort two arrays. The for loop iterates over each index once, taking $O(n)$ time. $O(n \log n)$ is the dominating term.

* Space Complexity: $O(n)$ or $O(\log n)$

    Some extra space is used when we sort the arrays in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the `sort` method sorts a list using the Tim Sort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log n)$.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n)$ for sorting two arrays.

---

### Approach 2: Counting Sort

#### Intuition

The sorting step in the above approach introduced a log-linear time complexity. We can use counting sort to develop an approach with linear complexity.

> The basic idea of counting sort is to use an array as a map, storing the number of occurrences of each element at the corresponding index in the array. If you are not familiar with counting sort, we recommend reading our **[Counting Sort Explore Card](https://leetcode.com/explore/learn/card/sorting/695/non-comparison-based-sorts/4437/)**.

The array used for counting sort needs to be able to store every possible element, so we start by finding `maxPosition`, the maximum element across both arrays. Then, we initialize an array `differences` of size `maxPosition`.

To reduce the space needed, we can use a single array to sort both `seats` and `students` by representing `seats` with positive values and `students` with negative values. We iterate through `seats` and increment the value of `differences` at the corresponding position by `1`. Next, we iterate through `students` and decrease the `differences` at the corresponding position by `1`.

!?!../Documents/2037/2037_slideshow4.json:720,360!?!

Then, we can use the `differences` array to calculate the number of moves. We use the variable `unmatched` to keep track of the number of unseated students or empty seats we have encountered and have not yet matched. The `unmatched` variable is positive if there are extra seats and negative if there are extra students.

If `unmatched` is `-1`, it means there is a student who needs a seat. Each position we encounter without a seat represents a position the student must move. For each position in the `differences` array, we add the absolute value of `unmatched` to the number of moves. Our goal is to match the student with any available seat we find, so we add the `difference` at the current position to `unmatched`.

!?!../Documents/2037/2037_slideshow5.json:720,360!?!

#### Algorithm

1. Declare the `findMax` function which finds the maximum element in an array.
    - Initialize a variable `maximum` to `0`.
    - Iterate through each number in the array:
        - If the current number is greater than the `maximum`, update the `maximum`.
    - Return `maximum`.
2. Find the maximum element in each array `seats` and `students` and initialize a variable `maxPosition` to the larger maximum element.
3. Declare an array `differences` of size `maxPosition`. This array will store the difference between the number of seats and the number of students at each position. 
4. Iterate through `seats` and count the number of seats available at each position. For each position, increment `difference[position - 1]` by `1`. We subtract `1` from the position because the positions are 1-indexed.
5. Iterate through `students` and count the number of students standing at each position. For each position, decrement `difference[position - 1]` by `1`.
6. Initialize a variable `moves` to `0` and a variable `unmatched` to `0`.
7. For each `difference` in `differences`:
    - Add the absolute value of `unmatched` to `moves`.
    - Add `difference` to `unmatched`.
8. Return `moves`.

#### Implementation

<iframe src="https://leetcode.com/playground/2uFczDur/shared" frameBorder="0" width="100%" height="500" name="2uFczDur"></iframe>

#### Complexity Analysis

Let $n$ be the size of `seats` and `students`. Let $m$ be the maximum position stored in either of the arrays.

* Time complexity: $O(n + m)$

    To find the maximum position, we iterate through both `seats` and `students`, which takes $O(2n)$.

    Populating the `differences` array also takes $O(2n)$ because we iterate through both `seats` and `students`.

    We iterate through the `differences` array, which is size $m$, to calculate the number of moves needed to seat the students, taking $O(m)$.

    The overall time complexity is $O(4n + m)$, which we can simplify to $O(n + m)$.

* Space complexity: $O(m)$

    We use an auxiliary array `differences` of size $O(m)$.