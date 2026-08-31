# Explanation of "Super Easy Java Solution Beats 98.8%" from @pinkfloyda

**Author:** magicyuli
**Votes:** 603
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/67855/](https://leetcode.com/problems/meeting-rooms-ii/solutions/67855/)

---

The solution is proposed by @pinkfloyda at ["Super Easy Java Solution Beats 98.8%"][1] , which is amazing.

Here I would like to explain why it works a little bit.

The code from @pinkfloyda:

    public class Solution {
        public int minMeetingRooms(Interval[] intervals) {
            int[] starts = new int[intervals.length];
            int[] ends = new int[intervals.length];
            for(int i=0; i<intervals.length; i++) {
                starts[i] = intervals[i].start;
                ends[i] = intervals[i].end;
            }
            Arrays.sort(starts);
            Arrays.sort(ends);
            int rooms = 0;
            int endsItr = 0;
            for(int i=0; i<starts.length; i++) {
                if(starts[i]<ends[endsItr])
                    rooms++;
                else
                    endsItr++;
            }
            return rooms;
        }
    }

To understand why it works, first let\u2019s define two events:
Meeting Starts
Meeting Ends

Next, we acknowledge three facts:
The numbers of the intervals give chronological orders
When an ending event occurs, there must be a starting event has happened before that, where \u201chappen before\u201d is defined by the chronological orders given by the intervals
Meetings that started which haven\u2019t ended yet have to be put into different meeting rooms, and the number of rooms needed is the number of such meetings

So, what this algorithm works as follows:

for example, we have meetings that span along time as follows:

    |_____|
          |______|
    |________|
            |_______|

Then, the start time array and end time array after sorting appear like follows:

    ||    ||
         |   |   |  |

Initially, `endsItr` points to the first end event, and we move `i` which is the start event pointer. As we examine the start events, we\u2019ll find the first two start events happen before the end event that `endsItr` points to, so we need two rooms (we magically created two rooms), as shown by the variable rooms. Then, as `i` points to the third start event, we\u2019ll find that this event happens after the end event pointed by `endsItr`, then we increment `endsItr` so that it points to the next end event. What happens here can be thought of as one of the two previous meetings ended, and we moved the newly started meeting into that vacant room, thus we don\u2019t need to increment rooms at this time and move both of the pointers forward.
Next, because `endsItr` moves to the next end event, we\u2019ll find that the start event pointed by `i` happens before the end event pointed by `endsItr`. Thus, now we have 4 meetings started but only one ended, so we need one more room. And it goes on as this.


  [1]: https://leetcode.com/discuss/71846/super-easy-java-solution-beats-98-8%25