# Ruby: Fill a global variable by a recursion.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/1078163/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/1078163/)

---

## Leetcode: 797. All Paths From Source to Target.

**Fill a global variable by a recursion.**

The task is solved as call of recursive method, that do not return any values, but fill the answer array, and answer is a "global variable", "instance variable" for current case in Ruby terms. This recursive function accepts two parameters, current vertex number, and tracing array. If current vertex index is last one, push tracing array in answer, otherwise loop over adjacency list element, and call this function for connected vertexes.

```Ruby
# Leetcode: 797. All Paths From Source to Target.
# https://leetcode.com/problems/all-paths-from-source-to-target/
# Runtime: 116 ms, faster than 86.96% of Ruby online submissions for All Paths From Source to Target.
# Memory Usage: 214.8 MB, less than 21.74% of Ruby online submissions for All Paths From Source to Target.
# Thanks God!
# @param {Integer[][]} graph
# @return {Integer[][]}
def all_paths_source_target(graph)
    @ans = []
    @g = graph
    rec(0,[0])
    return @ans
end
# Already get an array how to achieve current point.
def rec(i,arr)
    if i == @g.size-1
        @ans.push(arr)
    end
    @g[i].each do |j|
        rec(j, arr.clone.push(j))
    end
end
```