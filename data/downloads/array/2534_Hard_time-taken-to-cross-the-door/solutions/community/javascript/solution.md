# Javascript O(N) time O(1) space

**Author:** GeorgeTaveras1231
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4748491/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/4748491/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The arrival times are already sorted incrementally, and we need allow a single person through the door at a time.

This means the problem can be approached similarly to the problem of merging two sorted lists (list of people exiting, and list of people entering). The complexity comes from nailing down the rules for choosing which element from which list to choose next. 

The other part that relates to the times assigned is just a simple counter that goes up by 1 whenever a person is allowed in -- the counter must also account for the arrival time of the choosen person: if the next person arrives after the current time, then their entering time is their arrival time, and the arrival time adjusts to this time.

# Approach
<!-- Describe your approach to solving the problem. -->
Use two pointers. An entering pointer, and an exiting pointer. Additionally, initialize a `currentTime` that starts at the first arrival.

Iterate through the list until one of the pointers reaches the end.

During the iteration, check who is as a candidate to pass through the door.


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) Not counting result. Can be modified to inplace alg
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```js
const indexAfter = (arr, target, after = -1) => {
    for (let i = after + 1; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return arr.length;
}
const timeTaken = (arrival, states) => {
    let lastPerson = -1;
    let currentTime = arrival[0];
    const times = Array.from(arrival);

    let entering = indexAfter(states, 0);
    let exiting = indexAfter(states, 1);

    const letEnter = () => {
        currentTime = Math.max(currentTime, arrival[entering]);
        lastPerson = entering;
        times[entering] = currentTime++;
        entering = indexAfter(states, 0, entering);
    }

    const letExit = () => {
        currentTime = Math.max(currentTime, arrival[exiting]);
        lastPerson = exiting;
        times[exiting] = currentTime++
        exiting = indexAfter(states, 1, exiting);
    }

    while (entering < arrival.length && exiting < arrival.length) {
        currentTime = Math.max(
            currentTime, 
            Math.min(arrival[entering], arrival[exiting])
        );

        const enteringQueued = arrival[entering] <= currentTime;
        const exitingQueued = arrival[exiting] <= currentTime;

        if (enteringQueued && exitingQueued && times[lastPerson] === currentTime - 1) {
            if (states[lastPerson] === 0) {
                letEnter()
            } else {
                letExit()
            }
        } else if (exitingQueued) {
            letExit()
        } else {
            letEnter()
        }
    }

    while (entering < arrival.length) {
        letEnter();
    }
    while (exiting < arrival.length) {
        letExit();
    }

    return times;
};
```