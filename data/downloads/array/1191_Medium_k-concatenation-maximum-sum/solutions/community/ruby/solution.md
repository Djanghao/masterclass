# Ruby: Max between sums, Kadane's, prefix and suffix with sums.

**Author:** user9697N
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/959995/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/959995/)

---

##### Leetcode: 1191. K-Concatenation Maximum Sum.



Need to calculate max suffix and prefix subtracting elements one by one from beginning or end of the array respectively. Answer is like a sandwich here max suffix and max prefix are a bred peaces and sum repeated 0 or k-2 times is filling. Or answer could be result of Kadane's algorithm for the input array.

Ruby code:
```Ruby
# Leetcode: 1191. K-Concatenation Maximum Sum.
# https://leetcode.com/problems/k-concatenation-maximum-sum/
# Runtime: 104 ms, faster than 100.00% of Ruby online submissions for K-Concatenation Maximum Sum.
# Memory Usage: 212.7 MB, less than 100.00% of Ruby online submissions for K-Concatenation Maximum Sum.
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
# Solve. 
# [-5,-2,0,0,3,9,-2,-5,4]
# 5
def k_concatenation_max_sum(arr, k)
   @a = arr
    kad = kadane(arr)
    return kad if k == 1
    sum = @a.sum
    pr = prefix(sum)
    sf = suffix(sum)
    [sum*k,kad,pr+sf,pr+sf + sum * (k-2)].max % (10**9  + 7 )
end
def kadane(arr)
    sum = 0
    max = 0
    arr.each_with_index do |x,i|
        sum += x
        sum = x if sum < x
        max = sum if sum > max
    end
    max
end
def suffix(sum)
    max = sum 
    @a.each{|x|
        sum -= x
        max = sum if sum > max 
    }
    max
end
def prefix(sum)
    max = sum 
    @a.reverse_each{|x|
        sum -= x
        max = sum if sum > max 
    }
    max
end
```