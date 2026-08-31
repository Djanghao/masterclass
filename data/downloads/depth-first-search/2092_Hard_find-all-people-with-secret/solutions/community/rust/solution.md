# Some overly complex Rust solution + simplified version

**Author:** N0fail
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-people-with-secret/solutions/4775372/](https://leetcode.com/problems/find-all-people-with-secret/solutions/4775372/)

---

# Graph approach 221-257 ms
```
use std::collections::{BinaryHeap, HashMap, HashSet};
impl Solution {
    pub fn find_all_people(n: i32, mut meetings: Vec<Vec<i32>>, first_person: i32) -> Vec<i32> {
        // graph person->people he meets->at times
        let mut g: HashMap<i32, HashMap<i32, Vec<i32>>> = HashMap::with_capacity(n as usize);
        for meeting in meetings {
            g.entry(meeting[0]).and_modify(|to| {
                (*to).entry(meeting[1])
                    .and_modify(|time| time.push(meeting[2]))
                    .or_insert(vec![meeting[2]]);
            }).or_insert(HashMap::from([(meeting[1], vec![meeting[2]])]));
            g.entry(meeting[1]).and_modify(|to| {
                (*to).entry(meeting[0])
                    .and_modify(|time| time.push(meeting[2]))
                    .or_insert(vec![meeting[2]]);
            }).or_insert(HashMap::from([(meeting[0], vec![meeting[2]])]));
        }
        let mut pq: BinaryHeap<(i32, i32)> = BinaryHeap::new();
        pq.push((0, 0));
        pq.push((0, first_person));
        let mut visited: HashSet<i32> = HashSet::new();
        loop {
            match pq.pop() {
                None => break,
                Some((secret_time, person)) => {
                    if visited.contains(&person) {
                        continue;
                    }
                    visited.insert(person);
                    if let Some(person_meetings) = g.get(&person) {
                        for (person, meeting_times) in person_meetings {
                            if let Some(meeting_time) = meeting_times.iter().filter(|x| **x >= -secret_time).min() {
                                pq.push((-meeting_time, *person));
                            }
                        }
                    }
                }
            }
        }
        Vec::from_iter(visited.into_iter())
    }
}
```
# Same thing but simplified 98-113ms
```
use std::collections::{BinaryHeap, HashMap, HashSet};
impl Solution {
    pub fn find_all_people(n: i32, mut meetings: Vec<Vec<i32>>, first_person: i32) -> Vec<i32> {
        // person -> his meetings
        let mut g: HashMap<i32, Vec<(i32, i32)>> = HashMap::with_capacity(n as usize);
        for meeting in meetings {
            g.entry(meeting[0])
                .and_modify(|person_meetings| (*person_meetings).push((meeting[1], meeting[2])))
                .or_insert(vec![(meeting[1], meeting[2])]);
            g.entry(meeting[1])
                .and_modify(|person_meetings| (*person_meetings).push((meeting[0], meeting[2])))
                .or_insert(vec![(meeting[0], meeting[2])]);
        }
        let mut pq: BinaryHeap<(i32, i32)> = BinaryHeap::new();
        pq.push((0, 0));
        pq.push((0, first_person));
        let mut visited: HashSet<i32> = HashSet::new();
        loop {
            match pq.pop() {
                None => break,
                Some((secret_time, person)) => {
                    if visited.contains(&person) {
                        continue;
                    }
                    visited.insert(person);
                    if let Some(person_meetings) = g.get(&person) {
                        for (person, meeting_time) in person_meetings {
                            if *meeting_time >= -secret_time {
                                pq.push((-*meeting_time, *person));
                            }
                        }
                    }
                }
            }
        }
        Vec::from_iter(visited.into_iter())
    }
}
```
