# two oriented-different solution, beat 80% at speed, hashmap, pairs

**Author:** SingSongZepf
**Votes:** 0
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/5292066/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/5292066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
	pub fn alert_names(key_name: Vec<String>, mut key_time: Vec<String>) -> Vec<String> {
		let mut tn: Vec<(String, i32)> = key_time.into_iter().enumerate().map(|(idx, t)| {
			(key_name[idx].to_owned(), t.replace(":", "").parse().unwrap())
		}).collect::<Vec<_>>();
		tn.sort_by_key(|t| t.1);

		let mut hm = HashMap::<String, Vec<i32>>::new();
		let mut res = HashSet::new();

		for (name, time) in tn {
			if res.contains(&name) {
				continue;
			}
			hm.entry(name.clone()).or_insert(vec![]).push(time);
			if let Some(times) = hm.get_mut(&name) {
				if times.len() > 2 {
					if times[times.len()-1] - times[times.len()-3] <= 100 {
						res.insert(name.clone());
					}
				}
			}
		}

		let mut res: Vec<String> = res.into_iter().collect();
		res.sort();
		return res;
	}
}


impl Solution1 {
  pub fn alert_names(key_name: Vec<String>, key_time: Vec<String>) -> Vec<String> {
    let mut map = std::collections::HashMap::new();

    for (name, time) in key_name.iter().zip(key_time.iter()) {
      let time = time
        .split(':')
        .map(|s| s.parse::<i32>().unwrap())
        .collect::<Vec<_>>();

      let time = time[0] * 60 + time[1];

      map.entry(name).or_insert(vec![]).push(time);
    }

    let mut res = vec![];

    for (name, times) in map {
      let mut times = times;

      times.sort();

      for (i, j) in (2..times.len()).enumerate() {
        if times[j] - times[i] <= 60 {
          res.push(name.to_string());
          break;
        }
      }
    }

    res.sort();

    res
  }
}
```