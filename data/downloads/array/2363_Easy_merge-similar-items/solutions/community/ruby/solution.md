# Hash and sort. Beats 100%

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/3905972/](https://leetcode.com/problems/merge-similar-items/solutions/3905972/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {Integer[][]} items1
# @param {Integer[][]} items2
# @return {Integer[][]}
def merge_similar_items(items1, items2)
    # We are merging arrays two arrays, items1 and items2.
    # When merging if an item has the same value, we combine the weight.

    hash = {}
    items1.each do |item|
        if hash[item[0]]
            hash[item[0]] = hash[item[0]] + item[1]
        else
            hash[item[0]] = item[1]
        end
    end

    items2.each do |item|
        if hash[item[0]]
            hash[item[0]] = hash[item[0]] + item[1]
        else
            hash[item[0]] = item[1]
        end
    end

    answer = []
    hash.keys.each do |key|
        answer << [key, hash[key]]
    end

    answer.sort{|a,b| a[0]<=>b[0]}
end
```