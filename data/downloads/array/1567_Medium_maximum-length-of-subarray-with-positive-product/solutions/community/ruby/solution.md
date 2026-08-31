# Ruby solution

**Author:** johnhaoxian
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/4367247/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/4367247/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
trying to find the index distance between numbers that would lead to positive product

# Approach
loop through the whole array. if is zero, reset the indexes because subarray should not have that. if is number is negative and it is first time encounter a negative number, remember the index. same thing for positive. 
if the current product is positive, find the max length of subarray by comparing previous max length, the distant between current index to previou positive or negative index. if product is negative, dont do anything, move on to the next number. if product is negative and we have not ecounter a negative number before, find the distant between the previous index and the first time we encounter a negative.

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def get_max_len(nums)
    maxlen = 0 
    positiveindex = -1
    negativeindex = -1 
    product = 1
    nums.each_with_index do |n, index|
      tempmax = 1
      if n==0
        positiveindex = -1
        negativeindex = -1
        product = 1
        next
      end

      if n>0
      product *= 1
      else
      product *=-1
      end

      if n < 0 && negativeindex==-1
      negativeindex = index
      elsif n>0 && positiveindex ==-1
      positiveindex = index
      end

      if product>0
      maxlen = [maxlen, positiveindex ==-1? 0: index - positiveindex +1, negativeindex==-1? 0: index-negativeindex +1].max
      elsif negativeindex != -1
      maxlen = [maxlen, index-negativeindex].max
      end
    end
    maxlen
end
    
```