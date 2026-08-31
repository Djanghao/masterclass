# O(n^2) average time, O(n^3) worst-case (Ruby)

**Author:** dtkalla
**Votes:** 2
**Link:** [https://leetcode.com/problems/4sum/solutions/4018049/](https://leetcode.com/problems/4sum/solutions/4018049/)

---

# Intuition
In two sum, we create a hash of each value and look for complementary values that equal the total sum.
The approach here is similar: we'll find all possible sums of pairs of elements and see if there are complementary pairs in our hash.  (There are a lot more details here to make sure that the pairs have distinct indices.)

# Approach
Helper function: remove repeats of an element beyond 4.  (We only care about distinct quadruplets, so we can't use an element more than four times.)
1. Tally the elements in nums.
2. Recreate the array, with a maximum of four occurences of each element.
3. Return the array.

Main function:
1. Remove repeats beyond four of each element in nums.
2. Create a set for res.  (Use a set because quadruplets must be distinct.)
3. Create a hash of sums of pairs, with the sum as the key and an array of pairs of indices as the value.
4. Find pairs of elements using a double loop.  For each pair:
    - Find the sum.
    - Look at the complementary sum in the hash.  For each pair of indices, put the quadruplet into the res set if all four indices are distinct.  (Sort the numbers to prevent repeats in the res set.)
    - Add the pair of indices to the two_sum hash.
5. Change the res set into an array and return.

# Complexity
- Time complexity:
Average: $$O(n^2)$$
Worst-case: $$O(n^3)$$.  (If we have an array like [1,2,3,...,100] and a target of 202, we'll have lots of repeat sums -- each sum will take O(n^2) and there will be O(n) of them.  The final array length will be O(n^3) in this case, so this is optimal.)

- Space complexity:
$$O(n^2)$$, not counting the output array (which is $$O(n^3)$$ in the worst case).

# Code
```
def max_four(nums)
    count = nums.tally
    arr = []
    count.each do |k,v|
        ([v,4].min).times { arr << k }
    end
    arr
end


def four_sum(nums, target)
    nums = max_four(nums)
    res = Set[]
    
    #hash: sum is key, array of pairs of indices is value
    two_sum = Hash.new { |h,k| h[k] = [] }
    
    (0...nums.length).each do |a|
        (a+1...nums.length).each do |b|
            sum = nums[a] + nums[b]
            
            two_sum[target - sum].each do |pair|
                if ([a,b] + pair).uniq.length == 4
                    c,d = pair
                    res.add([nums[a],nums[b],nums[c],nums[d]].sort)
                end
            end
            
            two_sum[sum] << [a,b]
        end
    end
    
    res.to_a
end
```