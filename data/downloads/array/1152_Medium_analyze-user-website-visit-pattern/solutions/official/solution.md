# Official Solution

**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solution/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solution/)

---

### Approach: Brute Force

This question is more inclined toward engineering issues, mainly involving data processing.

#### Intuition

The requirement is for a list of **3-length page paths**. The most intuitive approach is to find all paths of length 3, count the number of visitors for each path, and compare them to determine the answer.

There are several details in the problem statement that we need to pay attention to:
1. **At least accessed in some order once**. This phrase tells us that we need to sort by time.
2. **The user may not access these three paths continuously**. For example, if a user visited `a, b, c, d` at four time points `1, 2, 3, 4`, then `a, c, d` is also a valid path.
3. The requirement is for the path accessed by the **most users**, so even if a single user accesses it many times, it is only counted once.

#### Algorithm

1. First, we need to bind the three elements: `username`, `timestamp`, and `website`. The most direct method is to use a structure. We associate the three arrays using an array of structures.
   ```C++
   struct Node { name, timestamp, website };
   ```

2. Sort the structure array by `timestamp` to ensure the access order of each user.
3. Use a hash table to store each user’s visited websites, with the key being the username `name`, and the value being an array of strings. Since the array is already sorted, the order can be used directly.
4. Perform a triple traversal of each user’s `website` list to obtain all access paths. Use another hash table to store all access paths, with the values being the number of distinct users.
5. Finally, traverse the hash table to obtain the path with the most user visits. In case of ties, choose the lexicographically smallest one.

#### Implementation

<iframe src="https://leetcode.com/playground/C2KgMLbw/shared" frameBorder="0" width="100%" height="500" name="C2KgMLbw"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `username` array.

- Time complexity:
  
    Sorting all access records by timestamp takes ( O(n \log n) ). Constructing the structure array and grouping visits by user both take ( O(n) ).

    Suppose there are ( k ) distinct users, and each user on average visits ( n/k ) websites.
    For a single user, generating all possible 3-website sequences requires ( O((n/k)^3) ) time.
    Summing across all users gives a total of
    [
    k \times O\left((n/k)^3\right) = O\left(\frac{n^3}{k^2}\right)
    ]
    In the **worst case**, when all visits belong to a single user (( k = 1 )), this becomes ( O(n^3) ).

    However, because **C++** uses balanced binary search trees (`std::map` and `std::set`) for storing routes and temporary paths, each insertion and lookup operation adds a ( \log n ) factor.
    Therefore, the overall time complexity becomes
    [
    O(n^3 \log n)
    ]
    In contrast, if hash-based data structures are used (as in Go, Java, or Python), the average time complexity would remain ( O(n^3) ).

- Space complexity: $O(n^{3})$.

    The space complexity of insertion sort is $O(1)$. The structure array and hash table storing user web pages each require $O(n)$. The maximum number of unique paths is $n^3$, so the hash table recording paths requires $O(n^3)$. Therefore, the overall space complexity is $O(n^3)$.

---