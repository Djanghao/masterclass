# C# HashMap-based Aggregation solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/5332482/](https://leetcode.com/problems/subdomain-visit-count/solutions/5332482/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->We need to process each count-paired domain and split it into its constituent subdomains. We then aggregate the visit counts for each subdomain.
___

# Approach
<!-- Describe your approach to solving the problem. -->Dictionary Initialization: A dictionary domainCount is used to store the visit counts for each subdomain.
Process Each Count-Paired Domain: Iterate over each count-paired domain in the input array.
Split Domain and Count: Split the count-paired domain into the count and the full domain name.
Generate Subdomains: Split the full domain into subdomains by splitting at each dot.
Update Counts in Dictionary:
For each subdomain, if it already exists in the dictionary, increment its count.
If it does not exist, add it to the dictionary with the initial count.
Prepare Result List: Iterate over the dictionary and format each entry as "count subdomain".
Return the Result: Return the list of formatted strings as the result.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(m * n)
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(m * n)
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public IList<string> SubdomainVisits(string[] cpdomains) {
        // Dictionary to keep track of the visit counts for each subdomain
        Dictionary<string, int> domainCount = new Dictionary<string, int>();

        // Process each count-paired domain in the input array
        foreach (var cpdomain in cpdomains) {
            // Split the count-paired domain into count and domain
            string[] parts = cpdomain.Split(' ');
            int count = int.Parse(parts[0]);
            string domain = parts[1];
            
            // Split the domain into subdomains
            string[] subdomains = domain.Split('.');
            for (int i = 0; i < subdomains.Length; i++) {
                // Create the subdomain by joining parts
                string subdomain = string.Join(".", subdomains, i, subdomains.Length - i);
                // If the subdomain is already in the dictionary, increment its count
                // Otherwise, add it to the dictionary with the initial count
                if (domainCount.ContainsKey(subdomain)) {
                    domainCount[subdomain] += count;
                } else {
                    domainCount[subdomain] = count;
                }
            }
        }

        // Prepare the result list
        IList<string> result = new List<string>();
        foreach (var entry in domainCount) {
            // Format each entry as "count subdomain" and add to result list
            result.Add($"{entry.Value} {entry.Key}");
        }

        // Return the result list
        return result;
    }
}
```