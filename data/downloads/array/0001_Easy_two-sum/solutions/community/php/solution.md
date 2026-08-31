# [1LINER] O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 32
**Link:** [https://leetcode.com/problems/two-sum/solutions/2045849/](https://leetcode.com/problems/two-sum/solutions/2045849/)

---

**As a professional with a passion for problem-solving and collaboration, I am always looking to expand my network of like-minded individuals on LinkedIn. By connecting with me, we can work together to tackle complex challenges, share ideas, and grow both professionally and personally.**

**Whether you're an expert in your field or just starting out, I welcome connections from all backgrounds and experiences. By building a diverse and collaborative network, we can leverage our unique perspectives and skill sets to push the boundaries of what's possible.**

**So, if you're interested in connecting and exploring the potential for future collaborations, please don't hesitate to reach out. Let's start a conversation and see where it takes us!**

---

https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/
https://www.linkedin.com/in/cucerdariancatalin/

---
```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> tracker = new HashMap<Integer, Integer>();
        int len = nums.length;
        for(int i = 0; i < len; i++){
            if(tracker.containsKey(nums[i])){
                int left = tracker.get(nums[i]);
                return new int[]{left+1, i+1};
            }else{
                tracker.put(target - nums[i], i);
            }
        }
        return new int[2];
    }
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int b = nums[i], a = target - b;
            if (seen.count(a)) return {seen[a], i}; // Found pair of (a, b), so that a + b = target
            seen[b] = i;
        }
        return {};
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
   def twoSum(self, nums: List[int], target: int) -> List[int]:
       seen = {}
       for i, value in enumerate(nums): #1
           remaining = target - nums[i] #2
           
           if remaining in seen: #3
               return [i, seen[remaining]]  #4
           else:
               seen[value] = i  #5
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var twoSum = function(nums, target) {
var ans = [];
var map = {};
for (var i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
        ans[0] = parseInt(map[target - nums[i]]) ;
        ans[1] = i;
        return ans;
    } 
    map[nums[i]] = i;
}
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val diffMap = mutableMapOf<Int, Int>()
        nums.forEachIndexed { index, int -> 
            diffMap[int]?.let { return intArrayOf(it, index) }
            diffMap[target - int] = index   
        }
        return intArrayOf()
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func twoSum(_ n: [Int], _ t: Int) -> [Int] {
        var dict = [Int:Int]()
        for (i, n) in n.enumerated() {
            if let val = dict[t-n] { return [val, i] }
            dict[n] = i
        }
        return []
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
