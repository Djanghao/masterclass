# Official Solution

**Link:** [https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solution/](https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations/solution/)

---

### Approach: Bitwise Operations + Preprocessing + Enumeration

#### Intuition

From the given problem, we know that we can modify at most one character at any position. Without making any modifications, we can easily determine the number of splits and the corresponding intervals of each split by traversing the string once.

Now, suppose we modify the character at position $i$. It is easy to see that this character must belong to a segment where no modification has been made. Let this segment be the $t$-th segment identified during the traversal.

Since the string splitting in the problem setup is performed from start to end, all splits up to and including the $(t - 1)$-th segment are already fixed. Modifying the character at position $i$ does not affect any of those splits.

Furthermore, when no modification is made, splitting the string from start to end yields the same number of segments as splitting it from end to start. Therefore, from the perspective of traversing from end to start, modifying the character at position $i$ does not affect the splits from segment $t + 1$ onward either.

Thus, the original string can be conceptually divided as follows. Taking position $i$ as the boundary:

* For the **left half** (positions $0$ to $i - 1$), we split the substring from the beginning to the end. The last split obtained in this half is called the **left adjacent split** of position $i$, abbreviated as the **left split**. The portion before this split is called the **prefix split**.
* For the **right half** (positions $i + 1$ to $n - 1$), we split the substring from the end to the beginning. The last split obtained here is called the **right adjacent split** of position $i$, abbreviated as the **right split**, and the portion after it is called the **suffix split**.

For the modified character at position $i$, we only need to consider its effect on the **left split** and **right split**, which leads to three possible cases:

1. Even if the character at position $i$ is modified, the total number of distinct characters within the **left split**, **right split**, and the $i$-th character does not exceed $k$. When these three parts are merged into one split, they contribute `1` to the answer.
2. The number of distinct characters in both the **left split** and the **right split** is exactly $k$, and together they contain at most $25$ distinct characters. After changing the $i$-th character to one not present in either split, the **left split**, **right split**, and the $i$-th character can form three separate splits, contributing `3` to the answer.
3. All other cases contribute `2` to the answer.

Therefore, we need to compute the information for the **left split** and **right split** corresponding to each position $i$, including:

* the number of splits contained in the **prefix split** and **suffix split**,
* the character mask of the **left split** and **right split**, and
* the number of distinct characters within the **left split** and **right split**.

To represent character masks efficiently, we use **bitwise operations**. Arrays `left` and `right` store the information for the **left split** and **right split**, respectively. Specifically:

* `left[i]` and `right[i]` represent the split information for position `i`,
* `left[i][0]` and `right[i][0]` represent the number of splits in the **prefix** and **suffix** splits,
* `left[i][1]` and `right[i][1]` represent the character masks of the **left split** and **right split**, and
* `left[i][2]` and `right[i][2]` represent the number of distinct characters in the **left split** and **right split**, respectively.

With the above information, we just need to enumerate the modified characters and then take the maximum division number.

#### Implementation

<iframe src="https://leetcode.com/playground/2BAnhmxn/shared" frameBorder="0" width="100%" height="500" name="2BAnhmxn"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and let $M = 26$.

- Time complexity: $O(M \times n)$.

- Space complexity: $O(n)$.
  
  We use arrays `left` and `right` to represent information for the **left** and **right** partitions, respectively, both of which have sizes proportional to $n$.

---