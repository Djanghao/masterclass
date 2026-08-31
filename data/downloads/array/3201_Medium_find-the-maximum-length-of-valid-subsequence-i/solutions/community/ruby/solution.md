# Fastest in Ruby, Simple counter based solution, O(n) time and O(1) space

**Author:** bezoar17
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/6047937/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/6047937/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

All pairs in the subsequence can either have mod 0 or mod 1.

For Mod 0, either all numbers in subsequence are even or all numbers are odd
For Mod 1, all numbers are alternating, so pairs are either even-odd OR odd-even 

In essence, there are 4 possible patterns($$ all\\_even, all\\_odd, even\\_odd, odd\\_even$$)
We just need to be able to count these while traversing the array.

# Approach

Initialize the 4 counters for these patterns, and process each number in the array.

- For each number, it will definitely contribute to either $$all\\_even$$ or $$all\\_odd$$.

- For the other 2 counters, $$even\\_odd$$, and $$odd\\_even$$, their current parity indicates whether they should be incremented or not. 

**Example:** 
$$even\\_odd$$ counter's value is 2, then for it to be updated to 3, number being processed should be even.

If $$even\\_odd$$'s value was 3, then for it to be updated to 4, number being processed should be odd.

Similarly for $$odd\\_even$$ counter.


So, we just process each number of the array, and update the necessary counters , once we have processed all numbers, our answer is the max of these 4 possible counters (patterns)

# Complexity
- Time complexity: $$O(n)$$ - 1 pass is needed
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$. - Just 4 counters

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def maximum_length(nums)
  all_even = all_odd = even_odd = odd_even = 0
  
  nums.each do |num|
    if num.even?
      all_even +=1
      even_odd +=1 if even_odd.even? # pairs of even-odd are done, num can be first of new pair
      odd_even +=1 if odd_even.odd? # odd-even requires 1 even no. to complete the pairs
    else # vice versa for the other calculation
      all_odd +=1
      even_odd +=1 if even_odd.odd?
      odd_even +=1 if odd_even.even?
    end
  end

  [all_even, all_odd, even_odd, odd_even].max
end
```