# Topological Sort, 87ms. Clean implementation

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/loud-and-rich/solutions/4277618/](https://leetcode.com/problems/loud-and-rich/solutions/4277618/)

---

Definitely reword this problem until you understand what they are asking, it is not exactly the easiest to comprehend.

1. You want to make an adj list containing those who are richer.
2. Then from those people in the list you want to recursively find the min quiet value.
3. Make sure to have a default min val which is quiet[i] as there are times where adj_list[i] is an empty array.

# Code
```
# @param {Integer[][]} richer
# @param {Integer[]} quiet
# @return {Integer[]}
def loud_and_rich(richer, quiet)
    # What is the richer array:
    # richer[i] = [ai, bi] indicates that ai has more money than bi. 

    # What is the quiet array:
    # quiet[i] is the quietness of the ith person.

    # What do they want:
    # Return an integer array answer where answer[x] = y if y is the loudest person, y should have the same or more money than x.

    # Create adj list of people who have more money.

    adj_list = Array.new(quiet.size) { [] }
    richer.each_with_index do |arr|
        adj_list[arr[1]] << arr[0]
    end
    ts = TopologicalSort.new(adj_list, quiet)
    ts.answer

end

class TopologicalSort
    attr_accessor :answer
    def initialize(adj_list, quiet)
        @adj_list = adj_list
        @quiet = quiet
        @answer = []
        adj_list.each_with_index do |list, i|
           @answer << dfs(i, {}, i)
        end
    end

    def dfs vertex, visited = {}, min
        if visited[vertex]
            return min
        else
            visited[vertex] = true
        end

        @adj_list[vertex].each do |v|
            

            if @answer[v] 
                if  @quiet[@answer[v]] < @quiet[min]
                    min = @answer[v]
                end
            else
                if @quiet[v] < @quiet[min]
                    min = v
                end
                min = dfs v, visited, min
            end
        end
    
        min
    end
end



```