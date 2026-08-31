# A solution in Go | With derivation of keys for Map

**Author:** user8272RT
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3996192/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3996192/)

---

# Intuition

We need to count the number of subarrays in `num` which are "Interesting".

The condition to determine an interesting subarray is:
* Let `cnt` be the count of all elements `num[i]` in a subarray, where $$num[i] \\bmod m = k$$. If $$cnt \\bmod m = k$$ , then the subarray in an Interesting array.

The naive solution has a time complexity of $$O(n^3)$$ where we iterate through each subarray, to determine if it is interesting. But this can be reduced to $$O(n)$$ using the cumilative frequency technique from [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

# Approach
* Track cumilative sum of `cnt` for each position in `preSum`
* In order to build an algorithm that runs in linear time. We need to find the number of complements of `preSum` such that 
$$(preSum-compPreSum)\\bmod m = k$$ in $$O(1)$$ 
* Using the above equation, we can figure out a viable set of keys for a frequency map.


# Derivation of keys for frequency map
**Given:** 
$$(preSum\u2212compPreSum)\\bmod m = k$$

**Derivation**
$$=> (preSum\\bmod m-compPreSum\\bmod m)\\bmod m = k$$
$$=> preSum\\bmod m-compPreSum\\bmod m+a*m = k + b*m$$ `a and b are unknown int`
$$=> compPreSum\\bmod m = preSum\\bmod m - k + (a-b)*m$$

We can get rid of unknowns `a` and `b` using this equivalence. 
$$(prefixSum\\bmod m - k + m) \\bmod m = (preSum\\bmod m - k + (a-b) *m)\\bmod m$$

$$=> (compPreSum\\bmod m)\\bmod m = (preSum\\bmod m - k + m)\\bmod m$$
$$=> compPreSum\\bmod m = (preSum\\bmod m - k + m)\\bmod m$$

**Result:**
$$(preSum\\bmod m - k + m)\\bmod m$$ is the complement of $$preSum\\bmod\u200Am$$

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(m)$$

# Code
```
func countInterestingSubarrays(nums []int, modulo int, k int) int64 {
    n, preSum:=len(nums), 0
    var count int64
    hm:=make(map[int]int64)
    for i:=0;i<=n;i++{
        if hm[(modulo+preSum%modulo-k)%modulo]>0{
            count+=int64(hm[(modulo+preSum%modulo-k)%modulo])
        }
        if hm[preSum%modulo]==0{
            hm[preSum%modulo]=1
        }else{
            hm[preSum%modulo]++
        }
        if i<n && nums[i]%modulo==k{
            preSum+=1  
        }
    }
    return count
}
func abs(i int) int{
    if i<0{
        return i*-1
    }
    return i
}
```