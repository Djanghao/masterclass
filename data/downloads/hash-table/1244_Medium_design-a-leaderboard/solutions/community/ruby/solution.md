# Ruby, Sorted Tree Map, O(logN)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/5131788/](https://leetcode.com/problems/design-a-leaderboard/solutions/5131788/)

---

# Code
```
class Leaderboard
  attr_accessor :store, :sorted_tree_map
  def initialize()
    @store = Hash.new { 0 }
    @sorted_tree_map = Containers::RubyRBTreeMap.new
  end

  def add_score(player_id, score)
    if store.include?(player_id)
      existing_score = store[player_id]

      new_score = existing_score + score
      store[player_id] = new_score
      sorted_tree_map.push(new_score, (sorted_tree_map.get(new_score) || 0) + 1)

      players_with_score = sorted_tree_map.get(existing_score)
      if players_with_score == 1
        sorted_tree_map.delete(existing_score)
      else
        sorted_tree_map.push(existing_score, players_with_score - 1)
      end
    else
      store[player_id] = score
      sorted_tree_map.push(score, (sorted_tree_map.get(score) || 0) + 1)
    end
  end

  def top(k)
    count = 0
    sum = 0
    sorted_tree_map.reverse_each do |score, frequency|
      frequency.times do |i|
        sum += score
        count += 1
        break if count == k
      end
      break if count == k
    end
    sum
  end

  def reset(player_id)
    existing_score = store[player_id]
    sorted_tree_map.push(existing_score, sorted_tree_map.get(existing_score) - 1)

    sorted_tree_map.delete(existing_score) if sorted_tree_map.get(existing_score).zero?
    store.delete(player_id)
  end
end

```