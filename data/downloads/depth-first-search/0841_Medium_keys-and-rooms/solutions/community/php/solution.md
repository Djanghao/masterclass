# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/6043986/](https://leetcode.com/problems/keys-and-rooms/solutions/6043986/)

---

```php []
class Solution {

    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    function canVisitAllRooms($rooms) {
        $numRooms = count($rooms);
        if ($numRooms <= 1) return true;

        // Checklist: from index 1 (room 0 is always visitable), up to $numRooms-1 items.
        $pendingRooms = array_fill(1, $numRooms-1, true);

        // Let's use DFS, as we want to visit all the rooms.
        // Exit conditions: the room is already visited, or that there are no pending rooms.
        $collectedKeys = $rooms[0];

        // Important: we do not pre-compute count($collectedKeys), as it may be changing inside the loop.
        for ($i=0; $i<count($collectedKeys); $i++) {
            $roomNumber = $collectedKeys[$i];
            // Check if $roomNumber was already visited. If so, do not go again.
            if (!array_key_exists($roomNumber, $pendingRooms)) continue;

            // Open $roomNumber, mark it as visited and take its keys.
            unset($pendingRooms[$roomNumber]);
            foreach ($rooms[$roomNumber] as $key) {
                // Doubt: do we take all of them, or only those different that what I already have?
                $collectedKeys[] = $key;    // Lets keep all of them from now.
            }

            // Check if all rooms were visited.
            if (count($pendingRooms) === 0) return true;
        }
        return false;
    }
}
```