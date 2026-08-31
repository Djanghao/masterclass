# Ruby, Hash, Zip, Set

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/5830237/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/5830237/)

---

# Code
```ruby []
require 'time'

def alert_names(key_name, key_time)
  results = Set.new
  store = Hash.new { |h, k| h[k] = [] } # { 'daniel': [] }

  key_name.zip(key_time).sort.each do |user_name, timestamp|
    next if results.include?(user_name)

    user_timestamps = store[user_name]
    if user_timestamps.length == 2
      minutes_between = (Time.parse(timestamp) - Time.parse(user_timestamps.first)) / 60
      if minutes_between > 60
        user_timestamps.shift
        user_timestamps.append(timestamp)
      else
        results.add(user_name)
      end
    else
      user_timestamps.append(timestamp)
    end
  end

  results.to_a
end
```