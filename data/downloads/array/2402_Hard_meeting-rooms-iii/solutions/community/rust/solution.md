# 💥 Runtime beats 96.00%, Memory beats 68.00%

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/5717243/](https://leetcode.com/problems/meeting-rooms-iii/solutions/5717243/)

---

# Intuition
You have several rooms and need to schedule meetings. Each room can only handle one meeting at a time. If a room is occupied, meetings must wait until the room is free. The goal is to find out which room ends up holding the most meetings.

# Approach
Sort Meetings: By start time.

Track Rooms: Use two lists to manage free and busy rooms.

Assign Meetings: To free rooms first, or the soonest available room if all are busy.

# Complexity
- Time complexity:
O(m log m)

- Space complexity:
O(n+m)

# Code
```rust []
use std::cmp::Ordering;
use std::collections::BinaryHeap;
use std::cmp::Reverse;

// Alias for a binary heap of meeting rooms, ordered by finish time (and room ID)
type MeetingRooms = BinaryHeap<Reverse<MeetingRoom>>;

impl Solution {
    pub fn most_booked(n: i32, meetings: Vec<Vec<i32>>) -> i32 {
        // Convert the meetings from Vec<Vec<i32>> to Vec<Meeting>
        let mut meetings: Vec<Meeting> = meetings.into_iter()
            .map(|x| Meeting::new(x[0], x[1]))
            .collect();

        // Sort meetings by their start time
        meetings.sort_unstable_by(|a, b| a.start().cmp(&b.start()));

        // Vector to keep track of how many meetings each room has held
        let mut meetings_held = vec![0; n as usize];

        // Min-heap for free meeting rooms, ordered by room ID
        let mut free_meeting_rooms: MeetingRooms = (0..n as usize).map(|i| Reverse(MeetingRoom::new(i))).collect();

        // Min-heap for busy meeting rooms, ordered by finish time and room ID
        let mut busy_meeting_rooms: MeetingRooms = MeetingRooms::new();

        // Process each meeting
        for meeting in meetings {
            let start_time = meeting.start();

            // Free up rooms that are done with their current meetings
            while busy_meeting_rooms.peek().map(|Reverse(room)| room.is_finished(start_time)).unwrap_or(false) {
                let Reverse(mut meeting_room) = busy_meeting_rooms.pop().unwrap();
                meeting_room.finish_meeting(start_time);
                free_meeting_rooms.push(Reverse(meeting_room));
            }

            // Allocate a room to the current meeting
            let Reverse(mut meeting_room) = if !free_meeting_rooms.is_empty() {
                // Use a free room if available
                free_meeting_rooms.pop().unwrap()
            } else {
                // Otherwise, use a room that is currently busy
                busy_meeting_rooms.pop().unwrap()
            };

            // Schedule the meeting in the selected room
            meeting_room.hold_meeting(&meeting);
            meetings_held[meeting_room.id] += 1;
            busy_meeting_rooms.push(Reverse(meeting_room));
        }

        // Find the room with the maximum number of meetings held
        let mut max_room = (0, 0);
        for (id, held) in meetings_held.into_iter().enumerate() {
            if held > max_room.1 {
                max_room = (id, held);
            }
        }

        // Return the room with the most meetings
        max_room.0 as i32
    }
}

#[derive(Debug)]
struct Meeting(i64, i64);

impl Meeting {
    // Create a new Meeting instance
    pub fn new(start: i32, end: i32) -> Self {
        Self(start as i64, end as i64)
    }

    // Get the start time of the meeting
    pub fn start(&self) -> i64 {
        self.0
    }

    // Get the end time of the meeting
    pub fn finish(&self) -> i64 {
        self.1
    }
}

#[derive(Eq, PartialEq)]
struct MeetingRoom {
    pub id: usize,
    pub finish_time: Option<i64>,
}

impl MeetingRoom {
    // Create a new MeetingRoom instance
    pub fn new(id: usize) -> Self {
        Self {
            id,
            finish_time: None,
        }
    }

    // Check if the meeting room is occupied
    pub fn is_occupied(&self) -> bool {
        self.finish_time.is_some()
    }

    // Schedule a meeting in the room
    pub fn hold_meeting(&mut self, meeting: &Meeting) {
        if let Some(finish_time) = self.finish_time {
            if finish_time > meeting.start() {
                // Extend the meeting duration if the room is still occupied
                let diff = finish_time - meeting.start();
                self.finish_time = Some(meeting.finish() + diff);
            } else {
                // Otherwise, set the finish time to the end of the new meeting
                self.finish_time = Some(meeting.finish());
            }
        } else {
            self.finish_time = Some(meeting.finish());
        }
    }

    // Check if the meeting room has finished its current meeting by the given time
    pub fn is_finished(&self, time: i64) -> bool {
        self.finish_time.map_or(true, |finish_time| time >= finish_time)
    }

    // Mark the meeting as finished
    pub fn finish_meeting(&mut self, time: i64) {
        if let Some(finish_time) = self.finish_time {
            if time >= finish_time {
                self.finish_time = None;
            }
        }
    }
}

impl Ord for MeetingRoom {
    // Compare meeting rooms first by finish time, then by room ID
    fn cmp(&self, other: &Self) -> Ordering {
        if self.finish_time == other.finish_time {
            self.id.cmp(&other.id)
        } else {
            self.finish_time.cmp(&other.finish_time)
        }
    }
}

impl PartialOrd for MeetingRoom {
    // Define the partial ordering for meeting rooms
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(&other))
    }
}

```