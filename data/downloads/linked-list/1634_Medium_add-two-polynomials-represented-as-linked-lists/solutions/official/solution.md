# Official Solution

**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solution/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solution/)

---

[TOC]

## Solution

---

### Overview

We are given two linked lists, `poly1` and `poly2`, each representing a polynomial expression. Each term in a polynomial expression comprises a `coefficient` and a `power`. We must return a linked list representing the sum of `poly1` and `poly2` in standard form, where the terms are sorted in descending order based on its `power` field.

> For example, the polynomial $5x^3 + 4x - 7$ would be represented as: `[[5,3],[4,1],[-7,0]]`.

### Approach 1: Map

### Intuition

For this problem, we need to:

1. Identify terms from `poly1` and `poly2` with the same power to combine them in the sum. We must also handle terms with unique powers by adding them directly to the sum.
2. Ensure the terms in the sum are ordered in standard form.

To handle the first task, we can use a map to store the (power, coefficient) pairs of our sum. We'll iterate through all the nodes in `poly1` and `poly2`. If a node with a power `p` already exists in our map, we will add the current node's `coefficient` to the existing coefficient value in the map. This combines all terms with the same power. We'll also remove pairs where the combined coefficient is $0$, as these terms cancel out.

For the second point, we can use specifically a tree map, a special kind of map data structure that keeps the keys sorted. By using a custom comparator, we can have the keys sorted in descending order of power. Once the map is populated, we can iterate through the sorted keys and append each (power, coefficient) pair to our final linked list sum.

### Algorithm

1. Initialize a map `map` with a custom comparator to make the keys sorted in decreasing order. This will hold the terms of the sum of `poly1` and `poly2`. 
2. Initialize a pointer `sum` to an empty dummy node. This will point to the sum of `poly1` and `poly2`.
3. Initialize a pointer `current` to `sum` to maintain access to the last node of `sum`.
4. Iterate through each node `n` of `poly1` and `poly2`:
    * If a pair with key `n.power` doesn't already exist in `map`, then we can add `n` as a new entry: (`n.power`, `n.coefficient`).
    * If a pair with key `n.power` already exists in `map`, then we can append `n.coefficient` to the existing pair's value to combined terms: (`n.power`, `existingCoefficient + n.coefficient`).
        * If the combined coefficient value is $0$, then the pair can be removed.
5. Iterate through the sorted keys of `map`:
    * For each key `k`, append a new `PolyNode` with `k` power and `map.get(k)` coefficient to `sum`. We can use the `current` pointer to directly append to the end of the list. Update `current` to the newly appended node.
6. Return `sum.next`, pointing to the start of the sum of `poly1` and `poly2`.

### Implementation

<iframe src="https://leetcode.com/playground/XegB3KzY/shared" frameBorder="0" width="100%" height="500" name="XegB3KzY"></iframe>

### Complexity Analysis 

Let $M$ be the size of `poly1` and $N$ be the size of `poly2`.

* Time Complexity: $O((M+N) \cdot \log(M+N))$

    An insertion/retrieval in a sorted map takes $O(\log n)$ time, where $n$ is the number of elements in the map. Because we do a total of $O(M + N)$ insertions and retrievals, our total time complexity is $O((M+N) \cdot \log(M+N))$

* Space Complexity: $O(M + N)$

    There is extra space needed for `map` as well as the final `sum` linked list. The size of each in the worst case is $O(M + N)$

### Approach 2: Two Pointer

### Intuition

In the previous approach, we used a tree map's sorted keys to ensure `sum`'s terms are in the correct order. This method involved a costly $O(\log n)$ operation for each insertion and retrieval. In this approach, we achieve the correct order without maintaining a sorted list.

The key observation is that `poly1` and `poly2` are each already sorted. We can use two pointers, one for each linked list, to track the terms that need to be combined and added to our final answer. These pointers will ensure that we process the terms in the correct descending order, so our result, `sum`, is in standard form.

We can manage our pointers, `p1` and `p2`, with the following logic:

- `p1` points to `poly1`, and `p2` points to `poly2`.
- If the `power` of `p1`'s term and `p2`'s term are equal, we add a new term that combines them to `sum`. We then advance both `p1` and `p2`.
- If `p1`'s term has a larger `power` than `p2`'s term, we add `p1`'s term directly to `sum`. This is because we know `p1`'s term has a unique `power` that cannot be combined with a term in `poly2`. We then advance `p1` to the next term in `poly1`, which will have a smaller `power`. This allows `p2` to possibly match with a term in `poly1` in a later step.
- Similarly, if `p2`'s term has a larger `power` than `p1`'s term, we add `p2`'s term to `sum` and advance `p2`.

With this two-pointer approach, we can efficiently scan each linked list once, ensuring that `sum` is in the correct standard form.

### Algorithm 

1. Initialize pointers `p1` and `p2` to traverse `poly1` and `poly2`, respectively.
2. Initialize `sum` to an empty `PolyNode`, representing an initial dummy node.
3. Initialize `current` to `sum`, a pointer that will keep track of the last node of `sum` to make appending easier.
4. While we have more nodes to process for both linked lists:
    * If the powers of the current nodes in both lists are equal:
        * If their coefficients don't cancel out:
            * Append a new node with the summed coefficients and the same power.
            * Update `current` to point to this new node.
        * Update both `p1` and `p2`.
    * If `p1`'s power is greater:
        * Append `p1` to the end of `sum`.
        * Update `p1` and `current`.
    * Else:
        * Append `p2` to the end of `sum`.
        * Update `p2` and `current`.
5. Append any remaining nodes that have not been seen yet:
    * If `p1 == null`, then append `p2` to add the remaining terms of `poly2`.
    * Else, append `p1` to add the remaining terms of `poly1`.
6. Return `sum.next` since `sum` points to the initial dummy node.

### Implementation

<iframe src="https://leetcode.com/playground/5L8Q9UGL/shared" frameBorder="0" width="100%" height="500" name="5L8Q9UGL"></iframe>

### Complexity Analysis

Let $M$ be the size of `poly1` and $N$ be the size of `poly2`.

* Time Complexity: $O(M + N)$

    In the worst case, each linked list is entirely traversed, which takes $O(M + N)$ iterations. Thus, the time complexity is $O(M + N)$.

* Space Complexity: $O(\min(M, N))$

    A new node is created for `sum` whenever terms from `poly1` and `poly2` have the same power and need to be combined. In other cases, we directly modify the input nodes, which require no extra space. Thus, the worst case is if all terms from `poly1` have a corresponding term in `poly2` with the same power (and vice-versa). In this case, the extra space needed is $O(\min(M, N))$.