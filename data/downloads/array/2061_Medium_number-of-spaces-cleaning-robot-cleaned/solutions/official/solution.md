# Official Solution

**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solution/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find the number of spaces in the `room` the robot cleaned. It starts in the top left corner of the `room` facing right. Then, it cleans by repeating the following steps:

1. The robot moves forward until it reaches the edge of the room or hits an object.
2. The robot turns 90 degrees clockwise (to the right).

The robot will continue the cleaning process indefinitely, but it may get caught in a cycle where it no longer cleans new spaces.

If the robot revisits a cell for the second time while facing the same direction, a cycle has begun. This occurs because the robot will now follow the same path as when it last cleaned this cell in this orientation.

---

### Approach 1: Recursive Simulation

#### Intuition

We can simulate the robot's movement by defining a recursive function, `clean`, that finds the number of cells the robot cleaned. 

The basic idea is that if the next cell in front of the robot does not contain an object, we move the robot one space forward and call `clean`. Otherwise, we turn the robot 90 degrees to the right and call `clean`.

Our base case is when the robot revisits a cell facing the same direction, as it is stuck in a cycle and will not clean any new cells. At this point, we return the total number of spaces cleaned thus far.

To track the cells the robot has visited, we will use a visited set, which stores cell coordinates and directions. As there will be multiple entries for each cell in the visited set, determining the number of cleaned cells may be challenging. Therefore, we will also maintain a set called `cleaned`, which solely stores the cell coordinates of each `cleaned` cell. We count the number of entries in `cleaned` to determine the result.

For the recursive case, we add the current cell's coordinates to the `visited` set along with the current direction and add the cell to `cleaned`.

Next, we calculate the coordinates of the next cell, which is one space in front of the robot. If this cell is within the room and does not have an object, we clean it by recursively calling `clean` with that cell and the current direction.

Otherwise, if the robot cannot move forward, it turns and cleans the same cell in a new direction.

How do we find the coordinates of the next cell?

For a given cell `(row, col)` the coordinates of the next cell depend on the direction the robot is facing:

- Facing right (direction 0): `(row + 0, col + 1)`
- Facing down (direction 1): `(row + 1, col + 0)`
- Facing left (direction 2): `(row + 0, col - 1)`
- Facing up (direction 3): `(row - 1, col + 0)`

Observe that when the robot is facing a given direction, we change the column by the same amount we change the row when the robot faces the next direction.

We can extract the pattern and store it in an array `DIRECTIONS = {0, 1, 0, -1, 0}`. Then, to retrieve the coordinates of the next cell, we use `row = row + DIRECTIONS[direction]` and `col = DIRECTIONS[direction + 1]` where `direction` is the current direction the robot is facing.

How do we update the robot's direction when it turns?

Each time the robot turns right, the direction increases by one, unless the robot is facing up (direction 3). To get the next direction, we add one to the current direction, then use modulo `4`, which ensures the direction will stay between `0` and `3`.

#### Algorithm

1. Initialize a constant array `DIRECTIONS` to `{0, 1, 0, -1, 0}`.
2. Initialize the variable `rows` to the number of rows in the `room` and `cols` to the number of columns.
3. Initialize a set `visited` to store matrix coordinates that have been visited facing a given direction, `(row, col, direction)`.
4. Initialize a set `cleaned` to store matrix coordinates `(row, col)` that have been cleaned.
5. Define a function called `clean` that finds the number of spaces the robot has cleaned. The function takes parameters `row` and `col`, representing the coordinates of the current cell in the `room`, and `direction`, indicating the direction the robot is facing, and the sets `visited` and `cleaned`.
    - Base Case: We have already visited this cell facing this direction. If `(row, col, direction)` is in visited, return the size of the `cleaned` set.
    - Add the current cell and direction to the `visited` set.
    - Add the current cell to the `cleaned` set.
    - Get the coordinates of the next cell, `(nextRow, nextCol)`.
    - Clean the next space if it is in the `room` and does not contain an object. We check whether the next cell is in the `room` using the condition `0 <= next_row < rows and 0 <= next_col < cols`. Call `clean` with the next cell and the current direction.
    - Otherwise, turn right, visiting the current cell while facing a different direction. Call `clean` with the current cell and the direction to the right `(direction + 1) % 4`.
6. Call `clean` with the coordinates of the top left corner cell, `(0, 0)`, and the starting direction `0`, representing facing right.

The algorithm is visualized below:

!?!../Documents/2061/2061_slideshow1.json:960,410!?!

#### Implementation

<iframe src="https://leetcode.com/playground/5v8JiJEe/shared" frameBorder="0" width="100%" height="500" name="5v8JiJEe"></iframe>

#### Complexity Analysis

Let $n$ be the number of rows in the `room` and $m$ be the number of columns. There are a total of $m \cdot n$ spaces in the `room`.

