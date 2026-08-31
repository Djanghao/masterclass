# 【Video】2 solutions - Counting and Sorting

**Author:** niits
**Votes:** 69
**Link:** [https://leetcode.com/problems/h-index/solutions/5935778/](https://leetcode.com/problems/h-index/solutions/5935778/)

---

# Intuition
Counting or Sorting citation counts.

---

# Solution Video

https://youtu.be/UCPTkQSvTTY

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 9,929
Thank you for your support!

---


# Solution 1

The description says "The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times."

---

\u2B50\uFE0F Points

We will find...

1. the maximum value of `h`
2. the researcher has at least `h` papers
3. the papers were cited at least `h` times

For example, if a researcher has an h-index of `3`, it means they have `3` papers that have each been cited at least `3` times.

---
```
Input: citations = [3,0,6,1,5]
```
We have `5` papers. Let's group the number of papers based on their citation counts.

```
citation_buckets = [0,0,0,0,0,0]
```
Indices are citation times. In the end,

```
index               0,1,2,3,4,5
citation_buckets = [1,1,0,1,0,2]
```
For example, we have one paper cited `0` times, `1` time and `3` times. We have two papers cited `5` times.

We can include `6` times into `5` times. Since we have only `5` papers, the highest value of `h` should be `5`, so there\u2019s no need to count citation times beyond `5` precisely. The description says "at least", so `6` times is "at least" more than `5` times.

The next step is to get maximum value of `h`, let's iteration through `citation_buckets` from the end. Indices are number of citations, so **if cumulative papers are greater than or equal to index number, that is h_index that meets 3 conditions above.**

```
 0,1,2,3,4,5 (= index: number of citations/h_index)
[1,1,0,1,0,2] (= number of papers)
           \u2191

cumulative_papers = 2

cumulative_papers >= h_index
= 2 >= 5
= false
-----------------------------------------------
 0,1,2,3,4,5 (= index: number of citations/h_index)
[1,1,0,1,0,2] (= number of papers)
         \u2191

cumulative_papers = 2 + 0

cumulative_papers >= h_index
= 2 >= 4
= false
-----------------------------------------------
 0,1,2,3,4,5 (= index: number of citations/h_index)
[1,1,0,1,0,2] (= number of papers)
       \u2191

cumulative_papers = 2 + 0 + 1

cumulative_papers >= h_index
= 3 >= 3
= true

```
```
return true
```
At index `2`, `1` and `0`, seems like we find `h_index` but **they are not index == number of papers and even if they are eqaul, they are not maximum because we had already `3` as h-index. That's why we iterate through from the end.**

---

https://youtu.be/bU_dXCOWHls

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        papers = len(citations)
        citation_buckets = [0] * (papers + 1)

        for citation in citations:
            citation_buckets[min(citation, papers)] += 1

        cumulative_papers = 0
        for h_index in range(papers, -1, -1):
            cumulative_papers += citation_buckets[h_index]
            if cumulative_papers >= h_index:
                return h_index   
```
```javascript []
var hIndex = function(citations) {
    let papers = citations.length;
    let citationBuckets = new Array(papers + 1).fill(0);

    for (let citation of citations) {
        citationBuckets[Math.min(citation, papers)] += 1;
    }

    let cumulativePapers = 0;
    for (let hIndex = papers; hIndex >= 0; hIndex--) {
        cumulativePapers += citationBuckets[hIndex];
        if (cumulativePapers >= hIndex) {
            return hIndex;
        }
    }    
};
```
```java []
class Solution {
    public int hIndex(int[] citations) {
        int papers = citations.length;
        int[] citationBuckets = new int[papers + 1];

        for (int citation : citations) {
            citationBuckets[Math.min(citation, papers)]++;
        }

        int cumulativePapers = 0;
        for (int hIndex = papers; hIndex >= 0; hIndex--) {
            cumulativePapers += citationBuckets[hIndex];
            if (cumulativePapers >= hIndex) {
                return hIndex;
            }
        }
        return 0;        
    }
}
```
```C++ []
class Solution {
public:
    int hIndex(vector<int>& citations) {
        int papers = citations.size();
        vector<int> citationBuckets(papers + 1, 0);

        for (int citation : citations) {
            citationBuckets[min(citation, papers)]++;
        }

        int cumulativePapers = 0;
        for (int hIndex = papers; hIndex >= 0; hIndex--) {
            cumulativePapers += citationBuckets[hIndex];
            if (cumulativePapers >= hIndex) {
                return hIndex;
            }
        }
        return 0;        
    }
};
```

# Step by Step Algorithm

#### 1. Initialize Variables:
```python
papers = len(citations)
citation_buckets = [0] * (papers + 1)
```
- **papers**: Calculate the total number of papers by getting the length of the `citations` list.
- **citation_buckets**: Create an array of size `papers + 1` initialized to zero. This array will count the number of papers that fall into different citation categories.

#### 2. Populate Citation Buckets:
```python
for citation in citations:
    citation_buckets[min(citation, papers)] += 1
```
- **Iterate through each citation count in the `citations` list**.
- For each citation, **determine the appropriate bucket index**:
  - Use `min(citation, papers)` to ensure that if a citation count exceeds the total number of papers, it counts towards the highest bucket (which is `papers`).
- **Increment the corresponding bucket in `citation_buckets`** to keep track of how many papers have that citation count.

#### 3. Calculate the h-index:
```python
cumulative_papers = 0
for h_index in range(papers, -1, -1):
    cumulative_papers += citation_buckets[h_index]
    if cumulative_papers >= h_index:
        return h_index
```
- **Initialize a variable `cumulative_papers` to zero**. This variable will track the cumulative count of papers with citations greater than or equal to the current h-index candidate.
- **Loop through `h_index` from `papers` down to `0`**:
  - For each `h_index`, **add the count of papers in the current bucket** (`citation_buckets[h_index]`) to `cumulative_papers`.
  - **Check if `cumulative_papers` is greater than or equal to `h_index`**. If so, **return `h_index`** as it represents the maximum h-index for which the condition is satisfied.

#### 4. Return 0 if no h-index Found:
```python
return 0
```
- **If the loop completes without finding a valid h-index**, return `0`, indicating that the researcher does not meet the criteria for any h-index.

---

# Solution 2

```
Input: citations = [3,0,6,1,5]
```

##### Sorting the citations
First, we sort the citation counts in ascending order. After sorting, the array becomes: `[0, 1, 3, 5, 6]`.

##### Calculating the h-index
Next, we check the condition by looking at each paper\u2019s position (index). Specifically, we check if the citation count is greater than or equal to the number of papers that come after it (`n - i`).

In a nutshell, `n - i` represents the number of papers that have been cited more than the current citation value.

```
For i = 0, citation = 0, and n - i = 5.
The condition 0 >= 5 does not hold.

For i = 1, citation = 1, and n - i = 4.
The condition 1 >= 4 does not hold.

For i = 2, citation = 3, and n - i = 3.
The condition 3 >= 3 holds true.
```

At this point, the condition holds for the first time, so the h-index is `n - i = 3`.

##### Why is the first valid condition the answer?
The first time the condition `citation >= n - i` holds is the maximum h-index. This is because it indicates that the paper has been cited more times than the number of papers that follow, and it\u2019s impossible to satisfy this condition for larger indexes.

if we continue the example above...

```
For i = 3, citation = 5, and n - i = 2. 
The condition 5 >= 2 holds true, but not citation == n - i

For i = 4, citation = 6, and n - i = 1.
The condition 6 >= 1 holds true, but not citation == n - i
```

##### Another Example
```
[10,8,5,4,3]
```
After sorting, the array becomes: `[3, 4, 5, 8, 10]`.
Let\u2019s check the condition `citation >= n - i` for each step.

```
For i = 0, citation = 3, and n - i = 5.
The condition does not hold.

For i = 1, citation = 4, and n - i = 4.
The condition holds.

```
In this case, the h-index is `n - i = 4`.


---

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(sort)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def hIndex(self, citations: List[int]) -> int:
        n = len(citations)
        citations.sort()

        for i, citation in enumerate(citations):
            if citation >= n - i:
                return n - i

        return 0  
```
```javascript []
var hIndex = function(citations) {
    const n = citations.length;
    citations.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (citations[i] >= n - i) {
            return n - i;
        }
    }

    return 0;    
};
```
```java []
class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length;
        Arrays.sort(citations);

        for (int i = 0; i < n; i++) {
            if (citations[i] >= n - i) {
                return n - i;
            }
        }

        return 0; 
    }
}
```
```C++ []
class Solution {
public:
    int hIndex(vector<int>& citations) {
        int n = citations.size();
        sort(citations.begin(), citations.end());

        for (int i = 0; i < n; i++) {
            if (citations[i] >= n - i) {
                return n - i;
            }
        }

        return 0;
    }
};
```




---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related question 
#76 - Minimum Window Substring

https://youtu.be/WGNaHa4853Q
