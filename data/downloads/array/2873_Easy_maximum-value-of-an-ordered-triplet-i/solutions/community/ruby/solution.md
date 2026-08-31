# Ruby 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/5073067/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/5073067/)

---

Two loops for i and j
if nums[i]-nums[j] >0 only we calculate max of slice nums[j+1..]
because if negative (nums[i] - nums[j]) * nums[k] is negative too.


# Code
```
def maximum_triplet_value(nums)
    mx = 0
    l = nums.size
    (l-2).times{|i|
        (i+1...l-1).each{ |j|
            mx = [mx,(nums[i]-nums[j])*nums[j+1..].max].max if nums[i]-nums[j]>0
        }
    }
    mx
end
```