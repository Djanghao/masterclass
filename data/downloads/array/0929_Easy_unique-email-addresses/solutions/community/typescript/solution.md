# ✅Explained Step by Step | Video | List Most Common Array Interview Problems✅

**Author:** Piotr_Maminski
**Votes:** 7
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/6031687/](https://leetcode.com/problems/unique-email-addresses/solutions/6031687/)

---

https://youtu.be/TC_xLIWl7qY?si=9Zxc3XqkkB2T1UU3

```python3 []
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        unique_emails = set()
        for email in emails:
            local, domain = email.split('@')
            local = local.split('+')[0]
            local = local.replace('.', '')
            unique_emails.add((local, domain))
        return len(unique_emails)
```
```cpp []
class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        set<pair<string, string>> uniqueEmails;
        
        for (const string& email : emails) {
            size_t atPos = email.find('@');
            string local = email.substr(0, atPos);
            string domain = email.substr(atPos + 1);
            
            size_t plusPos = local.find('+');
            if (plusPos != string::npos) {
                local = local.substr(0, plusPos);
            }
            
            local.erase(remove(local.begin(), local.end(), '.'), local.end());
            uniqueEmails.insert({local, domain});
        }
        
        return uniqueEmails.size();
    }
};
```
```java []
class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> uniqueEmails = new HashSet<>();
        
        for (String email : emails) {
            String[] parts = email.split("@");
            String local = parts[0];
            String domain = parts[1];
            
            local = local.split("\\\\+")[0];
            local = local.replace(".", "");
            
            uniqueEmails.add(local + "@" + domain);
        }
        
        return uniqueEmails.size();
    }
}
```
```csharp []
public class Solution {
    public int NumUniqueEmails(string[] emails) {
        var uniqueEmails = new HashSet<string>();
        
        foreach (string email in emails) {
            string[] parts = email.Split('@');
            string local = parts[0];
            string domain = parts[1];
            
            local = local.Split('+')[0];
            local = local.Replace(".", "");
            
            uniqueEmails.Add($"{local}@{domain}");
        }
        
        return uniqueEmails.Count;
    }
}
```
```golang []
func numUniqueEmails(emails []string) int {
    uniqueEmails := make(map[string]bool)
    
    for _, email := range emails {
        parts := strings.Split(email, "@")
        local, domain := parts[0], parts[1]
        
        if plusIndex := strings.Index(local, "+"); plusIndex != -1 {
            local = local[:plusIndex]
        }
        
        local = strings.ReplaceAll(local, ".", "")
        uniqueEmails[local+"@"+domain] = true
    }
    
    return len(uniqueEmails)
}
```
```swift []
class Solution {
    func numUniqueEmails(_ emails: [String]) -> Int {
        var uniqueEmails = Set<String>()
        
        for email in emails {
            let parts = email.split(separator: "@")
            var local = String(parts[0])
            let domain = String(parts[1])
            
            if let plusIndex = local.firstIndex(of: "+") {
                local = String(local[..<plusIndex])
            }
            
            local = local.replacingOccurrences(of: ".", with: "")
            uniqueEmails.insert(local + "@" + domain)
        }
        
        return uniqueEmails.count
    }
}
```
```javascript [JS]
// JavaScript

var numUniqueEmails = function(emails) {
    const uniqueEmails = new Set();
    
    for (const email of emails) {
        const [local, domain] = email.split('@');
        const cleanLocal = local.split('+')[0].replace(/\\./g, '');
        uniqueEmails.add(`${cleanLocal}@${domain}`);
    }
    
    return uniqueEmails.size;
};
```
```typescript [TS]
// TypeScript

function numUniqueEmails(emails: string[]): number {
    const uniqueEmails = new Set<string>();
    
    for (const email of emails) {
        const [local, domain] = email.split('@');
        const cleanLocal = local.split('+')[0].replace(/\\./g, '');
        uniqueEmails.add(`${cleanLocal}@${domain}`);
    }
    
    return uniqueEmails.size;
}
```
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn num_unique_emails(emails: Vec<String>) -> i32 {
        let mut unique_emails = HashSet::new();
        
        for email in emails {
            let parts: Vec<&str> = email.split('@').collect();
            let mut local = parts[0].to_string();
            let domain = parts[1].to_string();
            
            if let Some(plus_idx) = local.find('+') {
                local.truncate(plus_idx);
            }
            
            local = local.replace(".", "");
            unique_emails.insert(format!("{}@{}", local, domain));
        }
        
        unique_emails.len() as i32
    }
}
```
```ruby []
def num_unique_emails(emails)
    unique_emails = Set.new
    
    emails.each do |email|
        local, domain = email.split('@')
        local = local.split('+')[0]
        local = local.delete('.')
        
        unique_emails.add("#{local}@#{domain}")
    end
    
    unique_emails.size
