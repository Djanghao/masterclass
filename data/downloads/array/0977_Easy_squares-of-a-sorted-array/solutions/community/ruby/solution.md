# 💎 Ruby solution using POINTERS [instead of built in Ruby sort method]

**Author:** hugu
**Votes:** 13
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/2074042/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/2074042/)

---

**O(nlogn) Solution**
Yes, we all know that Ruby is awesome and this problem can be solved with a simple one-liner:
```Ruby
def sorted_squares(nums)
  nums.map { |n| n**2 }.sort
end
```
But, there are a couple issues with this solution. Most notably, this is NOT the most optimal solution. Ruby's `sort` method uses quicksort internally, thus the complexity for this solution will end up being `O(nlogn)`. The other issue with this solution is that it doesn't really honor the spirit of LeetCode (IE, coming up with your own clever algorithm to solve a given problem). In a real world interview your interviewer likely wouldn't accept this as a "final" solution. Maybe a first stab. And first stabs aren't bad! But we can do better.

**O(n) Solution**
Using simple pointers, we can come up with an `O(n)` solution. The basic principle: We know the `nums` array is already sorted, but the trick here is that it may contain some negative values. This means that when we square those negative values they'll end up at some new index location in our final squared and sorted array. Luckily, we do know that they are already sorted ... just sorted in a more-or-less *backwards* order. Using this knowledge, we take two pointers - one for the left side of the nums array and one on the right side - and slowly increase the left pointer while simultaneously decreasing the right pointer, comparing the results of each squared number at each iteration. **Think of the array as two parts: a left array sorted from left to right and a right array sorted from right to left.** We move our left pointer along the "left" array and the right pointer along the "right" array, from largest to smallest in each case. We then stick the larger of the two at the end of our final array and move on to compare the next two left and right values by decreasing the left or right index by one each step. Our comparison window will slowly shrink until the left and right pointers meet and we have compared all values in the array one at a time. At this point we will have inserted each squared value *in sorted order* into our final array, and we're done. Bim bam boom.

Here's my implmentation:
```ruby
def sorted_squares(nums)
  arr = [] # Initialize an empty array to store squared values
  l = 0 # Initialize the left pointer to zero (IE, the LARGEST value of the "left" array)
  r = nums.size - 1 # Initialize the right pointer to the size of nums (IE, the LARGEST value for the "right" array)
  i = r # Initialize our "insert index". Because we are starting with the largest values and working our way inward, we will insert each value into the array starting at the end (IE, the largest index in nums)
  
  until i < 0 # Loop until we've exhausted all nums
    left = nums[l]**2 # Square the left side value
    right = nums[r]**2 # Square the right side value
    
    if left > right
	  # If the left value is larger store it in our array at the current index and increment the left pointer
      arr[i] = left
      l += 1
    else
	  # Otherwise the right value is larger, store it at the current index and decrement the right pointer
      arr[i] = right
      r -= 1
    end
    
    i -= 1 # We inserted one squared value into our final array, decrement the current index
  end
     
  arr # Return the final array
end
```