# Ruby solution - unperformant way and performant way

**Author:** schanjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-way-to-form-string/solutions/3325690/](https://leetcode.com/problems/shortest-way-to-form-string/solutions/3325690/)

---



# Code
```
def shortest_way(source, target)
  counts = 0
  source_index = target_index = 0
  in_sequence = false
  while target_index < target.size
    if source[source_index] == target[target_index]
      source_index += 1
      target_index += 1
      in_sequence = true
    elsif source[source_index] != target[target_index]
      source_index += 1
    end
    if source_index == source.size
      return -1 unless in_sequence
      in_sequence = false
      counts += 1
      source_index = 0
    end

  end
  counts += 1 if in_sequence
  counts
end

def shortest_way(source, target)
   cache = Hash.new{|h, k| h[k] = []}
   for ch, i in source.chars.each_with_index
      cache[ch] << i
   end 
   index = -1
   count = 1
   for ch in target.chars
      idxs = cache[ch]
      return -1 unless idxs.any?

      res = idxs.bsearch{|x| index <= x }
      if res.nil?
        index = idxs[0] + 1
        count += 1
      else
        index = res + 1
      end
   end
   count
end
```