end
```


### Complexity
- Time complexity: O(n)




- Space complexity: O(n)




# Explanation


 


---


1. Initialize a Set for Unique Emails:`unique_emails = set()`
- A set called unique_emails is created to store unique email addresses as tuples. Sets are used here because they automatically handle duplicates (only unique items are stored).

2. Loop Through Each Email:`for email in emails:`
- For each email in the input list emails, the method performs the following steps to normalize the email address.
3. Split the Email Address:`local, domain = email.split('@')`
- The email is split into two parts: `local` (the part before `@`) and `domain` (the part after `@`).
4. Process the Local Part:`local = local.split('+')[0]`

- If there is a `+` in the `local` part, everything after the `+` is ignored by taking only the part before the `+`. This is because anything after `+` in the local part is considered irrelevant according to the problem.

5. Remove Periods in the Local Part:`local = local.replace('.', '')`
- All periods . are removed from the local part, as they do not affect the actual email address.

6. Add the Processed Email to the Set:`unique_emails.add((local, domain))`
- The processed `local` and `domain` parts are combined into a tuple and added to `unique_emails`. The set ensures that only unique email addresses are kept.

7. Return the Count of Unique:`Emails:return len(unique_emails)`

- Method returns the number of unique email addresses by taking the length of the `unique_emails` set.


---
![array2.png](./images/0.png)
# Most common Array Interview Problems
List based on my research (interviews, reddit, github) Probably not 100% accurate but very close to my recruitments. Leetcode Premium is probably more accurate [I don't have]


**Easy:** [[1. Two Sum]](https://leetcode.com/problems/two-sum/solutions/5999466/beats-100-explained-step-by-step-list-most-common-array-inverview) **(common warm-up)** [[121. Best Time to Buy and Sell Stock]](https://leetcode.com/discuss/topic/6027720/solution/) [[88. Merge Sorted Array]](https://leetcode.com/problems/merge-sorted-array/solutions/6031394/beats-100-explained-step-by-step-list-most-common-string-interview-problems) [[27. Remove Element]](https://leetcode.com/problems/remove-element/solutions/6031528/beats-100-explained-step-by-step-list-most-common-array-interview-problems) [[929. Unique Email Addresses]](https://leetcode.com/problems/unique-email-addresses/solutions/6031687/explained-step-by-step-video-list-most-common-array-interview-problems) 


**Medium/Hard:** [[15. 3Sum]](https://leetcode.com/problems/3sum/description/) [[42. Trapping Rain Water]](https://leetcode.com/problems/trapping-rain-water/?envType=problem-list-v2&envId=atbyk0mj) [[56. Merge Intervals]](https://leetcode.com/problems/merge-intervals/description/) [[57. Insert Interval]](https://leetcode.com/problems/insert-interval/description/) [[46. Permutations]](https://leetcode.com/problems/permutations/description/) [[53. Maximum Subarray]](https://leetcode.com/problems/maximum-subarray/description/) [[73. Set Matrix Zeroes]](https://leetcode.com/problems/set-matrix-zeroes/description/) [[284. Peeking Iterator]](https://leetcode.com/problems/peeking-iterator/description/)


####  [Interview Questions and Answers Repository](https://github.com/RooTinfinite/Interview-questions-and-answers)

# Interview Priorities


| Patterns                | Difficulty | Interview Frequently           |
|----------------------|---------------------|----------------------|
| **Basic [Array](https://leetcode.com/problems/two-sum/solutions/5999466/beats-100-explained-step-by-step-list-most-common-array-inverview) / [String](https://leetcode.com/problems/valid-parentheses/solutions/6013115/solution)**                 | **Easy**              | **Very High**               |
| **Two Pointers**         | **Easy**                | **High**                 |
| **Sliding Window**       | **Easy**                | **High**                 |
| **Breadth-First Search** | **Easy**                | **High**                 |
| **Depth-First Search**   | **Medium**              | **High**                 |
| **[Backtracking](https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/5976064/complex-backtracking-interview-prepare-list-of-backtracking-questions-beats-100)**         | **High**                | **High**                 |
| Heap                 | Medium              | Medium               |
| Binary Search        | Easy                | Medium               |
| [Dynamic Programming](https://leetcode.com/problem-list/atwflvk7/)  | High                | Medium               |
| Divide and Conquer   | Medium              | Low                  |
| Trie                 | Medium              | Low                  |
| Union Find           | Medium              | Low                  |
| Greedy               | High                | Low                  |










![image.png](./images/1.png)




