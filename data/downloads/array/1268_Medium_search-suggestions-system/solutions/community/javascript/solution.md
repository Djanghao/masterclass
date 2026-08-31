# JS, Python, Java, C++ | Easy Iterative Solution w/ Explanation

**Author:** sgallivan
**Votes:** 49
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/1242832/](https://leetcode.com/problems/search-suggestions-system/solutions/1242832/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Despite the fact that the clues suggest a **binary search** and a **trie**, the optimal solution to this problem needs neither. The substrings formed by adding one letter at a time from the search word (**S**) are naturally already in lexicographical order, as are the results that we're instructed to push into our answer array (**ans**).

So if we sort the products array (**P**), we should only ever need to iterate through **P** once during the entire remaining process of the solution with a **time complexity** of **O(N)**. A single binary search would only require **log(N) time**, but we'd have to perform **M = S.length** binary searches, so in total they would take **O(M * log(N)) time**, compared to the **O(N)** time of a simple iteration.

With constraints of **1000** on both **M** and **N**, the binary search route would max out at a worse time complexity than iteration. Regardless, the sort itself, which is required for both, requires **O(N * log(N))** time already, so neither option can decrease the overall time complexity required.

So in order to only require a single pass through **P**, we should keep track of the current bounds for the range of matches (**left, right**), then we'll iterate through the characters (**c**) of **S**. At each iteration, we'll first want to move **left** forward and **right** back to narrow the range of matches based on the new value of **c**.

Then we can add the next three elements of **P** to our result array (**res**), as long as they fall inside the range **[left, right]**. Once that's done, we can add **res** to **ans** and move to the next iteration.

Once we've finished iterating through **S**, we can **return ans**.

 - _**Time Complexity: O(N * log(N))** where **N** is the length of **P**_
 - _**Space Complexity: O(1)** excluding output space required for **ans**_

---

#### ***Javascript Code:***

The best result for the code below is **108ms / 49.5MB** (beats 100% / 99%).
```javascript
var suggestedProducts = function(P, S) {
    P.sort()
    let ans = [], left = 0, right = P.length - 1
    for (let i = 0; i < S.length; i++) {
        let c = S.charAt(i), res = []
        while (P[left]?.charAt(i) < c) left++
        while (P[right]?.charAt(i) > c) right--
        for (let j = 0; j < 3 && left + j <= right; j++)
            res.push(P[left+j])
        ans.push(res)
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **60ms / 16.8MB** (beats 99% / 99%).
```python
class Solution:
    def suggestedProducts(self, P: List[str], S: str) -> List[List[str]]:
        P.sort()
        ans, left, right = [], 0, len(P) - 1
        for i in range(len(S)):
            c, res = S[i], []
            while left <= right and (len(P[left]) == i or P[left][i] < c): left += 1
            while left <= right and (len(P[right]) == i or P[right][i] > c): right -= 1
            for j in range(3):
                if left + j > right: break
                else: res.append(P[left+j])
            ans.append(res)
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **6ms / 44.5MB** (beats 100% / 68%).
```java
class Solution {
    public List<List<String>> suggestedProducts(String[] P, String S) {
        Arrays.sort(P);
        List<List<String>> ans = new ArrayList<>();
        int left = 0, right = P.length - 1;
        for (int i = 0; i < S.length(); i++) {
            List<String> res = new ArrayList<>();
            char c = S.charAt(i);
            while (left <= right && (P[left].length() == i || P[left].charAt(i) < c)) left++;
            while (left <= right && (P[right].length() == i || P[right].charAt(i) > c)) right--;
            for (int j = 0; j < 3 && left + j <= right; j++)
                res.add(P[left+j]);
            ans.add(res);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **32ms / 26.2MB** (beats 96% / 86%).
```c++
class Solution {
public:
    vector<vector<string>> suggestedProducts(vector<string>& P, string S) {
        sort(P.begin(), P.end());
        vector<vector<string>> ans;
        int left = 0, right = P.size() - 1;
        for (int i = 0; i < S.length(); i++) {
            vector<string> res;
            char c = S[i];
            while (left <= right && (P[left].length() == i || P[left][i] < c)) left++;
            while (left <= right && (P[right].length() == i || P[right][i] > c)) right--;
            for (int j = 0; j < 3 && left + j <= right; j++)
                res.push_back(P[left+j]);
            ans.push_back(res);
        }
        return ans;
    }
};
```