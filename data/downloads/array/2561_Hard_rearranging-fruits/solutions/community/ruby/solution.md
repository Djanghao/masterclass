# Ruby solution with Swapping clarification

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/4155945/](https://leetcode.com/problems/rearranging-fruits/solutions/4155945/)

---

# Approach
Maintain a hash to identify count each char. Increment the count for basket1 and decrement count for basket 2. Calulate total min. Loop through the hash and check the count. If the count is odd, that means replacing that character would not make the baskets equal. Hence return -1. If the count is even, until the absolute value for count is 0, add the key to the list. Sort the list and performing swapping. Swapping can be performed in 2 ways:
1) Direct Swapping:
-> Example: b1 = [4,4,4,4,3], b2 = [5,5,5,5,3] => swap 4 and 5 directly. Min Cost to swap them would be 4  
2) Indirect Swapping:
-> Example: b1 = [4,4,4,4,1], b2 = [5,5,5,5,1] => swap 4 and 5 via 1. Min cost to swap them via 1 would 2. Why? Replace 4 in b1 with 1 in b2, cost for that operation will be min(1,4) = 1. Now, swap 5 with that 1, cost for that operation will be min(1,5) = 1.

Get the minimum of the above 2 and add it to the cost.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[]} basket1
# @param {Integer[]} basket2
# @return {Integer}
def min_cost(basket1, basket2)
    hash = Hash.new(0)

    (0...basket1.length).each do |i|
        hash[basket1[i]] += 1
        hash[basket2[i]] -= 1
    end
    min = [basket1.min, basket2.min].min

    list = [] # will store keys having equal counts in the hash
    hash.each do |key, value|
        diff_count = value.abs
        if diff_count % 2 != 0 # if for any character count is odd, return -1 cannot be swapped.
            return -1
        end

        diff_count /= 2
        while diff_count > 0
            list << key
            diff_count -= 1
        end
    end
    
    list.sort!
    cost = 0
    (0...(list.size / 2)).each do |i|
        # 2 types of swapping
        # direct swapping will cost list[i] which is min value of either array.
        # indirect swapping cost = 2x
        cost += [2 * min, list[i]].min
    end
    cost
end
```