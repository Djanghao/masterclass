# rolling hash, nL^(1/2)

**Author:** asherlau
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5548682/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5548682/)

---

```
use std::time::{SystemTime, UNIX_EPOCH};
use std::collections::BTreeMap;
use std::cmp::min;
impl Solution {
pub fn minimum_cost(target: String, words: Vec<String>, costs: Vec<i32>) -> i32 {
    let target = target.as_bytes();
    let words: Vec<Vec<u8>> = words.into_iter().map(|s| s.as_bytes().to_vec()).collect();
    let costs: Vec<i64> = costs.into_iter().map(|c| c as i64).collect();
    let n = target.len();
    let BASE = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .subsec_nanos() as i64;
    let mut pre_hash:Vec<i64> = vec![0; n + 1];
    let mut pow_base:Vec<i64> = vec![0; n + 1];
    let m: i64 = 1000000017;
    pow_base[0] = 1;
    for i in 0..n{
        pow_base[i + 1] = (pow_base[i] * BASE)%m;
        pre_hash[i + 1] = (pre_hash[i] * BASE + target[i] as i64)%m;
    }
    let sub_hash = |lft: i64, rght: i64|->i64{
        let lft = lft as usize;
        let rght = rght as usize;
        return ((pre_hash[rght] - pre_hash[lft]*pow_base[rght - lft])%m+ m)%m;
    };
    let mut min_cost: BTreeMap<i64, BTreeMap<i64, i64>> = BTreeMap::new();
    for i in 0..words.len(){
        let mut h = 0;
        let len = words[i].len() as i64;
        for &c in words[i].iter(){
            h = (h*BASE + (c as i64))%m;
        }
        min_cost.entry(len).and_modify(|mc|{
            mc.entry(h).and_modify(|mcost|{
                *mcost = min(*mcost, costs[i]);
            }).or_insert(costs[i]);
        }).or_insert(BTreeMap::from([(h, costs[i])]));
    }

    let mut dp: Vec<i32> = vec![std::i32::MAX/2; n + 1];
    dp[0] = 0;
    for i in 0..=n{
        for (&len, mc) in min_cost.iter(){
            if len > (i as i64) {break;}
            let tmp_res = mc.get(&sub_hash(i as i64 - len, i as i64));
            match tmp_res{
                Some(str_min_cost)=>{
                    dp[i] = min(dp[i - len as usize] + (*str_min_cost as i32), dp[i]);
                },
                None=>{ continue; }
            };
        }
    }
    if dp[n] != std::i32::MAX/2{
        return dp[n];
    }else{
        return -1;
    }
}
}
```