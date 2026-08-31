# TypeScript / JavaScript solution using Binary Search

**Author:** htndev
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-election/solutions/5908828/](https://leetcode.com/problems/online-election/solutions/5908828/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are given the fact that we need to figure out who is a leader at a specific time period. If you even witnessed a real election race, you would see a graph with the difference of votes. We have a special condition that the winner is a person with the greatest number of leader position at a particular timestamp. Hence, we need to store leaderships at all time periods!
Let's see how the task wants us to assess who is the current leader based on the votes:
```
persons = [0, 1, 0, 0, 0, 1]
times = [5, 10, 15, 20, 25, 30]
```
We are given an array of 2 rivals in a row of 6 time periods.
At `times[0]` we clearly see that the current leader is a person `0`.
At `times[1]` the leader has changed. Given the consideration:
> In the case of a tie, the most recent vote (among tied candidates) wins

At `times[2]` we have another leader. It's `0`.
The person 0 gains its votes up til `times[4]`.
At `times[5]`, we have another leader, but(!) it doesn't changed the overall leadership. The person `0` used to be 4 times leader, hence it doesn't give any advantage to the person `1`.

# Approach
We are given an array of `persons`, it identifies the leader at a specific. As more votes a leader has, it means he is the current leader.
Let's build up a historical timeline of the leadership. In the constructor, we can initialize the `leadeders` timeline and fill it in with the corresponding value, using an auxilary map for votes count.
```typescript []
constructor(persons: number[], private readonly times: number[]) {
    const voteCounts = new Map<number, number>();
    let leader = -1;

    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        voteCounts.set(person, (voteCounts.get(person) || 0) + 1);
        const currentPersonVotes = voteCounts.get(person) ?? 0;
        const leadersVotes = voteCounts.get(leader) ?? 0;

        if (leader === -1 || currentPersonVotes >= leadersVotes) {
            leader = person;
        }

        this.leaders.push(leader);
    }
}
```
```javascript []
constructor(persons, times) {
    const voteCounts = new Map();
    let leader = -1;

    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        voteCounts.set(person, (voteCounts.get(person) || 0) + 1);
        const currentPersonVotes = voteCounts.get(person) ?? 0;
        const leadersVotes = voteCounts.get(leader) ?? 0;

        if (leader === -1 || currentPersonVotes >= leadersVotes) {
            leader = person;
        }

        this.leaders.push(leader);
    }
}

```
Based on the example from the [Intuition](#Intuition) section, we can assume that the `leaders` array will look like this:
```
leaders = [0, 1, 0, 0, 0, 0]
```
Given a sorted array of timestamps, we can leverage binary search by searching the value or the closest to it. We need to take to consideration that we need to find a value that either equals to the `t` or less than `t` and adjacent to possible `t`. E.g., if we query 5 and 5 is in the timeline, we return **5th** leader. If there is no 5 in the timeline, but we have 3 or 4, we need to return **4** because it's the closest value to `t` that was `5`. To get the result value, we can use `right` value to access the leader in a particular position.


# Complexity
- Time complexity:
  - `constructor`: $$O(N)$$
  - `q`: $$O(log N)$$

- Space complexity:
  - `constructor`: $$O(N)$$
  - `q`: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class TopVotedCandidate {
  private readonly leaders: number[] = [];

  constructor(persons: number[], private readonly times: number[]) {
    const voteCounts = new Map<number, number>();
    let leader = -1;

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];
      voteCounts.set(person, (voteCounts.get(person) || 0) + 1);
      const currentPersonVotes = voteCounts.get(person) ?? 0;
      const leadersVotes = voteCounts.get(leader) ?? 0;

      if (leader === -1 || currentPersonVotes >= leadersVotes) {
        leader = person;
      }

      this.leaders.push(leader);
    }
  }

  q(t: number): number {
    let left = 0;
    let right = this.times.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.times[mid] <= t) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return this.leaders[right];
  }
}
```
```javascript []
class TopVotedCandidate {
  leaders = [];

  constructor(persons, times) {
    const voteCounts = new Map();
    let leader = -1;

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];
      voteCounts.set(person, (voteCounts.get(person) || 0) + 1);
      const currentPersonVotes = voteCounts.get(person) ?? 0;
      const leadersVotes = voteCounts.get(leader) ?? 0;

      if (leader === -1 || currentPersonVotes >= leadersVotes) {
        leader = person;
      }

      this.leaders.push(leader);
    }
  }

  q(t) {
    let left = 0;
    let right = this.times.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.times[mid] <= t) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return this.leaders[right];
  }
}
```
