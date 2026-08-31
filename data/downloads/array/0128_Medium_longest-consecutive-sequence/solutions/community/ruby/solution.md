# Ruby, DFS or BFS

**Author:** blither
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/2297096/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/2297096/)

---

Both methods included. 

Hash allows us to keep track of numbers visited. We do a DFS/BFS on each number in the nums array, if `num+1` or `num-1` is not nil and not visited then we do another DFS/BFS iteration. Keep track and iterate local_streak as we go, returning for each number. 

Our answer is the eventual result of getting the max of local_streak and longest_streak for each original DFS/BFS call.

```
def longest_consecutive(nums)
    num_hash_visited = nums.map { |n| [n, false] }.to_h
    
    #bfs_method(nums, num_hash_visited, 0)
    dfs_method(nums, num_hash_visited, 0)
end


def bfs_method(nums, num_hash_visited, longest_streak)
    nums.each do |num|
        next if num_hash_visited[num]
        
        queue = [num]
        local_streak = 0
        
        while !queue.empty? 
            p queue
            current_node = queue.shift
            num_hash_visited[current_node] = true
            local_streak += 1
            
            if !num_hash_visited[current_node + 1].nil? && !num_hash_visited[current_node + 1]
                queue << current_node + 1
            end
            if !num_hash_visited[current_node - 1].nil? && !num_hash_visited[current_node - 1]
                queue << current_node - 1
            end
        end
        longest_streak = [longest_streak, local_streak].max
    end
    
    longest_streak
end


def dfs_method(nums, num_hash_visited, longest_streak)  
    nums.each do |num|
        next if num_hash_visited[num]
        local_streak = dfs(num_hash_visited, num, 0)
        longest_streak = [longest_streak, local_streak].max
    end
    
    longest_streak
end

def dfs(num_hash_visited, num, local_streak) 
    num_hash_visited[num] = true
    
    local_streak += 1
    
    if !num_hash_visited[num + 1].nil? && !num_hash_visited[num + 1]
        local_streak = dfs(num_hash_visited, num + 1, local_streak)
    end
    if !num_hash_visited[num - 1].nil? && !num_hash_visited[num - 1]
        local_streak = dfs(num_hash_visited, num - 1, local_streak)
    end
    
    local_streak
end
```