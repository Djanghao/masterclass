# Ruby - Count votes per position

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/1040949/](https://leetcode.com/problems/rank-teams-by-votes/solutions/1040949/)

---

### Idea

For each team count votes for each position. Keep Array of length `n` for each team. Where `n` - is a number of teams. Call this a `rank` array. Then can sort teams by `rank` array in desc order. For cases where `rank` is the sort by team name. 

```ruby
def rank_teams(votes)
  n = votes[0].size
  r = Hash.new { |h, k| h[k] = Array.new(n, 0) }
  votes.each do |v|
    v.each_char.with_index do |c, i|
      r[c][i] += 1
    end
  end
  r.keys.sort { |a, b| s = r[b] <=> r[a]; s.zero? ? a <=> b : s }.join
end
```