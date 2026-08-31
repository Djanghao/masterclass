# Ruby: change values in place, one pass over indices while moving backward.

**Author:** user9697N
**Votes:** 6
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/851033/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/851033/)

---

##### Leetcode: 1299. Replace Elements with Greatest Element on Right Side.

Because minimum value of an input array is 1 and -1 is a value for modified array when there is no max elements at the right side, it is easy to solve this task in one loop and one "storage" variable that initiated as -1. Just loop the array indexes backward and calculate next maximum based on current value (select maximum value from two values), substituting current value with a current maximum and at the end of an iteration set current maximum equal to the next one.  Change array in place by one pass. 

Ruby code (readable version):
```Ruby
# Leetcode: 1299. Replace Elements with Greatest Element on Right Side.
# https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
# Runtime: 68 ms, faster than 93.44% of Ruby online submissions for Replace Elements with Greatest Element on Right Side.
# Memory Usage: 12.3 MB, less than 24.59% of Ruby online submissions for Replace Elements with Greatest Element on Right Side.
# @param {Integer[]} arr
# @return {Integer[]}
def replace_elements(arr)
    prev = -1
    (0...arr.size).reverse_each do |i|
        tmp = arr[i]
        arr[i] = prev
        prev = tmp if tmp > prev        
    end
    arr
end
```

Ruby code ("concise" version):
```Ruby
# Leetcode: 1299. Replace Elements with Greatest Element on Right Side.
# https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
# Runtime: 68 ms, faster than 93.44% of Ruby online submissions for Replace Elements with Greatest Element on Right Side.
# Memory Usage: 11.3 MB, less than 91.80% of Ruby online submissions for Replace Elements with Greatest Element on Right Side.
# @param {Integer[]} arr
# @return {Integer[]}
def replace_elements(arr)
    prev = -1
    (0...arr.size).reverse_each do |i|
        prev, arr[i] = (arr[i] > prev ? arr[i] : prev)  , prev    
    end
    arr
end
```