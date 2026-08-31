# Greedy Approach with explanation

**Author:** anupsingh556
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5133404/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5133404/)

---

# Intuition
- We can greedily pick child with maximum happiness
- After `n` pass happiness of childrens decreases by `n` so if we are picking children at xth time his net happiness will be $$h[x]-x$$
- We can sort the array and can pick all children who will have positive net happiness 
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Sort array in descending order
- Start picking children from 0th index and add its net happiness in result
- break the iteration if net happiness if false or we have reached our quota of n students
# Complexity
- Time complexity: O(nlogn)
    - O(nlogn) for sorting array
    - O(n) for linear traversal and getting result
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Constant Space no extra space needed
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c++ []
class Solution {
public:
    long long maximumHappinessSum(vector<int>& h, int k) {
        sort(h.begin(), h.end(), greater<int>());
        int i=0;
        long long res = 0l;
        while(i<h.size() && i<k) {
            if(h[i]<=i)break;
            res = res + h[i] - i;
            i++;
        }
        return res;
    }
};
```
```go []
func maximumHappinessSum(h []int, k int) int64 {
    sort.Slice(h, func(i, j int) bool {
        return h[i] > h[j]
    })

    var res int64 = 0
    for i := 0; i < len(h) && i < k; i++ {
        if h[i] <= i {
            break
        }
        res += int64(h[i] - i)
    }
    return res 
}
```
```python []
class Solution(object):
    def maximumHappinessSum(self, h, k):
        h.sort(reverse=True)
        res = 0
        for i in range(min(len(h), k)):
            if h[i] <= i:
                break
            res += h[i] - i
        return res
        
```
