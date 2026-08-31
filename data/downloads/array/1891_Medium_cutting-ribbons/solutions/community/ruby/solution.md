# Ruby - Binary Search

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/1794119/](https://leetcode.com/problems/cutting-ribbons/solutions/1794119/)

---

```
def max_length(ribbons, k)
    return 0 if ribbons.sum<k
    l, r = 1, ribbons.sum
    res = 0
    while l<=r
        mid, sum = (l+r)/2, 0
        ribbons.each do |r|
            sum+=(r/mid)
        end
        if sum>=k
            res=mid
            l=mid+1
        else
            r=mid-1
        end
    end
    res
end
```