# Official Solution

**Link:** [https://leetcode.com/problems/count-number-of-teams/solution/](https://leetcode.com/problems/count-number-of-teams/solution/)

---

[TOC]

## Solution

---

### Approach 1: Dynamic Programming (Memoization) 

#### Intuition

The brute force approach to solving this problem involves checking all possible combinations of `rating` and counting those that meet our conditions. However, such an approach would have a time complexity of $O(n^3)$, which would not satisfy the given constraints. 

Instead of using nested loops to examine all possible combinations of soldiers, we can simplify the problem by breaking it down into smaller sub-problems. The core idea is to determine how many teams each soldier can join and then sum these totals to get the final answer.

We can achieve this by employing recursion. Specifically, we define a function called `countIncreasingTeams` that takes two parameters: an index from the `rating` array and the number of members currently in the team. This function will return the total number of valid teams that can be formed starting from the given index with the current team size.

For each soldier, the function will explore all potential next soldiers who can be added to the team, provided they satisfy the rating condition. It will then recursively count the number of valid teams that can be formed from this new state. The recursion will terminate when the team has reached the maximum size of three members. At each step, the function accumulates the number of valid teams and returns this count.

During the recursion, we might encounter the same sub-problem multiple times at different stages, which are known as overlapping sub-problems. To optimize our solution and avoid redundant computations, we use memoization. This technique involves storing the result of each sub-problem the first time it is computed so that when we encounter the same sub-problem again, we can retrieve the result from a cache rather than recomputing it.

Since we need to count both increasing and decreasing teams, we set up two separate recursive functions, each with its cache. Each sub-problem is uniquely identified by two states: the current index and the size of the team already formed.

To get the final result, we initiate our recursive functions starting from each index in the `rating` array. By summing the number of teams returned by each recursion, we obtain the total number of valid teams.

#### Algorithm

Main method `numTeams`:

- Initialize:
  - `n` as the length of `rating`.
  - `teams` to store the total number of possible teams.
  - two arrays `increasingCache` and `decreasingCache` of size $n \times 4$ to serve as cache for the memoization.
- Loop over the array `rating`. For each index `startIndex`:
  - Call `countIncreasingTeams` and `countDecreasingTeams` with `startIndex`. Add their results to `teams`.
- Return `teams`.
  
Helper method `countIncreasingTeams`:

- Define a method `countIncreasingTeams` with parameters: `rating`, `currentIndex`, `teamSize` and the cache `increasingCache`.
- Initialize `n` as the length of `rating`.
- If `currentIndex` is equal to `n`, return `0`.
- If `teamSize` is equal to `3`, return `1`.
- If `increasingCache` already contains an entry with the current state, return it.
- Initialize a variable `validTeams` to `0`.
- Loop over all indices from `currentIndex + 1` to the end of the array. For each index `nextIndex`:
  - If `rating[nextIndex]` is greater than `rating[currentIndex]`, call `countIncreasingTeams` with `nextIndex` and `teamSize` incremented by `1`.
- Cache `validTeams` with the current state in `increasingCache` and return it.

Helper method `countDecreasingTeams`:
- Define a method `countDecreasingTeams` with parameters: `rating`, `currentIndex`, `teamSize` and the cache `decreasingCache`.
- This method is exactly the same as `countIncreasingTeams` except for majorly one thing:
  - We check whether `rating[nextIndex]` is less than `rating[currentIndex]` to call `countDecreasingTeams`.

#### Implementation

<iframe src="https://leetcode.com/playground/GV944Th5/shared" frameBorder="0" width="100%" height="500" name="GV944Th5"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `rating` array.

- Time complexity: $O(n^2)$

    The algorithm iterates through `rating`, each time calling `countIncreasingTeams` and `countDecreasingTeams`. In the worst case, the recursive functions might explore all subsequent soldiers for each call. However, due to memoization, each unique subproblem is only computed once. There are $n$ possible indices and $3$ possible team sizes $(1, 2, 3)$. This gives us $n \times 3 = O(n)$ unique sub-problems. Each sub-problem may iterate through up to $n$ soldiers in the worst case. Therefore, the overall time complexity is $O(n^2)$.

- Space complexity: $O(n)$

    Each cache (`increasingCache` and `decreasingCache`) is a 2D array of size $n \times 4$, thus taking $O(8 \cdot n) = O(n)$ space. 
    
    The maximum depth of recursion is $3$, so this doesn't add to the asymptotic space complexity. 

    Thus, the overall space complexity is $O(n)$.

---

### Approach 2: Dynamic Programming (Tabulation) 

#### Intuition

The main drawback of using the memoization approach is the significant space consumed by the recursion stack. To address this issue, we can refine the algorithm to reduce space usage by eliminating recursion.

In the memoization approach, the recursive function solves each sub-problem and stores the results in a cache. Since the solution to the main problem is derived from all its sub-problems, the final answer ends up being stored in the cache. Therefore, if we can construct the cache without recursion, we can avoid the overhead associated with the recursion stack.

To achieve this, we’ll use two 2D arrays: `increasingTeams` and `decreasingTeams`. Each array will have the position `(i, j)` representing the number of teams of size `j` that end with the `i`th member of the `rating` array. Initially, we populate these arrays with the base case: for all positions `(i, j)` where `j=1`, the number of ways to form a team is `1`, as the `i`th soldier alone constitutes a single-member team.

We then use three nested loops to consider all combinations of team lengths 2 and 3. For each position `(i, j)`, if we can append `rating[j]` to the sequence ending with `rating[i]`, we update the count of teams at `j` by adding the count of teams of the previous length at `i`.

Finally, to find the total number of teams of length 3, we iterate over both arrays and sum up the counts for all positions where `j` equals `3`. This accumulated total represents the number of teams formed, providing the answer to the problem without incurring recursion space overhead.

#### Algorithm

- Initialize:       
  - `n` to the length of `rating`.
  - `teams` to store the required number of teams.
- Create two 2D arrays `increasingTeams` and `decreasingTeams` of size $n \times 4$ to store the count of increasing and decreasing sequences respectively.
- Fill base case. For all `i` from `0` to `n`:
  - Set `increasingTeams[i][1]` and `decreasingTeams[i][1]` to `1` (as each soldier forms a sequence of length 1).
- Use 3 nested loops to fill the tables. The outer loop iterates over sequence lengths 2 and 3. The middle loop sets the middle soldier. The inner loop iterates over all soldiers as potential end points. For each pair of soldiers `i` and `j`:
  - If `rating[j] > rating[i]`, add `increasingTeams[i][count-1]` to `increasingTeams[j][count]`.
  - If `rating[j] < rating[i]`, add `decreasingTeams[i][count-1]` to `decreasingTeams[j][count]`.
- Set `teams` as the sum of all sequences of length 3.
- Return `teams` as our answer.

#### Implementation

<iframe src="https://leetcode.com/playground/KX9dQDMV/shared" frameBorder="0" width="100%" height="500" name="KX9dQDMV"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `rating` array.

- Time complexity: $O(n^2)$

    Initializing the `increasingTeams` and `decreasingTeams` arrays take $O(n)$ time. 

    In the nested loops: the outer loop runs $2$ times, the middle loop $n$ times and the inner loop at most $n$ times. Thus, the total complexity of the section is $O(2 \cdot n \cdot n)$, which simplifies to $O(n^2)$.

    The final summation loop runs in linear time.

    Thus, the total time complexity of the algorithm is dominated by the nested loops, resulting in $O(n^2)$.

- Space complexity: $O(n)$

    The two 2D arrays `increasingTeams` and `decreasingTeams` each take $n \times 4$ space, which give them a total space complexity of $O(2 \cdot 4 \cdot n) = O(n)$.

    All other elements take constant space, so the space complexity of the algorithm is $O(n)$.

---

### Approach 3: Dynamic Programming (Optimized)

#### Intuition

Having explored team formations by fixing either the starting or ending points, let's now consider an alternative approach: focusing on the middle member of each team.

The key insight here is to examine each soldier as a potential middle member. For each such soldier, we need to count:
- How many soldiers to their left have lower ratings
- How many soldiers to their right have higher ratings

We apply the same logic for descending teams:
- How many soldiers to their left have higher ratings
- How many soldiers to their right have lower ratings

For ascending teams, the number of valid teams for each index is the product of the number of smaller-rated soldiers to the left and larger-rated soldiers to the right. This is because each soldier with a lower rating to the left can be paired with each soldier with a higher rating to the right to form a valid team with the middle soldier.

The same principle applies to descending teams, where we multiply the count of higher-rated soldiers to the left by the count of lower-rated soldiers to the right.

To obtain the final result, we sum the number of teams formed for each potential middle soldier.

#### Algorithm

- Initialize variables:
  - `n`: length of the `rating` array.
  - `teams`: to store the total count of valid teams.
- Iterate through `rating`. For each soldier `mid`:
  - Set `leftSmaller` and `rightLarger` counters to `0`.
  - Count smaller rating to the left of `mid` and store it in `leftSmaller`.
  - Count larger rating to the right of `mid` and store it in `rightLarger`.
  - Calculate the number of ascending rating teams:
    - Multiply `leftSmaller` by `rightLarger` and add it to `teams`.
  - Calculate the number of descending rating teams:
    - Set `leftLarger` as the total soldiers on left - `leftSmaller`.
    - Set `rightSmaller` as the total soldiers on right - `rightLarger`.
    - Multiply `leftLarger` by `rightSmaller` and add to `teams`.
- Return `teams` as our answer.

#### Implementation

<iframe src="https://leetcode.com/playground/NLpcV6Hw/shared" frameBorder="0" width="100%" height="500" name="NLpcV6Hw"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `rating` array.

* Time complexity: $O(n^2)$

    The main loop iterates through the `rating` array, which takes linear time. In each iteration, the two inner loops compare $n-1$ elements in total. Thus, the overall time complexity is $O(n \cdot (n-1))$, which simplifies to $O(n^2)$.

* Space complexity: $O(1)$

    The space complexity is constant since no additional data structures dependent on the length of the input space are used.

---

### Approach 4: Binary Indexed Tree (Fenwick Tree) 

#### Intuition

In our previous approach, we performed a linear scan of elements to the left and right of each middle soldier, which contributed an $O(n)$ factor to our overall complexity. To enhance efficiency, we need to explore a more advanced approach.

One such optimization involves querying the total count of smaller soldiers on either side of each soldier. This type of query can be optimized to $O(\log n)$ time using a data structure known as a Binary Indexed Tree (BIT) or Fenwick Tree. While a comprehensive explanation of how a BIT operates is beyond the scope of this article, interested readers can refer to [this discussion](https://cs.stackexchange.com/questions/10538/bit-what-is-the-intuition-behind-a-binary-indexed-tree-and-how-was-it-thought-a) for a deeper understanding. For hands-on practice, consider tackling these problems:
1. [Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/description/)
2. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/)

Our improved solution utilizes two BITs: one to manage the left side and another for the right side of the current soldier. Each `BIT` stores frequency counts of ratings within a specific range. For instance, `BIT[5]` keeps track of the number of soldiers with a rating of `5`, while `BIT[6]` aggregates counts for ratings of `5` and `6`.

Here is an example to get a better understanding of how the BIT stores the frequency counts of ratings:

!?!../Documents/1395/slideshow.json:1402,922!?!

To implement our algorithm, we start by populating the right `BIT` with all the soldier ratings. As we process each soldier, we remove their rating from the right `BIT` and consider them the middle soldier. To count increasing sequences, we query the number of soldiers with lower ratings in the left `BIT` and the number of soldiers with higher ratings in the right `BIT`. The product of these two counts gives the total number of increasing teams with the current soldier positioned in the middle. Similarly, we perform this process to calculate the number of decreasing sequence teams. After processing, the current soldier's rating is added to the left `BIT`, and we continue with the next iteration.

#### Algorithm
 
Main method `numTeams`:

- Set `maxRating` to the maximum rating in the `rating` array.
- Initialize two binary indexed trees `leftBIT` and `rightBIT`, each of size `maxRating + 1`.
- Populate `rightBIT` with all ratings initially using the `updateBIT` method.
- Initialize `teams` to `0` to store the count of valid teams.
- Iterate through each `rating` in the input array:
  - Remove the current `rating` from `rightBIT`.
  - Count `smallerRatingsLeft` using `getPrefixSum` on `leftBIT`.
  - Count `smallerRatingsRight` using `getPrefixSum` on `rightBIT`.
  - Set `largerRatingsLeft` as (all ratings) - (the ratings at and below the current `rating`) on `leftBIT`.
  - Set `largerRatingsRight` as (all ratings) - (the ratings at or below the current `rating`) on `rightBIT`.
  - Add to `teams`:
    - Product of `smallerRatingsLeft` and `largerRatingsRight` (increasing sequences).
    - Product of `largerRatingsLeft` and `smallerRatingsRight` (decreasing sequences).
  - Add the current `rating` to the `leftBIT`.
- Returns `teams` as the total number of teams possible.

Helper method `updateBIT`:

- Define a method `updateBIT` with parameters: `BIT`, `index` and `value`.
- While `index` is within the bounds of `BIT`:
  - Add the given `value` to the current `index`.
  - Move to the next node in the `BIT` by adding `index & (-index)` to `index`.

Helper method `getPrefixSum`:

- Define a method `getPrefixSum` with parameters: `BIT` and `index`.
- Initialize a variable `sum` to `0`.
- While `index` is greater than `0`:
  - Add the value at the current `index` in the `BIT` to `sum`.
  - Move to the parent node in the `BIT` by subtracting `index & (-index)` from `index`.
- Return `sum`.

#### Implementation

<iframe src="https://leetcode.com/playground/iQsDVqjd/shared" frameBorder="0" width="100%" height="500" name="iQsDVqjd"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `rating` array and $\text{maxRating}$ be the maximum rating in `rating`.

* Time complexity: $O(n \cdot \log(\text{maxRating}))$

    Finding `maxRating` takes linear time. 

    Initially populating the `rightBIT` takes $O(n \cdot \log(\text{maxRating}))$ time. 

    The main loop iterates $n$ times. For each iteration, updating the BIT's have a complexity of $O(\log(\text{maxRating}))$ and getting the prefix sums also take  $O(\log(\text{maxRating}))$ time. Thus, the total for the main loop is $O(n \cdot \log(\text{maxRating}))$.

    Thus, the overall time complexity of the algorithm comes out to be $O(n) + O(2 \cdot n \cdot \log(\text{maxRating}))$, which simplifies to $O(n \cdot \log(\text{maxRating}))$.

* Space complexity: $O(\text{maxRating})$

    The only additional space used are the two arrays for the BIT, each taking $O(\text{maxRating})$ space.
    
    This makes the space complexity of the algorithm $O(2 \cdot \text{maxRating}) = O(\text{maxRating})$.

---