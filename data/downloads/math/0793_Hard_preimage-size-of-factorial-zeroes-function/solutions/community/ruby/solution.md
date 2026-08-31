# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/5874511/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/5874511/)

---


```
# @param {Integer} k
# @return {Integer}
def preimage_size_fzf(k)
    binary_search(k) - binary_search(k - 1)
end

def binary_search(k)
    arr = (0..5*(k + 1))
    # puts "SEARCHING #{arr} INCLUSIVE"
    
    res = arr.bsearch do |m|
        # print m
        count = 0
        
        while m >= 5
            m /= 5
            count += m
        end
        
        # print "     count: #{count}"
        # puts count > k ? " (GREATER THAN K)" : ""
        count > k
    end
    
    # print "RESULT: #{res}\
-------------------------\
"
    res
end
```