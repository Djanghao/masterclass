# BFS

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4781699/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4781699/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N+E)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} meetings
# @param {Integer} first_person
# @return {Integer[]}
def find_all_people(n, meetings, first_person)
    adj_list = Hash.new{|h, k| h[k] = [] }
    
    for person1, person2, time in meetings do 
        adj_list[person1] << [person2, time]
        adj_list[person2] << [person1, time]
    end 

    queue = Queue.new 
    queue << [0, 0]
    queue << [first_person, 0]
    times_array = Array.new(n, Float::INFINITY)
    times_array[0] = 0 
    times_array[first_person] = 0 
    
    while(!queue.empty?) do               
            node, time = queue.pop             
            neighbors = adj_list[node]            

        for person, t in neighbors do                 
            if t >= time and times_array[person] > t                    
                queue << [person, t]
                times_array[person] = t                     
            end 
        end          
    end 

    res = []
    for i in (0...times_array.length) do 
        res << i if times_array[i] != Float::INFINITY
    end 

    res 
end
```