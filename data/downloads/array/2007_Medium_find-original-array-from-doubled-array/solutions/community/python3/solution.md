# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 48
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2577514/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2577514/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

---

**C++ - HashMap Approach**

```cpp
// Time Complexity: O(N + NlogN)
// Space Complexity: O(N)
// where N is the number of elements in `changed` 
class Solution {
public:
    // hashmap approach
    vector<int> findOriginalArray(vector<int>& changed) {
        // if the length of the input is odd, then return {}
        // because doubled array must have even length
        if (changed.size() & 1) return {};
        // count the frequency of each number
        unordered_map<int, int> m;
        for (auto x: changed) m[x]++;
        vector<int> ans;
        // sort in ascending order
        sort(changed.begin(), changed.end());
        // keep the unique elements only in changed
        // think of test cases like [0,0,0,0]
        // alternatively you can handle it like
        // - check if the frequency of 0 is odd, if so, return {}
        // - push `0` `m[0] / 2` times to ans
        changed.erase(unique(changed.begin(), changed.end()), changed.end());
        // so that we can iterate `changed` from smallest to largest
        for (auto x : changed) {
            // if the number of m[x] is greater than than m[x * 2]
            // then there would be some m[x] left
            // therefore, return {} here as changed is not a doubled array
            if (m[x] > m[x * 2]) return {};
            for (int i = 0; i < m[x]; i++) {
                // otherwise, we put the element `x` `m[x]` times to ans
                ans.push_back(x);
                // at the same time we decrease the count of m[x * 2] by 1
                // we don't need to decrease m[x] by 1 as we won't use it again
                m[x * 2] -= 1;
            }
        }
        return ans;
    }
};
```

```cpp
// Time Complexity: O(N + KlogK)
// Space Complexity: O(N)
// where N is the number of elements in `changed` 
// and K is the number of elements in `uniqueNumbers`
class Solution {
public:
    // hashmap approach
    vector<int> findOriginalArray(vector<int>& changed) {
        // if the length of the input is odd, then return {}
        // because doubled array must have even length
        if (changed.size() & 1) return {};
        // count the frequency of each number
        unordered_map<int, int> m;
        for (auto x: changed) m[x]++;
        vector<int> ans;
        vector<int> uniqueNumbers;
		// push all unuque numbers to `uniqueNumbers`
        for (auto x : m) uniqueNumbers.push_back(x.first);
        // sort in ascending order
        sort(uniqueNumbers.begin(), uniqueNumbers.end());
        // so that we can iterate `changed` from smallest to largest
        for (auto x : uniqueNumbers) {
            // if the number of m[x] is greater than than m[x * 2]
            // then there would be some m[x] left
            // therefore, return {} here as changed is not a doubled array
            if (m[x] > m[x * 2]) return {};
            for (int i = 0; i < m[x]; i++) {
                // otherwise, we put the element `x` `m[x]` times to ans
                ans.push_back(x);
                // at the same time we decrease the count of m[x * 2] by 1
                // we don't need to decrease m[x] by 1 as we won't use it again
                m[x * 2] -= 1;
            }
        }
        return ans;
    }
};
```

**C++ - Multiset Approach**

```cpp
// Time Complexity: O(NlogN)
// Space Complexity: O(N)
// where N is the number of elements in `changed` 
class Solution {
public:
    // multiset approach
    vector<int> findOriginalArray(vector<int>& changed) {
        // if the length of the input is odd, then return {}
        // because doubled array must have even length
        if (changed.size() & 1) return {};
        vector<int> ans;
        // put all the elements to a multiset
        multiset<int> s(changed.begin(), changed.end());
        // keep doing the following logic when there is an element in the multiset
        while (s.size()) {
            // get the smallest element
            int smallest = *s.begin();
            ans.push_back(smallest);
            // remove the smallest element in multiset
            s.erase(s.begin());
            // if the doubled value of smallest doesn't exist in the multiset
            // then return {}
            if (s.find(smallest * 2) == s.end()) return {};
            // otherwise we can remove its doubled element
            else s.erase(s.find(smallest * 2));   
        }
        return ans;
    }
};
```

**Python**

```py
# Time Complexity: O(NlogN)
# Space Complextiy O(N)
# where N is the number of elements in `changed` 
class Solution:
    def findOriginalArray(self, changed):
        # use Counter to count the frequency of each element in `changed`
        cnt, ans = Counter(changed), []
        # if the length of the input is odd, then return []
        # because doubled array must have even length
        if len(changed) % 2: return []
        # sort in ascending order
        for x in sorted(cnt.keys()):
            # if the number of cnt[x] is greater than than cnt[x * 2]
            # then there would be some cnt[x] left
            # therefore, return [] here as changed is not a doubled array
            if cnt[x] > cnt[x * 2]: return []
            # handle cases like [0,0,0,0]
            if x == 0:
                # similarly, odd length -> return []
                if cnt[x] % 2:
                    return []
                else: 
                    # add `0` `cnt[x] // 2` times 
                    ans += [0] * (cnt[x] // 2)
            else:
                # otherwise, we put the element `x` `cnt[x]` times to ans
                ans += [x] * cnt[x]
            cnt[2 * x] -= cnt[x]
        return ans
```

**Java - Counting Sort**

```java
class Solution {
    // counting sort approach
    public int[] findOriginalArray(int[] changed) {
        int n = changed.length, j = 0;
        // if the length of the input is odd, then return []
        // because doubled array must have even length
        if (n % 2 == 1) return new int[]{};
        int[] ans = new int[n / 2];
        // alternatively, you can find the max number in `changed`
        // then use new int[2 * mx + 1]
        int[] cnt = new int[200005];
        // count the frequency of each number
        for (int x : changed) cnt[x] += 1;
        // iterate from 0 to max number
        for (int i = 0; i < 200005; i++) {
            // check if the count of number i is greater than 0
            if (cnt[i] > 0) {
                // number i exists, decrease by 1
                cnt[i] -= 1;
                // look for the doubled value
                if (cnt[i * 2] > 0) {
                    // doubled value exists, decrease by 1
                    cnt[i * 2] -= 1;
                    // add this number to ans
                    ans[j++] = i--;
                } else {
                    // cannot pair up, return []
                    return new int[]{};
                }
            }
        }
        return ans;
    }
}
```