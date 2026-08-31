# Rust | O(n) | Sliding window

**Author:** jhndoe
**Votes:** 6
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/2795614/](https://leetcode.com/problems/permutation-in-string/solutions/2795614/)

---

I have 2 solutions, but they don't differ in algorithm. 
```
if s1.len() > s2.len() {
	return false;
}

let mut s1_count: [usize; 26] = [0; 26];
let mut s2_count: [usize; 26] = [0; 26];

let s1_bytes = s1.as_bytes();
let s2_bytes = s2.as_bytes();

for i in 0..s1.len() {
	s1_count[(s1_bytes[i] - b'a') as usize] += 1;
	s2_count[(s2_bytes[i] - b'a') as usize] += 1;
}

let mut matches: u8 = 0;
for i in 0..26 {
	if s1_count[i] == s2_count[i] {
		matches += 1;
	}
}

let mut l: usize = 0;
for r in s1.len()..s2.len() {
	if matches == 26 {
		return true;
	}

	let idx_left = (s2_bytes[l] - b'a') as usize;
	s2_count[idx_left] -= 1;
	if s1_count[idx_left] == s2_count[idx_left] {
		matches += 1;
	} else if s1_count[idx_left] == s2_count[idx_left] + 1 {
		matches -= 1;
	}

	let idx_right = (s2_bytes[r] - b'a') as usize;
	s2_count[idx_right] += 1;
	if s1_count[idx_right] == s2_count[idx_right] {
		matches += 1;
	} else if s1_count[idx_right] == s2_count[idx_right] - 1 {
		matches -= 1;
	}

	l += 1;
}

return (matches == 26);
```

So, I created a function, that updates matches, and added the lamda-function ```idx```.
```
impl Solution {
    pub fn check_inclusion(s1: String, s2: String) -> bool {
        if s1.len() > s2.len() {
            return false;
        }
        let idx = |c: u8| { (c - 'a' as u8) as usize };
        
        let mut s1_count: [usize; 26] = [0; 26];
        let mut s2_count: [usize; 26] = [0; 26];
        
        let s1_bytes: &[u8] = s1.as_bytes();
        let s2_bytes: &[u8] = s2.as_bytes();
        
        for i in 0..s1.len() {
            s1_count[idx(s1_bytes[i])] += 1;
            s2_count[idx(s2_bytes[i])] += 1;
        }
        
        let mut matches: u8 = 0;
        for i in 0..26 {
            if s1_count[i] == s2_count[i] {
                matches += 1;
            }
        }
        
        let mut l: usize = 0;
        for r in s1.len()..s2.len() {
            if matches == 26 {
                return true;
            }
            
            let idx_left: usize = idx(s2_bytes[l]);
            s2_count[idx_left] -= 1;
            update_matches(&s1_count, &s2_count, idx_left, true, &mut matches);
            
            let idx_right: usize = idx(s2_bytes[r]);
            s2_count[idx_right] += 1;
            update_matches(&s1_count, &s2_count, idx_right, false, &mut matches);
			
            l += 1;
        }
        
        return (matches == 26);
    }
}

fn update_matches(s1_count: &[usize; 26], s2_count: &[usize; 26], 
    idx: usize, is_left: bool, matches: &mut u8) {

        if s1_count[idx] == s2_count[idx] {
            *matches += 1;
        } else if ((is_left && s1_count[idx] == s2_count[idx] + 1) || 
            (!is_left && s1_count[idx] == s2_count[idx] - 1)) {
            *matches -= 1;
        }
    }
```

The algorithm was taken from [this video](https://www.youtube.com/watch?v=UbyhOgBN834).