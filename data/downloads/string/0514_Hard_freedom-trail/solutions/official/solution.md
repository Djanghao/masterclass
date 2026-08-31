# Official Solution

**Link:** [https://leetcode.com/problems/freedom-trail/solution/](https://leetcode.com/problems/freedom-trail/solution/)

---

[TOC]

## Solution

---

### Overview

Our objective is to find the minimum number of steps required to spell the keyword (given as `key`), using the metal dial (given as `ring`). The characters of the keyword must be spelled in order.

Any one of the following operations counts as one step:
1. Rotate the metal dial clockwise by one place. 
2. Rotate the metal dial anticlockwise by one place. 
3. Press the center button to spell a character.

When spelling a given character `key[i]`, the number of steps it takes to spell the character will be the number of rotations made to put the character in the `"12:00"` position plus one, which represents pressing the center button to spell the character.

---

### Approach 1: Top-Down Dynamic Programming

#### Intuition

We want to find the minimum number of steps required to spell the keyword, which is made up of one or more characters. Let's start by finding the minimum number of steps required to spell one character. 

To spell a character, we must align the character with the `"12:00"` direction on the metal dial `ring`. To determine the number of steps required to do so, let's define a function called `countSteps`. The parameters for this function are:
- `curr`: the position, or index, in the `ring` of the character currently located at the `"12:00"` position.
- `next`: the index in the `ring` of the character that needs to be spelled out in `key`.

The metal dial can be turned clockwise or anticlockwise to reach the desired character in `key`.  

Assuming `curr` comes before `next`, we calculate the difference between `curr` and `next`, denoted as `curr - next`. Since `next` could be either before or after `curr`, potentially resulting in a negative difference, we obtain the absolute value of the difference to represent the number of steps between the indices. Let's store this value in the variable `stepsBetween`.

> An example of this process is the string `godding`, where `'o'` is at index `1` and `'n'` is at index `5`. When `curr = 1` and `next = 5`, we compute `|5 - 1| = 4`, and when `cur = 5` and `next = 1`  we compute `|1 - 5| = 4`. 
>
> |0|1|2|3|4|5|6|
> |-|-|-|-|-|-|-|
> |g|o|d|d|i|n|g|

To calculate the steps required to rotate from `curr` to `next` by wrapping around the metal dial, we subtract the value of `stepsBetween` from the length of the `ring`, denoted as `ringLength - stepsBetween`. Let's store this result in the variable `stepsAround`.

> Using the previous example, traversing `'o'` to `'n'`,  `ringLength` is `7` and `stepsBetween` is 4.  `7 - 4 = 3`. 

Finally, `countSteps` returns the minimum of the two distances, `stepsAround` and `stepsBetween`.

![Possible Paths Between o and n](../Figures/514/metal_dial.png)

> Steps from `'o'` to `'n'` in `godding`.
> - The red arrow represents `stepsBetween`, where `'n'` is reached without wrapping around the end of the string.
> - The blue arrow represents `stepsAround`, where `'n'` is reached by wrapping around the end of the string.

**`countSteps` function**    
1. Calculate `stepsBetween` by taking the absolute value of `curr - next`.
2. Calculate `stepsAround` using `ringLength - stepsBetween`.
3. Return `min(steps_around, steps_between)`.

**Brute Force**    

To achieve our goal using a naive approach, we could calculate the minimum steps for each character in the keyword individually and then sum them to find the minimum steps needed to spell the entire keyword. This method would be considered greedy because it selects the locally optimal next character. However, what if a word has multiple occurrences of the same character? 

Let's understand this through example. Assume the `ring` is `repetitive` and the key is `per`. 

|0|1|2|3|4|5|6|7|8|9|
|-|-|-|-|-|-|-|-|-|-|
|r|e|p|e|t|i|t|i|v|e|

There are at least two ways to spell the keyword:

1. - Let's spell the `p` at index `2`. It will take `|2 - 0| + 1 = 3` steps.
   - Then, let's choose the `e` at index `3`. It will take `|3 - 2| + 1 = 2` steps.
   - Going back to `r` at index `0` will take `|0 - 3| + 1 = 4` steps.

   This totals `9` steps.

2. - Let's spell the `p` at index `2`. It will take `|2 - 0| + 1 = 3` steps.
   - Then, let's choose the `e` at index `1`. It will take `|1 - 2| + 1 = 2` steps.
   - Going back to `r` at index `0` will take `|0 - 1| + 1 = 2` steps.

   This totals `7` steps.

Therefore, we need to consider which character we were at previously.

For this problem, the greedy method does not lead to an optimal solution. If a word has multiple occurrences of the same character, the minimum steps to the next character are affected by which character was previously at the `"12:00"` position.

We will define a recursive function, `tryLock`, to calculate the number of steps to spell the keyword. The parameters are: 
- `ringIndex`: the current index of `ring`. 
- `keyIndex`: the current index of `key`.
- `minSteps`: the minimum steps to spell the keyword so far. 

This function returns the minimum number of steps required to spell the whole keyword, stored in the variable `minSteps`. 

When we reach the end of the keyword, we have spelled the whole word. Therefore, our base case is `keyIndex == key.length()`. At that point, the `keyIndex` is past the end of the keyword, and no steps need to be taken, so we return zero.

Given two characters, if there is only one occurrence of each character in `ring`, then there are only two ways between those characters. Our function `countSteps` will provide the number of steps of the better way. We simply need to add one to signify pressing the center button.

To find `minSteps` for the whole word based on a given choice between characters, we can recursively call `tryLock`, calculating the steps from the character we just visited to the next character in `key`. This will tell us how visiting a given occurrence of a character affects the overall `minSteps`. Since there are multiple options for spelling when there are multiple occurrences of a character, we will loop through the keyword and calculate `bestSteps` for each duplicate occurrence.

When we call `tryLock`, we will pass the largest integer as a parameter because a path has not been determined between the zeroth index of `ring` and the first character in `key`. This way, when we update `minSteps`, the calculation will always be less than the initial amount, so we can accurately calculate the number of steps.

**Brute Force Algorithm** 

1. Define a function `countSteps` that gives the minimum path between two indices of `ring`.
2. Define a function `tryLock` that returns the minimum number of steps to spell the keyword. The parameters are `ringIndex`, the current index of `ring`, `keyIndex`, the current index of `key`, and `minSteps`, the minimum steps to spell the keyword so far:
    1. If `key_index` is equal to `key.length()`, then return `0`; `key` has been spelled.
    2. Iterate through each character in the `ring` using `i`:
        1. If `ring[i]` equals the current character `key[keyIndex]`:
            - Calculate `totalSteps`, the steps it takes to spell `key` when we visit `ring[i]` by adding the following three terms: 
                - The output of `countSteps` which finds the number of steps from the `ringIndex` to `ring[i]`.
                - `1`, signifying pressing the center button.
                - The output of `tryLock`, which calculates how many steps to each character in `key` are required if we choose to visit `ring[i]`.
            - Save the minimum between `totalSteps` and the best so far in `minSteps`.
    3. Return `minSteps`.
3. Call `tryLock(0, 0, INT_MAX)` as we start with the zeroth index of `ring` in the  `"12:00"` position and start spelling with the first character in `key`. The largest integer is passed as the final parameter because a path has not been determined between the zeroth index of `ring` and the first character in `key`.

<iframe src="https://leetcode.com/playground/Hs2Uuf4G/shared" frameBorder="0" width="100%" height="500" name="Hs2Uuf4G"></iframe>

This solution is inefficient and is not accepted because the time limit is exceeded. We compute the output of the same argument multiple times. 

![repeated_subproblems](../Figures/514/repeated_subproblems.png)

Is there a more efficient way to solve this problem? The problem involves finding a minimum, which is a hint that it could be solved with a greedy or dynamic programming approach. Since one decision affects others, a greedy approach is not likely to solve the problem, but dynamic programming could be an effective approach. Can we use dynamic programming to make this approach more efficient?  

> Dynamic programming is a programming paradigm in which we break a problem into sub-problems, store the result of each sub-problem, and use it when required. If you are not familiar with dynamic programming, we recommend checking out [Dynamic Programming Explore Card](https://leetcode.com/explore/featured/card/dynamic-programming/).

We can optimize our calculations by storing values as we calculate them. To do this, we can utilize a map called `bestSteps`, where we store the best path we have found to reach a particular `keyIndex` of `key` when the `ringIndex` of `ring` is aligned with the `"12:00"` position. 

We adjust our `tryLock` function in two ways:
1. We check whether the `ringIndex` and `keyIndex` pair is already in the map. If it is, we return the stored `minSteps` value.
2. We only calculate the optimum for new `(ringIndex, keyIndex)` pairs, and when we do, we add them to the map.

This approach saves computational time by avoiding redundant calculations and utilizing stored values whenever possible.

#### Algorithm

1. Define a function `countSteps` that gives the minimum path between two indices of `ring`.
2. Create the variables `ringLen` to store the length of the `ring` and `keyLen` to store the length of the `key`.
3. Create a map, `bestSteps`, to store the minimum number of steps to find the character at `keyIndex` when the `ringIndex` of `ring` is aligned with the `"12:00"` position. 
4. Define a function `tryLock` that returns the minimum number of steps to spell the keyword. The parameters are `ringIndex`, `keyIndex`, and `minSteps`, the minimum steps to spell the keyword so far:
    1. Check whether `keyIndex` equals `keyLen`; if so return `0`; `key` has been spelled.
    2. Check whether the `(ringIndex, keyIndex)` pair is in `bestSteps`. If it is, return `bestSteps[ringIndex][keyIndex]`; we have already calculated the best path.
    3. Iterate through each `charIndex` in `ring`:
        1. If `ring[charIndex]` equals the current character `key[keyIndex]`:
           - Calculate `totalSteps`, the steps it takes to spell `key` when we visit this occurrence of `ring[charIndex]` by adding the following three terms:
                - The output of `countSteps`, which finds the number of steps from the `ringIndex` to the `ring[charIndex]`.
                - `1`, which signifies pressing the center button.
                - The output of `tryLock`, which calculates the number of steps to each character in `key`, granted we chose to visit this occurrence of `ring[charIndex]`.
            - Save the minimum between `totalSteps` and the best so far in `minSteps`.
            - Save the `minSteps` for this `(ringIndex, keyIndex)` pair in `bestSteps`.
    4. Return `minSteps`.
5. Call `tryLock(0, 0, INT_MAX)` as we start with the zeroth index of `ring` in the `"12:00"` position and start spelling with the first character in `key`. The largest integer is passed as the final parameter because a path has not been determined between the zeroth index of `ring` and the first character in `key`.

#### Implementation

<iframe src="https://leetcode.com/playground/avfRubs9/shared" frameBorder="0" width="100%" height="500" name="avfRubs9"></iframe>

#### Complexity Analysis

Let $R$ be the length of `ring` and $K$ be the length of `key`.

* Time Complexity: $O(K \cdot R^2)$. 

    When every character in `ring` is unique, $K$ recursive calls are made, one for each letter in the keyword.
    
    At worst, when every character of `ring` is the same, we initially call `trylock` $R$ times. For each of these $R$ recursive calls, `tryLock` is called for each occurrence of the character in `ring` for each character in the keyword. This means the `trylock` function is called a total of $R \cdot K \cdot R$ times.
    
    Therefore, the overall time complexity is $O(K \cdot R^2)$.

* Space Complexity: $O(K \cdot R)$ 

    $O(K \cdot R)$ space is used for the map. The call stack can grow as deep as $K$ since a recursive call is made for each character in `key`. This makes the overall space complexity $O(K \cdot R)$.

---

### Approach 2: Bottom-Up Dynamic Programming 

#### Intuition

The top-down solution involves recursion, which requires a significant amount of overhead to maintain the call stack. We can convert our top-down solution to a bottom-up solution to save space. 

We can utilize the previously defined `tryLock` function. Additionally, we create a variable `ringLen` to store the length of the `ring` and a variable `keyLen` to store the length of the `key`.

In our top-down solution, we use a map `bestSteps` to store the minimum number of steps to `keyIndex` starting from the `ringIndex` of `ring`. To generate a bottom-up solution, we will use a 2D array `bestSteps[ringIndex][keyIndex]` to store the minimum number of steps to the `keyIndex` when the `ringIndex` of `ring` is aligned with the `"12:00"` position.

We declare the 2D array `bestSteps` with `ringLen` in the `ringIndex` dimension and `keyLen + 1` in the `keyIndex` dimension because our base case is when the whole `key` has been spelled, and zero additional steps need to be taken. We initialize every value in the array to the largest integer value. This way, when we iterate through the array updating the minimum number of steps, the steps calculation will always be less than the initialized amount, allowing us to correctly calculate the number of steps.

In a bottom-up solution, we start by addressing the base case. For every index pair `(ringIndex, keyLen)` in `bestSteps`, we initialize the value to zero because when the entire `key` has been spelled, no additional steps are needed.

Our bottom-up solution will be iterative. We need to iterate through both dimensions of `bestSteps`, so we'll use a nested for loop. We iterate through the indices `keyIndex` of `key`, starting with the last character in `key`, and for each, we iterate through the indices `ringIndex` of `ring`.

Similar to our top-down solution, we iterate through the characters using `charIndex` of `ring`, searching for indices in `ring` that contain the same character as `key[keyIndex]`. Each iteration of the innermost loop represents a state. We can utilize the function call we made in the top-down solution to build our recurrence relation. The calculations we performed in the top-down solution will be replicated here, but instead of recursion, we'll use our array `bestSteps`.

The recurrence relation calculates the minimum number of steps to find the character at `keyIndex` of `key` when the `ringIndex` of `ring` is aligned with the `"12:00"` position. Our recurrence relation is:

> `bestSteps[r][k] = min(bestSteps[r][k], 1 + countSteps[r, charIndex] + bestSteps[charIndex][key_index + 1])` 

The terms in the recurrence relation represent: 

- `bestSteps[ringIndex][keyIndex]`: the previous minimum number of steps to that occurrence of that character. 
- `countSteps[ringIndex, charIndex]`: the minimum number of steps between the `ringIndex` aligned with the `"12:00"` position of `ring`, and the index of `charIndex`, the next character of the `key`.
- `1`: represents selecting the character by pressing the center button.
- `bestSteps[charIndex][keyIndex + 1]`: the number of steps it took to reach `charIndex` from the last character `key[keyIndex + 1]` the `ring` spelled.

After iterating through both strings, we return `bestSteps[0][0]` which stores the minimum number of steps it took to spell `key` when `ring` begins with its zeroth index in the `"12:00"` position.

#### Algorithm

1. Define a function `countSteps` that gives the minimum path between two indices of `ring`.
2. Create the variables `ringLen` to store the length of `ring` and `keyLen` to store the length of `key`.
3. Declare a 2D array `bestSteps`. It will have `ringLen` rows and `keyLen + 1` columns. 

    > `bestSteps` has one extra column because we want to store the base case of `0` steps. 
    
4. Initialize all values in `bestSteps` to the largest integer to indicate that a path has not been determined.
5. Set each index `ringIndex, keyLength` of `bestSteps`, to `0` for the base case of zero steps.
6. Iterate from the end to the beginning of `key` with `keyIndex` and through `ring` with `ringIndex`:
    - For each character `ring[charIndex]` in `ring`:
        - If `ring[charIndex]` equals `key` at `keyIndex`: Use the recurrence relation `bestSteps[ringIndex][k] = min(bestSteps[ringIndex][k], 1 + countSteps[ringIndex, charIndex] + bestSteps[charIndex][keyIndex + 1])` to calculate the minimum number of steps to find the character at `keyIndex` of the keyword when the `ringIndex` of `ring` is aligned with the `"12:00"` position. 
7. Return `bestSteps[0][0]` which stores the minimum number of steps to spell `key` when `ring` begins with its zeroth index in the `"12:00"` position.

#### Implementation

<iframe src="https://leetcode.com/playground/modUNNXg/shared" frameBorder="0" width="100%" height="500" name="modUNNXg"></iframe>

#### Complexity Analysis

Let $R$ be the length of `ring` and $K$ be the length of `key`.

* Time Complexity: $O(K \cdot R^2)$

    We use nested loops iterating $K$ times through `key` and $R$ times through `ring` for all $R$ characters in `ring`. This gives an overall time complexity of $O(K \cdot R^2)$.

* Space Complexity: $O(KR)$ 

    We use a 2D array with the dimensions $K + 1$ and $R$.

---

### Approach 3: Space-Optimized Bottom-Up Dynamic Programming

#### Intuition

Upon analyzing the bottom-up solution, we observe that when calculating the minimum number of steps for the `keyIndex` column of `bestSteps`, the only other column we refer to is the `keyIndex + 1` column. This means we can space-optimize the bottom-up solution, using two 1-D arrays to store the step calculations we need to reference. One array is for the current column, and the other array is for the previous column.

We will create the array `prev` to store the values of the last column and `curr` to store the values of the current column. We initialize the indices of `prev` to zero to represent that when the whole `key` has been spelled, zero additional steps need to be taken. We initialize the indices of `curr` to the largest integer to indicate that a path has not been determined between those indices.

For the space-optimized approach, we iterate through `key` and `ring` similarly to the bottom-up approach, but we adjust the recurrence relation to use our two columns `prev` and `curr`. 

The recurrence relation finds the minimum number of steps to find the `key[keyIndex]` when the `ring[ringIndex]` is aligned with the `"12:00"` position and stores it in `curr[ringIndex]`. The adjusted relation is:

`curr[ringIndex] = min(curr[ringIndex], 1 + countSteps[ringIndex, charIndex] + prev[charIndex])` 

The terms in the recurrence relation represent:

- `curr[ringIndex]`: the current minimum number of steps to that index. 
- `1`: represents selecting the character by pressing the center button.
- `countSteps[ringIndex, charIndex]`: gives the minimum number of steps between `ringIndex`, the index aligned with the position of `ring`, and the index of `charIndex`, the next character of the `key`.
- `prev[charIndex]`: the number of steps it took to reach `charIndex` from the last character the `key[keyIndex + 1]` the `ring` spelled.
  
After iterating through both strings, we return `prev[0]` which stores the minimum number of steps to spell `key` when `ring` begins with its index `0` in the `"12:00"` position.

#### Algorithm

1. Define a function `countSteps` that gives the minimum path between two indices of `ring`.
2. Create the variables `ringLen` to store the length of `ring` and `keyLen` to store the length of `key`.
3. Declare a 1D array `prev` of size `ringLen` to store the previous column and initialize all indices to `0` for the base case of zero steps.
4. Declare a 1D array `curr` of size `ringLen` to store the current column and initialize all indices to the largest integer to indicate that a path has not been determined.
5. Iterate from the end to the beginning of `key` with `keyIndex`:
    - Reset all of the indices of `curr` to the largest integer.
    - For each character `charIndex` in `ring`:
        - If `ring` at `charIndex` equals `key` at `keyIndex`:
        - Use the recurrence relation `curr[ringIndex] = min(curr[ringIndex], 1 + countSteps[ringIndex, charIndex] + prev[charIndex])` to calculate the minimum number of steps to find the character at `keyIndex` of key when the `ringIndex` of `ring` is aligned with the `"12:00"` position. 
    - Set `prev` to `curr`.
6. Return `prev[0]` which stores the minimum number of steps to spell `key` when `ring` begins with its zeroth index in the `"12:00"` position.

#### Implementation

<iframe src="https://leetcode.com/playground/gSzUnwFA/shared" frameBorder="0" width="100%" height="500" name="gSzUnwFA"></iframe>

#### Complexity Analysis

Let $R$ be the length of `ring` and $K$ be the length of `key`.

* Time Complexity: $O(K \cdot R^2)$ 

    We use nested loops iterating $K$ times through `key` and $R$ times through `ring` for all $R$ characters in `ring`. This gives an overall time complexity of $O(K \cdot R^2)$.

* Space Complexity: $O(R)$. 

    We used two arrays of length $R$ to store the minimum steps between the characters. This gives an overall space complexity of $O(R)$.

---

### Approach 4: Shortest Path

#### Intuition

If we think of the possible paths between the characters as a graph, we can spell the keyword using a modified Dijkstra’s algorithm. Dijkstra’s algorithm is used to find the shortest path from a source vertex to each of the other vertices in a weighted graph. It uses a priority queue (min-heap) to greedily determine which edges to use to find the shortest path to the other vertices.

> If you are not familiar with Dijkstra’s algorithm, we suggest you read our relevant [Leetcode Explore Card](https://leetcode.com/explore/featured/card/graph/622/single-source-shortest-path-algorithm/3862/).

We discussed in the first approach that a greedy solution that just considers the locally optimal next character will not solve the problem optimally. This shortest path solution works because we always choose the next character with the shortest total steps, not the shortest next steps.

For our purposes, each vertex is a character in the `ring` that is present in the keyword.

Dijkstra's algorithm generally uses an adjacency list that contains the neighbors of each vertex. We must visit vertices, or characters, in a certain order to spell the keyword. We need to decide which occurrence of a given character in `ring` we should visit. We use a hash map that stores the indices of each character in `ring`, where the key is the character and the value is the list of indices where it occurs in `ring`. The duplicate occurrences of specific characters are the "neighbors".

Dijkstra's algorithm often uses a data structure to store vertices that have already been visited. We can use a hash map to store `(keyIndex, ringIndex)` pairs we have seen before.

We can track how many steps it takes to spell each character with `totalSteps`.

We use a min-heap to store the steps it takes to spell a given character in the keyword from a given index in `ring`. We start by adding the initial indices to the heap.

When we reach the end of the keyword, we have spelled the whole word. Therefore, our base case is when `keyIndex` equals `keyLen`. `totalSteps` accounts for the steps taken to spell the characters in the keyword but does not account for pressing the center button to spell a character. We press the center button exactly `keyLen` times to spell the keyword, once for each character. Therefore, we return the sum of `totalSteps` and `keyLen`.

When the keyword has not yet been spelled, we first check whether this `(keyIndex, ringIndex)` pair has been seen before. If so, we continue.

If we haven't seen this pair before, we need to find the minimum number of steps between the current and next character of the keyword using the metal dial.

For each occurrence of the current `key[keyIndex]` in `ring`, `nextIndex`, we add an entry to the heap that represents turning the metal dial to the next character in the keyword. The entry consists of three parts:
- `totalSteps`: the sum of `toalSteps` and the output of `count_steps(ringIndex, nextIndex)`.
- `nextIndex`: the index of `ring` that will be at the `"12:00"` position, and
- `keyIndex + 1`: the next character in the keyword.

Once the keyword has been spelled, we will have the answer, because we have greedily chosen the next character with the lowest total steps.

![graph](../Figures/514/graph.png)

> Possible paths to spell the keyword visualized as a graph. The shortest path is highlighted in green.

#### Algorithm

1. Define a function `countSteps` that gives the minimum path between two indices of `ring`.
2. Create the variables `ringLen` to store the length of `ring` and `keyLen` to store the length of `key`.
3. Create a hash map `characterIndices` and add each character in `ring` as a key and a list with the indices of the occurrences as the value.
4. Initialize a priority queue (min-heap) `heap` that stores the `totalSteps` for a `ringIndex` and `keyIndex` pair. The top of the heap will contain the smallest `totalSteps`. Add the starting steps, ring position, and key position, which are all `0` to the heap.
5. Create a hash set `seen` to store `ringIndex` and `keyIndex` pairs we have already seen.
6. While the `heap` is not empty:
    - Pop the element from the top of the heap.
    - Check whether the `keyIndex` equals the `keyLen`. If so, we have spelled the whole keyword.
    - Check whether this `ringIndex` and `keyIndex` pair has already been seen. If so, continue.
    - Otherwise, add this `ringIndex` and `keyIndex` pair to `seen`.
    - For each occurrence `nextIndex` in `ring` of the letter `key[keyIndex]`:
        - Add a heap entry that calculates the steps from `nextIndex` to the next character in `key`. The values for this entry are as follows:
        - `totalSteps`: `totalSteps + count_steps(ringIndex, nextIndex)`.
        - `ringIndex`: `nextIndex`.
        - `keyIndex`: `keyIndex + 1`.
7. Return `totalSteps + keyLen`. We add `keyLen` to the steps to account for the center button being pressed once for each character in `key`.

#### Implementation

<iframe src="https://leetcode.com/playground/c2CkhwRQ/shared" frameBorder="0" width="100%" height="500" name="c2CkhwRQ"></iframe>

#### Complexity Analysis

Let $R$ be the length of `ring` and $K$ be the length of `key`. 

* Time complexity: $O(RK \cdot \log (RK))$

    Building the `characterIndices` hashmap takes $O(R)$ time as we add an entry for each character in `ring`.

    The main loop will run once for each pair that we visit. We use the `seen` set, so we never visit the same `(keyIndex, ringIndex)` pair more than once. The maximum number of pairs we visit is the number of unique possible pairs, which is $R \cdot K$.
     
    Looking up a pair in `seen` takes $O(1)$ time in the average case.

    It takes the priority queue $O(RK \cdot \log (RK))$ time to push or pop $R \cdot K$ elements from the queue.

    Therefore, the overall time complexity is $O(RK \cdot \log (RK))$.

* Space complexity: $O(R \cdot K)$

    The `characterIndices` hashmap is size $R$ because it stores a total of $R$ `(character, index)` mappings.

    The main space used is by the priority queue, which can store up to $R \cdot K$ pairs.

    We also use the `seen` hash set, which can grow up to size $R \cdot K$.

---