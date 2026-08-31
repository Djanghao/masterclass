# [Ruby] Graph DFS

**Author:** mistersky
**Votes:** 5
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/867488/](https://leetcode.com/problems/evaluate-division/solutions/867488/)

---

```
# @param {String[][]} equations
# @param {Float[]} values
# @param {String[][]} queries
# @return {Float[]}
def calc_equation(equations, values, queries)
  @graph = Hash.new{|h, k| h[k] = {}}
  
  equations.zip(values).each do |equation, value|
    variable_1, variable_2 = equation
    
    @graph[variable_1][variable_2] = value.to_f
    @graph[variable_2][variable_1] = 1.0/value
    @graph[variable_1][variable_1] = 1.0
    @graph[variable_2][variable_2] = 1.0
  end

  result = []
  
  queries.each do |variable_1, variable_2|
    if @graph[variable_1].empty? || @graph[variable_2].empty?
      result << -1.0
    else
      result << dfs(variable_1, variable_2, 1.0, Set.new)
    end
  end
  
  result
end
    
def dfs(variable_1, variable_2, result, checked_variables_set)
  return result if variable_1 == variable_2
  
  checked_variables_set << variable_1
  
  @graph[variable_1].keys.each do |connected_variable|
    unless checked_variables_set.include?(connected_variable)
      value = dfs(
        connected_variable,
        variable_2,
        result * @graph[variable_1][connected_variable],
        checked_variables_set.dup
      )
      return value if value != -1.0
    end
  end
  
  return -1.0
end
```