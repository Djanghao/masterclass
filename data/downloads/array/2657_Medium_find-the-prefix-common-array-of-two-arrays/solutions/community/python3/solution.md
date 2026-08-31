# ✔💯 DAY 394 | brute->Optimal one pass| 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 💫🆙🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 50
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3466857/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3466857/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
We need to find an array C of the same length such that C[i] is the number of elements that are common to both A and B in the prefix of length i+1.

We can start by creating two hash maps indexStoreOfA and indexStoreOfB to store the indices of each element in A and B, respectively.

We then iterate over the prefix of A and count the number of elements that are common to both A and B up to that point. We do this by checking if the index of each element in A is less than or equal to i and the index of the same element in B is also less than or equal to i.

We store the count in an array answer and return it as the answer.

Since we iterate over the prefix of A and perform constant time operations for each element, the time complexity of this solution is O(n^2), where n is the length of the arrays A and B.


# Code
```java []
public int[]ThePrefixCommonArray(int[] A, int[] B) {
    int length = A.length;
    // Create two hash maps to store the indices of each element in A and B
    HashMap<Integer, Integer> indexStoreOfA = new HashMap<>();
    HashMap<Integer, Integer> indexStoreOfB = new HashMap<>();
    // Populate the hash maps with the indices of each element in A and B
    for (int i = 0; i < length; i++) {
        indexStoreOfA.put(A[i], i);
        indexStoreOfB.put(B[i], i);
    }
    // Create an array to store the prefix common array
    int[] answer = new int[length];
    // Iterate over each element in A
    for (int i = 0; i < length; i++) {
        int prefixCounter = 0;
        // Iterate over each element in the prefix of A up to i
        for (int j = 0; j <= i; j++) {
            // If the element at index j in A is also in B and its index in both A and B is less than or equal to i,
            // increment the prefix counter
            if (indexStoreOfA.get(A[j]) <= i && indexStoreOfB.get(A[j]) <= i) prefixCounter++;
        }
        // Store the prefix counter in the answer array
        answer[i] = prefixCounter;
    }
    // Return the prefix common array
    return answer;
}
```
```python []
class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        n = len(A)
        m1, m2 = {}, {}
        for i in range(n):
            m1[A[i]] = i
            m2[B[i]] = i
        c = [0] * n
        for i in range(n):
            cnt = 0
            for j in range(i + 1):
                if m1[A[j]] <= i and m2[A[j]] <= i:
                    cnt += 1
            c[i] = cnt
        return c
```
```c++ []
class Solution {
public    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
        int n = A.size();
        unordered_map<int, int> m1, m2;
        for(int i = 0; i < n; i++) {
            m1[A[i]] = i;
            m2[B[i]] = i;
        }
        vector<int> c(n);
        for(int i = 0; i < n; i++) {
            int cnt = 0;
            for(int j = 0; j <= i; j++) {
                if(m1[A[j]] <= i && m2[A[j]] <= i) {
                    cnt++;
                }
            }
            c[i] = cnt;
        }
        return c;
    }
};
```


# Complexity
TC: The time complexity of the code is O(n^2), where n is the length of the input arrays A and B. This is because the code iterates over each element in A and then iterates over each element in the prefix of A up to i, resulting in a nested loop. The time complexity of the nested loop is O(n^2) because the maximum number of iterations is n(n+1)/2. Therefore, the overall time complexity of the code is O(n^2).
SC: The space complexity of the code is O(n), where n is the length of the input


# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Optimal approach using frequency array 
We are given two integer permutations A and B of length n, and we need to find the prefix common array of A and B.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

To find the prefix common array, we can iterate over both arrays A and B simultaneously and keep track of the frequency of each integer in both arrays using an array cnt.

For each element in A and B, we increment the corresponding element in cnt and check if its frequency becomes 2. If the frequency becomes 2, it means that the element is present in both A and B at or before the current index i.

We update the corresponding element in the result array res by adding 1 if the frequency of the element in A or B becomes 2, otherwise we add 0.

Finally, we compute the prefix sum of the res array to get the prefix common array of A and B.

The time complexity of this approach is O(n), where n is the length of the input arrays A and B.

```java []
public int[] findThePrefixCommonArray(int[] A, int[] B) {
    int n = A.length, res[] = new int[n],cnt[] = new int[51];
    for (int i = 0; i < n; ++i) {
        res[i] = (++cnt[A[i]] == 2 ? 1 : 0) + (++cnt[B[i]] == 2 ? 1 : 0);
        if( i > 0)  res[i] += res[i - 1];
    }
    return res;
}
```
```c++ []
 vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
    int n = A.size();
    vector<int> res(n), cnt(51);
    for (int i = 0; i < n; ++i) {
        res[i] = (++cnt[A[i]] == 2 ? 1 : 0) + (++cnt[B[i]] == 2 ? 1 : 0);
        if( i > 0)  res[i] += res[i - 1];
    }
    return res;
}
```
```python []
def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
    n = len(A)
    res = [0] * n
    cnt = [0] * 51
    for i in range(n):
        res[i] = ((cnt[A[i]] := cnt[A[i]] + 1) == 2) + ((cnt[B[i]] := cnt[B[i]] + 1) == 2)
        if i > 0:
            res[i] += res[i - 1]
    return res
```
# TC = o(n)
# SC = O(51)==>o(1)

![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D\uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/3466857/day-394-brute-optimal-100-0ms-python-java-c-explained-approach/
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A