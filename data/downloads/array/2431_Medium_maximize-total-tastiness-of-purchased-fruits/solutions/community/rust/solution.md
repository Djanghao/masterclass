# ✅ [Rust] 3 ms, RIDICULOUSLY FAST (100%) using sort + DP + cache (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2673903/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2673903/)

---

This [**solution**](https://leetcode.com/submissions/detail/817425049/) employs dynamic programming with cache/memoization and a preliminary sorting of items to improve convergence. It demonstrated **3 ms runtime (100.00%)** and used **4.4 MB memory (100.00%)**. Time complexity is linear: **O(n\\*a\\*c)**. Here, *a=maxAmount* and *c=maxCoupons*. Space complexity is constant: **O(n\\*a\\*c)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn max_tastiness(price: Vec<i32>, tastiness: Vec<i32>, max_amount: i32, max_coupons: i32) -> i32 
    {
        // [1] to improve convergence of the DP algorithm,
        //     sort by price/tastiness ratio first
        let mut pt_ratios: Vec<(f32,i32,i32)> = 
            price.into_iter()
                 .zip(tastiness.into_iter())
                 .map(|(p, t)| (p as f32 / t as f32, p, t)).collect();
        pt_ratios.sort_unstable_by(|&a,&b| b.0.partial_cmp(&a.0).unwrap());
        
        // [2] this helper function (with activated cache/memoization)
        //     performs DP scan... (a variant of 0/1 Knapsack problem)
        fn helper(amount: i32, coupons: i32, i: usize, pt_ratios: &Vec<(f32,i32,i32)>, memo: &mut [i32;6*100*1000+1]) -> i32 
        {
            if i >= pt_ratios.len() { return 0; }
            
            let key = (coupons as usize)*100000 + i * 1000 + (amount as usize);
            if memo[key] >= 0 { return memo[key]; }
            
            let p = pt_ratios[i].1;
            let t = pt_ratios[i].2;
            
            let t_buy = if amount < p { 0 }
                        else { helper(amount-p,   coupons,   i+1, pt_ratios, memo) + t };
            let t_cpn = if coupons <= 0 || amount < p/2 { 0 }
                        else { helper(amount-p/2, coupons-1, i+1, pt_ratios, memo) + t };
            let t_skp =        helper(amount,     coupons,   i+1, pt_ratios, memo);

            let val = t_buy.max(t_cpn).max(t_skp);
            memo[key] = val;
            return val;
        }
        
        helper(max_amount, max_coupons, 0, &pt_ratios, &mut [-1;600001])
    }
}
```
