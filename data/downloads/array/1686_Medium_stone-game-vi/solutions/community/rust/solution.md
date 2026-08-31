# Rust solution with proper proof/explanation on why it works

**Author:** LostInParadise
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/3991527/](https://leetcode.com/problems/stone-game-vi/solutions/3991527/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

From the example where Alice get `[1, 2]` and Bob gets `[3, 1]`, we immediately knows that greedy approach based solely on their own perspective won't work.

Hmm, why is that the case?
It's since when Alice gets the 0-th stone, she eliminates the possibility that Bob gets the 0-th.
Under such a competing game setup, we can say that the 0-th stone actually worths `1 + 3` to Alice.
Similar argument holds for Bob.

Both players, at first glance, values differently on different stones, but in such a competition, they actually have exactly the same consensus on what stones should be picked!

Can we proof such intuition in a more rigorous way? Yes, we could.
Let sum of Alice's values be `A` and `B` be that of Bob's.
Suppose for certain strategies, Alice picked certain stones, of which value sum is `VA` and consensus sum (i.e. sum of values of those picked of both Alice and Bob) is `CA`, similarly `VB` and `CB` for Bob.

Pseudo-code in rust would be like:
``` rust
use std::collections::HashSet;

let A = alice_values.iter().sum();
let mut alice_indices = HashSet::new();
// some Alice strategy to fill in the hash set
let VA = alice_indices.iter().fold(0, |sum, idx| sum + alice_values[idx]);
let CA = alice_indices.iter().fold(0, |sum, idx| sum + alice_values[idx] + bob_values[idx]);

let B = bob_values.iter().sum();
let mut bob_indices = HashSet::new();
// some Bob strategy to fill in the hash set
let VB = bob_indices.iter().fold(0, |sum, idx| sum + bob_values[idx]);
let CB = bob_indices.iter().fold(0, |sum, idx| sum + alice_values[idx] + bob_values[idx]);

let Alice_prevent_Bob_from_these = CA - VA;
let ApBft = &Alice_prevent_Bob_from_these;
let Bob_prevent_Alice_from_these = CB - VB;
let BpAft = &Bob_prevent_Alice_from_these;
```

Here's the most important observation: `BpAft + VA == A` and `ApBft + VB == B`, which is straightforward: sum of Alice's values is exactly those Alice got plus those Bob prevents Alice from obtaining.

Claim: `CA + A >= CB + B` iff Alice wins.
Proof:
`CA + A >= CB + B`
`VA + ApBft + A >= VB + BpAft + B` by definition of `ApBft` and `BpAft`
`VA + ApBft + BpAft + VA >= VB + BpAft + ApBft + VB` by our observation.
Cancel same terms, we have:
`VA + VA >= VB + VB`. Alice wins. Converse part is the same.

Finally, we note that `A`, `B`, and `CA + CB == A + B` are all constant.
Alice's optimal strategy is just maximizing `CA`, similarly Bob maximizing `CB`.
Again since `CA + CB == A + B` is constant, this becomes an obvious greedy game, where Alice and Bob pickes stone by its consensus value.

# Approach
<!-- Describe your approach to solving the problem. -->

To prevent overflow, based on the intuition that Alice and Bob won't have too much disagreement on value of any stone, we keep track of differences instead.
Recall that Alice win iff `CA + A >= CB + B`, which in term equivalent to `CA - CB >= B - A`, we record these two terms on the two sides of inequality.
Since both players' optimal way is choosing based on consensus sum, we make the consensus sum by summing the two array and sort it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n*lg(n))` since sort and linear scan.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Depends solely on sorting algorithm. Probably linear or constant.

# Code
```
impl Solution {
    pub fn stone_game_vi(alice_values: Vec<i32>, bob_values: Vec<i32>) -> i32 {
        let aliss_debt = alice_values
            .iter()
            .zip(bob_values.iter())
            .fold(0, |sum, (a, b)| sum + b - a);
        let mut consensus_worths = alice_values;
        consensus_worths
            .iter_mut()
            .zip(bob_values.iter())
            .for_each(|(n, b)| *n = *n + b);
        consensus_worths.sort_unstable();
        match consensus_worths
            .iter()
            .rev()
            .enumerate()
            .fold(0, |alice_margin_in_terms_of_consensus_worth, (idx, consensus)| {
                if idx % 2 == 0 {
                    alice_margin_in_terms_of_consensus_worth + consensus
                } else {
                    alice_margin_in_terms_of_consensus_worth - consensus
                }
            })
            .cmp(&aliss_debt)
        {
            std::cmp::Ordering::Less => -1,
            std::cmp::Ordering::Equal => 0,
            std::cmp::Ordering::Greater => 1,
        }
    }
}

```