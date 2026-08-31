# Ruby - Hash of users active minutes set

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141527/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141527/)

---

Keep set of active minutes for each user.

```ruby
def finding_users_active_minutes(logs, k)
  minutes_sets = Hash.new { |h, k| h[k] = Set.new }
  logs.each do |user_id, time|
    minutes_sets[user_id].add(time)
  end
  fr = minutes_sets.values.each_with_object(Hash.new(0)) { |s, h| h[s.size] += 1 }
  (1..k).map { |j| fr[j] }
end
```

Time complexity: `O(N)`, where `N` - length of array `logs`.
Space complexity: `O(N)`.

### Similar approach without using Set

```ruby
def finding_users_active_minutes(logs, k)
  fr = Hash.new(0)
  logs.group_by(&:first).each do |user_id, times|
    fr[times.uniq.size] += 1
  end
  (1..k).map { |j| fr[j] }
end
```