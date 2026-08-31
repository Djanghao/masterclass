# Ruby Solution with BFS (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466816/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/3466816/)

---

# Intuition
Modified number of islands/BFS

# Approach
1. Check every space that's land
2. BFS over grid.  For each spot that hasn't been checked:
    a. start a queue with that position
    b. initialize the total number of fish (sum) to zero
    c. BFS, adding the number of fish in each element to the queue
    d. once you've gotten all connected elements, compare to the current max number of fish
3. Return max

# Complexity
- Time complexity:
$$O(m * n)$$

- Space complexity:
$$O(m * n)$$

# Code
```
def find_max_fish(grid)
    checked = Set[]
    m,n = grid.length,grid[0].length
    (0...m).each do |i|
        (0...n).each do |j|
            checked.add([i,j]) if grid[i][j] == 0
        end
    end
    
    dirs = [[1,0],[0,1],[-1,0],[0,-1]]
    max = 0
    
    (0...m).each do |i|
        (0...n).each do |j|
            if !checked.include?([i,j])
                queue = [[i,j]]
                sum = 0
                checked.add([i,j])
                until queue.empty?
                    a,b = queue.shift
                    sum += grid[a][b]
                    dirs.each do |dir|
                        c,d = dir
                        x,y = a+c,b+d
                        if !checked.include?([x,y]) && (0...m).cover?(x) && (0...n).cover?(y)
                            queue << [x,y]
                            checked.add([x,y])
                        end
                    end
                end
                max = sum if sum > max
            end
        end
    end
    max
end
```