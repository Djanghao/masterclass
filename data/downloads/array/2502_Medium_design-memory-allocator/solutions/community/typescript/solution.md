# TypeScript - sorted array of ranges - Beats 100% - Clean - O(N)

**Author:** chrisDL
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/5785126/](https://leetcode.com/problems/design-memory-allocator/solutions/5785126/)

---

# Intuition
Idea is to keep track of allocated ranges in a sorted array and then insert allocations wherever there is a big-enough gap.

# Approach
To make the code more readible we create an Allocation class that has an `end` getter method which we use in a few places.
To allocate we simply iterate through the sorted array of already allocated ranges and find a large enough gap and insert the new allocation there. Finding a large-enough gap is simple: Iterate through all allocations and substract the `current` allocation's `end` from the `next` elements `start`. i.e. `gap_size = next.start - cur.end`.
If we don't find a large enough gap we return -1.

Note that we need to deal with the following edge cases of gap positions:
1. no memory allocated so far - aka the entire range is a "gap" (this is handled by the first if block)
2. we have a large enough gap at the beginning (this is handled by the first if block as well)
3. we have a large enough gap at the end. This is handled in the for loop by defaulting to `capacity` if no `next.start` exists to compare the `cur` allocation to.

# Complexity
- Time complexity:
$$O(N)$$ - where N is the capacity

- Space complexity:
$$O(N)$$ - where N is the capacity

# Code
```typescript []

class Allocation {
    constructor(
        public mID: number,
        public start: number,
        public size: number
    ) { }

    get end() {
        return this.start + this.size;
    }

}

class Allocator {

    allocations: Allocation[] = []

    constructor(public capacity: number) {}

    allocate(size: number, mID: number): number {

        // in case there are no allocations we simply default this variable to `capacity`, indicating the entire mem space is unoccupied.
        const occupiedRangeStart = this.allocations[0]?.start ?? this.capacity;

        if (occupiedRangeStart >= size) {
            this.allocations.unshift(new Allocation(mID, 0, size))
            return 0;
        }

        // look for large enough gap between 2 consecutive allocations
        for (let i = 0; i < this.allocations.length; i++) {

            const cur = this.allocations[i];
            const next = this.allocations[i + 1];

            // the ?? this.capacity handles the edge case where we are in the for-loop but landed at the last element and hence there is no "next" element compare to. 
            // Hence we simply use this.capacity to mark the end of the free range to determine the gap size.
            const gapSize = (next?.start ?? this.capacity) - cur.end;

            if (gapSize >= size) {
                this.allocations.splice(i + 1, 0, new Allocation(mID, cur.end, size));
                return cur.end;
            }
        }

        return -1
    }

    free(mID: number): number {

        let freed = 0;
        this.allocations = this.allocations.filter(allocation => {
            const toBeFreed = allocation.mID === mID;
            if (toBeFreed) {
                freed += allocation.size
            }
            return !toBeFreed
        });
        return freed;
    }
}
```