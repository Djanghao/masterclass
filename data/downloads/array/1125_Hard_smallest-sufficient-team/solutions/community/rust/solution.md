# Rust | Memoization, bitsets

**Author:** tifv
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-sufficient-team/solutions/3772978/](https://leetcode.com/problems/smallest-sufficient-team/solutions/3772978/)

---

# Approach
We will find/memoize a mapping of subsets of skills to minimal subsets of people. For any given subset of skills, we will select one skill and iterate through people that implement it; particular person's other skills will be subtracted from the necessary skill set, and recursion will be applied. Of resulting sets of people, the one with the minimal size will be selected.

# Complexity
- Time complexity: $O\\bigl(2^n \\cdot (n + m)\\bigr)$, where $n$ is the number of skills and $m$ is the number of people.

- Space complexity: $O\\bigl(2^n \\cdot (n + m)\\bigr)$.

Using bitsets for skill sets and people sets appears to make this solution rather efficient (1ms, 2.2Mb). Replacing `HashMap` as cache with `Vec` improves speed, but consumes much more memory.

# Code
```
pub mod bitset {

#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash)]
pub struct BitSet<C>(C);

macro_rules! impl_bitset { ($T:ty) => {
    impl BitSet<$T> {
        #[inline]
        pub fn empty() -> Self {
            Self(0)
        }
        #[inline]
        pub fn full(size: u32) -> Self {
            if size == <$T>::BITS {
                Self(!0)
            } else {
                Self(<$T>::checked_shl(1, size).unwrap() - 1)
            }
        }
        #[inline]
        pub fn contains(&self, index: u32) -> bool {
            self.0 & (<$T>::checked_shl(1, index).unwrap()) > 0
        }
        #[inline]
        pub fn is_subset(&self, other: &Self) -> bool {
            self.0 & other.0 == self.0
        }
        #[inline]
        pub fn min(&self) -> Option<u32> {
            match self.0.trailing_zeros() {
                <$T>::BITS => None,
                index => Some(index),
            }
        }
        #[inline]
        pub fn with(&self, index: u32) -> Self {
            Self(self.0 | <$T>::checked_shl(1, index).unwrap())
        }
        #[inline]
        pub fn add(&mut self, index: u32) -> () {
            *self = self.with(index);
        }
        #[inline]
        pub fn without(&self, index: u32) -> Self {
            Self(self.0 - (self.0 & <$T>::checked_shl(1, index).unwrap()))
        }
        #[inline]
        pub fn without_set(&self, other: &Self) -> Self {
            Self(self.0 - (self.0 & other.0))
        }
        #[inline]
        pub fn remove(&mut self, index: u32) -> () {
            *self = self.without(index);
        }
        #[inline]
        pub fn count(&self) -> u32 {
            self.0.count_ones()
        }
    }
    impl Iterator for BitSet<$T> {
        type Item = u32;
        #[inline]
        fn next(&mut self) -> Option<u32> {
            match BitSet::<$T>::min(&self) {
                None => None,
                Some(index) => {
                    self.0 -= unsafe {
                        // SAFETY: .min() always returns a value in range
                        <$T>::checked_shl(1, index).unwrap_unchecked()
                    };
                    Some(index)
                },
            }
        }
    }
    impl std::iter::FromIterator<u32> for BitSet<$T> {
        #[inline]
        fn from_iter<T: IntoIterator<Item=u32>>(iter: T) -> BitSet<$T> {
            let mut set = Self::empty();
            for value in iter {
                set.add(value);
            }
            set
        }
    }
}; }

impl_bitset!(u16);
impl_bitset!(u64);

} // mod bitset


use std::collections::HashMap;

use bitset::BitSet;
type SkillSet = BitSet<u16>;
type PeopleSet = BitSet<u64>;

impl Solution {

    pub fn smallest_sufficient_team(
        req_skills: Vec<String>,
        people: Vec<Vec<String>>,
    ) -> Vec<i32> {
        let n = req_skills.len() as u32;
        let m = people.len() as u32;
        let people_skills: Vec<SkillSet> = {
            let rev_skills = req_skills.into_iter().enumerate()
                .map(|(i, name)| (name, i as u32))
                .collect::<std::collections::HashMap<_,_>>();
            people.into_iter().map( |person_skills|
                person_skills.into_iter()
                    .map(|name| rev_skills[&name])
                    .collect()
            ).collect()
        };
        let people_by_skill: Vec<PeopleSet> = (0..n).map(|skill| {
            people_skills.iter().enumerate().filter_map( |(i, skills)|
                if !skills.contains(skill) {
                    None
                } else {
                    Some(i as u32)
                }
            ).collect()
        }).collect();
        Solution::smallest_sufficient_team_recurse(
            &mut HashMap::new(),
            &people_skills, &people_by_skill,
            SkillSet::full(n),
        ).map(|x| x as i32).collect::<Vec<_>>()
    }

    pub fn smallest_sufficient_team_recurse(
        cache: &mut HashMap<SkillSet,PeopleSet>,
        people_skills: &Vec<SkillSet>,
        people_by_skill: &Vec<PeopleSet>,
        skills: SkillSet,
    ) -> PeopleSet {
        match cache.get(&skills) {
            None => (),
            Some(&team) => return team,
        }
        let team = match skills.min() {
            None => PeopleSet::empty(),
            Some(skill) => people_by_skill[skill as usize]
                .map( |i|
                    Solution::smallest_sufficient_team_recurse(
                        cache, people_skills, people_by_skill,
                        skills.without_set(&people_skills[i as usize]),
                    ).with(i)
                )
                .min_by_key(|team| team.count())
                .expect("someone should have this skill"),
        };
        cache.insert(skills, team);
        return team;
    }

}
```