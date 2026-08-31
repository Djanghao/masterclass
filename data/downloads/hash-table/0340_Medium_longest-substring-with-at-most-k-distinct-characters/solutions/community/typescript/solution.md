# Solution using two pointers

**Author:** vishalramani91
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/3649282/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/3649282/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    let hm = new Map();
    let start = 0;
    let end = 0;
    let ans = 0;
    while(end < s.length){
        let ch = s[end];
        hm.set(ch, hm.get(ch) + 1 || 1);

        while(hm.size > k){
            let prev = s[start];
            if(hm.get(prev) > 1) hm.set(prev, hm.get(prev) - 1);
            else hm.delete(prev);
            start++;
        }

        ans = Math.max(ans, end-start+1);
        end++;
    }

    return ans;
};
```

Feel free to comment in case of any doubts.
Please upvote if you like my solution.