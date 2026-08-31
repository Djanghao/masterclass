# ✅Easiest 3 Step Cpp / Java / Py / JS Solution | Normal Approach🏆|  With Explanation

**Author:** dev_yash_
**Votes:** 86
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5418282/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5418282/)

---

### \uD83C\uDF1F **Step-by-Step Breakdown** \uD83C\uDF1F  

**1. \uD83D\uDEB6 Traverse the Linked List:**  
Identify critical points (either local minima or maxima).  
- Use pointers (`prev`, `curr`, and `next`) to compare the current node\u2019s value with its neighbors.  
- Critical Point:  
  - **Peak:** `curr.val > prev.val && curr.val > next.val`  
  - **Valley:** `curr.val < prev.val && curr.val < next.val`  

---

**2. \uD83D\uDCDD Record Positions of Critical Points:**  
Store the indices of critical points in a list for later calculations.  
- If no critical points or just one, skip the distance calculations.

---

**3. \uD83D\uDCCF Calculate Distances:**  
- **Minimum Distance:** Find the smallest gap between consecutive critical points.  
- **Maximum Distance:** Compute the distance between the first and last critical points.  
- Return `[-1, -1]` if fewer than two critical points are found.

---

**\uD83C\uDFAF Return the Results:**  
- If critical points exist: return `[minDistance, maxDistance]`.  
- Otherwise: return `[-1, -1]`.  

---



### \uD83D\uDCBB C++
```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    vector<int> nodesBetweenCriticalPoints(ListNode* head) {
        vector<int> criticalPts;
        ListNode* prev = nullptr;
        ListNode* curr = head;
        int pos = 0;
        while (curr->next != nullptr) {
            // 1.Traverse and find points
            if (prev != nullptr) {
                // 2.check local min and max and record position
                if ((curr->val > prev->val && curr->val > curr->next->val) ||
                    (curr->val < prev->val && curr->val < curr->next->val)) {
                    criticalPts.push_back(pos);
                }
            }
            prev = curr;
            curr = curr->next;
            pos++;
        }
        if (criticalPts.size() < 2) {
            return {-1, -1};
        }

        // 3. Calculate Distances
        int minDist = INT_MAX;
        int maxDist = criticalPts.back() - criticalPts.front();
        for (int i = 1; i < criticalPts.size(); i++) {
            minDist = min(minDist, criticalPts[i] - criticalPts[i - 1]);
        }

        // return ans
        return {minDist, maxDist};
    }
};

```
### Java
```
class Solution {
    public int[] nodesBetweenCriticalPoints(ListNode head) {
        if (head == null || head.next == null || head.next.next == null) {
            return new int[]{-1, -1};
        }

        List<Integer> criticalPts = new ArrayList<>();
        ListNode prev = null;
        ListNode curr = head;
        int pos = 0;

        while (curr != null && curr.next != null) {
            // 1. Traverse and find points
            if (prev != null) {
                // 2. Check local min and max and record position
                if ((curr.val > prev.val && curr.val > curr.next.val) ||
                    (curr.val < prev.val && curr.val < curr.next.val)) {
                    criticalPts.add(pos);
                }
            }
            prev = curr;
            curr = curr.next;
            pos++;
        }

        if (criticalPts.size() < 2) {
            return new int[]{-1, -1};
        }

        // 3. Calculate Distances
        int minDist = Integer.MAX_VALUE;
        int maxDist = criticalPts.get(criticalPts.size() - 1) - criticalPts.get(0);

        for (int i = 1; i < criticalPts.size(); i++) {
            minDist = Math.min(minDist, criticalPts.get(i) - criticalPts.get(i - 1));
        }

        // return ans
        return new int[]{minDist, maxDist};
    }
}
```

### Python3
```
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        if not head or not head.next or not head.next.next:
            return [-1, -1]

        criticalPts = []  
        prev = head
        curr = head.next
        pos = 1  

        while curr.next:
            # 1. Traverse and find points
            if (curr.val > prev.val and curr.val > curr.next.val) or (curr.val < prev.val and curr.val < curr.next.val):
                criticalPts.append(pos)  # Record position of critical points
            prev = curr
            curr = curr.next
            pos += 1  

        if len(criticalPts) < 2:
            return [-1, -1]

        # 2. Calculate Distances
        minDist = float('inf')
        maxDist = criticalPts[-1] - criticalPts[0]

        for i in range(1, len(criticalPts)):
            minDist = min(minDist, criticalPts[i] - criticalPts[i - 1])  # Find the minimum distance

        # Return the result
        return [minDist, maxDist]

```
### JavaScript
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    if (!head || !head.next || !head.next.next) {
        return [-1, -1];
    }

    const criticalPts = []; 
    let prev = head;
    let curr = head.next;
    let pos = 1;  

    while (curr.next) {
        // 1. Traverse and find points
        if ((curr.val > prev.val && curr.val > curr.next.val) || (curr.val < prev.val && curr.val < curr.next.val)) {
            criticalPts.push(pos);  // Record position of critical points
        }
        prev = curr;
        curr = curr.next;
        pos++; 
    }

    if (criticalPts.length < 2) {
        return [-1, -1];
    }

    // 2. Calculate Distances
    let minDist = Infinity;
    let maxDist = criticalPts[criticalPts.length - 1] - criticalPts[0];

    for (let i = 1; i < criticalPts.length; i++) {
        minDist = Math.min(minDist, criticalPts[i] - criticalPts[i - 1]);  // Find the minimum distance
    }

    // Return the result
    return [minDist, maxDist];
};


```
#### STAY COOL STAY DISCIPLINED..

![image](./images/0.gif)