* Time complexity: $O(m \cdot n)$

    We use hash sets for `visited` and `cleaned`, which provide constant look-up times in the average case.
    
    The `clean` function recursively calls itself. We used the `visited` set, so each cell may be visited four times, once for each direction. This means the `clean` function can be called up to $4 \cdot m \cdot n$ times.

    Therefore, the overall time complexity is $O(4 \cdot m \cdot n)$, which we can simplify to $O(m \cdot n)$.

* Space complexity: $O(m \cdot n)$

    The `visited` set can store up to four entries for each cell in the `room`, or $4 \cdot m \cdot n$ entries. The `cleaned` set can store up to $m \cdot n$ entries.

    The `clean` function can be called up to $4 \cdot m \cdot n$ times, so the recursive call stack can use up to $O(4 \cdot m \cdot n)$ space.

    Therefore, the overall space complexity is $O(4mn + 4mn + mn)$, which we can simplify to $O(m \cdot n)$.

---

### Approach 2: Iterative Simulation

#### Intuition

The recursive approach required overhead for the recursive call stack, which we can reduce by developing an iterative approach.

We track the coordinates of the current cell with the variables `row` and `col`, and the direction the robot is facing with `direction`.

The above approach used separate sets for `cleaned` and `visited`, which required significant extra space. Instead of using sets, we can use the given `room` to store the visited state of each cell. We will use bit manipulation to track the directions the cell has been visited. Since cells with objects are marked with `1`, the least significant (rightmost) bit position represents whether there is an object. Each of the next four bits represents a direction.

- `00001` marks a cell as containing an object.
- `00010` marks a cell as visited facing right, direction `0`.
- `00100` marks a cell as visited facing down, direction `1`.
- `01000` marks a cell as visited facing left, direction `2`.
- `10000` marks a cell as visited facing up, direction `3`.

For example, if `room[row][col]` equals `10`, the bit representation is `01010`, which means the cell has been visited facing the right (direction 0) and the left (direction 2). 

We use a while loop to simulate the robot's path, cleaning spaces until it revisits a cell while facing the same direction. When a cell has the `direction + 1` bit set, it has already been cleaned while facing that direction. The condition `room[next_row][next_col] >> (direction + 1) & 1` evaluates to true when the cell has already been visited facing this direction. `room[row][col] >> (direction + 1)` moves the `(direction + 1)` bit to the one's place, and the `&` operation with `1` evaluates to true if and only if the `(direction + 1)` bit is set.

First, we check if the current cell has been cleaned before. When a cell is marked `0` in `room`, it hasn't been cleaned. Therefore, we can use a variable to count the number of cleaned cells, updating it when the robot cleans a new space.

Then, we mark the cell as visited while facing this direction. We can update a cell's visited status by performing the `or` operation with the current value and `1 << (direction + 1)`, which sets the `direction + 1` bit to `1`.

Next, we generate the coordinates of the next cell straight ahead. If the next cell is in the room and does not contain an object, we update `row` and `col` to the cell's coordinates so the robot can clean it. Otherwise, we turn the robot by updating the `direction`.

> **Interview Tip: In-place Algorithms**
>
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Here are a couple of situations where an in-place algorithm might not be suitable.
>
> 1. The algorithm needs to run in a multi-threaded environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
>
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

#### Algorithm

1. Initialize a constant array `DIRECTIONS` to `{0, 1, 0, -1, 0}`.
2. Initialize the variable `rows` to the number of rows in the `room` and `cols` to the number of columns.
3. Initialize the variable `cleaned` to `0`, for storing the number of spaces the robot cleaned.
4. Create variables to store the coordinates of the robot and the direction it is facing. Initialize `row`, `col`, and `direction` to `0`.
5. Iterate, cleaning spaces while the robot has not entered a cycle. We check this using the condition `room[next_row][next_col] >> (direction + 1) & 1`, which evaluates to true when the cell has already been visited facing this direction.
    - If the robot hasn't cleaned this space yet (`room[row][col]` equals `0`), increment `cleaned`.
    - Mark the current space as visited facing this direction by taking the `or` of the current value of `room[row][col]` and `1 << (direction + 1)`.
    - Get the coordinates of the next cell, `(nextRow, nextCol)`.
    - Clean the next space if it is in the `room` and does not contain an object. Set `row` to `nextRow` and `col` to `nextCol`.
    - Otherwise, turn right, cleaning the current cell while facing a different direction. Turn to the right by setting `direction` to `(direction + 1) % 4`.
7. Return `cleaned`.

#### Implementation

<iframe src="https://leetcode.com/playground/HB4TUfSh/shared" frameBorder="0" width="100%" height="500" name="HB4TUfSh"></iframe>

#### Complexity Analysis

Let $n$ be the number of rows in the `room` and $m$ be the number of columns. There are a total of $m \cdot n$ spaces in the `room`.

* Time complexity: $O(m \cdot n)$

    We may visit each space once facing each direction. Hence, the loop may run $4 \cdot m \cdot n$ times. Therefore, the overall time complexity is $O(4 \cdot m \cdot n)$, which we can simplify to $O(m \cdot n)$.

* Space complexity: $O(1)$

    We use a few variables but no data structures that grow with the input size, so the space complexity is constant, i.e. $O(1)$.

---