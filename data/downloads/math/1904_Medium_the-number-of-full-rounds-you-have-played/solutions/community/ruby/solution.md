# Ruby solution

**Author:** IFilonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/3410035/](https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/solutions/3410035/)

---

# Code
```
# @param {String} login_time
# @param {String} logout_time
# @return {Integer}
SESSION_TIME = 15
HOUR_MIN = 60
DAY_MIN = 1440

def number_of_rounds(login_time, logout_time)
  login_min = to_min(login_time)
  login_min_start = to_max_start_time(login_min)
  logout_min = to_min(logout_time)
  logout_min_start = to_min_start_time(logout_min)
  day_part_min = logout_min < login_min ? DAY_MIN - login_min : 0
  day_part_min_start = to_min_start_time(day_part_min)
  logout_min_start = login_min_start if logout_min_start < login_min_start && day_part_min.zero?
  all_times_min = if day_part_min.positive?
                    day_part_min_start + logout_min_start
                  else
                    logout_min_start - login_min_start
                  end
  all_times_min / SESSION_TIME
end

def to_min(str_time)
  parts = str_time.split(':').map(&:to_i)
  parts.first * HOUR_MIN + parts.last
end

def to_max_start_time(time_min)
  parts = time_min % SESSION_TIME
  time_min + (parts.zero? ? 0 : (SESSION_TIME - parts))
end

def to_min_start_time(time_min)
  parts = time_min % SESSION_TIME
  time_min - (parts.zero? ? 0 : parts)
end

```