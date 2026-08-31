# [Ruby] Two HEAP

**Author:** azusa152
**Votes:** 1
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/2789445/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/2789445/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We store first and last candidates as Heap, then we can find the min cost inside the candidates efficiently.
# Approach
<!-- Describe your approach to solving the problem. -->
Sincy Ruby doesn't build in Heap, we need to implement it by our self.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} costs
# @param {Integer} k
# @param {Integer} candidates
# @return {Integer}
class Heap
    attr_accessor :size, :heap

    def initialize()
        @heap = []
        @size = 0
    end
    
    def add input
        @heap[@size] = input
        balance_up size
        @size += 1
    end

    def pop
        @size -= 1
        @heap[0] = @heap[@size]
        @heap.delete_at(@size+1)
        balance_down 0 
    end

    def peak
        if @size == 0
            100001
        else
            @heap[0]
        end
    end

    def size
        @size
    end

     def heap
        @heap
    end
    

    private
    def balance_down index

        # check right
        if is_node?(right_index(index))  
            if ((@heap[index].to_i > @heap[right_index(index)]) and (not is_node?(left_index(index)) or @heap[right_index(index)] < @heap[left_index(index)].to_i ))
                
                swap index,right_index(index)
                balance_down right_index(index)
            end
        end
        # check left
        if is_node?(left_index(index))  
            if @heap[index].to_i > @heap[left_index(index)]
                swap index,left_index(index)
                balance_down left_index(index)
            end
        end
    end

    private
    def balance_up index
        if index ==0
            balance_down index    
        end
        parrent_node_index = parrent_index index
        if is_node? parrent_node_index
            if  @heap[parrent_node_index] > @heap[index]
                swap parrent_node_index,index
                balance_up parrent_node_index
            else
                return
            end
        end
    end

    private
    def is_node? index
        return (index <= @size and index >=0)
    end

    private
    def right_index index
        return 2*index+2
    end

    private
    def left_index index
        return 2*index+1
    end

    private
    def parrent_index index
        ((index - 1) / 2).floor
    end

    private
    def swap parrent_node_index,index
        temp = @heap[parrent_node_index]
        @heap[parrent_node_index] = @heap[index]
        @heap[index] = temp
    end

end

def total_cost(costs, k, candidates)
    left_heap = Heap.new()
    right_heap = Heap.new()

    l, r = 0, costs.size()-1

    step = 0
    res = 0
    while step < k
        step += 1
        while left_heap.size < candidates && l <= r
            left_heap.add(costs[l])
            l += 1
        end

        while right_heap.size < candidates && r >= l
            right_heap.add(costs[r])
            r -= 1
        end
        
        left_peak = left_heap.size > 0 ? left_heap.peak : 100001
        right_peak = right_heap.size > 0 ? right_heap.peak : 100001

        if left_peak <= right_peak
            res += left_peak
            left_heap.pop
        else
            res += right_peak
            right_heap.pop
        end
    end
    res
    
end
```