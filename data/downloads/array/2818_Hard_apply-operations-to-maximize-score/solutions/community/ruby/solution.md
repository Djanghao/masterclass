# Ruby solution with monotonic stack, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3905156/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3905156/)

---

# Intuition
For each number, find how many subarrays it will be the score for.  (Use helper functions and a monotonic stack to speed this up.)  Then go through the biggest numbers, taking as many subarrays as possible, until you run out of k.

# Approach
1. Calulate the prime score for each number.  (Do this only once for faster comparisons.)
2. Create a memo object for the val helper function.
3. Create starts_len and ends_len hashes to find the how many different indices could be the start/end of a subarray containing i and having a score equal to nums[i].
4. Create an empty stack -- this will be a monotonic stack.
5. Iterate through @nums.  For each index:
    - Find the starts_len by starting at i and going backwards as many times as you can without changing the score of the subarray.  Use a helper function.
    - If your current number has a prime_score bigger than any of the numbers in your stack, pop them off and set the ends_len equal to the distance between those elements.  Then add the index and primes_score of your current number to the stack.
6. After you've iterated through everything in the array, your stack still contains numbers that can be in subarrays that include the end of the array.  Set their ends_len to be the length of rest of the elements in the array (including that one).
7. Sort the indices in nums by number value.  (We want to sort the numbers but keep the indices.)
8. Create a total variable, initialized at 1 to multiply.
9. Iterate through the numbers in nums from greatest to smallest.  Multiply total by the number as many times as possible (the minimum of k and the number of subarrays with a score of that number), using the pow function and mod for efficiency.  Subtract from k as necessary; when it gets to 0, return total (with mod).

Helper function: val
This function calculates the value of a subarray from i to j.  (I could probably refactor my solution to remove this, but it was how I first solved the problem.)
1. If a value is stored in memo, return that value.
2. Otherwise, start k at i and then increment it until the prime_score goes up or you hit j.  If the prime score goes up, call the function from k to j.  Otherwise, return the value at @nums[i].  Memoize either way.

Helper function: prime_score
1. Initialize a set to contain prime factors.
2. Iterate through primes until num == 1 or you run out of primes.  For each prime p, if p is a factor of num, remove all factors of p from num and add p to the prime factors set.
3. At the end of this, num is either 1 or a prime larger than 313.  Add it to the set if it's not one.
4. Return the length of the set.

# Complexity
- Time complexity:
$$O(n * log(n))$$, I think.  The val helper function seems like it should make it $$O(n^2)$$, but I think it would only get called $$O(n)$$ times since the min check will fail unless the prime factors are lower.  I could be wrong here.

- Space complexity:
$$O(n)$$

# Code
```
@mod = 10**9 + 7

def maximum_score(nums, k)
    @nums = nums.map { |num| [num,prime_score(num)] } 
    
    @memo = Array.new(nums.length) { {} }
    
    starts_len = Hash.new(1)
    ends_len = Hash.new(1)

    stack = []
    
    @nums.each_with_index do |num,i|
        min = i
        while min > 0 && val(min-1,i) == val(i,i) && @nums[i] != @nums[min-1]
            min -= 1
        end
        
        starts_len[i] = i - min + 1

        while stack[0] && stack[-1][1] < @nums[i][1]
            idx = stack.pop[0]
            ends_len[idx] = i - idx
        end
        stack << [i,@nums[i][1]]
    end

    stack.each do |i,val|
        ends_len[i] = nums.length - i
    end
    
    order = (0...nums.length).sort_by { |i| nums[i] }
    
    total = 1
    while k > 0
        idx = order.pop
        ways = starts_len[idx] * ends_len[idx]
        if ways >= k
            total *= nums[idx].pow(k,@mod)
            return total % @mod
        else
            k -= ways
            total *= nums[idx].pow(ways,@mod)
            total %= @mod
        end
    end
end


def val(i,j)
    return @memo[i][j] if @memo[i][j]
    
    k = i
    while k < j
        k += 1
        return @memo[i][j] = val(k,j) if @nums[k][1] > @nums[i][1]
    end
    
    @memo[i][j] = @nums[i][0]
end




@primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313]
def prime_score(num)
    prime_factors = Set[]
    i = 0
    
    until num == 1 || i == @primes.length
        if num % @primes[i] == 0
            prime_factors.add(@primes[i])
            num /= @primes[i]
        else
            i += 1
        end
    end
    
    prime_factors << num unless num == 1
    
    prime_factors.length
end
```