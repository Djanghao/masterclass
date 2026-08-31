# Ruby Solution with Mod and Factorization (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/3442332/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/3442332/)

---

# Intuition
Numbers can be grouped together based on modulo and factors of k.

# Approach
1. Change each number to itself mod k.
2. Count all the pairs where one of the numbers is itself a multiple of k, then remove those numbers.
3. Find the (lesser) factors of k.
4. Assign each number in the array to a factor of k if possible, choosing the largest factor of k possible.  (For example, if k is 12, assign each number in the array to 6, 4, 3, or 2 if any of those are factors.)  Count how many numbers there are for each factor.
5. Look at pairs of factors and see which multiply to make (a multiple of) k.  Multiply the counts of these factors and add to total, dividing by 2 to avoid double counting.  If a number multiplied by *itself* can get a multiple of k (e.g., 6 * 6 = 36, a multiple of 12), subtract the elements you double-counted.
6. Return the total (as an integer, not a float).

# Complexity
- Time complexity:
$$O(n + k)$$, with *n* being the length of nums

- Space complexity:
$$O(f)$$, where *f* is the number of factors of k; this would be $$O(log(k))$$ in the worst case.  (Nums is modified in place, so it doesn't take up extra space.)  

# Code
```
def count_pairs(nums, k)
    nums.map! { |num| num % k }

    count = nums.count { |num| num == 0 }
    total = count * nums.length - count * (count + 1) / 2
    nums.reject! { |num| num == 0 }
    
    factors = factors(k).reverse
    count = Hash.new

    factors.each do |factor|
        count[factor] = nums.count { |num| num % factor == 0 }
        nums.reject! { |num| num % factor == 0 }
    end

    count.each do |k1,v1|
        count.each do |k2,v2|
            if k1 * k2 % k == 0
                total += v1 * v2 / 2.0
                total -= v1 / 2.0 if k1 == k2
            end
        end
    end

    total.to_i
end

def factors(k)
    arr = []
    (2...k).each { |n| arr << n if k % n == 0 }
    arr
end
```