# ruby most effective for now, but you can do better 😌

**Author:** n0damny
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/5318459/](https://leetcode.com/problems/most-popular-video-creator/solutions/5318459/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String[]} creators
# @param {String[]} ids
# @param {Integer[]} views
# @return {String[][]}
def most_popular_creator(creators, ids, views)
  popularity_hash = {}
  creators.each_with_index do |c, i|
    popularity_hash[c] ||= [0, 0, 0]
    popularity_hash[c][0] += views[i]
    if popularity_hash[c][2] < views[i] ||
      (popularity_hash[c][2] == views[i] and !popularity_hash[c][1].is_a?(String) || popularity_hash[c][1] > ids[i])
      popularity_hash[c][1] = ids[i]
      popularity_hash[c][2] = views[i]
    end
  end
  views_max = popularity_hash.values.max{ |a, b| a[0].to_i <=> b[0].to_i }[0]
  popularity_hash.select do |k,v|
    v[0] == views_max
  end.map do |k,v|
    [k, v[1]]
  end
end
```