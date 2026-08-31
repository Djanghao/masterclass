# ✅one line|BEATS 100% Runtime||Explanation✅

**Author:** vishnoi29
**Votes:** 310
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/4121915/](https://leetcode.com/problems/number-of-good-pairs/solutions/4121915/)

---

# Intution
we have to count the occurrence of the same elements
with` A[i] == A[j]` and `i < j`

# Approach
- We will `intiliaze ans with 0` and an empty` unordered map` to store the occurrence of the element 
- For each element in the given array:
- Here there will be 2 cases
  1. if element/number is `present in the map` that means for example at any time in unordered map we saw count of num(element) 1 is 2 thats means currunt element can form 2 pair with previous 1, so at that time `we will add this count in answer` and also` increase the count of the element in out map`
  2. If element/number is `not present in the map`, it means this is the first time we're seeing this number, so we `initialize its count to 1.`
- At last we will return our answer

# Complexity
- Time complexity : `O(N)`
- Space complexity : `O(N)`
# Codes
```C++_one_line []
class Solution {
public:
            int numIdenticalPairs(vector<int>& A) {
        return accumulate(A.begin(), A.end(), 0, [count = unordered_map<int, int> {}] (auto x, auto y) mutable {
            return x + count[y]++;
        });
    }
};
```
```C++ []
class Solution {
public:
        int numIdenticalPairs(vector<int>& A) {
        int ans = 0;
        unordered_map<int, int> cnt;
        for (int x: A) {
        ans += cnt[x]++;
        }
        return ans;
    }
};
```
```java []
class Solution {
        public int numIdenticalPairs(int[] A) {
        int ans = 0, cnt[] = new int[101];
        for (int a: A) {
            ans += cnt[a]++;
        }
        return ans;
    }
}
```
```Python []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        return sum([math.comb(n, 2) for n in collections.Counter(nums).values()])      
```
```C# []

public class Solution
{
    public int NumIdenticalPairs(int[] A)
    {
        int ans = 0;
        Dictionary<int, int> cnt = new Dictionary<int, int>();
        foreach (int x in A)
        {
            if (cnt.ContainsKey(x))
                ans += cnt[x]++;
            else
                cnt[x] = 1;
        }
        return ans;
    }
}

```
```Rust []

use std::collections::HashMap;
impl Solution {
    pub fn num_identical_pairs(a: Vec<i32>) -> i32 {
        let mut ans = 0;
        let mut cnt = HashMap::new();
        
        for x in a.iter() {
            ans += cnt.get(x).unwrap_or(&0);
            *cnt.entry(*x).or_insert(0) += 1;
        }
        
        ans
    }
}

```
```ruby []
def num_identical_pairs(a)
  ans = 0
  cnt = Hash.new(0)
  
  a.each do |x|
    ans += cnt[x]
    cnt[x] += 1
  end
  
  ans
end

```
```javascript []
function numIdenticalPairs(A) {
    let ans = 0;
    const cnt = {};
    
    for (let x of A) {
        ans += cnt[x] || 0;
        cnt[x] = (cnt[x] || 0) + 1;
    }
    
    return ans;
}


```
```Go []
package main

func numIdenticalPairs(A []int) int {
    ans := 0
    cnt := make(map[int]int)
    
    for _, x := range A {
        ans += cnt[x]
        cnt[x]++
    }
    
    return ans
}

```
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
   function numIdenticalPairs($A) {
    $ans = 0;
    $cnt = [];
    
    foreach ($A as $x) {
        $ans += $cnt[$x] ?? 0;
        $cnt[$x] = ($cnt[$x] ?? 0) + 1;
    }
    
    return $ans;
}

}
```


If you really found my solution helpful **please upvote it**, as it motivates me to post such kind of codes.
**Let me know in comment if i can do better.**
Let's Connect on **[LINKDIN](https://www.linkedin.com/in/mahesh-vishnoi-a4a47a193)**

![upvote.jfif](./images/0.jpeg)



