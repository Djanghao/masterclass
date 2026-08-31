# [C++] Fenwick Tree Solution w/ Illustration, Step by Step

**Author:** user0463au
**Votes:** 23
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/3401282/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/3401282/)

---

This solution is inspired by @aravind-kumar's [post](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/575071/python-c-nlogn-short-fenwick-tree-with-detailed-explanations/) and the question asked by @JummyEgg [here](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/575071/python-c-nlogn-short-fenwick-tree-with-detailed-explanations/comments/502789).

## Intuition
Instead of deleting & inserting element in`P = [1,2,3,...,m]`every step, **prepare an extra space for insertion**. And the maximum number of elements to be inserted is already given by the size of`query`array.

Imagine there's a`virtualP`array which is the original`P`array extened by the length of`query`array, i.e.,`virtualP.size() = P.size() + query.size() = m + n`
The`virtualP`array can be separate as the former(new insertion, size n) part and the later(orignal, size m) part.

In each step, find out the postion of target value given by`query`and simply move it from its original position to the former part of`virtualP`array.

> Notice that`virtualP`array virtually "grows" from size m to size m + n, so the new position of the target value shall always be in front of the first element of current`virtualP`.

Here, a hash map can help memorizing the index of current position of every value in the`P`array, and since the value is already given as`[1, 2, ..., m]`, index can be easily used as key(= value). So declaring an array with size (m + 1) would be enough.

Moreover, a binary indexed tree is introduced to optimized the time of index calculation. Index of array can be regared as the total number of elements before this position.
Ex: for index2, there are two elements before position`[2]`, that is`[0]`and`[1]`.
And for ease, define`querySum(tree, x)`= total elements in`virtualP`array before position`[x + 1]`

## Approach
1. Initialize the position of`P = [1,2,3,...,m]`as`[n + 1, n + 2, n + 3,..., n + m]`in a hash table and build the binary indexed tree for`virtualP`array, i.e., putting elements of`P`into the latter part of`virtualP`.
> Notice that the`virtualP`array is just in imagination, keep it in mind for better understanding.

Let`q`be element given by`query`, in each process

2. Look up current position of`q`stored in`hash`and calculate the total number of elements before this position.
3. Virtual delete`q`in`virtualP`array, minus 1 element after current position of`q`(included) in`tree`
4. Virtual insert`q`in front of`virtualP`array, plus 1 element after position`n`(included) in`tree`
5. Update`hash[q]`, since step3 put`q`in front of`virtualP`array
6. Decrease`n`by one, because there is one insertion performed, or can be thought as one position taken in the former part of`virtualP`array

Take example1 for demo,`P = [1,2,...,5]`, m = 5,`queries = [3,1,2,1]`, n = 4
After initialization, the extended array`virtualP`and`hash`shall be:
```virtualP []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   |   | 1 | 2 | 3 | 4 | 5 |
+---+---+---+---+---+---+---+---+---+---+
```
```hash []
+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 
+---+---+---+---+---+---+
|   | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+
```
```tree []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
| 0 | 0 | 0 | 0 | 0 | 1 | 2 | 1 | 4 | 1 |
+---+---+---+---+---+---+---+---+---+---+
```
After process q = 3:
```virtualP []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
|   |   |   |   | 3 | 1 | 2 |   | 4 | 5 |
+---+---+---+---+---+---+---+---+---+---+
```
```hash []
+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 
+---+---+---+---+---+---+
|   | 5 | 6 | 4 | 8 | 9 |
+---+---+---+---+---+---+
```
```tree []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
| 0 | 0 | 0 | 0 | 1 | 1 | 2 | 0 | 4 | 1 |
+---+---+---+---+---+---+---+---+---+---+
```
After process q = 1:
```virtualP []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
|   |   |   | 1 | 3 |   | 2 |   | 4 | 5 |
+---+---+---+---+---+---+---+---+---+---+
```
```hash []
+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 
+---+---+---+---+---+---+
|   | 3 | 6 | 4 | 8 | 9 |
+---+---+---+---+---+---+
```
```tree []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
| 0 | 0 | 0 | 1 | 2 | 0 | 1 | 0 | 4 | 1 |
+---+---+---+---+---+---+---+---+---+---+
```
After process q = 2:
```virtualP []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
|   |   | 2 | 1 | 3 |   |   |   | 4 | 5 |
+---+---+---+---+---+---+---+---+---+---+
```
```hash []
+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 
+---+---+---+---+---+---+
|   | 3 | 2 | 4 | 8 | 9 |
+---+---+---+---+---+---+
```
```tree []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
| 0 | 0 | 1 | 1 | 3 | 0 | 0 | 0 | 4 | 1 |
+---+---+---+---+---+---+---+---+---+---+
```
After process q = 1:
```virtualP []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
|   | 1 | 2 |   | 3 |   |   |   | 4 | 5 |
+---+---+---+---+---+---+---+---+---+---+
```
```hash []
+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 
+---+---+---+---+---+---+
|   | 1 | 2 | 4 | 8 | 9 |
+---+---+---+---+---+---+
```
```tree []
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 0 | 3 | 0 | 0 | 0 | 4 | 1 |
+---+---+---+---+---+---+---+---+---+---+
```
## Code
```
class Solution {
private:
    int querySum(vector<int> &BIT, int x) {
        int sum = 0;
        for (; x > 0; x -= (x & -x))
            sum += BIT[x];
        return sum;
    }
    void update(vector<int> &BIT, int x, const int val) {
        for (; x < BIT.size(); x += (x & -x))
            BIT[x] += val;
    }
public:
    vector<int> processQueries(vector<int>& query, int m) {
        if (m == 1)
            return {0};
        int n = query.size();
        vector<int> ans, tree(m + n + 1, 0), hash(m + 1);
        for (int i = 1; i <= m; ++i) {
            hash[i] = n + i;
            update(tree, n + i, 1);//build binary indexed tree
        }
        for (auto q : query) {
            ans.push_back(querySum(tree, hash[q] - 1));
            update(tree, hash[q], -1);//decrease 1 element to index=hash[q] and after
            update(tree, n, 1);//increase 1 element to index=n and after
            hash[q] = n--;//update hash[q]
        }
        return ans;
    }
};
```

## Complexity

- Space complexity: $$O(m + n)$$, where n is the size of query array
- Time complexity: $$O(mlogn)$$

If there's any mistake or suggestion, please comment. I spent hours struggling to understand what a Fenwick tree is and how it can be interpreted in this problem. And if you find this post helpful, please upvote, thanks!