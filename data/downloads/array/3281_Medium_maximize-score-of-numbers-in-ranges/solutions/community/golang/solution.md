# Binary Search + Greedy

**Author:** yelleti-18
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5836578/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5836578/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Min max or Max min pattern follows a binary search approach of almost 95%.
Here it's asking for Max (difference) and Min (absolute difference between elements).
# Approach
<!-- Describe your approach to solving the problem. -->
These types of cases Max Min: Try to maximize the answer. First, find the lower value and upper value from either the input array or from constraints.

So maximize the answer if possible, and note that a possible value increase l, so if the midvalue increases, the answer will increase.

Here the main task is to find the logic of helper function. Here we get the minimum value between adjacent elements of array so array sorted in the main function.

So first find the diff between adjacent elements. If the diff is greater than the expected diff value, we dont need to do anything. If we cannot find how much we need to add, if that requirement is more than range d, then return false because we cannot afford it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nlogn)$$

# Code
```golang []
func isPos(md int64,st []int,d int) bool{
        n:=len(st);
        for i:=1;i<n;i++ {
            diff :=int64(st[i]-st[i-1]);
            if diff>=md {
                continue;
            }
            req := md-diff;
            if req>int64(d) {
              return false;
            } 
            st[i]+=int(req);
        }
        return true;
}
func maxPossibleScore(st []int, d int) int {
        l:=int64(0)
        r:=int64(2e9)
        var ans int64
        sort.Ints(st)
        for l<=r {
            mid:=(l+r)/2
            if isPos(mid,append([]int(nil),st...),d) {
                ans = mid
                l = mid+1
            }else{
                r = mid-1
            }
        }
        return int(ans);
}


```