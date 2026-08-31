# ✅ [JS] Binary Search Approach w/ explanation 🔥

**Author:** ad0x99
**Votes:** 4
**Link:** [https://leetcode.com/problems/online-election/solutions/5332850/](https://leetcode.com/problems/online-election/solutions/5332850/)

---

**\uD83D\uDC4D In the event that you found my solution to be beneficial, I would be most grateful if you would consider UPVOTING IT. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Binary Search Approach

1. We create an `leadingVotes` array that will store the leading candidate for each timestamp (times). And a `times` array to store the input times array in the object's property for later reference.

2. We create a `voteCount` that will be used to keep track of the vote count for each person, and a `leading` variable to store the current leading candidate (initially set to 0).

3. **Building Leading Votes**: We iterate through each `person`, and inside the loop:
    - 3.1: We update the vote count for the current person to keep track how much votes the current person has received.

    - 3.2: We check if the current person's vote count is greater than or equal to the current leading candidate's vote count, it means the current person has either taken the lead or tied with the previous leader. We will update the leading variable to the current person to reflect the new or tied leading candidate.

    - 3.3: After that, we assign the current leading candidate (leading) to the corresponding timestamp (`times[i]`) in the leadingVotes array. This effectively stores the leading candidate for each time point based on the vote counts processed so far.

After building a list of leading votes for each timestamp. Inside the `q` function, we want to find the leading vote at specified time from the `leadingVotes` array using `binary search` (`upper bound` technique).

# Complexity

- Time complexity:
    - `TopVotedCandidate`: `O(n)`, where `n` is the length of `persons` array.
    - `q` method: `O(log n)`, where `n` is the number of `times`.

- Space complexity:
    - `TopVotedCandidate`: `O(n)`, where `n` is the length of `voteCount` map.
    - `q` method: `O(1)`

# Code

```javascript []
const TopVotedCandidate = function (persons, times) {
  this.leadingVotes = [];
  this.times = times;

  let n = persons.length;
  let voteCount = new Map();
  let leading = 0;

  for (let i = 0; i < n; i++) {
    voteCount.set(
      persons[i],
      voteCount.get(persons[i]) ? voteCount.get(persons[i]) + 1 : 1
    );

    // Update leading candidate if necessary
    if (voteCount.get(persons[i]) >= voteCount.get(leading)) {
      leading = persons[i];
    }

    this.leadingVotes[times[i]] = leading;
  }
};

// Perform binary search to find the closest time <= t
TopVotedCandidate.prototype.q = function (t) {
  let left = 0;
  let right = this.times.length - 1;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (this.times[mid] <= t) {
      ans = this.times[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return this.leadingVotes[ans];
};
```
```rust []
use std::collections::HashMap;

struct TopVotedCandidate {
    leading_votes: Vec<i32>, // Stores the leader at each index of `times`
    times: Vec<i32>,         // Stores the voting times
}

impl TopVotedCandidate {
    // Constructor
    fn new(persons: Vec<i32>, times: Vec<i32>) -> Self {
        let n = persons.len();
        let mut vote_count = HashMap::new();
        let mut leading_votes = Vec::with_capacity(n);
        let mut leading = -1;

        for i in 0..n {
            let person = persons[i];
            *vote_count.entry(person).or_insert(0) += 1;

            // Update leading candidate if necessary
            if leading == -1 || vote_count[&person] >= vote_count[&leading] {
                leading = person;
            }

            leading_votes.push(leading);
        }

        TopVotedCandidate {
            leading_votes,
            times,
        }
    }

    fn q(&self, t: i32) -> i32 {
        // Perform binary search to find the closest time <= t
        let mut left = 0;
        let mut right = self.times.len() - 1;
        let mut ans = 0;

        while left <= right {
            let mid = (left + right) / 2;

            if self.times[mid] <= t {
                ans = mid;
                left = mid + 1; // Search on the right half
            } else {
                right = mid - 1; // Search on the left half
            }
        }

        self.leading_votes[ans]
    }
}
```
