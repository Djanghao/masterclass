# Ruby. DFS without Time Limit Exceeded (714 ms, 274 MB, Beats 100%)

**Author:** blrB
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3045037/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3045037/)

---

This solution use approach from Official Solution with little trick for Ruby. We should converte `s` string to Array:

This solution use approach from the Official Solution with a little trick for Ruby. We should convert the "s" string to an array:

```
s = s.split("")
```

This unexpected trick helped me submit a solution without getting "Time Limit Exceeded."

# Benchmarks

Source code for benchmarks:
```
chars_array = Array.new(10_000) { (97 + rand(25)).chr }
number_array = Array.new(10_000) { rand(25) }
chars_string = chars_array.join('')

require 'benchmark'

n = 10_000
Benchmark.bmbm(10) do |x|
  x.report("array") { n.times { |i| chars_array[i] } }
  x.report("string")  { n.times { |i| chars_string[i] } }
end
```
Result:
```
Rehearsal ----------------------------------------------
array        0.000604   0.000003   0.000607 (  0.000602)
string       0.001681   0.000015   0.001696 (  0.001698)
------------------------------------- total: 0.002303sec

                 user     system      total        real
array        0.000589   0.000004   0.000593 (  0.000588)
string       0.001581   0.000145   0.001726 (  0.001823
```


# Code
```
# @param {Integer[]} parent
# @param {String} s
# @return {Integer}
def longest_path(parent, s)
    results = [1]
    n = parent.size
    childrens = Array.new(n) { Array.new() }
    (1...n).each_with_index do |index|
      childrens[parent[index]] << index
    end
    s = s.split("")

    dfs(0, childrens, s, results)

    results[0]
end

def dfs(node, childrens, s, results)
  first_longest_path = 0
  second_longest_path = 0

  childrens[node].each do |child|

    long_path_from_child = dfs(child, childrens, s, results)

    next if s[child] == s[node]

    if long_path_from_child > first_longest_path
      second_longest_path = first_longest_path
      first_longest_path = long_path_from_child
    elsif long_path_from_child > second_longest_path
      second_longest_path = long_path_from_child
    end
  end

  results[0] = [results[0], first_longest_path + second_longest_path + 1].max
  return first_longest_path + 1;
end
```