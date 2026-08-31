# Ruby || Stack || O(n)/O(n)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4597793/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4597793/)

---


# Code
```ruby
MOD = 10**9 + 7

def sum_subarray_mins(arr)
    stack = [-1]
    (arr.size + 1).times.inject(0) {|res, i|
        while stack.last != -1 && (i == arr.size || arr[i] <= arr[stack.last]) do
            idx = stack.pop
            l, r = stack.last, i
            res += (r - idx) * (idx - l) * arr[idx] % MOD
        end
        stack << i
        res
    } % MOD
end
```