# Kotlin DFS

**Author:** dengzhi01
**Votes:** 1
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/3775587/](https://leetcode.com/problems/accounts-merge/solutions/3775587/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    val visited = mutableSetOf<String>()
    val adjacent = mutableMapOf<String, MutableList<String>>()

    fun accountsMerge(accounts: List<List<String>>): List<List<String>> {
        accounts.forEach { list ->
            val firstEmail = list[1]
            for (i in 2 until list.size) {
                val theEmail = list[i]
                adjacent[firstEmail] = adjacent.getOrDefault(firstEmail, mutableListOf<String>()).also {
                    it.add(theEmail)
                }
                adjacent[theEmail] = adjacent.getOrDefault(theEmail, mutableListOf<String>()).also {
                    it.add(firstEmail)
                }
            }
        }

        val mergedAccounts = mutableListOf<List<String>>()

        accounts.forEach { account ->
            val name = account[0]
            val firstEmail = account[1]

            if (!visited.contains(firstEmail)) {
                val mergedAccount = mutableListOf<String>()
                mergedAccount.add(name)
                dfs(mergedAccount, firstEmail)
                mergedAccount.subList(1, mergedAccount.size).sort()
                mergedAccounts.add(mergedAccount)
            }
        }

        return mergedAccounts
    }

    fun dfs(mergedAccount: MutableList<String>, email: String) {
        visited.add(email)
        mergedAccount.add(email)
        if (!adjacent.containsKey(email)) return
        adjacent[email]?.forEach { neighbor -> 
            if (!visited.contains(neighbor)) {
                dfs(mergedAccount, neighbor)
            }
        }
    }
}
```