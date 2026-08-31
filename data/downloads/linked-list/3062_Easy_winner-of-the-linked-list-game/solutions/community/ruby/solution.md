# Ruby, Lambda, Step

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4870247/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/4870247/)

---

# Code
```
def game_result(head)
  node_values = ->(node) do
    results = []
    while node
      results.push(node.val)
      node = node.next
    end
    results
  end

  values = node_values.call(head)

  score = (0...values.length - 1).step(2).map { |i| values[i] > values[i + 1] ? 'Even' : 'Odd' }.tally

  return 'Tie' if score['Even'] == score['Odd']

  score.fetch('Even', 0) > score.fetch('Odd', 0) ? 'Even' : 'Odd'
end
```