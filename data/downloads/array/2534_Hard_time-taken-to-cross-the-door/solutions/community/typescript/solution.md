# Top 100% Memory/Runtime Typescript Solution - Two Queue Approach

**Author:** JimDaGuy
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3896645/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3896645/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have a list of people trying to cross at different times. Seeing as we can receive more people than can be processed in a given second, we must make a queue to determine who can is waiting to be let through. Our queues can expand at each new second if new arrivals are found. We should keep track of the current time (starting at 0), find all arrivals at the door up until that second (inclusive), and determine who to let in first based on the conditions provided in the problem. Once this person is allowed through the crossing, we must increment the time, check for additional arrivals, update a variable tracking if someone exited/entered in the last second, and resume the process of picking from the queue.


# Approach
<!-- Describe your approach to solving the problem. -->
I first implemented this solution using a singular array to track the queue of people waiting to cross. The array held an object containing the index of the person in the arrivals array and whether or not they were entering. I would search from the front of the array for the first element that is exiting or entering based on who was prioritized. I would then remove this item from the array. This is an innefficient solution because it added an unneccessary O(n) search just to determine the first person matching our enter/exit criteria. It also used an O(n) splice to remove elements from our array.

Instead of tracking their exit/enter state inside the queue, we can keep two queues. One queue for entering and one for exiting. Now we know their entry/exit state without any search and removing and element from the front or back of an array (our queues) is an O(1) operation. We do not need to keep both queues in the same group because their order in relation to each other does not matter. We will always either remove the first entry from the exit queue or from the entrance queue when a crossing happens.

Because we can encounter a scenario where nobody is waiting at the door at a given second, we check who will cross at each second and increment the time and most recent crossing state afterwards. We check who is crossing at a given second until every arrival is processed. This means we could be stuck checking every second up until an arrival is found. A minor optimization could skip this checking until a new entry in the queue is found, but it would not save much time unless our arrival times were very large and far away from the others.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - We only process each arrival once. No additional searches are needed on the data. The arrival time 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - Our queues only scale in max length based on the length of our arrivals.

# Code
```
enum CrossState {
    None = 0,
    Entering = 1,
    Exiting = 2,
}

function timeTaken(arrival: number[], state: number[]): number[] {
    let currentTime = 0;  // Keeps track of time so we know what time a person completes a crossing 
    let crossings = new Array(arrival.length); // Empty array which will be updated as the indices each know their cross times.
    let entryQueue : number[] = []; // List of indices for people waiting to enter door
    let exitQueue : number[] = []; // List of indices for people waiting to exit door
    let mostRecentCrossState = CrossState.None;

    function resolveCurrentSecond() {
        // Nobody is waiting in the queues - no crossing
        if (entryQueue.length === 0 && exitQueue.length === 0) {
            //Update what last happened at the door
            mostRecentCrossState = CrossState.None;
            // Another second passes
            currentTime++;
            return;
        }

        // People only waiting to enter
        if (entryQueue.length >= 1 && exitQueue.length === 0) {
            // Remove earliest entering person from the queue
            const crosserIndex = entryQueue.shift();
            
            // Update index of the crossing with the current time
            crossings[crosserIndex] = currentTime;

            // Update last door action
            mostRecentCrossState = CrossState.Entering;
            // Another second passes
            currentTime++;
            return;
        }
        // People only waiting to exit or there are entries in both queues and exiting is prioritized based on mostRecentCrossState
        if ((entryQueue.length === 0 && exitQueue.length >= 1) || mostRecentCrossState !== CrossState.Entering) {
            // Remove earliest exiting person from the queue
            const crosserIndex = exitQueue.shift();
            
            // Update index of the crossing with the current time
            crossings[crosserIndex] = currentTime;
            
            // Update last door action
            mostRecentCrossState = CrossState.Exiting;
            // Another second passes
            currentTime++;
            return;
        }

        // Remaining cases are people entering and exiting with mostRecentCrossState set to Entering
        // Remove earliest entering person from the queue
        const crosserIndex = entryQueue.shift();
            
        // Update index of the crossing with the current time
        crossings[crosserIndex] = currentTime;

        // Update last door action
        mostRecentCrossState = CrossState.Entering;
        // Another second passes
        currentTime++;
    }

    // Process the entire list of people arriving
    for (let j = 0; j < arrival.length; j++) {
        // Add current arrival to the queue
        const currentArrivalTime = arrival[j];
        const currentArrivalEntering = state[j] === 0;

        // If the current crossing person has not arrived yet, 
        // Resolve seconds and current queue until they arrive and are added to the queue 
        while (currentTime < currentArrivalTime) {
            resolveCurrentSecond();
        }
        
        if (currentArrivalEntering) {
            entryQueue.push(j);
        } else {
            exitQueue.push(j);
        }
    }

    // Process anyone remaining in the queues after all arrivals have been queued or resolved
    while (entryQueue.length > 0 || exitQueue.length > 0) {
        resolveCurrentSecond();
    }

    // Return the fully processed arrival time array
    return crossings;
};
```