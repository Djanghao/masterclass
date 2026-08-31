# ✅ Python || 🔥2 Approaches🔥 || Sorting & Counting || Summary with Comparison🔥🔥🔥

**Author:** Kashyap_Gohil
**Votes:** 217
**Link:** [https://leetcode.com/problems/h-index/solutions/4928640/](https://leetcode.com/problems/h-index/solutions/4928640/)

---

# \uD83D\uDD3C IF YOU FIND THIS POST HELPFUL PLEASE UPVOTE \uD83D\uDC4D

# Approach: 1  Sorting and Iteration


- **Sorting:** Sorts the `citations` list in ascending order.
- **Iterative Check:** Iterates through the sorted list.
For each citation `v` at index `i`:
    - If `n - i `(number of articles with at least `n - i` citations) is less than or equal to `v` itself (the current citation count), it means the h-index is `n - i`.
    - Returns `n - i` as the `h-index`.
- **Default Return:** If no valid `h-index` is found, returns `0`.

# Code : 1
```
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        citations.sort()

        for i,v in enumerate(citations):
            if n - i <= v:
                return n - i
        return 0
```

# Approach: 2 Counting Frequency and Backward Iteration


- **Frequency Array:** Creates a temporary array `temp` of size `n + 1` to store citation frequencies.
- **Counting Citations:** Iterates through the `citations` list:
    - If a citation `v` is greater than `n`, adds it to the highest frequency bucket (`temp[n]`).
    - Otherwise, increments the count in the corresponding bucket (`temp`[v]).
- **Calculating h-index:** Iterates backward through the `temp` array:
    - Accumulates the `total` number of citations up to each index `i`.
    - If the total count (total) is greater than or equal to `i` itself, it means `i` is the `h-index`.
    - Returns `i` as the `h-index`.
# Code : 2
```
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        temp = [0 for _ in range(n + 1)]

        for i,v in enumerate(citations):
            if v > n :
                temp[n] += 1
            else:
                temp[v] += 1
        
        total = 0
        for i in range(n, -1, -1):
            total += temp[i]
            if total >= i:
                return i
```
# Comparison Table:

Feature	| Code 1	| Code 2
---------|--------|----
Approach	| Sorting and iteration	Frequency | counting and backward iteration
Time Complexity	| O(n log n) due to sorting	| O(n)
Space Complexity	| O(1)	| O(n) for temp array
Advantages	| Simpler to understand	| Linear time complexity
Disadvantages	| Slower for large inputs	| Requires extra space for temp array

### \uD83D\uDD3C If you found my solution and information helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions. \uD83D\uDD3C

![upvote.jpg](./images/0.jpeg)



