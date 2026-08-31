# Erlang solution

**Author:** 0x50A31E
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/2546957/](https://leetcode.com/problems/meeting-rooms-ii/solutions/2546957/)

---

```
-spec min_meeting_rooms(Intervals :: [[integer()]]) -> integer().

loop([], _StartTimes, _EndTimes, _UsedRooms) ->
    0;

loop(_Intervals, [], EndTimes, UsedRooms) ->
    UsedRooms;

loop(_Intervals, [HStartTime | TStartTimes], [HEndTime | TEndTimes], UsedRooms) ->
    {UsedRooms1, EndTimes} = case HStartTime >= HEndTime of
        true -> {UsedRooms-1, TEndTimes};
        _ -> {UsedRooms, [HEndTime | TEndTimes]}
    end,
    loop(_Intervals, TStartTimes, EndTimes, UsedRooms1+1).

min_meeting_rooms(Intervals) ->
    loop(Intervals, 
         lists:sort([H1 || [H1|T] <- Intervals]), 
         lists:sort([H2 || [_|[H2|T]] <- Intervals]), 
         0).

```