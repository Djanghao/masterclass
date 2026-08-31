# Simple Ruby Solution

**Author:** andrewcastro5
**Votes:** 6
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/884982/](https://leetcode.com/problems/shuffle-the-array/solutions/884982/)

---

```
def shuffle(nums, n)
    result = []
    
    n.times do |i|
       result << nums[i]
        result << nums[i+n]
    end
    
    result
end
```