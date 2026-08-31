# ✅ [Python/Rust/C++] smart & concise solution using separators (with detailed comments)

**Author:** iablokov
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-and-say/solutions/2718001/](https://leetcode.com/problems/count-and-say/solutions/2718001/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
**** 
**Comment.** There are many somewhat similar solutions to this problem here on LeetCode. For the sake of diversity, I provide a different solution using separators. Given that the maximal size of the problem is *n=30*, it turns out that the **run-time** is not bad at all, while the **write-time** (and ease of perception) is awesome. 
**** 
**Python.** This [**solution**](https://leetcode.com/submissions/detail/825127932/) employs separators to guide iteration through blocks of repeating digits. It demonstrated **37 ms runtime (99.10%)** and used **14.1 MB memory (16.06%)**. Time complexity is exponential: **O(expN)**. Space complexity is exponential: **O(expN)**.
```
class Solution:
    def countAndSay(self, n: int) -> str:
        
        # [1] only 3 repetitiotns of any digit is possible, thus,
        #     we can list all possible boundaries between blocks
        sep = { "12" : "1|2", "21" : "2|1", "13" : "1|3", 
                "31" : "3|1", "23" : "2|3", "32" : "3|2"}
        
        say = "1"
        
        # [2] at each iteration:
        #     - first, place separators between blocks
        #     - second, split using separators and build new saying
        for _ in range(n-1):
            for w, r in sep.items(): say = say.replace(w, r)
            say = "".join([f"{len(b)}{b[0]}" for b in say.split("|")])
            
        return say
```
**** 
**Rust.** This [**solution**](https://leetcode.com/submissions/detail/825130109/) employs separators to guide iteration through blocks of repeating digits. It demonstrated **2 ms runtime (72.92%)** and used **2.3 MB memory (20.83%)**. Time complexity is exponential: **O(expN)**. Space complexity is exponential: **O(expN)**.
```
impl Solution 
{
    pub fn count_and_say(n: i32) -> String 
    {
        // [1] only 3 repetitions of any digit is possible, thus,
        //     we can list all possible boundaries between blocks
        let sep = [("12", "1|2"), ("21", "2|1"), ("13", "1|3"),
                   ("31", "3|1"), ("23", "2|3"), ("32", "3|2")];
        
        let mut say = String::from("1");
        
        // [2] at each iteration:
        //     - first, place separators between blocks
        //     - second, split using separators and build new saying
        for _ in 0..n-1
        {
            say = sep.iter()
                     .fold(say, |s, &r| s.replace(r.0, r.1));

            say = say.split("|")
                     .map(|s| format!("{}{}", s.len(), s.chars().nth(0).unwrap()))
                     .fold(String::with_capacity(4500), |s, add| s + &add);
        }

        return say;
    }
}
```
**** 
**\u0421++.** This [**solution**](https://leetcode.com/submissions/detail/825141001/) employs separators to guide iteration through blocks of repeating digits. It demonstrated **108 ms runtime (14.61%)** and used **30.2 MB memory (21.61%)**. Time complexity is exponential: **O(expN)**. Space complexity is exponential: **O(expN)**.
```
class Solution 
{
public:
    string countAndSay(int n) 
    {
        // [1] only 3 repetitions of any digit is possible, thus,
        //     we can list all possible boundaries between blocks
        map<string,string> sep = {{"12", "1|2"}, {"21", "2|1"}, {"13", "1|3"},
                                  {"31", "3|1"}, {"23", "2|3"}, {"32", "3|2"}};
        
        string say = "1";
        string block;
        
        // [2] on each iteration:
        //     - first, place separators between blocks
        //     - second, split using separators and build new saying
        for (int i = 0; i < n-1; ++i)
        {
            for(auto [src, dst]: sep) 
                say = regex_replace(say, regex(src), dst);
            
            istringstream ss(say);
            string new_say = "";
            new_say.reserve(4500);
            while(getline(ss, block, '|')) 
                new_say += to_string(block.size()) + block[0];
            say = new_say;
        }
        
        return say;
    }
};
```
