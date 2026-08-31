# Official Solution

**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solution/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find the number of students who are unable to eat lunch at the school cafeteria.

We are given an array `sandwiches` that represents a stack of sandwiches, where `sandwiches[0]` is the sandwich at the top of the stack.

- Circular sandwiches are represented with a `0`.
- Square sandwiches are represented with a `1`.

We are also given an array `students` which represents a queue of students in line at the cafeteria, where `students[0]` is the first student in the queue.

- Students who prefer circular sandwiches are represented with a `0`.
- Students who prefer square sandwiches are represented with a `1`.

Lunch proceeds with the following process:

The first student takes the top sandwich if it matches their preference and leaves the queue, otherwise, they go to the back of the queue. This repeats until none of the students in the queue want to take the top sandwich.

After this, we return the number of students who are unable to eat, which will be the number of students remaining in the queue.

**Key Observations:**
- The number of students and the number of sandwiches are the same.
- We cannot change the order of the sandwiches.
- The only ways we can modify the order of the students is by giving them sandwiches, which removes them from the queue, or sending them to the back of the queue.

---

### Approach 1: Simulation Using Queue and Stack

#### Intuition

We can simulate the lunch process by using a queue of students and a stack of sandwiches.

While there are unserved students in the queue, we check if the sandwich at the top of the sandwich stack meets the front student in the queue's preference. If so, we remove the sandwich from the stack and remove the student from the queue. Otherwise, we move the student to the back of the queue.

**How do we know when none of the students in the queue want to take the top sandwich?**

We can keep track of when we last served a student using the variable `lastServed`. If we are unable to serve a student, we increment `lastServed`. When we do serve a student, we reset `lastServed` to zero. When `lastServed` reaches the same size as the queue, we know we have offered the top sandwich to every student in the queue, so we stop the lunch process.

After serving all the sandwiches we can, the remaining students in the queue are the unserved students.

#### Algorithm

1. Initialize a variable `len` to the length of `students`. `sandwiches` will be the same length.

2. Initialize a queue `studentQueue` for storing the students and a stack `sandwichStack` for storing the sandwiches.

3. Add the students and sandwiches to the queue and stack:

    - Use a `for` loop to iterate from `i = 0` to `len`:
        - Add the next student, `student[i]`, to the back of `studentQueue`.
        - Add the next sandwich, `sandwich[len - i - 1]`, to the top of `sandwichStack`, which will build the stack so it is in the same order as the given `sandwiches`.

4. Initialize a variable `lastServed` to `0` to store how many students ago the most recent sandwich was served.

5. Simulate the lunch process by serving sandwiches and sending students to the back of the queue.

    - While the size of `studentQueue` is greater than `0` and greater than `lastServed`:
        - If the first student in the queue's preference matches the top sandwich in the stack, remove the student from the queue and the sandwich from the stack, and reset `lastServed` to `0`.
        - Otherwise, move the first student to the back of the queue and increment `lastServed` by `1`.

6. Return the number of remaining students in the queue.

The algorithm is visualized below:

!?!../Documents/1700/1700slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/TCuU3AVS/shared" frameBorder="0" width="100%" height="500" name="TCuU3AVS"></iframe>

#### Complexity Analysis

Let $n$ be the length of `students` and $m$ be the length of `sandwiches`. Note that $n$ and $m$ are equal.

* Time complexity: $O(n \cdot m)$

    Populating `studentQueue` and `sandwichStack` takes $O(n)$. 

    In the worst case, each student may go through the queue up to $m$ times, being offered the wrong sandwich type each time. Therefore, the time complexity is $O(n \cdot m)$.

    Therefore, the overall time complexity is $O(n \cdot m)$.

* Space complexity: $O(n + m)$

    The main space we use is for `studentQueue` which is size $n$ and `sandwichStack` which is size $m$ so the space complexity is $O(n + m)$.

---

### Approach 2: Counting

#### Intuition

There are two main cases:

1. Every student in the queue receives a sandwich, so the number of students unable to eat is `0`.

> Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
> Output: 0

2. None of the remaining students in the queue want the top sandwich, so they are unable to eat lunch.

> Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
> Output: 3
> After the lunch process, students = [1,1,1] and sandwiches = [0,1,1]

***Key Observation:** If none of the students in the queue's preference matches the top sandwich, none of the remaining students can eat.*

We can utilize this observation to develop a constant space solution.

First, we count the number of students who prefer circle sandwiches and the number of students who prefer square sandwiches.

Then, we iterate through the available sandwiches in the stack. If the top sandwich is a circle sandwich, we serve it to a student who prefers circle sandwiches by decrementing the number of students who prefer circle sandwiches. If the top sandwich is square, we serve it to a student who prefers square sandwiches by decrementing the number of students who prefer square sandwiches. 

If the number of students who prefer a certain type of sandwich becomes zero, and the sandwich at the top of the stack is that same type of sandwich, none of the remaining students want that sandwich. We return the number of unserved students, which is the count of the students who prefer the other type of sandwich.

#### Algorithm

1. Initialize `circleStudentCount` and `squareStudentCount` to `0`.

2. Iterate through the `students` array:
   - If the current student prefers a circle sandwich (value is `0`), increment `circleStudentCount`.
   - Otherwise, the current student prefers a square sandwich (value is `1`), increment `squareStudentCount`.

3. Iterate through the `sandwiches` array:
   - If the current sandwich is a circle sandwich (value is `0`) and there are no students who want circle sandwiches (`circleStudentCount` is `0`), return `squareStudentCount`.
   - If the current sandwich is square (value is `1`) and there are no students who want square sandwiches (`squareStudentCount` is `0`), return `circleStudentCount`.
   - If the current sandwich matches a student's preference:
        - If the current sandwich is a circle sandwich (value is `0`), decrement `circleStudentCount`.
        - Otherwise, the current sandwich is square (value is `1`), decrement `squareStudentCount`.

4. If the loop completes without returning, it means that all students received a sandwich, return `0`.

The algorithm is visualized below:

!?!../Documents/1700/1700slideshow2.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/9gkKTjnv/shared" frameBorder="0" width="100%" height="500" name="9gkKTjnv"></iframe>

#### Complexity Analysis

Let $n$ be the length of `students` and $m$ be the length of `sandwiches`.

* Time complexity: $O(n + m)$

    Counting the number of students who prefer each kind of sandwich takes $O(n)$.

    We loop through each sandwich in `sandwiches` to serve the sandwiches, which takes up to $O(m)$.

    Therefore, the overall time complexity is $O(n + m)$.

> **Note:** Since $n$ and $m$ are equal, we could alternatively represent the time complexity as $O(n)$.

* Space complexity: $O(1)$

    We use a couple of variables to count the students who want each type of sandwich, but we don't use any data structures that grow with input size, so the space complexity is constant, i.e. $O(1)$

---