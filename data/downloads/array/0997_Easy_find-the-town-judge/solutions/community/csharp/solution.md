# Beats100%🚀|| Brute➡️Optimal Both Explained || [Java/C++/C#/Python3/JavaScript/Rust]

**Author:** Shivansu_7
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/4767529/](https://leetcode.com/problems/find-the-town-judge/solutions/4767529/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 1 brute
1. **Initializing Trust Count Array:**
    - **Description:** Initialize an array to keep track of the number of trusts each person has.
    - **Code Snippet:** `int[] countTrust = new int[n+1]`;
2. **Iterating Through Trust Relationships:**
    - **Description:** Loop through each trust relationship and update the trust count array accordingly.
    - **Code Snippet:** `for(int[] judge : trust) { ... }`
3. **Identifying the Judge:**
    - **Description:** Check the trust count array to find the person trusted by everyone else.
    - **Code Snippet:** `for(int i=1; i<=n; i++) { ... }`
4. **Returning the Judge or -1:**
    - **Description:** Return the index of the judge if found, otherwise return -1.
    -**Code Snippet:** return `i`; and return `-1`;
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] countTrust = new int[n+1];

        for(int[] judge : trust) {
            countTrust[judge[0]]--;
            countTrust[judge[1]]++;
        }

        for(int i=1; i<=n; i++) {
            if(countTrust[i]==n-1) {
                return i;
            }
        }  
        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<int> countTrust(n+1, 0);

        for(const auto& judge : trust) {
            countTrust[judge[0]]--;
            countTrust[judge[1]]++;
        }

        for(int i=1; i<=n; i++) {
            if(countTrust[i]==n-1) {
                return i;
            }
        }  
        return -1;
    }
};
```
```Python3 []
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        countTrust = [0] * (n + 1)

        for judge in trust:
            countTrust[judge[0]] -= 1
            countTrust[judge[1]] += 1

        for i in range(1, n + 1):
            if countTrust[i] == n - 1:
                return i

        return -1
```
```Rust []
struct Solution;

impl Solution {
    pub fn find_judge(n: i32, trust: Vec<Vec<i32>>) -> i32 {
        let mut count_trust = vec![0; (n + 1) as usize];

        for judge in trust.iter() {
            count_trust[judge[0] as usize] -= 1;
            count_trust[judge[1] as usize] += 1;
        }

        for i in 1..=n as usize {
            if count_trust[i] == n - 1 {
                return i as i32;
            }
        }
        
        -1
    }
}
```
```Ruby []
class Solution
    def find_judge(n, trust)
        count_trust = Array.new(n+1, 0)

        trust.each do |judge|
            count_trust[judge[0]] -= 1
            count_trust[judge[1]] += 1
        end

        (1..n).each do |i|
            return i if count_trust[i] == n - 1
        end
        
        -1
    end
end
```
```C# []
public class Solution {
    public int FindJudge(int n, int[][] trust) {
        int[] countTrust = new int[n+1];

        foreach (var judge in trust) {
            countTrust[judge[0]]--;
            countTrust[judge[1]]++;
        }

        for (int i = 1; i <= n; i++) {
            if (countTrust[i] == n - 1) {
                return i;
            }
        }
        
        return -1;
    }
}
```
```JavaScript []
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let countTrust = new Array(n + 1).fill(0);

    for (let judge of trust) {
        countTrust[judge[0]]--;
        countTrust[judge[1]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (countTrust[i] === n - 1) {
            return i;
        }
    }

    return -1;
};
```

---

# Approach 2 Optimize
1. **Initializing Trust Count Array:** Initialize an array to keep track of the number of trusts each person has.
2. **Iterating Through Trust Relationships:** Loop through each trust relationship and update the trust count array accordingly.
3. **Identifying the Judge:** Check the trust count array to find the person trusted by everyone else.
4. **Returning the Judge or -1:** Return the index of the judge if found, otherwise return -1.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] countTrust = new int[n+1];

        for(int[] judge : trust) {
            countTrust[judge[0]]--;
            countTrust[judge[1]]++;
        }

        for(int i=1; i<=n; i++) {
            if(countTrust[i]==n-1) {
                return i;
            }
        }  
        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<int> countTrust(n+1, 0);

        for(const auto& judge : trust) {
            countTrust[judge[0]]--;
            countTrust[judge[1]]++;
        }

        for(int i=1; i<=n; i++) {
            if(countTrust[i]==n-1) {
                return i;
            }
        }  
        return -1;
    }
};
```
```Python3 []
class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        countTrust = [0] * (n + 1)

        for judge in trust:
            countTrust[judge[0]] -= 1
            countTrust[judge[1]] += 1

        for i in range(1, n + 1):
            if countTrust[i] == n - 1:
                return i

        return -1
```
```C# []
public class Solution {
    public int FindJudge(int n, int[][] trust) {
        int[] countTrust = new int[n+1];

        foreach (var judge in trust) {
            countTrust[judge[0]]--;
            countTrust[judge[1]]++;
        }

        for (int i = 1; i <= n; i++) {
            if (countTrust[i] == n - 1) {
                return i;
            }
        }
        
        return -1;
    }
}
```
```JavaScript []
var findJudge = function(n, trust) {
    let countTrust = new Array(n + 1).fill(0);

    for (let judge of trust) {
        countTrust[judge[0]]--;
        countTrust[judge[1]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (countTrust[i] === n - 1) {
            return i;
        }
    }

    return -1;
};
```
```Ruby []
class Solution
    def find_judge(n, trust)
        count_trust = Array.new(n+1, 0)

        trust.each do |judge|
            count_trust[judge[0]] -= 1
            count_trust[judge[1]] += 1
        end

        (1..n).each do |i|
            return i if count_trust[i] == n - 1
        end
        
        -1
    end
end
```
```Rust []
class Solution
    def find_judge(n, trust)
        count_trust = Array.new(n+1, 0)

        trust.each do |judge|
            count_trust[judge[0]] -= 1
            count_trust[judge[1]] += 1
        end

        (1..n).each do |i|
            return i if count_trust[i] == n - 1
        end
        
        -1
    end
end
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)

