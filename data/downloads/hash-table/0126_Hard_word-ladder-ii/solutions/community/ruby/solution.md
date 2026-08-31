# [Ruby] Only accepted Ruby solution? Simple & efficient.

**Author:** Kache
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/111173/](https://leetcode.com/problems/word-ladder-ii/solutions/111173/)

---

Got Leetcode to run it in ~900ms, and it says there aren't enough other submissions to provide a runtime comparison.

**update**
re-ran it recently, guess they updated the Ruby version? Tells me it's 100%/100% for runtime/memory.
Runtime: 468 ms
Memory Usage: 212.8 MB

```
def dfs_paths(begin_word, end_word, word_graph)
  paths, path = [], []
  stack = [[begin_word, 1]]
  until stack.empty?
    word, lvl = stack.pop
    path.pop until path.size < lvl
    path << word
    if word == end_word
      paths << path.dup
    else
      word_graph[word].each { |w| stack << [w, lvl + 1] }
    end
  end
  paths
end

def find_ladders(begin_word, end_word, word_list)
  return [] unless (unvisited = word_list.to_set).include?(end_word)
  transformations = Hash.new { |h, k| h[k] = Set.new }

  begin_layer, end_layer = Set[begin_word], Set[end_word]
  unvisited.delete(end_word)
  transforms = Array('a'..'z').product(Array(0...begin_word.size))

  current_levels, previous_levels = begin_layer, end_layer
  loop do
    current_levels, previous_levels = previous_levels, current_levels

    unvisited.subtract(previous_levels)

    next_layer = Set.new
    current_levels.each do |word|
      transforms.each do |c, i|
        next if word[i] == c
        transform = word.dup.tap { |w| w[i] = c }

        is_neighbor = unvisited.include?(transform)

        next_layer << transform if is_neighbor

        if is_neighbor || previous_levels.include?(transform)
          if current_levels.equal?(begin_layer) # searching forward
            transformations[word] << transform
          else
            transformations[transform] << word
          end
        end
      end
    end
    break if next_layer.empty? || begin_layer.any? { |w| transformations[w].intersect?(end_layer) }
    current_levels.replace(next_layer)
  end

  dfs_paths(begin_word, end_word, transformations)
end
```

Bonus: simple recursive (slightly slower) version of `dfs_paths`
```
def dfs_paths(begin_word, end_word, word_graph)
  return [[end_word]] if begin_word == end_word
  word_graph[end_word].flat_map do |w|
    reverse_dfs_paths(begin_word, w, word_graph).each { |path| path << end_word }
  end
end
```