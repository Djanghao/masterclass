# Ruby solution with #tally

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/5014185/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/5014185/)

---

# Intuition

We could try every possible combination and count them, that is, perform a Backtrack. We usually want to optmize Backtrack, as it's too costly.

To make it faster, we have to reuse previous results. To do so, we can into consideration that the values are between 1 and 30. As an example, if number 2 appears 4 times and 3 6 times, we can combine them in 24 different ways.

We can also skip verifying combinations that don't result in perfect squares. If number A has factor B and C also has it, then we don't have to combine them. The only factors we need to consider are the prime numbers between 1 and 30.

Another thing that we should do is skip numbers that can't be part of the final result. Every square between 1 and 30 (4,9,25) and its multiples (8,12,16,20,24,28; 18,27) can be ignored.

A special case is number 1: if we have N 1s, we have (2^N - 1) ways to form sub-sets with it (i.e. C(N,1) + C(N,2) + ...).

# Improvements

- you could manipulate bits instead of the multiple arrays I used

# Code
```
# @param {Integer[]} nums
# @return {Integer}

IGNORE = [4,8,12,16,20,24,28,9,18,27,25]
BASE = [2,3,5,7,11,13,17,19,23,29]

def square_free_subsets(nums)
   counts = nums.tally.keep_if { |k,_| !IGNORE.include?(k) }
   factors = factors(counts.keys)

   backtrack_count(nil, counts, counts.keys.sort, factors, [], []) % 1_000_000_007
end

def factors(vals)
    vals.map do |v|
      [v, BASE.select { |n|  v % n == 0 }]
    end.to_h
end

def combinations(counts, num)
    return 2 ** counts[num] - 1 if num == 1

    counts[num]
end

def backtrack_count(from, counts, available, factors, used, factors_used)
    total = 0
    available.each do |av|
        next if from && from > av

        if (factors[av] & factors_used) == [] || av == 1
            factors_used += factors[av]
            used.push(av)
            total += used.map { |f| combinations(counts, f) }.reduce(:*)
            total += backtrack_count(av, counts, available - [av], factors, used, factors_used)
            used.pop
            factors_used -= factors[av]
        end
    end
    total
end

```