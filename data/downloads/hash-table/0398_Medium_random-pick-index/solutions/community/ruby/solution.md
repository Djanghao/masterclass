# Very easy Ruby Solution

**Author:** kenhufford
**Votes:** 1
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/604057/](https://leetcode.com/problems/random-pick-index/solutions/604057/)

---

1.  Use a hash to store indices for each number
2.  Ruby makes it super easy so you can just use .sample to return a random ele from an array

```
class Solution
    
    def initialize(nums)
        @hash = {}
        nums.each.with_index do |num,i|
            if @hash[num]
                @hash[num] << i
            else
                @hash[num] = [i]
            end
        end
    end

    def pick(target)
        array = @hash[target]
        array.sample
    end

end
```