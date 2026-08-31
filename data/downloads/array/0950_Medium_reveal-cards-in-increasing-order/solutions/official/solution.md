# Official Solution

**Link:** [https://leetcode.com/problems/reveal-cards-in-increasing-order/solution/](https://leetcode.com/problems/reveal-cards-in-increasing-order/solution/)

---

[TOC]

## Solution

---

### Overview

Given an array, `deck`, of integers representing cards, we need to order the cards in the `deck` so that they are revealed in increasing order.

Cards are revealed using the following process:
 - The top card is revealed and removed.
 - The next card is moved to the bottom of the `deck`.
 - Repeat while there are more cards.

**Key Observations:**
- We need to sort the `deck` in a special order.
- All values in the `deck` are unique.

---

### Approach 1: Two Pointers

#### Intuition

The goal is to reveal the `deck` in increasing order. We start by sorting the `deck` in increasing order, so we can work backward to the special order. We create an array `result` to store the cards in the special order.

We can use two pointers, one for `deck` and one for `result`, to add cards from the `deck` to the `result`.

On the first pass through the `deck`, we reveal every other card. We can fill cards into every other index in `result` so that the cards will be revealed in increasing order.

```
Input:  1 2 3 4 5 6 7 8

First Pass:
Result: 1 _ 2 _ 3 _ 4 _
```

The next pass through the `deck`, we reveal every other card remaining in the `deck`.

```
Second Pass:
Result: 1 5 2 _ 3 6 4 _

Output (Third Pass):
Result: 1 5 2 7 3 6 4 8
```

On each pass, we fill every other open spot with a card and skip the other spots.

We create `indexInDeck` to point to the next card in the `deck` and `indexInResult` to add cards to their proper place in `result`.

We use a while loop to add elements to their proper index in the result array until `indexInDeck` reaches the end of the `deck`. Since we want to fill every other open spot in `result`, we use a boolean variable `skip` to track whether we need to fill a card or skip a spot.

Some positions in `result` may already be filled, so we check whether `result[indexInResult]` equals `0`. If so, the current spot is an empty spot.

For each empty spot, we either place a card at the correct index in `result` and increment `indexInDeck`, or we skip an empty spot in the result array. We flip the value of `skip` using the not operator with each iteration so it alternates. 

`indexInResult` is incremented by `1` on each iteration to progress to the next spot in `result`. Since we skip some indexes on each pass, this pointer will need to make multiple passes through `result` to add all the cards. `indexInResult` may grow larger than `N`, so we use mod `N` to map the pointer to an index in `result`.

After filling the cards, we return `result`.

> **Interview Tip: In-place Algorithms**
>
> This approach sorts the `deck` in-place. In-place algorithms overwrite the input to save space, but sometimes this can cause problems.
>
> Here are a couple of situations where an in-place algorithm might not be suitable:
>
> 1. The algorithm needs to run in a multi-threaded environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
>
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

#### Algorithm

1. Initialize the following:
    - Variable `N` to the length of the `deck`.
    - Array `result` of size `N`.
    - Boolean variable `skip` to `false` because we reveal the first card.
    - Variable `indexInDeck` to `0`.
    - Variable `indexInResult` to `0`.

2. Sort the `deck`.

3. Place cards in the correct indices of the result array.

    - While `indexInDeck` is less than `N`:
        - If the current index in the `result` array has not yet been filled (value is `0`):
            - If not `skip`, an element needs to be added to `result`. Set `result[indexInResult]` to `deck[indexInDeck]` and increment `indexInDeck` because we have filled a card.
            - Otherwise, the current position in `result` should be skipped.
        - Flip the value of `skip` using `!skip`, which will change `true` to `false` and vice versa. 
        - Set `indexInResult` to `(indexInResult + 1) % N`.

4. Return the `result`, which contains the cards in the special order.

The algorithm is visualized below:

!?!../Documents/950/950_slideshow2.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/Rw8iuMLx/shared" frameBorder="0" width="100%" height="500" name="Rw8iuMLx"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `deck`.

* Time complexity: $O(n \log n)$

    Sorting the `deck` takes $O(n \log n)$.

    The loop to place cards at the correct index in `result` runs $O(n \log n)$ times. Each pass through the `result` array takes $O(n)$, and with each pass, half as many indices still need to be filled.

    Therefore, the overall time complexity is $O(n \log n)$

* Space complexity: $O(n)$ or $O(\log n )$.

    `result` is only used to store the result, so it is not counted in the space complexity.

    Some extra space is used when we sort the `deck` in place. The space complexity of the sorting algorithms depends on the programming language.

    - In Python, the `sort` method sorts a list using the Timesort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log n )$.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n )$ for sorting two arrays.

---

### Approach 2: Simulation with Queue

#### Intuition

The above solution made multiple passes through `result` to add the cards in the special order. Let's devise a strategy for adding cards more efficiently. 

In this solution, we also start by sorting the `deck` and creating a `result` array.

**How do we know what order to put the cards in?**

The `result` array will not be revealed in order. Instead, the indexes of the result array will be revealed in a certain order.

> Input: [17,13,11,2,3,5,7]
> Output: [2,13,3,11,5,17,7]

Order of indexes revealed: 0, 2, 4, 6, 3, 1, 5

We can work backward from the sorted order since we can easily sort the `deck` in ascending order.

> Sorted Order: [2,3,5,7,11,13,17]

We can simulate the revealing process using a queue of indices to find the order the indices will be revealed. We do this by removing the front card from the queue and then moving the next index in the queue to the back. A deque could alternatively be used to simulate this process, but we have chosen to use a queue since we only need to remove cards from the front and add cards to the back.

From the sorted order, we can place each card at the correct index to get the desired output:

```
Put card 2 at index 0
Put card 3 at index 2
Put card 5 at index 4
Put card 7 at index 6
Put card 11 at index 3
Put card 13 at index 1
Put card 17 at index 5
```

We can add cards to the `result` as we simulate the revealing process with the queue. Each time we remove an index from the queue to reveal a card, we add the next card from the `deck` to the `result` at that index.

#### Algorithm

1. Initialize `N` to the length of the `deck`.

2. Create a queue to store the indices of the cards, and add the indices `0` to `N` to the queue.

3. Sort the `deck`.

4. Initialize an array `result` of size `N` to store the answer.

5. Loop through the cards, placing each one in the correct spot in `result`:

    - Set `result` at the front index in the queue to `deck[i]`.
    - Take the next index in the queue and move it to the back of the queue.

6. Return `result`.

The algorithm is visualized below:

!?!../Documents/950/950_slideshow1.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/3txxSx5J/shared" frameBorder="0" width="100%" height="500" name="3txxSx5J"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `deck`.

* Time complexity: $O(n \log n)$

    Sorting the `deck` takes $O(n \log n)$.

    It takes $O(n)$ time to build the queue. Then, it takes $O(n)$ time to add the cards to the result array in the correct order. 

    The time used for sorting is the dominating term, so the overall time complexity is $O(n \log n)$


* Space complexity: $O(n)$

    We use a queue of size $n$, so the space complexity is $O(n)$.

    Some extra space is used when we sort the `deck` in place. The space complexity of the sorting algorithms depends on the programming language.

    - In Python, the `sort` method sorts a list using the Timesort algorithm which is a combination of Merge Sort and Insertion Sort and has $O(n)$ additional space.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O(\log n )$.
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O(\log n )$ for sorting two arrays.

    As the dominating term is $O(n)$, the overall space complexity is $O(n)$.

---