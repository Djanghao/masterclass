# Rust 0ms

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/video-stitching/solutions/5047716/](https://leetcode.com/problems/video-stitching/solutions/5047716/)

---

# Code
```
impl Solution {
    pub fn video_stitching(clips: Vec<Vec<i32>>, time: i32) -> i32 {
        let mut clips = clips.into_iter().map(|v| (v[0], v[1])).collect::<Vec<(i32, i32)>>();
        clips.sort_unstable_by_key(|&(s, e)| (e, s));
        let end = clips[clips.len() - 1].1;
        if end < time {return -1;}
        let mut dp = vec![i32::MAX; end as usize + 1];
        dp[0] = 0;
        for t in 0..=end {
            let &(s, e) = clips.get(clips.partition_point(|&(_, e)| e < t)).unwrap_or(&(0, 0));
            let mut tmp = i32::MAX;
            if t >= s {
                tmp = dp[s as usize..=t as usize].to_vec().into_iter().min().unwrap();
                if tmp != i32::MAX {tmp += 1;}
            }
            for x in dp[s as usize..=e as usize].iter_mut() {
                *x = tmp.min(*x);
            }
        }
        match dp[time as usize] {
            (i32::MAX) => -1,
            Other => dp[time as usize]
        }
    }
}
```