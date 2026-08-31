# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5742554/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/5742554/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public boolean haveConflict(String[] event1, String[] event2) {
    // Convert event start and end times to minutes since 00:00
    int start1 = timeToMinutes(event1[0]);
    int end1 = timeToMinutes(event1[1]);
    int start2 = timeToMinutes(event2[0]);
    int end2 = timeToMinutes(event2[1]);

    // Check if there is an overlap between event1 and event2
    return !(end1 < start2 || end2 < start1);
}

// Helper method to convert "HH:MM" string to minutes since 00:00
private int timeToMinutes(String time) {
    String[] parts = time.split(":");
    int hours = Integer.parseInt(parts[0]);
    int minutes = Integer.parseInt(parts[1]);
    return hours * 60 + minutes;
}
```
```javascript []
var haveConflict = function(event1, event2) {
    // Helper function to convert "HH:MM" to minutes since 00:00
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Convert event start and end times to minutes since 00:00
    const start1 = timeToMinutes(event1[0]);
    const end1 = timeToMinutes(event1[1]);
    const start2 = timeToMinutes(event2[0]);
    const end2 = timeToMinutes(event2[1]);

    // Check if there is an overlap between event1 and event2
    return !(end1 < start2 || end2 < start1);
};
```
```typescript []
function haveConflict(event1: string[], event2: string[]): boolean {
    // Helper function to convert "HH:MM" to minutes since 00:00
    const timeToMinutes = (time: string): number => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // Convert event start and end times to minutes since 00:00
    const start1 = timeToMinutes(event1[0]);
    const end1 = timeToMinutes(event1[1]);
    const start2 = timeToMinutes(event2[0]);
    const end2 = timeToMinutes(event2[1]);

    // Check if there is an overlap between event1 and event2
    return !(end1 < start2 || end2 < start1);
};
```