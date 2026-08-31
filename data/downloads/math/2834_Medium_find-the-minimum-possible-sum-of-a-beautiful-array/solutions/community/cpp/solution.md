# O(1) || 2 lines code || understandable 100%

**Author:** harsh_0412
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3965161/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3965161/)

---

# Intuition
we have to minimum sum of array having length n in which arr[i] + arr[j] != target for distinct i and j
this is similar to 
https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/
u can try this 

# Approach
as we have to find minimum sum so we take minimum element as much as possible let n = 8, target = 6;
1 + 5 = 6
2 + 4 = 6 
3 + 3 = 6
so we can take sum of first target/2 values 
after that we have to take (n - target/2) elements from target  
like 
6 7 8 9 10
so our array will be  [ 1, 2, 3, 6, 7, 8, 9, 10]
sum = 1 + 2 + 3 + 6 + 7 + 8 + 9 + 10
sum = 1 + 2 + 3 + 6 + ( 6 + 1) + ( 6 + 2) + ( 6 + 3) + ( 6 + 4)
sum = 1 + 2 + 3 + 6 * 5 + 1 + 2 + 3 + 4
sum = ( sum of first half numbers ) + target*( remaining numbers ) + ( sum of first ( remaining numbers -1))

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    long long minimumPossibleSum(int n, int target) {
        int half = target/2;
        if( n <= half) return n*1LL*(n + 1)/2 ;
        return half*1LL*(half + 1)/2 + ( n - half )* 1LL* target +  ( n - half)*1LL* ( n - half - 1)/2;
    }
};
```
# if u understand  then upvote