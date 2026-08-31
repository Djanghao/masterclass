# [EXPLAINED] Using TypeScript, Runtime Beats 94.74%, Memory Beats 42.10%

**Author:** r9n
**Votes:** 6
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/5671488/](https://leetcode.com/problems/time-based-key-value-store/solutions/5671488/)

---

# Intuition
Store values with timestamps in sorted order for each key. Use binary search to efficiently find the most recent value before the queried timestamp. This ensures quick lookups and updates.

# Approach
Data Storage: Use a Map where each key maps to a sorted list of timestamp-value pairs.

Insertion: Add new timestamp-value pairs to the list associated with the key.

Query: Use binary search on the sorted list to find the closest timestamp less than or equal to the queried timestamp.

# Complexity
 Time complexity:
O(logN) for binary search (set and get).

Space complexity:
O(N) for storing timestamps and values.

# Code
```typescript []
class TimeMap {
    private map: Map<string, [number[], string[]]>; // [timestamps, values]

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this.map.has(key)) {
            this.map.set(key, [[], []]); // Initialize with empty arrays for timestamps and values
        }
        const [timestamps, values] = this.map.get(key)!;
        const index = this.binarySearch(timestamps, timestamp);
        if (index < timestamps.length && timestamps[index] === timestamp) {
            values[index] = value; // Update value if timestamp exists
        } else {
            timestamps.splice(index, 0, timestamp); // Insert new timestamp
            values.splice(index, 0, value); // Insert corresponding value
        }
    }

    get(key: string, timestamp: number): string {
        if (!this.map.has(key)) {
            return "";
        }
        const [timestamps, values] = this.map.get(key)!;
        const index = this.binarySearch(timestamps, timestamp);
        return index > 0 ? values[index - 1] : ""; // Return the value for the closest timestamp
    }

    private binarySearch(timestamps: number[], target: number): number {
        let low = 0;
        let high = timestamps.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (timestamps[mid] <= target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}

// Example usage:
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // Output: "bar"
console.log(timeMap.get("foo", 3)); // Output: "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // Output: "bar2"
console.log(timeMap.get("foo", 5)); // Output: "bar2"

```