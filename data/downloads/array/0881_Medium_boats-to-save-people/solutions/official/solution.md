# Official Solution

**Link:** [https://leetcode.com/problems/boats-to-save-people/solution/](https://leetcode.com/problems/boats-to-save-people/solution/)

---

[TOC]

## Solution
---
### Approach 1: Greedy (Two Pointer)

**Intuition**

If the heaviest person can share a boat with the lightest person, then do so.  Otherwise, the heaviest person can't pair with anyone, so they get their own boat.

The reason this works is because if the lightest person can pair with anyone, they might as well pair with the heaviest person.

**Algorithm**

Let `people[i]` to the currently lightest person, and `people[j]` to the heaviest.

Then, as described above, if the heaviest person can share a boat with the lightest person (if `people[j] + people[i] <= limit`) then do so; otherwise, the heaviest person sits in their own boat.

<iframe src="https://leetcode.com/playground/oVZHckrR/shared" frameBorder="0" width="100%" height="344" name="oVZHckrR"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log N)$$, where $$N$$ is the length of `people`.

* Space Complexity:  $$O(\log N)$$.
    - Some extra space is used when we sort `people` in place. The space complexity of the sorting algorithm depends on which sorting algorithm is used; the default algorithm varies from one language to another.
        - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with worst-case space complexity of $$O(\log n)$$.
        - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O(\log n)$$.
        - In python, the `sort` method sorts a list using the Timsort algorithm, which is a combination of Merge Sort and Insertion Sort and uses $$O(n)$$ additional space.


<br />
<br />