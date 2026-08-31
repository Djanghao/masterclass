# Ruby Solution O(n)

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1593773/](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/solutions/1593773/)

---

```

# TRICK WAS TO FIND NODE OF 1 
# MARK(IN MISSED_ARRAY) EVERY CHILDREN VALUE OF 1 VALUE NODE  (DFS)
# FIND FIRST AVAILABLE EMPTY SPOT IN MISSED_ARRAY (DYNAMIC VALUES ARRAY)
# SET RESULT ARRAY AT NODE INDEX = MISSED_INDEX
# MAKE NEW NODE TO BE THE PARENT OF 1
# REAPEAT THIS PROCESS UNTILL YOU REACH ROOT


def dfs(idx, missed_map, children_list, nums)
    return if missed_map[nums[idx]] == true
    children_list[idx].each do |child_idx|
        dfs(child_idx, missed_map, children_list, nums)
    end
    missed_map[nums[idx]] = true
end

def create_children_adjacency_list(parents, nums)
    children_list = Array.new(nums.length) {Array.new} 
    for i in 1..parents.length-1
        children_list[parents[i]] << i
    end
    children_list
end

def find_first_missed_number(nums, missed_map, children_list, result, parents)
    idx = nums.index(1)
    missed = 1
    while idx >= 0
        dfs(idx, missed_map, children_list, nums)
        while(missed_map[missed] == true)
            missed += 1
        end
        result[idx] = missed
        idx = parents[idx]
    end
end

def smallest_missing_value_subtree(parents, nums)
    
    result = Array.new(nums.length, 1)
    missed_map = Array.new(100000, false)
    return result if !nums.include?(1)
    
    children_list = create_children_adjacency_list(parents, nums)
    
    find_first_missed_number(nums, missed_map, children_list, result, parents)
    
    return result
end
```

This solution is inspired from [@lee215](https://leetcode.com/lee215) Solution : [here](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/discuss/1458486/Python-Strict-O(n)-Solution)