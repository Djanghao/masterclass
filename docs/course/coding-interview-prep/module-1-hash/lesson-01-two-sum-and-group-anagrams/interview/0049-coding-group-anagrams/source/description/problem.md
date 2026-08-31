# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Algorithms | Medium | 21508 | 735 |

**Tags:** [`array`](https://leetcode.com/tag/array), [`hash-table`](https://leetcode.com/tag/hash-table), [`string`](https://leetcode.com/tag/string), [`sorting`](https://leetcode.com/tag/sorting)

**Companies:** `amazon`, `microsoft`, `google`, `facebook`, `bloomberg`, `oracle`, `apple`, `yandex`, `adobe`, `jpmorgan`, `goldman-sachs`, `blackrock`, `tiktok`, `avito`, `okta`, `visa`, `anduril`, `zoho`, `uber`, `paypal`, `ibm`, `nutanix`, `nvidia`, `expedia`, `sap`, `intuit`, `coupang`, `dell`, `workday`, `infosys`, `athenahealth`, `disney`, `tcs`, `dp-world`, `josh-technology`, `affirm`, `salesforce`, `servicenow`, `epam-systems`, `walmart-labs`, `ebay`, `atlassian`, `citadel`, `autodesk`, `cisco`, `ripple`, `palo-alto-networks`, `msci`, `wayfair`, `snapchat`, `twilio`, `splunk`, `myntra`, `doordash`, `hashedin`, `publicis-sapient`, `mts`, `f5-networks`, `zopsmart`, `niantic`, `siemens`, `persistent-systems`, `compass`, `bny-mellon`, `squarepoint-capital`, `yelp`

## Description

Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.

 

**Example 1:**

**Input:** strs = ["eat","tea","tan","ate","nat","bat"]

**Output:** [["bat"],["nat","tan"],["ate","eat","tea"]]

**Explanation:**

	- There is no string in strs that can be rearranged to form `"bat"`.

	- The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other.

	- The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.

**Example 2:**

**Input:** strs = [""]

**Output:** [[""]]

**Example 3:**

**Input:** strs = ["a"]

**Output:** [["a"]]

 

**Constraints:**

	- `1 <= strs.length <= 10^4`

	- `0 <= strs[i].length <= 100`

	- `strs[i]` consists of lowercase English letters.

---

**Links:** [Submissions](https://leetcode.com/problems/group-anagrams/) | [Solutions](https://leetcode.com/problems/group-anagrams/)
