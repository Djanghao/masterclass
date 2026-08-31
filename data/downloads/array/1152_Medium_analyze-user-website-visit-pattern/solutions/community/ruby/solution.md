# Ruby solution faster than 100%

**Author:** Willbo_Baggins
**Votes:** 0
**Link:** [https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2770615/](https://leetcode.com/problems/analyze-user-website-visit-pattern/solutions/2770615/)

---

```ruby
def most_visited_pattern(username, timestamp, website)
  # create a hash with username as the key, an array of timestamp and website as the value.
  user_site_visits = {}
  (0..username.length - 1).each do |index|
    if user_site_visits[username[index]]
      user_site_visits[username[index]].append([timestamp[index], website[index]])
    else
      user_site_visits[username[index]] = [[timestamp[index], website[index]]]
    end
  end
  
  # Generate all possible sequences greater than 3 and add to a new hash, using the sequence as the key and users as the value.
  sequences = {}
  user_site_visits.each do |user, site_visits|
    size = site_visits.size
    next unless size >= 3
    visits = site_visits.sort_by { |site_visit| site_visit[0] }
    (0..size - 3).each do |index_one|
      (index_one + 1..size - 2).each do |index_two|
        (index_two + 1..size - 1).each do |index_three|
          sequence = "#{visits[index_one][1]} #{visits[index_two][1]} #{visits[index_three][1]}"
          if sequences[sequence]
            sequences[sequence].add(user)
          else
            users = Set.new
            users.add(user)
            sequences[sequence] = users
          end
        end
      end
    end
  end
  
  # Find the max sequence and split it back into an array before returning it.
  # Note: -users.count is to account for how #sort_by orders integers vs strings.
  sequences.sort_by { |sequence, users| [-users.count, sequence] }.first.first.split(' ')
end
```