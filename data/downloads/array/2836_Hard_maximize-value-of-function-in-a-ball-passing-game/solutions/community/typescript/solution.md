# NO BIT MANIPULATION!! Javascript/Typescript Solution w/ Explanation

**Author:** wentland
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/4019903/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/4019903/)

---

# Approach
There is a pretty good explanation for the approach in the comments in the code. I just want to say that **this approach could be optimized way more**. 

Basically, we first find all the cycles, and mark their length and the sum of their values. We also mark all players which are not included in any cycles. We do this by going from player to player, marking all that are visited. When we reach a player who we already visited, we know we have a cycle. So we start going around the players again from this point, this time noting the length and sum until we reach that starting player again. While we do this, we remove the players from the `visited` set; this is so we know when the cycle has completed, and also so we can use all the players who are still in the `visited` set at the end to mark that they are not in any cycles. 

After we have found all the cycles, we calculate the value for starting the game with each player. We use the cycles we calulated to save on steps. If we find ourselves in a cycle, and we have at least enough passes left to complete the cycle, then we use that many passes and add the value of the cycle to our total. We then take the remainder of our passes and continue as usual. 

# Code
```
interface Cycle {
  length: number;
  value: number;
}

// Iterate through each until a cycle is found.
// Once the cycle is found (same player reached a second time) go through the cycle again.
// On the second round of the cycle, record the length and value of the cycle in an object.
// Share that object amongst all members of the cycle in an array.

const getMaxFunctionValue = (receiver: number[], k: number): number => {
  const cycles = new Array<false | Cycle>(receiver.length);

  // find all cycles
  for (let i = 0; i < receiver.length; i++) {
    if (cycles[i] !== undefined) continue; // already been checked
    let curPlayer = i;
    let cycle: Cycle = null;
    const visited = new Set<number>();
    while (true) {
      if (cycles[curPlayer] !== undefined) break; // already been checked
      if (visited.has(curPlayer) && !cycle) cycle = { length: 0, value: 0 }; // begining of cycle
      if (cycle) {
        visited.delete(curPlayer);
        cycle.length++;
        cycle.value += curPlayer;
        cycles[curPlayer] = cycle;
      } else visited.add(curPlayer);
      curPlayer = receiver[curPlayer];
    }
    for (const n of visited) cycles[n] = false; // mark players that are not in a cycle
  }

  let max = 0;

  for (let i = 0; i < receiver.length; i++) {
    let curPlayer = i;
    let value = i;
    let passes = k;
    while (passes) {
      const cycle = cycles[curPlayer];
      if (cycle && passes >= cycle.length) {
        value += cycle.value * Math.floor(passes / cycle.length);
        passes = passes % cycle.length;
        continue;
      }
      curPlayer = receiver[curPlayer];
      value += curPlayer;
      passes--;
    }
    max = Math.max(max, value);
  }

  return max;
};

```