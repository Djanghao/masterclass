# Ruby One-pass Solution (three-way partitioning) Generic + Explanantion

**Author:** nischay_dhiman
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-colors/solutions/1384793/](https://leetcode.com/problems/sort-colors/solutions/1384793/)

---

After referencing this Three way partitioning Algorithm
We can sort any array with three uniq numbers, considering a mid value

In our case, We can use 1 as mid
We have swap all the values we find less than 1 to the left
And, swap all the values greater than 1 to the right.

Here is the Algorithm from Wikepedia:
https://en.wikipedia.org/wiki/Dutch_national_flag_problem
```
procedure three-way-partition(A : array of values, mid : value):
    i \u2190 0
    j \u2190 0
    k \u2190 size of A - 1

    while j <= k:
        if A[j] < mid:
            swap A[i] and A[j]
            i \u2190 i + 1
            j \u2190 j + 1
        else if A[j] > mid:
            swap A[j] and A[k]
            k \u2190 k - 1
        else:
            j \u2190 j + 1
```


So to write this in Ruby, It would become something like this:


```
def sort_colors(nums)
  swap_nums = lambda {|i,j| nums[i],nums[j] = nums[j],nums[i]}
  mid = 1
  i, j, k = 0, 0, nums.length-1
  while(j <= k)
    if(nums[j] < mid)
      swap_nums.call(i,j)
      i += 1
      j += 1
    elsif nums[j] > mid
      swap_nums.call(j, k)
      k -= 1
    else
      j += 1
    end
  end
end
    
```

Time Complexity : O(n)
Space Complexity: O(1)