# Rusty approach using custom Numerals struct and duplicate counting.

**Author:** jkoudys
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5707254/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5707254/)

---

# Intuition
"Hey, this should be easy, right?" I mean, it's just like part 1 but with two swaps instead of one. How hard could it be? Famous last words. Turns out, adding that second swap opens up a world of pain, and what seemed like a minor tweak quickly snowballed into a full-blown headache.

# Approach
If I'm going to have to write so much, I might as well take a Rusty approach and build something that bears a passing resemblance to real code.

I created a Numerals type because, why not? It lets me get the performance of using numbers directly but with the convenience of strings\u2014because sometimes you just need the best of both worlds.

Now, instead of doing something ridiculous like sorting every possible permutation of digits (ugh), I keyed everything on a simple digit count slice. Way quicker, way cleaner. Also, I figured out a neat little trick: counting repeating numbers in order to save time and memory. It\u2019s like LeetCode set me up, but I came prepared with a rusty hammer and nailed it anyway.

# Complexity
- Time complexity:
$$O(n^2)$$
Maybe? It's definitely a lot slower on big sets. I'm not paying premium and this is chatgpt's best guess.

- Space complexity:
$$O(n)$$
We only store a single, linear version of the data. The `i32`s get turned into `[u8; 8]`s and we add a few `[u8; 10s]`s as digit counts we can use to hash the numbers with the same digits together. We'll also remove duplicates, so on the balance it'll take a little more or a little less than 2x the input vec.

If you're really strapped for memory, you can do the old leetcode trick of changing the function arg to make the input vec mutable. I didn't since I think it's a cheap trick, but it does save you a little.

# Code
```rust []
use std::collections::HashMap;

const MAXNUMS: usize = 7;

#[derive(Debug, Clone, Copy, Eq, Hash, PartialEq, PartialOrd)]
struct Numerals([u8; MAXNUMS]);
impl Numerals {
    // A little count of how often each digit comes up, for using as a hash key
    // to match when two nums have the same digits
    fn digit_count(self) -> [u8; 10] {
        let mut count = [0; 10];
        for numeral in self.0.iter() {
            count[*numeral as usize] += 1;
        }
        count
    }
}

impl From<i32> for Numerals {
    // Take the digits from the number into our vec
    fn from(n: i32) -> Self {
        let mut n = n;
        let mut v = [0; MAXNUMS];
        for i in 0..MAXNUMS {
            v[MAXNUMS - 1 - i] = (n % 10) as u8;
            n /= 10;
        }
        Self(v)
    }
}

impl From<&i32> for Numerals {
    fn from(n: &i32) -> Self {
        Self::from(*n)
    }
}

// Helper function to check if two strings are almost equal (differ by up to two characters)
fn can_be_equal_with_two_swaps(s1: Numerals, s2: Numerals) -> bool {
    // If they're equal, they're also almost equal.
    if s1 == s2 {
        return true;
    }

    // Collect the differing u8 between the two numerals
    let dp: Vec<(u8, u8)> =
        s1.0.iter()
            .zip(s2.0.iter())
            .filter_map(|(&c1, &c2)| if c1 == c2 { None } else { Some((c1, c2)) })
            .take(5)
            .collect();

    // If there's only one diff when the numerals are the same, it's almost.
    if dp.len() == 2 {
        return true;
    }

    // Can't get to matching in more than 2 swaps then
    if dp.len() > 4 {
        return false;
    }

    // First pass: Direct swaps that cancel out a pair
    let mut marked: Vec<Option<(u8, u8)>> = dp.iter().map(|p| Some(*p)).collect();
    let mut swapcount = 0;
    for i in 0..marked.len() {
        if marked[i].is_none() {
            continue;
        }
        for j in i + 1..marked.len() {
            // flip and see if the swap cancels
            if let Some((c1, c2)) = marked[j] {
                if Some((c2, c1)) == marked[i] {
                    marked[i] = None;
                    marked[j] = None;
                    swapcount += 1;
                    break;
                }
            }
        }
    }
    if swapcount == 2 {
        true
    } else if dp.len() == 4 {
        false
    } else {
        // Graph through the 3 nodes looking for a loop. If it does, we've got a 2-swap
        (dp[0].1 == dp[1].0 && dp[1].1 == dp[2].0 && dp[2].1 == dp[0].0)
            || (dp[0].1 == dp[2].0 && dp[2].1 == dp[1].0 && dp[1].1 == dp[0].0)
    }
}

impl Solution {
    pub fn count_pairs(nums: Vec<i32>) -> i32 {
        let mut nums = nums.clone();
        nums.sort_unstable();
        nums.into_iter()
            .fold(Vec::new(), |mut nc: Vec<(i32, usize)>, e| {
                if let Some(last) = nc.pop() {
                    if e == last.0 {
                        nc.push((e, last.1 + 1));
                    } else {
                        nc.push(last);
                        nc.push((e, 1));
                    }
                } else {
                    nc.push((e, 1));
                }
                nc
            })
            .iter()
            .map(|(num, count)| (Numerals::from(num), *count))
            .fold(
                HashMap::new(),
                |mut sorted_map: HashMap<[u8; 10], Vec<(Numerals, usize)>>, original| {
                    let key = original.0.digit_count();
                    sorted_map.entry(key).or_default().push(original);
                    sorted_map
                },
            )
            .values()
            // Count up in each group that has the same digits, which can be swapped together
            .fold(0usize, |mut count, group| {
                let len = group.len();
                for i in 0..len {
                    // Shaped like itself
                    // Count pairs of identical numbers
                    count += group[i].1 * (group[i].1 - 1) / 2;
                    for j in i + 1..len {
                        count += (can_be_equal_with_two_swaps(group[i].0, group[j].0) as usize)
                            * group[i].1
                            * group[j].1;
                    }
                }
                count
            }) as i32
    }
}
```