# Easy understanding solution using custom data structure

**Author:** hsdsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/solutions/6192602/](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/solutions/6192602/)

---

I implmented Data struct to manage collections of numbers efficiently
You can add to or remove from a number to it. And you can get the count of cobinations if you pick up two numbers from it in following case:
get_two(n) : both of numbers equal n
get_one(n): one equals n but the other don't equal n
get_zero(n): both of numbers don't equal n

And that struct also keep the count of numbers added and the sum of get_two of all distinct number added.

The you choose i in 1 < i < nums.len()-2  and create two Data struct  and add nums[j]  0 <= j < i to one(left) and add nums[j]  i < j < nums.len() to the other(right)

Now you can count uniqe mddle mode. You have to count following 5 cases 
left.get_two(m)*right.get_two(m) : means all numbers equals m 
left.get_two(m)*right.get_one(m) : means 4 numbers equals m 
left.get_one(m)*right.get_two(m) : means 4 numbers equals m 
left.get_two(m)*right.get_zero(m) : means 3 numbers equals m 
left.get_zero(m)*right.get_two(m) : means 3 numbers equals m 

You don't have to count the case bellow
left.get_zero(m)*right.get_zero(m) : means 1 numbers equals m

Now you miss the case
left.get_zero(m)*right.get_one(m) : means 2 numbers equals m 
left.get_one(m)*right.get_zero(m) : means 2 numbers equals m 

This caluculation is not simple so I implmented it in the method combine.
You have to iterate the number (a) not equals m in get_one part . 
You have to pick two different numbers in get_zero part, which are different from m and a.
In the combine method ooc*(ooc-1)/2 means the count of the pair whose both elements are not equals a and m, (o.same_count_sum - omc*(omc-1)/2 - ovc*(ovc-1)/2) is the count of the pair whose elements are equal.


```
use std::collections::HashMap;
#[derive(Debug)]
struct Data {
    data: HashMap<i32,i64>,
    len: i64,
    same_count_sum: i64,
}
impl Data {
    const M: i64 = 1000000007;
    fn new() -> Data {
        Data {
            data: HashMap::new(),
            len: 0,
            same_count_sum: 0,
        }
    }
    fn add(&mut self, a: i32){
        let oac = *self.data.get(&a).unwrap_or(&0);
        self.data.insert(a, oac+1);
        self.same_count_sum += (oac+1)*oac/2-oac*(oac-1)/2;
        self.same_count_sum %= Data::M;
        self.len += 1;
    }
    pub fn remove(&mut self, a: i32){
        let oac = *self.data.get(&a).unwrap_or(&0);
        if oac == 1 {
            self.data.remove(&a);
        } else {
            self.data.insert(a, oac-1);
        }
        self.same_count_sum += (oac-2)*(oac-1)/2-oac*(oac-1)/2 + Data::M;
        self.same_count_sum %= Data::M;
        self.len -= 1;
    }
    pub fn get_two(&self, m: i32) -> i64 {
        let mc = *self.data.get(&m).unwrap_or(&0);
        return mc*(mc-1)/2;
    }
    pub fn get_one(&self, m: i32) -> i64 {
        let mc = *self.data.get(&m).unwrap_or(&0);
        return mc*(self.len-mc);
    }
    pub fn get_zero(&self, m: i32) -> i64 {
        let oc = self.len - *self.data.get(&m).unwrap_or(&0);
        return oc*(oc-1)/2;
    }
    pub fn combine(&self, m: i32, o: &Data) -> i64 {
        let mut ret: i64 = 0;
        let smc = *self.data.get(&m).unwrap_or(&0);
        if smc == 0 { return 0; }
        for (v,c) in &self.data {
            if *v == m { continue }
            let omc = *o.data.get(&m).unwrap_or(&0);
            let ovc = *o.data.get(v).unwrap_or(&0);
            let ooc = o.len - omc - ovc;
            ret += smc*c * (ooc*(ooc-1)/2 - (o.same_count_sum - omc*(omc-1)/2 - ovc*(ovc-1)/2)+ Data::M);
            ret %= Data::M;
        }
        return ret;
    }
}
impl Solution {
    pub fn subsequences_with_middle_mode(nums: Vec<i32>) -> i32 {
        let mut dpr: Data = Data::new(); 
        let mut dpl: Data = Data::new(); 
        dpl.add(nums[0]);
        dpl.add(nums[1]);
        for i in 2..nums.len() {
            dpr.add(nums[i]);
        }
        let mut ret: i64 = 0;
        for i in 2..nums.len()-2 {
            dpr.remove(nums[i]);
            ret += dpr.get_two(nums[i])*dpl.get_two(nums[i]);
            ret += dpr.get_one(nums[i])*dpl.get_two(nums[i]);
            ret += dpr.get_two(nums[i])*dpl.get_one(nums[i]);
            ret += dpr.get_two(nums[i])*dpl.get_zero(nums[i]);
            ret += dpr.get_zero(nums[i])*dpl.get_two(nums[i]);
            ret += dpr.get_one(nums[i])*dpl.get_one(nums[i]);
            ret += dpr.combine(nums[i], &dpl);
            ret += dpl.combine(nums[i], &dpr);
            ret %= Data::M;
            dpl.add(nums[i]);
        }
        return ret as i32;
    }
}
```