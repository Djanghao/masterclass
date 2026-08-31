# Tabulation solution in Ruby with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3623166/](https://leetcode.com/problems/movement-of-robots/solutions/3623166/)

---

# Intuition
Find where each robot will end up, then find pairs of distances efficiently.

# Approach
1. Transform the string into an array of +1 and -1.
2. Find the final position of each robot.  (Note: this solution assumes the robots pass through each other instead of bouncing off each other for simplicity.  Since we're going to sort them, it doesn't matter.)
3. Sort the final positions.
4. Create an array of distances, starting at 0.
5. For each number in nums, add the last distance plus the number of elements before num times the the difference from num to the previous element.  (This is explained below.)
6. Add all the distances and return mod 10**9+7

Imagine you have the array [1,3,5,8].  You know the distances going up to 5 total 6 (2+4).
Now look at 8.  There are three elements less than 78.  It would take adding 6 (+4, +2, and +0) to make all the previous elements equal 5.  You then have to add the distance between 8 and 5, multiplied by the number of elements ((8-5) * 3).  This total will be the distance of all lesser elements to seven.  (As a check, 3*3+6 = 15, and (8-1) + (8-3) + (8-5) = 7 + 5 + 3 = 15.)
Finding the total distance to one index from the previous one is an $$O(1)$$ process, so this is $$O(n)$$ in total -- more efficient than doing each pair separately.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
def sum_distance(nums, s, d)
    s = s.split('').map { |char| char == 'R' ? 1 : -1 }
    nums.each_with_index { |num,i| nums[i] = num + s[i] * d }
    nums.sort!
    
    dists = [0]
    (1...nums.length).each do |i|
        dists << dists[-1] + i * (nums[i] - nums[i-1])
    end
    
    dists.sum % 1000000007
end
```