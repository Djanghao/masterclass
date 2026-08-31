# [Ruby] Kahn's Algorithm O(V+E)

**Author:** gxespino
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1784092/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1784092/)

---

```ruby
def find_all_recipes(recipes, ingredients, supplies)
  return [] if recipes.empty?
  return [] if supplies.empty?

  indegrees = Hash.new { |h, v| h[v] = 0 }
  adj_list = Hash.new { |h,v| h[v] = [] }
  ingredients.each_with_index do |recipe_ingredients, idx|
    recipe_ingredients.each do |ingredient|
      adj_list[ingredient] << recipes[idx]
      indegrees[recipes[idx]] += 1
    end
  end

  queue = supplies
  result = []

  while queue.any?
    current = queue.shift

    if recipes.include? current
      result << current
    end

    adj_list[current].each do |item_with_indegree|
      indegrees[item_with_indegree] -= 1

      if indegrees[item_with_indegree] == 0
        queue << item_with_indegree
      end
    end
  end

  result
end
```