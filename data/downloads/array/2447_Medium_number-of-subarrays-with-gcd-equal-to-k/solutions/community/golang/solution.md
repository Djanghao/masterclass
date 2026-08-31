# Segment Tree + Binary Search, O(N * log^2(N)) time complexity

**Author:** lukericharddick
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2739522/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2739522/)

---

For each subarray starting from index `i`, we want to know the first index `idx1` where `gcd(nums[i: idx1])` is equal to k (both inclusive).
And if such an idx1 exists, we're going to find the closest index `idx2`, where `gcd(nums[i: idx2])` is **less than** k.
Every subarray in between `nums[i: idx1]` and `nums[i: idx2-1]` has the GCD equals to k, so we can just add `idx2 - idx1` to result.

With the **associative** property of GCD, we can build a **segment tree** to speed up the calculation of ranged GCD operation.

```
func subarrayGCD(nums []int, k int) int {
    n := len(nums)
    
    tree := initSegmentTree(n)
    for i := 0 ; i < n ; i++ {
        tree.Update(i, nums[i])
    }
    
    res := 0
    
    for i := 0 ; i < n ; i++ {
        idx1 := sort.Search(n-i, func(x int) bool {
            return tree.GcdRange(i, i+x) <= k
        })
        
        if idx1 < n - i && tree.GcdRange(i, i + idx1) == k {
            idx2 := sort.Search(n-i, func(x int) bool {
                return tree.GcdRange(i, i+x) < k
            })
            
            res += idx2 - idx1
        }
    }
    
    return res
}

func gcd(a, b int) int {
    if b == 0 {
        return a
    }
    
    return gcd(b, a % b)
}

type SegmentTree struct {
    size  int
    nums  []int
}

func initSegmentTree(size int) *SegmentTree {
    return &SegmentTree{
        size:  size,
        nums:  make([]int, size*2),
    }
}

func (this *SegmentTree) Update(idx int, val int) {
    idx += this.size
    this.nums[idx] = val
    for i := idx; i > 1; i >>= 1 {
        this.nums[i>>1] = gcd(this.nums[i], this.nums[i^1])
    }
}

func (this *SegmentTree) GcdRange(l, r int) int {
    res := -1
    l += this.size
    r += this.size

    for l <= r {
        if l&1 > 0 {
            if res == -1 {
                res = this.nums[l]
            } else {
                res = gcd(res, this.nums[l])
            }
            l++
        }
        if r&1 == 0 {
            if res == -1 {
                res = this.nums[r]
            } else {
                res = gcd(res, this.nums[r])
            }
            r--
        }
        l >>= 1
        r >>= 1
    }
    return res
}
```

**Time Complexity**
We have to iterate through the array once, and we're doing binary search on range operation of a segment tree. The time complexity is going to be O(N * log(N) * log(N))

**Space Complexity**
Segment tree need 2 * N space, so the memory complexity is O(N)