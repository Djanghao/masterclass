# O(n*m) solution || Simulation

**Author:** lapeko
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4746151/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4746151/)

---

# Intuition
According to constraints simple simulation should do the trick.

# Approach
1. Sorting the meetings by start time.
2. Going through every meeting. According to task, even if there is no free rooms at the moment, earlier meeting goes first. So, we can't go to next meeting unless we scheduled current one.
3. Looking for free room if any. In case we need to wait - looking for time the next room will be available and scheduling the meeting.

# Complexity
- Time complexity: $$O(n*meetings.length)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} meetings
# @return {Integer}
def most_booked(n, meetings)
    # Assuming all meeting rooms available at time 0
    rooms = Array.new(n) { { count: 0, time: 0 } }

    # Sorting meetings by start time
    meetings.sort_by!(&:first)

    meetings.each do |meeting|
        # Looking for a room available right now
        room = rooms.find_index { |room| room[:time] <= meeting.first }

        unless room
            # Looking for the time when any room will be available
            slot = rooms.map { |room| room[:time] }.min
            room = rooms.find_index { |room| room[:time] == slot }
            meeting = [slot, slot + meeting.last - meeting.first]
        end

        # Adding the meeting to the room
        rooms[room][:count] += 1
        rooms[room][:time] = meeting.last
    end

    max_count = rooms.map { |room| room[:count] }.max
    rooms.find_index { |room| room[:count] == max_count }
end
```