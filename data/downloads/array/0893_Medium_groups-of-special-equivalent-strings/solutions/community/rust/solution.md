# Fast Rust solution with HashSet

**Author:** MezoBlast
**Votes:** 0
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/5110238/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/5110238/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key insight is that all characters originally at even indeces are always evenly indexed, same for oddly indexed.

The operation allows to permute any two even or two odd indeces at a time. All permutations between even indexed characters are allowed, which means that all generators of a permutation group is included. Thus special equivalence gives a group $S_{N/2}\	imes S_{N/2}$.

Such group tells us that ordering within all evenly/oddly indexed characters no longer matters. We only count the number of appearences of characters.



# Approach
<!-- Describe your approach to solving the problem. -->
Create two vectors to store the number of characters 'a'-'z'.
A simple hash set function to descriminate these vectors is needed.

The vector is simply hashed by calculating $2^{n_a}\\cdot 3^{n_b}\\cdot ... \\cdot 101^{n_z}$, where $n_a$ is the number of appearences of character 'a', and so forth for other characters.

Each word is firstly counted and then hashed to `(usize, usize)` type, which can be inserted to `std::collections::HashSet`.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(N*k*\\log{k})$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashSet;

fn get_primes() -> Vec<usize> {
    return vec![
        2, 3, 5, 7, 11,
        13, 17, 19, 23, 29,
        31, 37, 41, 43, 47,
        53, 59, 61, 67, 71,
        73, 79, 83, 89, 97,
        101,
    ]
}

fn count_word(word: String) -> (Vec<usize>, Vec<usize>) {
    let mut dict_even: Vec<usize> = vec![0usize; 26];
    let mut dict_odd: Vec<usize> = vec![0usize; 26];
    for (i, c) in word.chars().into_iter().enumerate() {
        if let Some(digit) = c.to_digit(36) {
            let d: usize = digit as usize - 10;
            if i%2 == 0 {
                dict_even[d] += 1;
            } else {
                dict_odd[d] += 1
            }
        };
    }
    return (dict_even, dict_odd);
}

fn hash_vec(v: Vec<usize>) -> usize {
    let mut hash: usize = 1;
    let p = get_primes();
    for (i, n) in v.iter().enumerate() {
        hash *= p[i].pow(*n as u32);
    }
    return hash
}

impl Solution {
    pub fn num_special_equiv_groups(words: Vec<String>) -> i32 {
        let mut set: HashSet<(usize, usize)> = HashSet::new();
        for w in words.into_iter() {
            let (v1, v2) = count_word(w);
            let (s1, s2) = (hash_vec(v1), hash_vec(v2));
            print!("({}, {})", s1, s2);
            set.insert((s1, s2));
        }
        return set.len() as i32;
    }
}
```