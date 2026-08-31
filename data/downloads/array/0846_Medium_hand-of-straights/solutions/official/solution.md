# Official Solution

**Link:** [https://leetcode.com/problems/hand-of-straights/solution/](https://leetcode.com/problems/hand-of-straights/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find if it's possible to rearrange a given set of cards into groups of size `groupSize`, where each group consists of `groupSize` consecutive card values. 

**Key Observations:**
1. If the total number of cards is not divisible by `groupSize`, it's impossible to rearrange the cards into the desired groups.
2. There may be duplicate cards present in the array, but a valid group does not contain duplicates.
3. Consider the `hand = [1,2,3,6,2,3,4,7,8]` with a `groupSize` of 3. The output is `[1,2,3]`, `[2,3,4]`, `[6,7,8]`. One might argue that even [4,6,7] are consecutive values, so why can't we include them? However, in the context of this question, when they refer to a `groupSize` of consecutive card values, it means immediate consecutive values (i.e., values that increase by `1`).

---

### Approach 1: Using Map

#### Intuition

To solve this problem, we can count the occurrences of each card value in the `hand` and then iterate through the sorted list of card values, ensuring that each consecutive sequence forms a valid group.

The first step is to check if it's even possible to evenly distribute the cards into groups of size `groupSize`. We do this by verifying if the total number of cards is divisible by `groupSize`. If not, it's impossible to rearrange the cards, and we can immediately return `False`.

Next, we count the occurrences of each card value in the `hand` using a map. Knowing the frequency of each card value will allow us to check if we have enough cards to form consecutive groups.

We create a min-heap containing the unique card values from the `hand` to maintain the sorted order of the card values. Another option is to sort the map or use a map implementation that maintains sorted order.

We then iterate through the min-heap and extract the smallest card value (`currentCard`) at each step. For each extracted value, we check the `hand` to see if it has a consecutive sequence of `groupSize` cards starting from `currentCard`. We do this by checking if all the card values in the range `[currentCard, currentCard + groupSize - 1]` are present in the frequency map and have enough occurrences to form a group.

If any of these cards are missing from the count or have exhausted their occurrences, it means the `hand` cannot be rearranged into the desired groups, and we return `False`.

However, if all consecutive sequences form valid groups, we can conclude that it's possible to rearrange the cards, and we return `True`.

The condition "if `currentCard + i` not in hash map" enhances the solution's efficiency. It allows the function to terminate early when a required card for forming a group is absent. This prevents unnecessary decrement operations and subsequent checks, thus optimizing the overall performance to some extent.

#### Algorithm

- Check if the length of the `hand` array is divisible by `groupSize`. If not, return `false`.
- Create a `map` called `cardCount` to store the count of each card value in the given `hand` array.
- Iterate through the `hand` array and update the `cardCount` map accordingly.
- Process the cards until the `cardCount` map is empty:
   - Get the smallest card value `currentCard` from the `cardCount` map.
   - Check if a consecutive sequence of `groupSize` cards starting from `currentCard` exists.
     - If any card in the potential sequence is not present in the `cardCount` map or has exhausted its occurrences, return `false`.
     - If the sequence exists, decrement the count of each card in the sequence from the `cardCount` map.
     - If the count of a card becomes zero, remove it from the `cardCount` map.
- If all cards can be grouped into consecutive sequences of `groupSize`, return `true`.

The algorithm is visualized below:

!?!../Documents/846/approach1.json:1015,404!?!

#### Implementation

<iframe src="https://leetcode.com/playground/apLQam3i/shared" frameBorder="0" width="100%" height="500" name="apLQam3i"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `hand` array and $k$ be `groupSize`.

- Time complexity: $O(n \cdot \log n + n \cdot k)$

    Populating the `cardCount` map takes $O(n \log n)$ time.

    The outer loop processes the `cardCount` map until it is empty. In the worst case, it iterates $n$ times.

    Inside the outer loop, getting the smallest card value from the `cardCount` map takes $O(\log n)$ time due to the `map` implementation.

    Checking for the presence of a consecutive sequence of $k$ cards takes $O(k)$ time. $k$ is limited to the size of the `hand` array because we can't have groups larger than the `hand`.

    Each card will be processed exactly once because the more cards we process in each group, the fewer groups we process. Processing each card can take up to $O(\log n)$ due to the `map` or heap insertion and removal.

    Therefore, the overall time complexity is $O(n \log n + n \cdot k)$.

* Space complexity: $O(n)$

    The `cardCount` map stores the count of each card value.
    
    In the worst case, all cards could have distinct values, resulting in a map size of $n$.
    
    Therefore, the space complexity is $O(n)$.

---

### Approach 2: Optimal

#### Intuition

This approach involves counting the number of different cards and storing these counts in a map named `cardCount`. The variable `currentOpenGroups` represents the number of currently open straight groups. Additionally, a deque named `groupStartQueue` is used to record the number of new straight groups starting at each card value. 

We will processes the cards starting from the smallest card number. For instance, given the hand `[1,2,3,2,3,4]` and a group size `groupSize` of 3, the process is as follows:

When encountering the card `1`, since `opened = 0`, it indicates that a new straight group is starting at `1`, and this group is recorded in `groupStartQueue`. When the card `2` is encountered twice, the first occurrence (with `opened = 1`) indicates the need to open another straight group starting at `1`, and this is recorded in the queue. The second occurrence of `2` (with `opened = 2`) matches the current number of open groups. 

Upon meeting the card `3` twice, the first occurrence matches the number of open groups, and after processing the first `3`, one group starting at `1` is completed and closed, reducing `opened` by 1 to 1. The second occurrence of `3` similarly matches the number of open groups. Finally, when encountering the card `4`, it matches the number of open groups. After processing the first `4`, one group starting at `2` is closed, reducing `opened` by 1 to 0.

We return `true` if all groups are successfully closed, indicating that it is possible to rearrange the hand into groups of consecutive cards of size `groupSize`. If any groups remain open, we return `false`.

#### Algorithm

- Initialize a `map` called `cardCount` to store the count of each card value in the input array `hand`.
- Iterate through the input array `hand` and update the `cardCount` map accordingly.
- Initialize a `queue` called `groupStartQueue` to keep track of the number of new groups starting with each card value.
- Initialize variables `lastCard` to keep track of the last card value processed, and `currentOpenGroups` to keep track of the number of open groups.
- Iterate through the `cardCount` map:
    - Get the current card value `currentCard` and its count from the map entry.
    - Check if there are any discrepancies in the sequence or if more groups are required than available cards. If so, return `false`.
    - Calculate the number of new groups starting with the current card value by subtracting `currentOpenGroups` from the count of `currentCard`.
    - Push the number of new groups to the `groupStartQueue`.
    - Update `lastCard` with the current card value `currentCard`.
    - Update `currentOpenGroups` with the count of `currentCard`.
    - If the size of `groupStartQueue` is equal to `groupSize`, remove the front element from the queue and subtract it from `currentOpenGroups`.
- After the loop, check if all groups are completed by verifying if `currentOpenGroups` is 0. Return `true` if it is, otherwise return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/PgShea4k/shared" frameBorder="0" width="100%" height="500" name="PgShea4k"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `hand` array and $k$ be `groupSize`.

* Time complexity: $O(n \log n + n)$

    The time complexity is $O(n \log n + n)$. This is due to the process of counting and sorting the cards.

* Space complexity: $O(n)$

    We use a map to count the occurrences of each card and a deque to keep track of the number of open groups. Therefore, the space complexity is $O(n)$. 

---


### Approach 3: Reverse Decrement (Most Optimal)

#### Intuition

The above approach 1 focused on handling the smallest remaining card and the streak starting from it. For example, given the sequence `[3, 2, 1, 5, 6, 7, 7, 8, 9]` with `k = 3`, this solution first finds the smallest card `1` and removes the streak `[1, 2, 3]`. This approach requires processing the map in sorted order, which leads to a log-linear time complexity.

Once we've determined it's possible to form valid groups, starting with the smallest card is an effective strategy because the smallest card in the array must be the beginning of a streak.

However, starting with the smallest card is not necessary. We could remove the streak `[5, 6, 7]` first, as there's no `4`, indicating that `5` is the start of a streak, so it's safe to remove it first. This alternative strategy improves efficiency by prioritizing the removal of streaks based on their starting points rather than solely focusing on the smallest number. This avoids the need to process the map in sorted order, using a heap or treemap.

How can we identify the start of any of the other streaks?

Each streak must be consecutive, so if we cannot find a card with a value exactly 1 less than the current card, then it must be the start of a new streak.

So now, while we could remove `[7, 8, 9]` first, how can we determine if it's safe to do so? It would be unsafe to remove `[6, 7, 8]`, for instance, as that would be a mistake. We could argue that removing `[7, 8, 9]` is safe because there's no `10`, implying that `9` is the end of a streak. However, this approach of looking for streak starts and ends requires more code than simply looking for streak starts.

The key idea is to find an efficient way to identify the start of a streak. We can achieve this by selecting any card and decrementing the value until we reach a safe streak start. For example, if we begin with the card `8` from the sequence `[3, 2, 1, 5, 6, 7, 7, 8, 9]`, it's not a safe start because there's a `7`. Similarly, `7` is not a safe start because there's a `6`, and `6` is not safe because there's a `5`. However, `5` is a safe start as there's no `4`.

#### Algorithm

- Check if the length of the `hand` array is divisible by `groupSize`. If not, return `false`.
- Create a `map` called `cardCount` to store the count of each card value in the given `hand` array.
- Iterate through the `hand` array and update the `cardCount` map accordingly.
- Iterate through the `hand` array to create the groups:
  - For each card `card`, find the starting card `startCard` of the potential straight sequence by decrementing `startCard` until a card value is found that is not present in the `cardCount` map.
  - Once the `startCard` is found, try to form a consecutive sequence of `groupSize` cards starting from `startCard`.
    - If any card in the potential sequence is not present in the `cardCount` map, return `false`.
    - If a consecutive sequence of `groupSize` cards can be formed, decrement the count of each card in the sequence from the `cardCount` map.
- If all cards can be grouped into consecutive sequences of `groupSize`, return `true`.

#### Implementation

<iframe src="https://leetcode.com/playground/NjFFV9J8/shared" frameBorder="0" width="100%" height="500" name="NjFFV9J8"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `hand` array and $k$ be `groupSize`.

* Time complexity: $O(n)$

    Populating the `cardCount` map takes $O(n)$ time, where $n$ is the length of the `hand` array.

    The outer loop iterates over all cards in the `hand` array, which takes $O(n)$ time.

    For each card `card`, the algorithm might need to check for the presence of $k$ consecutive cards, which takes $O(k)$ time in the worst case.

    Given that the maximum number of cards we need to check consecutively is bounded by the size of the `hand`, the inner loop does not run $k$ times for each card independently. Instead, it runs $k$ times in total for each sequence of groups.

    So, the algorithm forms $n/k$ groups, each of size $k$. Also, $k$ is limited to the size of the `hand` array because we can't have groups larger than the `hand`.

    Thus, the inner loop effectively runs $n$ times in total across all iterations of the outer loop, as each of the $n$ cards is processed exactly once within a group.

    Therefore, the overall time complexity is $O(n)$:

    It's important to note that this $O(n)$ complexity holds because the inner loop, despite appearing nested, does not result in a quadratic increase in iterations but rather spreads the iterations across the total number of cards.

    This approach might seem expensive at first glance. If we happen to select a card at the end of a long streak, we'll decrement all the way through the entire streak just to find a single start. However, this is worthwhile because we can then go back up through the streak, deleting it entirely. Overall, we might "visit" each card twice, once on the way down and once on the way up, resulting in $O(2n) = O(n)$ time complexity.

    Although it might seem like we go through all the cards and do a lot of work for each card, leading to an $O(n^2)$ time complexity, this is not the case. The amount of work we do for each card is proportional to how much we "uncount," and overall, we can't "uncount" more cards than were originally present, which is $n$. So, the overall time complexity is $O(n)$. For example, perhaps the first number causes us to do $O(n)$ work, "uncounting" every card. But for all other cards, we do essentially nothing (only $O(1)$ work for each).

    Thus, the overall complexity is approximately $2n$, which simplifies to $O(n)$.

* Space complexity: $O(n)$

    The `cardCount` map stores the count of each card value.

    In the worst case, all cards could have distinct values, resulting in a map size of $n$.

    Therefore, the space complexity is $O(n)$.

---