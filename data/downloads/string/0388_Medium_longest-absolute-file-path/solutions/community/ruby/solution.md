# Ruby simple solution RT Beats 80%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/5366731/](https://leetcode.com/problems/longest-absolute-file-path/solutions/5366731/)

---


# Code
```
def length_longest_path(input)
  stack = []
  input.split("\
").inject(0) do |max, dir|
    lvl = (dir.rindex("\	") || -1) + 1
    stack.pop while lvl < stack.size
    stack.push dir[lvl..-1]
    dir.include?(".") ? [max, stack.join("/").size].max : max
  end
end
```